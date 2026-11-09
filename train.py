"""
Stage 5 — Training loop for RSNA MRNet Multi-Task Model.

Trains MultiTaskModel (SharedEncoder + 4 heads) on cached .npz files:
  - AdamW optimizer + CosineAnnealingLR warm-restarts scheduler
  - MultiTaskLoss (abn + 12 findings + region, weighted)
  - Checkpointing: best by val loss + last epoch
  - TensorBoard logging
  - Early stopping on val loss
  - Mixed precision (autocast) on CUDA

Usage:
    python train.py --epochs 30 --batch-size 8 --lr 1e-4 --use-tensorboard
"""

from __future__ import annotations

import argparse
import os
import time
from pathlib import Path
from typing import Optional

import torch
import torch.nn as nn
from torch.amp import autocast , GradScaler
from torch.utils.tensorboard import SummaryWriter

from dataset import MRNetDataset, get_dataloaders, collate_fn
from model import MultiTaskModel, MultiTaskLoss, SharedEncoder


def train_one_epoch(
    model: MultiTaskModel,
    loader,
    criterion: MultiTaskLoss,
    optimizer: torch.optim.Optimizer,
    device: torch.device,
    scaler: GradScaler | None,
) -> dict[str, float]:
    model.train()
    running: dict[str, float] = {"loss": 0.0, "loss_abn": 0.0, "loss_12": 0.0, "loss_region": 0.0}
    n = 0

    for batch in loader:
        X = batch["X"].to(device, non_blocking=True)
        mask = batch["mask"].to(device, non_blocking=True)
        targets = {
            "y_abn": batch["y_abn"].to(device, non_blocking=True),
            "y_12": batch["y_12"].to(device, non_blocking=True),
            "y_region": batch["y_region"].to(device, non_blocking=True),
        }

        optimizer.zero_grad()
        device_type = "cuda" if device.type == "cuda" else "cpu"
        with autocast(device_type, enabled=(scaler is not None)):
            out = model(X, mask)
            losses = criterion(out, targets)
            loss = losses["loss"]

        if scaler is not None:
            scaler.scale(loss).backward()
            scaler.step(optimizer)
            scaler.update()
        else:
            loss.backward()
            optimizer.step()

        bs = X.size(0)
        for k in running:
            running[k] += losses.get(k, loss).item() * bs
        n += bs

    return {k: v / n for k, v in running.items()}


def validate(
    model: MultiTaskModel,
    loader,
    criterion: MultiTaskLoss,
    device: torch.device,
) -> dict[str, float]:
    model.eval()
    running: dict[str, float] = {"loss": 0.0, "loss_abn": 0.0, "loss_12": 0.0, "loss_region": 0.0}
    n = 0

    with torch.no_grad():
        for batch in loader:
            X = batch["X"].to(device, non_blocking=True)
            mask = batch["mask"].to(device, non_blocking=True)
            targets = {
                "y_abn": batch["y_abn"].to(device, non_blocking=True),
                "y_12": batch["y_12"].to(device, non_blocking=True),
                "y_region": batch["y_region"].to(device, non_blocking=True),
            }

            with autocast("cuda" if device.type == "cuda" else "cpu", enabled=(device.type == "cuda")):
                out = model(X, mask)
                losses = criterion(out, targets)

            bs = X.size(0)
            for k in running:
                running[k] += losses.get(k, losses["loss"]).item() * bs
            n += bs

    return {k: v / n for k, v in running.items()}


def train(
    epochs: int = 30,
    batch_size: int = 1,
    lr: float = 1e-4,
    weight_decay: float = 1e-2,
    patience: int = 7,
    checkpoint_dir: str = "checkpoints",
    use_tensorboard: bool = False,
    val_frac: float = 0.0,  # 0.0 = use existing validation/ dir
    use_amp: bool = True,
) -> dict:
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Using device: {device}")
    if use_amp and device.type == "cuda":
        print("Mixed precision (AMP) enabled")

    # Data
    train_loader, val_loader = get_dataloaders(
        batch_size=batch_size, num_workers=0, val_frac=val_frac
    )
    print(f"train batches: {len(train_loader)}  val batches: {len(val_loader)}")

    # Model
    encoder = SharedEncoder(pretrained=False)
    model = MultiTaskModel(encoder)
    model.to(device)

    # Loss / Optimizer / Scheduler
    criterion = MultiTaskLoss(w_abn=1.0, w_12=1.0, w_region=0.5)
    optimizer = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=weight_decay)
    scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=epochs)
    scaler = GradScaler() if (use_amp and device.type == "cuda") else None

    # Directories
    os.makedirs(checkpoint_dir, exist_ok=True)
    writer = SummaryWriter(log_dir="runs/rsna_run") if use_tensorboard else None

    best_val_loss = float("inf")
    patience_counter = 0
    history: dict[str, list[float]] = {
        "train_loss": [], "val_loss": [],
        "train_loss_abn": [], "val_loss_abn": [],
        "train_loss_12": [], "val_loss_12": [],
        "train_loss_region": [], "val_loss_region": [],
        "lr": [],
    }

    for epoch in range(1, epochs + 1):
        t0 = time.time()
        train_metrics = train_one_epoch(model, train_loader, criterion, optimizer, device, scaler)
        val_metrics = validate(model, val_loader, criterion, device)
        scheduler.step()

        for k in history:
            if k == "lr":
                history[k].append(optimizer.param_groups[0]["lr"])
            else:
                prefix = "train_" if k.startswith("train_") else ""
                key = k.replace("train_", "").replace("val_", "")
                src = train_metrics if prefix == "train_" else val_metrics
                history[k].append(src.get(key, 0.0))

        print(
            f"Epoch {epoch:2d}/{epochs} | "
            f"train_loss={train_metrics['loss']:.4f} val_loss={val_metrics['loss']:.4f} | "
            f"abn={train_metrics['loss_abn']:.4f}/{val_metrics['loss_abn']:.4f} "
            f"12={train_metrics['loss_12']:.4f}/{val_metrics['loss_12']:.4f} "
            f"reg={train_metrics['loss_region']:.4f}/{val_metrics['loss_region']:.4f} | "
            f"{time.time() - t0:.1f}s"
        )

        if writer:
            writer.add_scalar("Loss/train", train_metrics["loss"], epoch)
            writer.add_scalar("Loss/val", val_metrics["loss"], epoch)
            writer.add_scalar("Loss/train_abn", train_metrics["loss_abn"], epoch)
            writer.add_scalar("Loss/val_abn", val_metrics["loss_abn"], epoch)
            writer.add_scalar("Loss/train_12", train_metrics["loss_12"], epoch)
            writer.add_scalar("Loss/val_12", val_metrics["loss_12"], epoch)
            writer.add_scalar("Loss/train_region", train_metrics["loss_region"], epoch)
            writer.add_scalar("Loss/val_region", val_metrics["loss_region"], epoch)
            writer.add_scalar("LR", optimizer.param_groups[0]["lr"], epoch)

        # Checkpoint: best by val loss
        if val_metrics["loss"] < best_val_loss:
            best_val_loss = val_metrics["loss"]
            torch.save(
                {
                    "epoch": epoch,
                    "model_state_dict": model.state_dict(),
                    "optimizer_state_dict": optimizer.state_dict(),
                    "scheduler_state_dict": scheduler.state_dict(),
                    "val_loss": val_metrics["loss"],
                    "val_metrics": val_metrics,
                },
                os.path.join(checkpoint_dir, "best_model.pt"),
            )
            patience_counter = 0
            print(f"  -> New best model saved (val_loss={val_metrics['loss']:.4f})")
        else:
            patience_counter += 1
            if patience_counter >= patience:
                print(f"  -> Early stopping triggered (patience={patience})")
                break

        # Last-epoch checkpoint
        torch.save(
            {
                "epoch": epoch,
                "model_state_dict": model.state_dict(),
                "optimizer_state_dict": optimizer.state_dict(),
                "scheduler_state_dict": scheduler.state_dict(),
                "val_loss": val_metrics["loss"],
                "val_metrics": val_metrics,
            },
            os.path.join(checkpoint_dir, "last_model.pt"),
        )

    if writer:
        writer.close()

    return {
        "model": model,
        "history": history,
        "best_val_loss": best_val_loss,
        "checkpoint_dir": checkpoint_dir,
        "device": device,
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Stage 5 training loop")
    parser.add_argument("--epochs", type=int, default=30)
    parser.add_argument("--batch-size", type=int, default=8)
    parser.add_argument("--lr", type=float, default=1e-4)
    parser.add_argument("--weight-decay", type=float, default=1e-2)
    parser.add_argument("--patience", type=int, default=7)
    parser.add_argument("--checkpoint-dir", type=str, default="checkpoints")
    parser.add_argument("--use-tensorboard", action="store_true")
    parser.add_argument("--val-frac", type=float, default=0.0,
                        help="If >0, carve validation out of train (ignore validation/ dir)")
    parser.add_argument("--no-amp", action="store_true", help="Disable mixed precision")
    args = parser.parse_args()

    results = train(
        epochs=args.epochs,
        batch_size=args.batch_size,
        lr=args.lr,
        weight_decay=args.weight_decay,
        patience=args.patience,
        checkpoint_dir=args.checkpoint_dir,
        use_tensorboard=args.use_tensorboard,
        val_frac=args.val_frac,
        use_amp=not args.no_amp,
    )
    print(f"\nTraining complete! Best val_loss={results['best_val_loss']:.4f}")

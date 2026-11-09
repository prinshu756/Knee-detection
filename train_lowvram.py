"""
Low-VRAM training script for RSNA MRNet (optimized for ~3.5 GB usable VRAM).

Strategy
--------
* batch_size = 1  (largest that reliably fits an RTX 3050-class card)
* gradient_accumulation_steps = 16  -> effective batch size 16
* AMP (autocast) + GradScaler
* Gradient clipping to keep updates stable with small batches
* Checkpoints saved to checkpoints/ (best by val loss + last)
* TensorBoard optional
* ViT micro-batching (vit_chunk) to cap activation memory

Usage:
    python train_lowvram.py --epochs 30 --batch-size 1 --accum-steps 16 --lr 1e-4 --img-size 224

Memory profile (measured on RTX 3050 Laptop, 4.29 GB total):
    batch=1 forward only : ~1.73 GB at 336px; ~0.6 GB at 224px
    batch=1 train step   : typically 2.8 - 3.6 GB at 336px (OOM on 3.5 GB);
                            ~1.2 - 1.8 GB at 224px (fits comfortably).
    If you still OOM, reduce --vit-chunk or --accum-steps.
"""

from __future__ import annotations

import os as _os
# Set CUDA allocator config BEFORE importing torch so it takes effect.
_os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "max_split_size_mb:64")

import argparse
import time
from pathlib import Path

import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.amp import autocast, GradScaler
from torch.utils.data import DataLoader
from torch.utils.tensorboard import SummaryWriter

from dataset import get_dataloaders
from model import MultiTaskModel, MultiTaskLoss, SharedEncoder

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def train_one_epoch(model, loader, criterion, optimizer, scaler, device,
                    accum_steps: int, img_size: int, clip: float = 1.0):
    model.train()
    running = {"loss": 0.0, "loss_abn": 0.0, "loss_12": 0.0, "loss_region": 0.0}
    n = 0
    optimizer.zero_grad(set_to_none=True)

    for step, batch in enumerate(loader):
        X = batch["X"].to(device, non_blocking=True)
        mask = batch["mask"].to(device, non_blocking=True)
        # Resize 336x336 -> img_size x img_size to save VRAM (tokens 576 -> 256)
        if X.shape[-1] != img_size:
            B, S, D, H, W = X.shape
            X = X.reshape(B * S * D, 1, H, W).float()
            X = F.interpolate(X, size=(img_size, img_size), mode="bilinear",
                              align_corners=False)
            X = X.reshape(B, S, D, img_size, img_size).to(torch.uint8)
        targets = {
            "y_abn": batch["y_abn"].to(device, non_blocking=True),
            "y_12": batch["y_12"].to(device, non_blocking=True),
            "y_region": batch["y_region"].to(device, non_blocking=True),
        }

        with autocast("cuda", enabled=(device.type == "cuda")):
            out = model(X, mask)
            losses = criterion(out, targets)
            loss = losses["loss"] / accum_steps  # scale for accumulation

        scaler.scale(loss).backward()

        if (step + 1) % accum_steps == 0 or (step + 1) == len(loader):
            # Unscale then clip
            scaler.unscale_(optimizer)
            nn.utils.clip_grad_norm_(model.parameters(), clip)
            scaler.step(optimizer)
            scaler.update()
            optimizer.zero_grad(set_to_none=True)

        bs = X.size(0)
        loss_value = losses["loss"]  # unscaled, for correct averaging
        running["loss"] += loss_value.item() * bs
        running["loss_abn"] += losses.get("loss_abn", loss_value).item() * bs
        running["loss_12"] += losses.get("loss_12", loss_value).item() * bs
        running["loss_region"] += losses.get("loss_region", loss_value).item() * bs
        n += bs

        # Free cached memory every few steps to stay under 3.5 GB
        if (step + 1) % 20 == 0:
            torch.cuda.empty_cache()

    return {k: v / n for k, v in running.items()}


@torch.no_grad()
def validate(model, loader, criterion, device, img_size: int):
    model.eval()
    running = {"loss": 0.0, "loss_abn": 0.0, "loss_12": 0.0, "loss_region": 0.0}
    n = 0
    for batch in loader:
        X = batch["X"].to(device, non_blocking=True)
        mask = batch["mask"].to(device, non_blocking=True)
        # Resize 336x336 -> img_size x img_size to save VRAM
        if X.shape[-1] != img_size:
            B, S, D, H, W = X.shape
            X = X.reshape(B * S * D, 1, H, W).float()
            X = F.interpolate(X, size=(img_size, img_size), mode="bilinear",
                              align_corners=False)
            X = X.reshape(B, S, D, img_size, img_size).to(torch.uint8)
        targets = {
            "y_abn": batch["y_abn"].to(device, non_blocking=True),
            "y_12": batch["y_12"].to(device, non_blocking=True),
            "y_region": batch["y_region"].to(device, non_blocking=True),
        }
        with autocast("cuda", enabled=(device.type == "cuda")):
            out = model(X, mask)
            losses = criterion(out, targets)
        bs = X.size(0)
        for k in running:
            running[k] += losses.get(k, losses["loss"]).item() * bs
        n += bs
    torch.cuda.empty_cache()
    return {k: v / n for k, v in running.items()}


def main():
    parser = argparse.ArgumentParser(description="Low-VRAM training for RSNA MRNet")
    parser.add_argument("--epochs", type=int, default=20)
    parser.add_argument("--batch-size", type=int, default=1,
                        help="Keep 1 for 3.5 GB VRAM.")
    parser.add_argument("--accum-steps", type=int, default=16,
                        help="Gradient accumulation steps (effective batch = bs * accum).")
    parser.add_argument("--lr", type=float, default=1e-4)
    parser.add_argument("--weight-decay", type=float, default=1e-2)
    parser.add_argument("--patience", type=int, default=7)
    parser.add_argument("--checkpoint-dir", type=str, default="checkpoints")
    parser.add_argument("--use-tensorboard", action="store_true")
    parser.add_argument("--no-amp", action="store_true", help="Disable mixed precision")
    parser.add_argument("--val-frac", type=float, default=0.0,
                        help="If >0, carve validation out of train (ignore validation/ dir)")
    parser.add_argument("--clip", type=float, default=1.0)
    parser.add_argument("--vit-chunk", type=int, default=8,
                        help="Slices per ViT micro-batch (lower = less VRAM, slower).")
    parser.add_argument("--img-size", type=int, default=224,
                        help="Input image size (224 saves VRAM vs 336).")
    args = parser.parse_args()

    device = DEVICE
    use_amp = (not args.no_amp) and device.type == "cuda"
    print(f"Using device: {device}")
    if device.type == "cuda":
        print(f"GPU: {torch.cuda.get_device_name(0)}")
        print(f"Total VRAM: {torch.cuda.get_device_properties(0).total_memory / 1e9:.2f} GB")
        print(f"AMP: {use_amp} | batch_size={args.batch_size} | accum_steps={args.accum_steps} "
              f"| effective_batch={args.batch_size * args.accum_steps} | vit_chunk={args.vit_chunk} "
              f"| img_size={args.img_size}")

    # Data (cache_preprocessed/train + validation already exist)
    train_loader, val_loader = get_dataloaders(
        batch_size=args.batch_size, num_workers=0,
        val_frac=args.val_frac)
    print(f"train batches: {len(train_loader)} | val batches: {len(val_loader)}")

    # Model
    encoder = SharedEncoder(pretrained=False, vit_chunk=args.vit_chunk,
                            img_size=args.img_size).to(device)
    model = MultiTaskModel(encoder).to(device)
    n_params = sum(p.numel() for p in model.parameters())
    print(f"Model parameters: {n_params / 1e6:.2f} M")

    criterion = MultiTaskLoss(w_abn=1.0, w_12=1.0, w_region=0.5)
    optimizer = torch.optim.AdamW(model.parameters(), lr=args.lr,
                                  weight_decay=args.weight_decay)
    scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=args.epochs)
    scaler = GradScaler() if use_amp else None

    _os.makedirs(args.checkpoint_dir, exist_ok=True)
    writer = SummaryWriter(log_dir="runs/rsna_lowvram") if args.use_tensorboard else None

    best_val_loss = float("inf")
    patience_counter = 0
    history = {"train_loss": [], "val_loss": []}

    for epoch in range(1, args.epochs + 1):
        t0 = time.time()
        train_metrics = train_one_epoch(model, train_loader, criterion, optimizer,
                                        scaler, device, args.accum_steps, args.img_size,
                                        args.clip)
        val_metrics = validate(model, val_loader, criterion, device, args.img_size)
        scheduler.step()

        for k in history:
            prefix = "train_" if k.startswith("train_") else ""
            key = k.replace("train_", "").replace("val_", "")
            src = train_metrics if prefix == "train_" else val_metrics
            history[k].append(src.get(key, 0.0))

        print(
            f"Epoch {epoch:2d}/{args.epochs} | "
            f"train_loss={train_metrics['loss']:.4f} val_loss={val_metrics['loss']:.4f} | "
            f"abn={train_metrics['loss_abn']:.4f}/{val_metrics['loss_abn']:.4f} "
            f"12={train_metrics['loss_12']:.4f}/{val_metrics['loss_12']:.4f} "
            f"reg={train_metrics['loss_region']:.4f}/{val_metrics['loss_region']:.4f} | "
            f"{time.time() - t0:.1f}s"
        )
        if device.type == "cuda":
            print(f"   VRAM allocated: {torch.cuda.memory_allocated(device)/1e9:.2f} GB | "
                  f"max: {torch.cuda.max_memory_allocated(device)/1e9:.2f} GB")

        if writer:
            writer.add_scalar("Loss/train", train_metrics["loss"], epoch)
            writer.add_scalar("Loss/val", val_metrics["loss"], epoch)
            writer.add_scalar("LR", optimizer.param_groups[0]["lr"], epoch)

        # Best checkpoint
        if val_metrics["loss"] < best_val_loss:
            best_val_loss = val_metrics["loss"]
            torch.save({
                "epoch": epoch,
                "model_state_dict": model.state_dict(),
                "optimizer_state_dict": optimizer.state_dict(),
                "val_loss": val_metrics["loss"],
            }, _os.path.join(args.checkpoint_dir, "best_model.pt"))
            patience_counter = 0
            print(f"   -> New best model saved (val_loss={val_metrics['loss']:.4f})")
        else:
            patience_counter += 1
            if patience_counter >= args.patience:
                print(f"   -> Early stopping (patience={args.patience})")
                break

        # Last checkpoint
        torch.save({
            "epoch": epoch,
            "model_state_dict": model.state_dict(),
            "optimizer_state_dict": optimizer.state_dict(),
            "val_loss": val_metrics["loss"],
        }, _os.path.join(args.checkpoint_dir, "last_model.pt"))

    if writer:
        writer.close()
    print(f"\nTraining complete. Best val_loss={best_val_loss:.4f}")
    print(f"Checkpoints in: {_os.path.abspath(args.checkpoint_dir)}")


if __name__ == "__main__":
    main()

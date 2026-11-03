"""
Training script for RSNAClassifier.
Trains on the train split, validates on the valid split, saves best checkpoint.
"""
from __future__ import annotations

import os
import time
from typing import Optional

import numpy as np
import torch
import torch.nn as nn
from torch.utils.tensorboard import SummaryWriter

from model.dataset import get_dataloaders
from model.model import create_model


def train_one_epoch(
    model: nn.Module,
    loader,
    criterion: nn.Module,
    optimizer: torch.optim.Optimizer,
    device: torch.device,
) -> tuple[float, float]:
    model.train()
    total_loss = 0.0
    correct = 0
    total = 0

    for images, labels in loader:
        images = images.to(device, non_blocking=True)
        labels = labels.to(device, non_blocking=True)

        optimizer.zero_grad()
        logits = model(images)
        loss = criterion(logits, labels)
        loss.backward()
        optimizer.step()

        total_loss += loss.item() * images.size(0)
        preds = (torch.sigmoid(logits) > 0.5).long()
        correct += (preds == labels.long()).sum().item()
        total += labels.size(0)

    return total_loss / total, correct / total


def validate(
    model: nn.Module,
    loader,
    criterion: nn.Module,
    device: torch.device,
) -> tuple[float, float, np.ndarray, np.ndarray]:
    model.eval()
    total_loss = 0.0
    correct = 0
    total = 0
    all_probs: list[np.ndarray] = []
    all_labels: list[np.ndarray] = []

    with torch.no_grad():
        for images, labels in loader:
            images = images.to(device, non_blocking=True)
            labels = labels.to(device, non_blocking=True)

            logits = model(images)
            loss = criterion(logits, labels)

            total_loss += loss.item() * images.size(0)
            probs = torch.sigmoid(logits).cpu().numpy()
            preds = (probs > 0.5).astype(np.int64)

            correct += (preds == labels.long().cpu().numpy()).sum()
            total += labels.size(0)

            all_probs.append(probs)
            all_labels.append(labels.cpu().numpy())

    probs = np.concatenate(all_probs)
    labels = np.concatenate(all_labels)
    return total_loss / total, correct / total, probs, labels


def train(
    labels_csv: str = "data/labels.csv",
    data_root: str = "data",
    epochs: int = 10,
    batch_size: int = 32,
    lr: float = 1e-3,
    dropout: float = 0.3,
    patience: int = 3,
    checkpoint_dir: str = "checkpoints",
    use_tensorboard: bool = False,
) -> dict:
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Using device: {device}")

    train_loader, valid_loader = get_dataloaders(
        labels_csv, data_root, batch_size=batch_size, num_workers=0
    )

    model = create_model(device, dropout=dropout)
    criterion = nn.BCEWithLogitsLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(
        optimizer, mode="min", factor=0.5, patience=2, verbose=True
    )

    os.makedirs(checkpoint_dir, exist_ok=True)
    writer = SummaryWriter(log_dir="runs/rsna_run") if use_tensorboard else None

    best_val_loss = float("inf")
    best_state: Optional[dict] = None
    patience_counter = 0

    history = {
        "train_loss": [],
        "train_acc": [],
        "val_loss": [],
        "val_acc": [],
    }

    for epoch in range(1, epochs + 1):
        t0 = time.time()
        train_loss, train_acc = train_one_epoch(
            model, train_loader, criterion, optimizer, device
        )
        val_loss, val_acc, val_probs, val_labels = validate(
            model, valid_loader, criterion, device
        )
        scheduler.step(val_loss)

        history["train_loss"].append(train_loss)
        history["train_acc"].append(train_acc)
        history["val_loss"].append(val_loss)
        history["val_acc"].append(val_acc)

        print(
            f"Epoch {epoch:2d}/{epochs} | "
            f"train_loss={train_loss:.4f} train_acc={train_acc:.4f} | "
            f"val_loss={val_loss:.4f} val_acc={val_acc:.4f} | "
            f"{time.time() - t0:.1f}s"
        )

        if writer:
            writer.add_scalar("Loss/train", train_loss, epoch)
            writer.add_scalar("Loss/val", val_loss, epoch)
            writer.add_scalar("Acc/train", train_acc, epoch)
            writer.add_scalar("Acc/val", val_acc, epoch)

        # Save best checkpoint
        if val_loss < best_val_loss:
            best_val_loss = val_loss
            best_state = {
                "model_state_dict": model.state_dict(),
                "optimizer_state_dict": optimizer.state_dict(),
                "epoch": epoch,
                "val_loss": val_loss,
                "val_acc": val_acc,
            }
            torch.save(best_state, os.path.join(checkpoint_dir, "best_model.pt"))
            patience_counter = 0
            print(f"  -> New best model saved (val_loss={val_loss:.4f})")
        else:
            patience_counter += 1
            if patience_counter >= patience:
                print(f"  -> Early stopping triggered (patience={patience})")
                break

    # Load best model for return
    if best_state is not None:
        model.load_state_dict(best_state["model_state_dict"])

    if writer:
        writer.close()

    return {
        "model": model,
        "history": history,
        "best_val_loss": best_val_loss,
        "best_val_acc": best_state["val_acc"] if best_state else val_acc,
        "device": device,
    }


if __name__ == "__main__":
    results = train(
        labels_csv="data/labels.csv",
        data_root="data",
        epochs=15,
        batch_size=32,
        lr=1e-3,
        dropout=0.3,
        patience=4,
        checkpoint_dir="checkpoints",
        use_tensorboard=False,
    )
    print(f"\nTraining complete! Best val_loss={results['best_val_loss']:.4f}, "
          f"best val_acc={results['best_val_acc']:.4f}")

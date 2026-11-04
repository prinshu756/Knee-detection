"""
Stage 6 — Threshold fitting per finding.

Fits tau[t] for each of the 12 findings on the validation set to maximize
either F1 score or Youden's J (sensitivity + specificity - 1).

Saves fitted thresholds to cache_preprocessed/thresholds.json for use by
PostProcessor and infer.py.

Usage:
    python fit_thresholds.py --checkpoint checkpoints/best_model.pt --metric f1
    python fit_thresholds.py --checkpoint checkpoints/best_model.pt --metric youden
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import torch
from torch.utils.data import DataLoader

from dataset import MRNetDataset, collate_fn
from model import MultiTaskModel, SharedEncoder

CACHE_ROOT = Path(r"D:\MachineLearning\RSNA\cache_preprocessed")
THRESHOLD_PATH = CACHE_ROOT / "thresholds.json"

FINDINGS = [
    "ACL tear", "PCL tear", "MCL tear", "LCL tear",
    "Medial meniscus tear", "Lateral meniscus tear",
    "Effusion", "Bone bruise", "Patellar tendon tear",
    "Quadriceps tendon tear", "Osteochondral defect", "Synovitis",
]


def sigmoid(x: np.ndarray) -> np.ndarray:
    return 1.0 / (1.0 + np.exp(-np.clip(x, -60.0, 60.0)))


def f1_score(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    tp = int(((y_pred == 1) & (y_true == 1)).sum())
    fp = int(((y_pred == 1) & (y_true == 0)).sum())
    fn = int(((y_pred == 0) & (y_true == 1)).sum())
    if tp + fp + fn == 0:
        return 0.0
    return 2 * tp / (2 * tp + fp + fn)


def youden_j(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    tp = int(((y_pred == 1) & (y_true == 1)).sum())
    tn = int(((y_pred == 0) & (y_true == 0)).sum())
    fp = int(((y_pred == 1) & (y_true == 0)).sum())
    fn = int(((y_pred == 0) & (y_true == 1)).sum())
    sens = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    spec = tn / (tn + fp) if (tn + fp) > 0 else 0.0
    return sens + spec - 1.0


def best_threshold(y_true: np.ndarray, probs: np.ndarray, metric: str = "f1") -> tuple[float, float]:
    """Search thresholds 0.01..0.99, return (best_tau, best_score)."""
    best_tau, best_score = 0.5, -1.0
    for tau in np.arange(0.01, 1.0, 0.01):
        y_pred = (probs > tau).astype(np.int64)
        score = f1_score(y_true, y_pred) if metric == "f1" else youden_j(y_true, y_pred)
        if score > best_score:
            best_score = score
            best_tau = float(tau)
    return best_tau, best_score


def load_model(checkpoint_path: Path, device: torch.device) -> MultiTaskModel:
    encoder = SharedEncoder(pretrained=False)
    model = MultiTaskModel(encoder).to(device)
    ckpt = torch.load(checkpoint_path, map_location=device)
    model.load_state_dict(ckpt["model_state_dict"])
    model.eval()
    return model


def collect_predictions(model: MultiTaskModel, loader: DataLoader, device: torch.device):
    """Return probs_12 (N,12), y_12 (N,12), study_ids."""
    all_probs: list[np.ndarray] = []
    all_labels: list[np.ndarray] = []
    all_ids: list[str] = []

    with torch.no_grad():
        for batch in loader:
            X = batch["X"].to(device)
            mask = batch["mask"].to(device)
            out = model(X, mask)
            probs = torch.sigmoid(out["logits_12"]).cpu().numpy()
            labels = batch["y_12"].cpu().numpy()
            all_probs.append(probs)
            all_labels.append(labels)
            all_ids.extend(batch["study_id"])

    return (
        np.concatenate(all_probs),
        np.concatenate(all_labels),
        all_ids,
    )


def fit_thresholds(checkpoint_path: Path, metric: str = "f1", batch_size: int = 8) -> dict:
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Device: {device}")

    model = load_model(checkpoint_path, device)

    val_ds = MRNetDataset("validation", cache_root=CACHE_ROOT)
    val_loader = DataLoader(val_ds, batch_size=batch_size, shuffle=False,
                            num_workers=0, collate_fn=collate_fn)
    print(f"Validation studies: {len(val_ds)}")

    probs, y, study_ids = collect_predictions(model, val_loader, device)

    thresholds: dict[str, float] = {}
    scores: dict[str, float] = {}
    for i, name in enumerate(FINDINGS):
        tau, score = best_threshold(y[:, i], probs[:, i], metric=metric)
        thresholds[name] = round(tau, 4)
        scores[name] = round(score, 4)
        print(f"  {name:28s} tau={tau:.3f}  {metric}={score:.4f}")

    result = {
        "metric": metric,
        "n_val": len(val_ds),
        "thresholds": thresholds,
        "scores": scores,
    }
    THRESHOLD_PATH.write_text(json.dumps(result, indent=2))
    print(f"\nSaved thresholds to {THRESHOLD_PATH}")
    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Stage 6: fit per-finding thresholds")
    parser.add_argument("--checkpoint", type=str, default="checkpoints/best_model.pt",
                        help="Path to model checkpoint (.pt)")
    parser.add_argument("--metric", type=str, default="f1", choices=["f1", "youden"])
    parser.add_argument("--batch-size", type=int, default=8)
    args = parser.parse_args()

    fit_thresholds(Path(args.checkpoint), metric=args.metric, batch_size=args.batch_size)

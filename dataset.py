"""
Stage 4 — PyTorch Dataset / DataLoader over cached preprocessed .npz files.

Reads from cache_preprocessed/<split>/<study_id>.npz (keys: X uint8 (6,16,336,336),
mask uint8 (6,)).  Returns (X, mask, study_id) tensors.  Labels (abnormality,
12 findings, regions) are looked up from an optional labels CSV/JSON if provided;
otherwise dummy labels are returned so the pipeline can run end-to-end.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Optional

import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader

from preprocess import S, D, H, W

SLOT_NAMES = ["SAG_FS", "COR_FS", "AX_FS", "SAG_NOFS", "COR_NOFS", "AX_NOFS"]

CACHE_ROOT = Path(r"D:\MachineLearning\RSNA\cache_preprocessed")


class MRNetDataset(Dataset):
    """Dataset over cached preprocessed studies.

    Parameters
    ----------
    split : str
        "train" or "validation".
    cache_root : str | Path
        Root containing train/ and validation/ subdirs of .npz files.
    labels_path : str | Path | None
        Optional CSV/JSON with labels.  Columns/keys:
            study_id, y_abn (0/1), y_12 (12 floats 0/1), y_region (R floats 0/1)
        If None, dummy labels are returned.
    transform : callable | None
        Optional augmentations applied to X (uint8 array).
    """

    def __init__(self, split: str = "train",
                 cache_root: Path | str = CACHE_ROOT,
                 labels_path: Path | str | None = None,
                 transform=None):
        self.split = split
        self.cache_root = Path(cache_root)
        self.split_dir = self.cache_root / split
        if not self.split_dir.is_dir():
            raise FileNotFoundError(f"Split dir not found: {self.split_dir}")
        self.files = sorted(self.split_dir.glob("*.npz"))
        self.transform = transform
        self.labels = self._load_labels(labels_path) if labels_path else {}

    def _load_labels(self, labels_path: Path | str) -> dict:
        p = Path(labels_path)
        if not p.is_file():
            raise FileNotFoundError(f"Labels file not found: {p}")
        if p.suffix == ".json":
            raw = json.loads(p.read_text())
            # expect list of dicts or dict keyed by study_id
            if isinstance(raw, list):
                return {r["study_id"]: r for r in raw}
            return raw
        elif p.suffix == ".csv":
            import pandas as pd
            df = pd.read_csv(p)
            return {r["study_id"]: r.to_dict() for _, r in df.iterrows()}
        else:
            raise ValueError(f"Unsupported labels format: {p.suffix}")

    def __len__(self) -> int:
        return len(self.files)

    def __getitem__(self, idx: int):
        npz_path = self.files[idx]
        with np.load(npz_path) as z:
            X = z["X"].astype(np.uint8)      # (6, 16, 336, 336)
            mask = z["mask"].astype(np.uint8)  # (6,)

        if self.transform is not None:
            X = self.transform(X)

        study_id = npz_path.stem

        # labels (dummy if none provided)
        if study_id in self.labels:
            lbl = self.labels[study_id]
            y_abn = np.float32(lbl.get("y_abn", 0.0))
            y_12 = np.asarray(lbl.get("y_12", np.zeros(12)), dtype=np.float32)
            y_region = np.asarray(lbl.get("y_region", np.zeros(10)), dtype=np.float32)
        else:
            y_abn = np.float32(0.0)
            y_12 = np.zeros(12, dtype=np.float32)
            y_region = np.zeros(10, dtype=np.float32)

        return {
            "X": torch.from_numpy(X),           # (6, 16, 336, 336) uint8
            "mask": torch.from_numpy(mask),     # (6,) uint8
            "study_id": study_id,
            "y_abn": torch.tensor(float(y_abn)),   # scalar
            "y_12": torch.from_numpy(y_12),     # (12,)
            "y_region": torch.from_numpy(y_region),  # (10,)
        }


def collate_fn(batch: list[dict]) -> dict:
    """Collate a list of samples into a batch."""
    return {
        "X": torch.stack([b["X"] for b in batch]),           # (B, 6, 16, 336, 336)
        "mask": torch.stack([b["mask"] for b in batch]),     # (B, 6)
        "study_id": [b["study_id"] for b in batch],
        "y_abn": torch.stack([b["y_abn"] for b in batch]).unsqueeze(-1),  # (B, 1)
        "y_12": torch.stack([b["y_12"] for b in batch]),     # (B, 12)
        "y_region": torch.stack([b["y_region"] for b in batch]),  # (B, 10)
    }


def get_dataloaders(train_cache: Path | str = CACHE_ROOT,
                    val_cache: Path | str = CACHE_ROOT,
                    batch_size: int = 8,
                    num_workers: int = 0,
                    labels_path: Path | str | None = None,
                    val_frac: float = 0.0) -> tuple[DataLoader, DataLoader]:
    """Convenience: train + val DataLoaders.

    If val_frac > 0, carve a validation set out of train (ignoring any
    existing validation/ dir).  Otherwise use train/ and validation/ dirs.
    """
    train_ds = MRNetDataset("train", cache_root=train_cache,
                            labels_path=labels_path)
    val_ds = MRNetDataset("validation", cache_root=val_cache,
                          labels_path=labels_path)

    train_loader = DataLoader(train_ds, batch_size=batch_size, shuffle=True,
                              num_workers=num_workers, collate_fn=collate_fn)
    val_loader = DataLoader(val_ds, batch_size=batch_size, shuffle=False,
                            num_workers=num_workers, collate_fn=collate_fn)
    return train_loader, val_loader


if __name__ == "__main__":
    # Smoke test
    ds = MRNetDataset("train")
    print("dataset size:", len(ds))
    sample = ds[0]
    print("X:", sample["X"].shape, sample["X"].dtype)
    print("mask:", sample["mask"], sample["mask"].dtype)
    print("study_id:", sample["study_id"])
    print("y_abn:", sample["y_abn"], "y_12 shape:", sample["y_12"].shape)

    train_loader, val_loader = get_dataloaders(batch_size=2)
    batch = next(iter(train_loader))
    print("batch X:", batch["X"].shape)
    print("batch mask:", batch["mask"].shape)
    print("batch y_abn:", batch["y_abn"].shape)
    print("batch y_12:", batch["y_12"].shape)
    print("batch y_region:", batch["y_region"].shape)
    print("Smoke test OK.")
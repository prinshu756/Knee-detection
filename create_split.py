"""
create_split.py

Create a train/validation split from cached preprocessed .npz files.

Moves ~15% of studies from cache_preprocessed/train/ ->
cache_preprocessed/validation/ and writes a split manifest JSON.

Usage:
    python create_split.py [--val-frac 0.15] [--seed 42] [--force]
"""

from __future__ import annotations

import argparse
import json
import random
import shutil
from pathlib import Path

CACHE_ROOT = Path(r"D:\MachineLearning\RSNA\cache_preprocessed")
TRAIN_DIR = CACHE_ROOT / "train"
VAL_DIR = CACHE_ROOT / "validation"
MANIFEST = CACHE_ROOT / "split_manifest.json"


def create_split(val_frac: float = 0.15, seed: int = 42, force: bool = False) -> dict:
    train_files = sorted(TRAIN_DIR.glob("*.npz"))
    n_train = len(train_files)
    n_val = max(1, int(round(n_train * val_frac)))

    if VAL_DIR.exists() and not force:
        existing = len(list(VAL_DIR.glob("*.npz")))
        raise FileExistsError(
            f"{VAL_DIR} already has {existing} files. Use --force to overwrite."
        )

    rng = random.Random(seed)
    val_studies = rng.sample(train_files, n_val)

    VAL_DIR.mkdir(parents=True, exist_ok=True)

    moved = 0
    for src in val_studies:
        dst = VAL_DIR / src.name
        if dst.exists() and not force:
            continue
        shutil.move(str(src), str(dst))
        moved += 1

    remaining = sorted(TRAIN_DIR.glob("*.npz"))

    manifest = {
        "seed": seed,
        "val_frac": val_frac,
        "n_train_total": n_train,
        "n_val": moved,
        "n_train_final": len(remaining),
        "train_ids": [p.stem for p in remaining],
        "val_ids": [p.stem for p in val_studies],
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2))

    print(f"train total : {n_train}")
    print(f"moved to val: {moved} ({moved/n_train:.1%})")
    print(f"train final : {len(remaining)}")
    print(f"manifest    : {MANIFEST}")
    return manifest


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--val-frac", type=float, default=0.15)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    create_split(args.val_frac, args.seed, args.force)

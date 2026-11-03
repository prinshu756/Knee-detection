"""
preprocess.py

Phase 1 input builder.

    Study = {series_1, series_2, ..., series_k}      (variable count, k <= #planes)
              ↓  (slot selection)
    X  ∈ uint8^(S=6, D=16, H=336, W=336)              (fixed size)
    mask ∈ {0,1}^S                                     (1 = slot present)

A "series" is one anatomical plane (axial / coronal / sagittal) stored as a
(D_src, 256, 256) uint8 .npy volume.  For each study we:

  1. Load the available planes for the study.
  2. Per series: reduce depth to D=16 (center slice selection) and adjust
     H/W to 336x336 (symmetric zero-pad if smaller, center-crop if larger).
  3. Stack up to S series into X; unused slots stay zero.
  4. mask[i] = 1 if slot i holds a real series, else 0 (padding).

Run standalone:
    python preprocess.py <study_id> <split>
    e.g. python preprocess.py 0000 train
"""

from __future__ import annotations

from pathlib import Path
from typing import Sequence

import numpy as np

# ---------------------------------------------------------------------------
# Phase 1 fixed-size specification
# ---------------------------------------------------------------------------
S = 6          # number of slots (maximum series kept per study)
D = 16         # depth (slices) kept per slot
H = 336        # height
W = 336        # width

# Source planes, in slot-priority order.
PLANES = ("axial", "coronal", "sagittal")

# Root of the RSNA project (where train/ and validation/ live).
PROJECT_ROOT = Path(r"D:\MachineLearning\RSNA")

SPLIT_DIRS = {
    "train": PROJECT_ROOT / "train",
    "validation": PROJECT_ROOT / "validation",
}


# Discovery / loading
def list_available_studies(split: str = "train") -> list[str]:
    """Return sorted study IDs present (non-empty) in at least one plane."""
    split_dir = SPLIT_DIRS[split]
    found: set[str] = set()
    for plane in PLANES:
        plane_dir = split_dir / plane
        if not plane_dir.is_dir():
            continue
        for f in plane_dir.iterdir():
            if f.suffix == ".npy" and f.stat().st_size > 0:
                found.add(f.stem)
    return sorted(found)


def series_path(split: str, study_id: str, plane: str) -> Path | None:
    """Path to a series file, or None if missing / empty."""
    p = SPLIT_DIRS[split] / plane / f"{study_id}.npy"
    if p.is_file() and p.stat().st_size > 0:
        return p
    return None


def load_series(split: str, study_id: str, plane: str) -> np.ndarray | None:
    """Load one series volume as (D_src, 256, 256) uint8, or None if absent."""
    p = series_path(split, study_id, plane)
    if p is None:
        return None
    return np.load(p)


# Per-series fixed-size conversion
def select_depth(vol: np.ndarray, depth: int = D) -> np.ndarray:
    """Center-select `depth` slices from a (D_src, H, W) volume.

    If D_src == depth: return as-is.
    If D_src < depth: zero-pad at the end.
    Otherwise: take the central `depth` slices.
    """
    d_src = vol.shape[0]
    if d_src == depth:
        return vol
    if d_src < depth:
        pad = np.zeros((depth - d_src, *vol.shape[1:]), dtype=vol.dtype)
        return np.concatenate([vol, pad], axis=0)
    start = (d_src - depth) // 2
    return vol[start:start + depth]


def fix_spatial(vol: np.ndarray, height: int = H, width: int = W) -> np.ndarray:
    """Adjust H/W to (height, width) via symmetric zero-pad or center-crop."""
    out = vol

    # Height
    h = out.shape[1]
    if h < height:
        pad_top = (height - h) // 2
        pad_bottom = height - h - pad_top
        out = np.pad(out, ((0, 0), (pad_top, pad_bottom), (0, 0)), mode="constant")
    elif h > height:
        start = (h - height) // 2
        out = out[:, start:start + height, :]

    # Width
    w = out.shape[2]
    if w < width:
        pad_left = (width - w) // 2
        pad_right = width - w - pad_left
        out = np.pad(out, ((0, 0), (0, 0), (pad_left, pad_right)), mode="constant")
    elif w > width:
        start = (w - width) // 2
        out = out[:, :, start:start + width]

    return out


def series_to_slot(vol: np.ndarray) -> np.ndarray:
    """Convert one (D_src, 256, 256) series into a (D, H, W) uint8 slot."""
    vol = select_depth(vol, D)
    vol = fix_spatial(vol, H, W)
    return vol.astype(np.uint8, copy=False)


# Study -> (X, mask)
def study_to_inputs(
    study_id: str,
    split: str = "train",
    slots: Sequence[str] | None = None,
    S: int = S,
) -> tuple[np.ndarray, np.ndarray]:
    """Convert a study into fixed-size inputs.

    Parameters
    ----------
    study_id : str
        e.g. "0000".
    split : str
        "train" or "validation".
    slots : sequence of str, optional
        Plane names to use, in slot-priority order. Defaults to PLANES.
    S : int
        Number of slots.

    Returns
    -------
    X : np.ndarray, shape (S, D, H, W), uint8
        Stacked slots; absent series are zero-filled.
    mask : np.ndarray, shape (S,), uint8 {0,1}
        mask[i] == 1 if slot i holds a real series.
    """
    if slots is None:
        slots = PLANES
    slots = list(slots)[:S]

    X = np.zeros((S, D, H, W), dtype=np.uint8)
    mask = np.zeros(S, dtype=np.uint8)

    for i, plane in enumerate(slots):
        vol = load_series(split, study_id, plane)
        if vol is None:
            continue
        X[i] = series_to_slot(vol)
        mask[i] = 1

    return X, mask


# Demo / sanity check
def demo(study_id: str = "0000", split: str = "train") -> None:
    """Convert one study and print shapes / stats."""
    X, mask = study_to_inputs(study_id, split)
    print(f"study={study_id}  split={split}")
    print(f"  X.shape : {X.shape}  {X.dtype}")
    print(f"  mask    : {mask}  {mask.dtype}")
    print(f"  present slots: {int(mask.sum())} of {S}")
    for i in range(S):
        if mask[i]:
            print(f"    slot {i} ({PLANES[i]}): min={X[i].min()}  max={X[i].max()}  mean={X[i].mean():.1f}")
        else:
            print(f"    slot {i}: EMPTY (padded)")


if __name__ == "__main__":
    import sys

    sid = sys.argv[1] if len(sys.argv) > 1 else "0000"
    spl = sys.argv[2] if len(sys.argv) > 2 else "train"
    demo(sid, spl)
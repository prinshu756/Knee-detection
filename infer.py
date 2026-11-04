"""
Inference script — single-study CLI.

Usage:
    python infer.py <study_id> [--checkpoint checkpoints/best_model.pt]
                              [--thresholds cache_preprocessed/thresholds.json]
                              [--output-dir inference_output]

Loads a cached preprocessed study, runs the model, post-processes, and saves:
  - result.json   (is_abnormal, findings, affected_regions, confidence, warnings)
  - overlays/     (per-finding heatmap overlays on MRI, PNG)
"""

from __future__ import annotations

import json
from pathlib import Path
import sys

import cv2
import numpy as np
import torch

from dataset import MRNetDataset
from model import MultiTaskModel, SharedEncoder
from post_processing import PostProcessor, overlay_all_findings, FINDINGS

SLOT_NAMES = ["SAG_FS", "COR_FS", "AX_FS", "SAG_NOFS", "COR_NOFS", "AX_NOFS"]

CACHE_ROOT = Path(r"D:\MachineLearning\RSNA\cache_preprocessed")
DEFAULT_CHECKPOINT = Path(r"D:\MachineLearning\RSNA\checkpoints\best_model.pt")
DEFAULT_THRESHOLDS = CACHE_ROOT / "thresholds.json"


def load_model(checkpoint_path: Path, device: torch.device) -> MultiTaskModel:
    encoder = SharedEncoder(pretrained=False)
    model = MultiTaskModel(encoder).to(device)
    if checkpoint_path.is_file():
        ckpt = torch.load(checkpoint_path, map_location=device)
        model.load_state_dict(ckpt["model_state_dict"])
        print(f"Loaded checkpoint: {checkpoint_path}")
    else:
        print(f"WARNING: checkpoint not found at {checkpoint_path} — using random weights")
    model.eval()
    return model


def load_thresholds(threshold_path: Path) -> dict[str, float]:
    if threshold_path.is_file():
        data = json.loads(threshold_path.read_text())
        return data.get("thresholds", {})
    print(f"WARNING: thresholds not found at {threshold_path} — using defaults (0.5)")
    return {}


def run_inference(
    study_id: str,
    checkpoint_path: Path = DEFAULT_CHECKPOINT,
    threshold_path: Path = DEFAULT_THRESHOLDS,
    output_dir: Path | str = "inference_output",
) -> dict:
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Device: {device}")

    model = load_model(checkpoint_path, device)
    thresholds = load_thresholds(threshold_path)

    # Build config with fitted thresholds
    from post_processing import PostProcessConfig
    config = PostProcessConfig()
    config.tau.update(thresholds)
    proc = PostProcessor(config=config)

    # Load cached study
    ds = MRNetDataset("train", cache_root=CACHE_ROOT)
    val_ds = MRNetDataset("validation", cache_root=CACHE_ROOT)

    sample = None
    split = None
    for s in (ds, val_ds):
        for i in range(len(s)):
            if s.files[i].stem == study_id:
                sample = s[i]
                split = "train" if s is ds else "validation"
                break
        if sample is not None:
            break

    if sample is None:
        raise FileNotFoundError(f"Study {study_id} not found in train or validation cache")

    X = sample["X"].to(device)[None]      # (1, 6, 16, 336, 336)
    mask = sample["mask"].to(device)[None] # (1, 6)

    with torch.no_grad():
        out = model(X, mask)

    result = proc.process(
        out["logit_abn"][0].cpu().numpy(),
        out["logits_12"][0].cpu().numpy(),
        out["logits_region"][0].cpu().numpy(),
        out["heatmaps"][0].cpu().numpy(),
        study_id=study_id,
    )

    # Warnings
    warnings = []
    mask_list = sample["mask"].tolist()
    for i, present in enumerate(mask_list):
        if not present:
            slot_name = SLOT_NAMES[i] if i < len(SLOT_NAMES) else f"slot_{i}"
            warnings.append(f"Missing slot: {slot_name} (plane empty)")

    # Save outputs
    out_dir = Path(output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "result.json").write_text(json.dumps(proc.to_dict(result), indent=2))

    # Overlays: one per finding, using the first available slice of each slot
    overlay_dir = out_dir / "overlays"
    overlay_dir.mkdir(exist_ok=True)

    # Build a composite MRI image: mean of all present slots, middle slice
    mri_slices = []
    for si in range(6):
        if mask_list[si]:
            mid = X.shape[2] // 2
            mri_slices.append(X[0, si, mid].cpu().numpy())
    if mri_slices:
        base_mri = np.mean(np.stack(mri_slices), axis=0)
        base_mri = np.clip(base_mri, 0, 255).astype(np.uint8)
    else:
        base_mri = np.zeros((336, 336), dtype=np.uint8)

    heatmaps = result.heatmaps  # (12, 336, 336)
    ov_dict = overlay_all_findings(base_mri, heatmaps, alpha=0.4)
    for finding, ov_img in ov_dict.items():
        ov_path = overlay_dir / f"{finding.replace(' ', '_')}.png"
        cv2.imwrite(str(ov_path), cv2.cvtColor(ov_img, cv2.COLOR_RGB2BGR))

    print(f"\n=== Inference Result: {study_id} (split={split}) ===")
    print(f"is_abnormal: {result.is_abnormal}")
    print(f"prob_abnormal: {result.prob_abnormal:.4f}")
    print(f"findings: {result.findings}")
    print(f"affected_regions: {result.affected_regions}")
    print(f"warnings: {warnings}")
    print(f"Output saved to: {out_dir}")

    return {
        "result": proc.to_dict(result),
        "warnings": warnings,
        "output_dir": str(out_dir),
    }


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python infer.py <study_id> [--checkpoint ...] [--thresholds ...] [--output-dir ...]")
        sys.exit(1)

    study_id = sys.argv[1]
    ckpt = DEFAULT_CHECKPOINT
    thr = DEFAULT_THRESHOLDS
    out_dir = "inference_output"

    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == "--checkpoint" and i + 1 < len(sys.argv):
            ckpt = Path(sys.argv[i + 1]); i += 2
        elif sys.argv[i] == "--thresholds" and i + 1 < len(sys.argv):
            thr = Path(sys.argv[i + 1]); i += 2
        elif sys.argv[i] == "--output-dir" and i + 1 < len(sys.argv):
            out_dir = sys.argv[i + 1]; i += 2
        else:
            i += 1

    run_inference(study_id, ckpt, thr, out_dir)

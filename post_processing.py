"""
Stage 4 — Post-Processing.

Turn raw model logits into human-readable output:

  4.1 Threshold per target  (sigmoid + per-target tau, fit on validation)
  4.2 Build output dict     (is_abnormal, findings, affected_regions, heatmaps)
  4.3 Overlay heatmaps on MRI (cv2 COLORMAP_JET + alpha blend)
  4.4 Consistency check     (is_abnormal <-> findings agreement)

Output contract
---------------
result = {
    "study_id": str,
    "is_abnormal": bool,
    "findings": [str, ...],            # targets passing their tau
    "affected_regions": [str, ...],    # regions passing 0.5
    "prob_abnormal": float,            # sigmoid(logit_abn)
    "probs_findings": {name: float},   # sigmoid per finding
    "probs_regions": {name: float},    # sigmoid per region
    "heatmaps": np.ndarray,            # (12, 336, 336) float [0,1]
}
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

import cv2
import numpy as np


# ---------------------------------------------------------------------------
# Default per-target thresholds (fit these on your validation set!)
# These are illustrative starting values — replace with tau[t] that
# maximizes F1 / Youden's J per target on your held-out val set.
# ---------------------------------------------------------------------------
DEFAULT_TAU = {
    "ACL tear": 0.42,
    "PCL tear": 0.50,
    "MCL tear": 0.51,
    "LCL tear": 0.50,
    "Medial meniscus tear": 0.48,
    "Lateral meniscus tear": 0.45,
    "Effusion": 0.39,
    "Bone bruise": 0.55,
    "Patellar tendon tear": 0.50,
    "Quadriceps tendon tear": 0.50,
    "Osteochondral defect": 0.45,
    "Synovitis": 0.55,
}

FINDINGS = [
    "ACL tear", "PCL tear", "MCL tear", "LCL tear",
    "Medial meniscus tear", "Lateral meniscus tear",
    "Effusion", "Bone bruise", "Patellar tendon tear",
    "Quadriceps tendon tear", "Osteochondral defect", "Synovitis",
]

REGIONS = [
    "ACL", "PCL", "MCL", "LCL",
    "Medial Meniscus", "Lateral Meniscus",
    "Medial Compartment", "Lateral Compartment",
    "Patellofemoral", "Joint Space",
]

ABN_THRESHOLD = 0.5     # for is_abnormal (binary head)
REGION_THRESHOLD = 0.5  # for region head
ALPHA = 0.4             # heatmap overlay alpha


def sigmoid(x: np.ndarray) -> np.ndarray:
    """Numerically stable sigmoid."""
    return 1.0 / (1.0 + np.exp(-np.clip(x, -60.0, 60.0)))


@dataclass
class PostProcessConfig:
    tau: dict[str, float] = field(default_factory=lambda: DEFAULT_TAU.copy())
    abn_threshold: float = ABN_THRESHOLD
    region_threshold: float = REGION_THRESHOLD
    alpha: float = ALPHA
    consistency_rule: str = "findings_drive_abn"  # "findings_drive_abn" | "abn_drive_findings" | "none"


@dataclass
class PostProcessResult:
    study_id: str
    is_abnormal: bool
    findings: list[str]
    affected_regions: list[str]
    prob_abnormal: float
    probs_findings: dict[str, float]
    probs_regions: dict[str, float]
    heatmaps: np.ndarray  # (12, 336, 336) float [0,1]


class PostProcessor:
    """Convert model outputs to human-readable results."""

    def __init__(self,
                 findings: list[str] = FINDINGS,
                 regions: list[str] = REGIONS,
                 config: Optional[PostProcessConfig] = None):
        self.findings = list(findings)
        self.regions = list(regions)
        self.config = config or PostProcessConfig()
        # Ensure every finding has a tau (default 0.5 if missing)
        for f in self.findings:
            self.config.tau.setdefault(f, 0.5)

    # ------------------------------------------------------------------
    def process(self,
                logit_abn: float | np.ndarray,
                logits_12: np.ndarray,          # (12,)
                logits_region: np.ndarray,      # (R,)
                heatmaps: np.ndarray,           # (12, 336, 336) or (12, 6, 336, 336)
                study_id: str = "") -> PostProcessResult:
        """Main entry point: logits -> structured result."""

        logit_abn = float(np.atleast_1d(logit_abn)[0])
        logits_12 = np.asarray(logits_12, dtype=np.float64).ravel()
        logits_region = np.asarray(logits_region, dtype=np.float64).ravel()
        heatmaps = np.asarray(heatmaps, dtype=np.float32)

        # Normalize heatmaps to (12, 336, 336)
        if heatmaps.ndim == 4:          # (12, 6, 336, 336) -> mean over slots
            heatmaps = heatmaps.mean(axis=1)
        heatmaps = np.clip(heatmaps, 0.0, 1.0)

        # --- 4.1 thresholds ---
        prob_abn = float(sigmoid(np.array([logit_abn]))[0])
        probs_12 = sigmoid(logits_12)                    # (12,)
        probs_region = sigmoid(logits_region)            # (R,)

        # per-finding thresholds
        tau_vec = np.array([self.config.tau.get(f, 0.5) for f in self.findings])
        finding_mask = probs_12 > tau_vec                 # (12,) bool
        region_mask = probs_region > self.config.region_threshold  # (R,) bool

        findings = [self.findings[i] for i in range(len(self.findings)) if finding_mask[i]]
        regions = [self.regions[i] for i in range(len(self.regions)) if region_mask[i]]

        # --- 4.4 consistency check ---
        is_abn = bool(prob_abn > self.config.abn_threshold)
        rule = self.config.consistency_rule
        if rule == "findings_drive_abn":
            # If any finding detected, force abnormal; if none, force normal
            is_abn = bool(len(findings) > 0)
        elif rule == "abn_drive_findings":
            # If binary says normal, drop all findings
            if not is_abn:
                findings = []

        return PostProcessResult(
            study_id=study_id,
            is_abnormal=is_abn,
            findings=findings,
            affected_regions=regions,
            prob_abnormal=prob_abn,
            probs_findings={self.findings[i]: float(probs_12[i]) for i in range(len(self.findings))},
            probs_regions={self.regions[i]: float(probs_region[i]) for i in range(len(self.regions))},
            heatmaps=heatmaps,
        )

    # ------------------------------------------------------------------
    @staticmethod
    def to_dict(result: PostProcessResult) -> dict:
        return {
            "study_id": result.study_id,
            "is_abnormal": result.is_abnormal,
            "findings": result.findings,
            "affected_regions": result.affected_regions,
            "prob_abnormal": round(result.prob_abnormal, 4),
            "probs_findings": {k: round(v, 4) for k, v in result.probs_findings.items()},
            "probs_regions": {k: round(v, 4) for k, v in result.probs_regions.items()},
            "heatmaps_shape": result.heatmaps.shape,
        }


# ---------------------------------------------------------------------------
# 4.3 — Heatmap overlay on MRI
# ---------------------------------------------------------------------------
def overlay_heatmap(mri_slice: np.ndarray,
                    heatmap: np.ndarray,
                    alpha: float = 0.4,
                    colormap: int = cv2.COLORMAP_JET) -> np.ndarray:
    """Overlay a single heatmap on a single MRI slice.

    Parameters
    ----------
    mri_slice : (H, W) uint8 or float [0,255]  single MRI slice
    heatmap   : (H, W) float [0,1]             activation map
    alpha     : blend factor (0 = MRI only, 1 = heatmap only)
    colormap  : OpenCV colormap (default COLORMAP_JET)

    Returns
    -------
    overlay : (H, W, 3) uint8 RGB
    """
    mri = np.asarray(mri_slice)
    if mri.dtype != np.uint8:
        mri = np.clip(mri, 0, 255).astype(np.uint8)

    # grayscale -> RGB
    if mri.ndim == 2:
        mri_rgb = cv2.cvtColor(mri, cv2.COLOR_GRAY2RGB)
    elif mri.ndim == 3 and mri.shape[2] == 1:
        mri_rgb = cv2.cvtColor(mri[:, :, 0], cv2.COLOR_GRAY2RGB)
    else:
        mri_rgb = mri[..., :3]

    hm = np.asarray(heatmap)
    if hm.shape[:2] != mri_rgb.shape[:2]:
        hm = cv2.resize(hm, (mri_rgb.shape[1], mri_rgb.shape[0]),
                        interpolation=cv2.INTER_LINEAR)

    hm_u8 = np.clip(hm * 255.0, 0, 255).astype(np.uint8)
    heatmap_color = cv2.applyColorMap(hm_u8, colormap)      # (H, W, 3) BGR
    heatmap_color = cv2.cvtColor(heatmap_color, cv2.COLOR_BGR2RGB)

    overlay = ((1.0 - alpha) * mri_rgb.astype(np.float32)
               + alpha * heatmap_color.astype(np.float32))
    return np.clip(overlay, 0, 255).astype(np.uint8)


def overlay_all_findings(mri_slice: np.ndarray,
                         heatmaps: np.ndarray,       # (12, H, W) or (12, 6, H, W)
                         alpha: float = 0.4) -> dict[str, np.ndarray]:
    """Return {finding_name: overlay_rgb} for all 12 findings."""
    if heatmaps.ndim == 4:
        heatmaps = heatmaps.mean(axis=1)   # (12, H, W)
    return {
        finding: overlay_heatmap(mri_slice, heatmaps[i], alpha=alpha)
        for i, finding in enumerate(FINDINGS)
    }


# ---------------------------------------------------------------------------
# Demo / sanity check
# ---------------------------------------------------------------------------
def demo() -> None:
    proc = PostProcessor()

    # synthetic logits
    logit_abn = 1.2
    logits_12 = np.array([1.5, -0.5, 2.0, -1.0, 0.8, -0.2, 1.1, -2.0, 0.3, -0.8, 0.5, -1.5])
    logits_region = np.array([1.0, -0.5, 0.7, -1.2, 0.4, -0.3, 0.9, -0.6, 0.2, -0.1])
    heatmaps = np.random.rand(12, 336, 336).astype(np.float32)

    result = proc.process(logit_abn, logits_12, logits_region, heatmaps,
                          study_id="demo_0001")
    print("=== Post-Processing Demo ===")
    print("study_id:", result.study_id)
    print("is_abnormal:", result.is_abnormal)
    print("prob_abnormal:", round(result.prob_abnormal, 4))
    print("findings:", result.findings)
    print("affected_regions:", result.affected_regions)
    print("heatmaps:", result.heatmaps.shape, "range", result.heatmaps.min(), "-", result.heatmaps.max())
    print()
    print("=== as dict ===")
    print(proc.to_dict(result))

    # overlay demo
    mri = np.random.randint(0, 256, (336, 336), dtype=np.uint8)
    ov = overlay_all_findings(mri, heatmaps, alpha=0.4)
    print()
    print("=== Overlay demo ===")
    print("num overlays:", len(ov))
    print("overlay shape:", ov[FINDINGS[0]].shape, ov[FINDINGS[0]].dtype)


if __name__ == "__main__":
    demo()

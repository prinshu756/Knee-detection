"""
Stage 3 — Multi-task heads on top of the Shared Encoder.

Inputs
------
F_global  : (B, S, 384)      — depth-pooled CLS per slot
F_spatial : (B, S, D, 24, 24, 384) — spatial map per slot/slice
mask      : (B, S) uint8     — 1 = slot occupied

Outputs
-------
logit_abn     : (B, 1)       — binary abnormality
logits_12     : (B, 12)      — per-finding scores (slot-head attention)
logits_region : (B, R)       — anatomical region scores
heatmaps      : (B, 12, 6, 336, 336)  — weak localization (Option A)
"""

from __future__ import annotations

import math
from typing import Optional

import torch
import torch.nn as nn
import torch.nn.functional as F


# ---------------------------------------------------------------------------
# Slot ordering (must match preprocess.SLOTS)
# ---------------------------------------------------------------------------
SLOT_NAMES = ["SAG_FS", "COR_FS", "AX_FS", "SAG_NOFS", "COR_NOFS", "AX_NOFS"]
S = len(SLOT_NAMES)

# Default 12 knee MRI findings.
FINDINGS = [
    "ACL tear", "PCL tear", "MCL tear", "LCL tear",
    "Medial meniscus tear", "Lateral meniscus tear",
    "Effusion", "Bone bruise", "Patellar tendon tear",
    "Quadriceps tendon tear", "Osteochondral defect", "Synovitis",
]
N_FINDINGS = len(FINDINGS)

# Anatomical regions (coarse, report-parsable).
REGIONS = [
    "ACL", "PCL", "MCL", "LCL",
    "Medial Meniscus", "Lateral Meniscus",
    "Medial Compartment", "Lateral Compartment",
    "Patellofemoral", "Joint Space",
]
N_REGIONS = len(REGIONS)

# Hand-designed slot prior: nudges attention toward anatomically plausible
# slots for each finding.  Multiplied by SLOT_PRIOR_WEIGHT before softmax.
SLOT_PRIOR_TABLE = {
    "ACL tear":            [0, 3],      # sagittal
    "PCL tear":            [0, 3],      # sagittal
    "MCL tear":            [1, 4],      # coronal
    "LCL tear":            [1, 4],      # coronal
    "Medial meniscus tear":[0, 1, 3, 4],# sagittal + coronal
    "Lateral meniscus tear":[0, 1, 3, 4],
    "Effusion":            [2, 5],      # axial
    "Bone bruise":         [2, 5],      # axial
    "Patellar tendon tear":[2, 5],      # axial
    "Quadriceps tendon tear":[2, 5],    # axial
    "Osteochondral defect":[0, 1, 2, 3, 4, 5],
    "Synovitis":           [2, 5],      # axial
}
SLOT_PRIOR_WEIGHT = 0.55


def build_slot_prior(findings: list[str] = FINDINGS) -> torch.Tensor:
    """(N_findings, S) bias added to attention logits before softmax."""
    prior = torch.zeros(len(findings), S)
    for fi, name in enumerate(findings):
        for si in SLOT_PRIOR_TABLE.get(name, []):
            prior[fi, si] = SLOT_PRIOR_WEIGHT
    return prior


# ---------------------------------------------------------------------------
# Building blocks
# ---------------------------------------------------------------------------
class SlotHead(nn.Module):
    """Per-target attention over slots → one logit per finding.

    Each finding learns a query vector and attends over the S slot vectors.
    Different findings can attend to different slots (ACL→sagittal, etc.).
    """

    def __init__(self, dim: int = 384, hidden: int = 256,
                 n_findings: int = N_FINDINGS,
                 slot_prior: Optional[torch.Tensor] = None):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.proj = nn.Sequential(
            nn.Linear(dim, hidden),
            nn.GELU(),
        )
        self.slot_emb = nn.Parameter(torch.zeros(S, hidden))
        nn.init.trunc_normal_(self.slot_emb, std=0.02)

        # One learnable query per finding.
        self.queries = nn.Parameter(torch.zeros(n_findings, hidden))
        nn.init.trunc_normal_(self.queries, std=0.02)

        self.scale = hidden ** -0.5
        self.classifier = nn.Linear(hidden, n_findings)

        # Slot prior bias (registered as buffer so it moves with .to(device)).
        if slot_prior is None:
            slot_prior = build_slot_prior()
        self.register_buffer("slot_prior", slot_prior)

    def forward(self, F_global: torch.Tensor,
                mask: torch.Tensor) -> torch.Tensor:
        # F_global: (B, S, 384), mask: (B, S) {0,1}
        B, S, _ = F_global.shape
        h = self.proj(self.norm(F_global))       # (B, S, 256)
        h = h + self.slot_emb.view(1, S, -1)     # add slot embedding

        # Attention logits: (B, n_findings, S)
        logits = torch.einsum("bsh,fh->bfs", h, self.queries) * self.scale
        logits = logits + self.slot_prior.view(1, N_FINDINGS, S)

        # Mask out empty slots before softmax.
        if mask is not None:
            mask_f = mask.to(logits.dtype).view(B, 1, S)          # (B, 1, S)
            logits = logits + (mask_f - 1.0) * 1e4                # -1e4 on empty

        attn = F.softmax(logits, dim=-1)                          # (B, F, S)
        pooled = torch.einsum("bfs,bsh->bfh", attn, h)            # (B, F, 256)
        logits_12 = self.classifier(pooled)                       # (B, F, F?) → (B, F, 12?)
        # classifier maps hidden→n_findings, applied per finding:
        logits_12 = self.classifier(pooled).diagonal(dim1=1, dim2=2)  # (B, F)
        # Above diagonal is wrong — we want one logit per finding, not a full matrix.
        # Fix: classifier applied to pooled then take diagonal would give (B,F).
        # Cleaner: classifier(pooled) is (B, F, n_findings); we want the i-th finding's
        # own logit → diagonal.  Equivalent to a per-finding linear layer.
        return logits_12


# ---------------------------------------------------------------------------
# Head 1 — Binary abnormality
# ---------------------------------------------------------------------------
class BinaryAbnormalityHead(nn.Module):
    """Mean-pool slots → LayerNorm → Linear(1)."""

    def __init__(self, dim: int = 384):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.fc = nn.Linear(dim, 1)

    def forward(self, F_global: torch.Tensor,
                mask: torch.Tensor) -> torch.Tensor:
        # F_global: (B, S, 384), mask: (B, S)
        B, S, C = F_global.shape
        mask_f = mask.to(F_global.dtype).view(B, S, 1)
        pooled = (F_global * mask_f).sum(dim=1) / mask_f.sum(dim=1).clamp(min=1)
        pooled = self.norm(pooled)                      # (B, 384)
        return self.fc(pooled)                          # (B, 1)


# ---------------------------------------------------------------------------
# Head 4 — Anatomical region classifier
# ---------------------------------------------------------------------------
class RegionHead(nn.Module):
    """GAP over spatial → MLP → region logits."""

    def __init__(self, dim: int = 384, hidden: int = 256,
                 n_regions: int = N_REGIONS):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.mlp = nn.Sequential(
            nn.Linear(dim, hidden),
            nn.GELU(),
            nn.Linear(hidden, n_regions),
        )

    def forward(self, F_spatial: torch.Tensor,
                mask: torch.Tensor) -> torch.Tensor:
        # F_spatial: (B, S, D, 24, 24, 384)
        B, S, D, G, _, C = F_spatial.shape
        # GAP over slice + grid → (B, S, 384)
        feat = F_spatial.mean(dim=(2, 3, 4))
        # Mask-weighted mean over slots → (B, 384)
        mask_f = mask.to(feat.dtype).view(B, S, 1)
        feat = (feat * mask_f).sum(dim=1) / mask_f.sum(dim=1).clamp(min=1)
        feat = self.norm(feat)
        return self.mlp(feat)                           # (B, n_regions)


# ---------------------------------------------------------------------------
# Head 3-A — Weak localization (attention heatmaps, no pixel labels)
# ---------------------------------------------------------------------------
class WeakLocalizationHead(nn.Module):
    """Per-finding attention over spatial patches → upsampled heatmaps.

    Reuses the finding queries from SlotHead.  No pixel-level labels needed.
    """

    def __init__(self, dim: int = 384, hidden: int = 256,
                 n_findings: int = N_FINDINGS, grid: int = 24,
                 out_size: int = 336):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.proj = nn.Sequential(
            nn.Linear(dim, hidden),
            nn.GELU(),
        )
        self.queries = nn.Parameter(torch.zeros(n_findings, hidden))
        nn.init.trunc_normal_(self.queries, std=0.02)
        self.scale = hidden ** -0.5
        self.grid = grid
        self.out_size = out_size

    def forward(self, F_spatial: torch.Tensor,
                mask: torch.Tensor) -> torch.Tensor:
        # F_spatial: (B, S, D, 24, 24, 384)
        B, S, D, G, _, C = F_spatial.shape
        feat = self.norm(F_spatial)                       # (B, S, D, G, G, 384)
        feat = self.proj(feat)                            # (B, S, D, G, G, 256)
        # Flatten slots×slices×grid → (B, S*D*G*G, 256)
        feat = feat.reshape(B, S * D * G * G, -1)

        # Attention logits: (B, n_findings, S*D*G*G)
        logits = torch.einsum("fh,bsh->bfs", self.queries, feat) * self.scale
        attn = F.softmax(logits, dim=-1)                  # (B, F, S*D*G*G)

        # Reshape to heatmap grid: (B, F, S, D, G, G)
        heat = attn.reshape(B, N_FINDINGS, S, D, G, G)
        # Average over slots & slices → (B, F, G, G)
        heat = heat.mean(dim=(2, 3))
        # Upsample G×G → out_size×out_size
        heat = heat.reshape(B * N_FINDINGS, 1, G, G)
        heat = F.interpolate(heat, size=(self.out_size, self.out_size),
                             mode="bilinear", align_corners=False)
        heat = heat.reshape(B, N_FINDINGS, self.out_size, self.out_size)
        return heat


# ---------------------------------------------------------------------------
# Combined multi-task model
# ---------------------------------------------------------------------------
class MultiTaskModel(nn.Module):
    """SharedEncoder + all heads."""

    def __init__(self, encoder: nn.Module,
                 n_findings: int = N_FINDINGS,
                 n_regions: int = N_REGIONS,
                 slot_prior: Optional[torch.Tensor] = None,
                 use_localization: bool = True,
                 use_region: bool = True):
        super().__init__()
        self.encoder = encoder
        self.n_findings = n_findings
        self.n_regions = n_regions

        self.head_abn = BinaryAbnormalityHead()
        self.head_12 = SlotHead(dim=384, hidden=256,
                                n_findings=n_findings,
                                slot_prior=slot_prior)
        self.head_region = RegionHead(dim=384, hidden=256,
                                      n_regions=n_regions) if use_region else None
        self.head_loc = WeakLocalizationHead(dim=384, hidden=256,
                                             n_findings=n_findings) \
            if use_localization else None

    def forward(self, X: torch.Tensor, mask: torch.Tensor):
        # X: (B, S, D, 336, 336) uint8
        F_global, F_spatial = self.encoder(X, mask)

        logit_abn = self.head_abn(F_global, mask)                        # (B, 1)
        logits_12 = self.head_12(F_global, mask)                         # (B, 12)

        out = {"logit_abn": logit_abn, "logits_12": logits_12}

        if self.head_region is not None:
            out["logits_region"] = self.head_region(F_spatial, mask)     # (B, R)
        if self.head_loc is not None:
            out["heatmaps"] = self.head_loc(F_spatial, mask)             # (B, 12, 336, 336)

        return out


# ---------------------------------------------------------------------------
# Losses
# ---------------------------------------------------------------------------
class MultiTaskLoss(nn.Module):
    def __init__(self, w_abn: float = 1.0, w_12: float = 1.0,
                 w_region: float = 0.5, w_seg: float = 0.3):
        super().__init__()
        self.w_abn = w_abn
        self.w_12 = w_12
        self.w_region = w_region
        self.w_seg = w_seg
        self.bce = nn.BCEWithLogitsLoss()

    def forward(self, out: dict, targets: dict,
                pixel_masks: Optional[torch.Tensor] = None) -> dict:
        losses = {}
        losses["loss_abn"] = self.bce(out["logit_abn"], targets["y_abn"].float())
        losses["loss_12"] = self.bce(out["logits_12"], targets["y_12"].float())

        total = self.w_abn * losses["loss_abn"] + self.w_12 * losses["loss_12"]

        if "logits_region" in out and "y_region" in targets:
            losses["loss_region"] = self.bce(out["logits_region"],
                                             targets["y_region"].float())
            total = total + self.w_region * losses["loss_region"]

        if pixel_masks is not None and "heatmaps" in out:
            # Dice + BCE on heatmaps vs pixel masks
            probs = torch.sigmoid(out["heatmaps"])
            inter = (probs * pixel_masks).sum(dim=(2, 3))
            union = probs.sum(dim=(2, 3)) + pixel_masks.sum(dim=(2, 3))
            dice = 1 - (2 * inter + 1e-6) / (union + 1e-6)
            losses["loss_seg"] = dice.mean() + self.bce(
                out["heatmaps"].reshape(-1), pixel_masks.reshape(-1))
            total = total + self.w_seg * losses["loss_seg"]

        losses["loss"] = total
        return losses

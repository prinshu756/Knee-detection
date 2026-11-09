"""
Stage 2 — Shared Encoder (2.5D ViT).

Input
-----
X  : (B, S, D, H, W) uint8    [S=6 slots, D=16 slices, H=W=336]
mask: (B, S) uint8 {0,1}       1 = slot occupied, 0 = empty/padded

Output
------
F_global  : (B, S, embed_dim)        — one embedding per slot (for "what")
F_spatial : (B, S, D, grid, grid, embed_dim)   — spatial map per slot/slice (for "where")

Data flow
---------
X (B, 6, 16, 336, 336) uint8
      │ replicate grayscale → 3 channels
      ▼ reshape → (B*6*16, 3, 336, 336)
DINOv2-small ViT (12 blocks, 384-d, 6 heads, patch 14 → 24×24=576)
      │
   ┌──┴──┐
   ▼     ▼
CLS   Patch tokens
(B*6*16,384)  (B*6*16, 576, 384)
 │         │
 ▼         ▼ reshape (keep slice dim)
(B,6,16,384) (B,6,16,24,24,384)
 │           │
 │           └── F_spatial (B, 6, 16, 24, 24, 384)
 │
DepthAttnPool over 16 slices per slot → (B, 6, 384)
 │ + slot_emb
 ▼ × mask (zero out empty slots)
F_global (B, 6, 384)
"""

from __future__ import annotations

import torch
import torch.nn as nn

try:
    from .vit import dinov2_vits14
except ImportError:  # run as a script: python model/shared_encoder.py
    from vit import dinov2_vits14


class DepthAttnPool(nn.Module):
    """1-D attention over the slice dimension, applied per slot.

    Collapses (B, S, D, C) -> (B, S, C): each slice gets a learnable weight,
    softmaxed over D, then a weighted sum.
    """

    def __init__(self, dim: int = 384):
        super().__init__()
        self.query = nn.Parameter(torch.zeros(1, 1, dim))
        nn.init.trunc_normal_(self.query, std=0.02)
        self.scale = dim ** -0.5

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x: (B, S, D, C)
        B, S, D, C = x.shape
        q = self.query.expand(B, S, 1, C)                     # (B, S, 1, C)
        scores = (q @ x.transpose(-2, -1)) * self.scale       # (B, S, 1, D)
        attn = scores.softmax(dim=-1)
        out = attn @ x                                        # (B, S, 1, C)
        return out.squeeze(2)                                 # (B, S, C)


class SharedEncoder(nn.Module):
    """2.5D ViT shared encoder (Stage 2).

    Parameters
    ----------
    img_size, patch_size, embed_dim, depth, num_heads : ViT hyper-params
        (336, 14, 384, 12, 6) -> grid 24x24.
    S : number of slots (6).
    D : slices per slot (16).
    pretrained : if True, load official DINOv2-vits14 weights via torch hub.
    """

    def __init__(self, img_size: int = 336, patch_size: int = 14,
                 embed_dim: int = 384, depth: int = 12, num_heads: int = 6,
                 S: int = 6, D: int = 16, pretrained: bool = False,
                 vit_chunk: int = 8):
        super().__init__()
        self.S = S
        self.D = D
        self.embed_dim = embed_dim
        self.grid = img_size // patch_size          # 24
        self.vit_chunk = vit_chunk                  # slices processed per ViT micro-batch

        self.vit = dinov2_vits14(
            patch_size=patch_size, embed_dim=embed_dim, depth=depth,
            num_heads=num_heads)

        if pretrained:
            self._load_dinov2_weights()

        self.depth_pool = DepthAttnPool(embed_dim)
        self.slot_emb = nn.Parameter(torch.zeros(S, embed_dim))
        nn.init.trunc_normal_(self.slot_emb, std=0.02)

    # ------------------------------------------------------------------
    def _load_dinov2_weights(self) -> None:
        """Attempt to load official DINOv2-vits14 weights (needs internet)."""
        try:
            hub = torch.hub.load("facebookresearch/dinov2:main",
                                 "dinov2_vits14", pretrained=True)
            hub_state = hub.state_dict()
            own_state = self.vit.state_dict()
            matched = 0
            for k, v in hub_state.items():
                if k in own_state and own_state[k].shape == v.shape:
                    own_state[k].copy_(v)
                    matched += 1
            self.vit.load_state_dict(own_state)
            print(f"[SharedEncoder] loaded {matched}/{len(own_state)} "
                  f"DINOv2-vits14 tensors from torch hub.")
        except Exception as exc:  # noqa: BLE001
            print(f"[SharedEncoder] could not load DINOv2 pretrained weights: "
                  f"{exc!r}  -> using random initialisation.")

    # ------------------------------------------------------------------
    def forward(self, x: torch.Tensor, mask: torch.Tensor | None = None):
        # x : (B, S, D, H, W) uint8
        # mask: (B, S) uint8 {0,1}  (optional)
        B, S, D, H, W = x.shape

        # uint8 -> float [0,1], grayscale -> 3 channels (replicate)
        x = x.float() / 255.0
        x = x.unsqueeze(3)                       # (B, S, D, 1, H, W)
        x = x.expand(-1, -1, -1, 3, -1, -1)      # (B, S, D, 3, H, W)
        x = x.reshape(B * S * D, 3, H, W)        # (B*S*D, 3, 336, 336)

        # ---- Run ViT in micro-batches (chunks of slices) to cap VRAM ----
        # Processing all B*S*D slices at once blows up attention memory
        # during training backward. Chunking keeps peak activation memory low.
        cls_list = []
        patch_list = []
        chunk = max(1, int(self.vit_chunk))
        n_total = x.shape[0]
        for start in range(0, n_total, chunk):
            xc = x[start:start + chunk]
            cls_c, patch_c = self.vit(xc)
            cls_list.append(cls_c)
            patch_list.append(patch_c)
            del xc, cls_c, patch_c
        if torch.is_grad_enabled():
            torch.cuda.empty_cache()
            torch.cuda.synchronize()

        cls = torch.cat(cls_list, dim=0)         # (B*S*D, 384)
        patches = torch.cat(patch_list, dim=0)   # (B*S*D, 576, 384)
        del cls_list, patch_list

        cls = cls.reshape(B, S, D, self.embed_dim)                                    # (B, 6, 16, 384)
        patches = patches.reshape(B, S, D, self.grid, self.grid, self.embed_dim)      # (B, 6, 16, 24, 24, 384)

        # ---- Stream A: F_global — collapse depth via attention ----
        F_global = self.depth_pool(cls)           # (B, 6, 384)
        F_global = F_global + self.slot_emb       # add slot embedding

        # ---- Stream B: F_spatial — keep slice + spatial grid ----
        F_spatial = patches                       # (B, 6, 16, 24, 24, 384)

        # ---- Apply mask: zero out empty slots ----
        if mask is not None:
            mask_f = mask.to(F_global.dtype).view(B, S, 1)
            F_global = F_global * mask_f
            F_spatial = F_spatial * mask_f.view(B, S, 1, 1, 1, 1)

        return F_global, F_spatial


if __name__ == "__main__":
    # Allow running directly:  python model/shared_encoder.py
    import sys
    from pathlib import Path
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

    import torch
    import numpy as np

    from model.shared_encoder import SharedEncoder

    torch.manual_seed(0)
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print("device:", device)

    model = SharedEncoder(pretrained=False).to(device).eval()

    # two dummy batches: one full, one with empty slots
    X = torch.randint(0, 256, (2, 6, 16, 336, 336), dtype=torch.uint8, device=device)
    mask = torch.tensor([[1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 0]], device=device)

    with torch.no_grad():
        F_global, F_spatial = model(X, mask)

    print("X        :", tuple(X.shape), X.dtype)
    print("mask     :", mask.tolist())
    print("F_global :", tuple(F_global.shape), "expected (2, 6, 384)")
    print("F_spatial:", tuple(F_spatial.shape), "expected (2, 6, 16, 24, 24, 384)")

    assert F_global.shape == (2, 6, 384)
    assert F_spatial.shape == (2, 6, 16, 24, 24, 384)

    empty = (mask[1] == 0)
    assert (F_global[1][empty] == 0).all()
    assert (F_spatial[1][empty] == 0).all()
    print("All assertions passed.")

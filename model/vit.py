"""
vit.py

DINOv2-small-compatible Vision Transformer (ViT-S/14).

Specs
-----
* img_size = 336, patch_size = 14  ->  24 x 24 = 576 patches
* embed_dim = 384, depth = 12, num_heads = 6, mlp_ratio = 4
* Returns both the CLS token and the patch tokens so the 2.5D encoder
  can pool depth (via CLS) and keep spatial structure (via patches).

The architecture matches facebookresearch/dinov2 'dinov2_vits14'.
Weights are randomly initialised by default; pass pretrained=True to
attempt loading official DINOv2 weights via torch hub (requires internet).
"""

from __future__ import annotations

import torch
import torch.nn as nn
import torch.nn.functional as F


class PatchEmbed(nn.Module):
    """2D image to patch embedding."""

    def __init__(self, img_size: int = 336, patch_size: int = 14,
                 in_chans: int = 3, embed_dim: int = 384):
        super().__init__()
        self.img_size = img_size
        self.patch_size = patch_size
        self.grid_size = img_size // patch_size          # 24
        self.num_patches = self.grid_size * self.grid_size  # 576
        self.proj = nn.Conv2d(in_chans, embed_dim,
                              kernel_size=patch_size, stride=patch_size)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x: (B, 3, 336, 336) -> (B, 384, 24, 24) -> (B, 576, 384)
        x = self.proj(x)
        x = x.flatten(2).transpose(1, 2)
        return x


class Attention(nn.Module):
    def __init__(self, dim: int, num_heads: int = 6, qkv_bias: bool = True,
                 attn_drop: float = 0., proj_drop: float = 0.):
        super().__init__()
        self.num_heads = num_heads
        head_dim = dim // num_heads
        self.scale = head_dim ** -0.5
        self.qkv = nn.Linear(dim, dim * 3, bias=qkv_bias)
        self.attn_drop = nn.Dropout(attn_drop)
        self.proj = nn.Linear(dim, dim)
        self.proj_drop = nn.Dropout(proj_drop)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        B, N, C = x.shape
        qkv = (self.qkv(x)
               .reshape(B, N, 3, self.num_heads, C // self.num_heads)
               .permute(2, 0, 3, 1, 4))
        q, k, v = qkv[0], qkv[1], qkv[2]
        attn = (q @ k.transpose(-2, -1)) * self.scale
        attn = attn.softmax(dim=-1)
        attn = self.attn_drop(attn)
        x = (attn @ v).transpose(1, 2).reshape(B, N, C)
        x = self.proj(x)
        x = self.proj_drop(x)
        return x


class Mlp(nn.Module):
    def __init__(self, in_features: int, hidden_features: int | None = None,
                 out_features: int | None = None, drop: float = 0.):
        super().__init__()
        out_features = out_features or in_features
        hidden_features = hidden_features or in_features * 4
        self.fc1 = nn.Linear(in_features, hidden_features)
        self.act = nn.GELU()
        self.fc2 = nn.Linear(hidden_features, out_features)
        self.drop = nn.Dropout(drop)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = self.fc1(x)
        x = self.act(x)
        x = self.drop(x)
        x = self.fc2(x)
        x = self.drop(x)
        return x


class Block(nn.Module):
    def __init__(self, dim: int, num_heads: int, mlp_ratio: float = 4.,
                 qkv_bias: bool = True, drop: float = 0., attn_drop: float = 0.):
        super().__init__()
        self.norm1 = nn.LayerNorm(dim, eps=1e-6)
        self.attn = Attention(dim, num_heads, qkv_bias, attn_drop, drop)
        self.norm2 = nn.LayerNorm(dim, eps=1e-6)
        self.mlp = Mlp(dim, int(dim * mlp_ratio), drop=drop)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = x + self.attn(self.norm1(x))
        x = x + self.mlp(self.norm2(x))
        return x


class VisionTransformer(nn.Module):
    def __init__(self, img_size: int = 336, patch_size: int = 14,
                 in_chans: int = 3, embed_dim: int = 384, depth: int = 12,
                 num_heads: int = 6, mlp_ratio: float = 4.,
                 qkv_bias: bool = True, drop_rate: float = 0.,
                 attn_drop_rate: float = 0.):
        super().__init__()
        self.num_features = embed_dim
        self.patch_embed = PatchEmbed(img_size, patch_size, in_chans, embed_dim)
        num_patches = self.patch_embed.num_patches
        self.cls_token = nn.Parameter(torch.zeros(1, 1, embed_dim))
        self.pos_embed = nn.Parameter(torch.zeros(1, num_patches + 1, embed_dim))
        self.pos_drop = nn.Dropout(p=drop_rate)
        self.blocks = nn.ModuleList([
            Block(embed_dim, num_heads, mlp_ratio, qkv_bias,
                  drop_rate, attn_drop_rate)
            for _ in range(depth)])
        self.norm = nn.LayerNorm(embed_dim, eps=1e-6)
        self._init_weights()

    def _init_weights(self) -> None:
        nn.init.trunc_normal_(self.pos_embed, std=0.02)
        nn.init.trunc_normal_(self.cls_token, std=0.02)
        for m in self.modules():
            if isinstance(m, nn.Linear):
                nn.init.trunc_normal_(m.weight, std=0.02)
                if m.bias is not None:
                    nn.init.zeros_(m.bias)
            elif isinstance(m, nn.LayerNorm):
                nn.init.zeros_(m.bias)
                nn.init.ones_(m.weight)
            elif isinstance(m, nn.Conv2d):
                nn.init.trunc_normal_(m.weight, std=0.02)
                if m.bias is not None:
                    nn.init.zeros_(m.bias)

    def forward_features(self, x: torch.Tensor):
        B = x.shape[0]
        x = self.patch_embed(x)                      # (B, num_patches, embed_dim)
        cls_tokens = self.cls_token.expand(B, -1, -1)
        x = torch.cat((cls_tokens, x), dim=1)        # (B, 1 + num_patches, embed_dim)

        # Interpolate positional embedding if the input grid differs from the
        # one pos_embed was initialised for (e.g. 336 -> 224 saves VRAM).
        num_patches = x.shape[1] - 1
        if num_patches != self.pos_embed.shape[1] - 1:
            pos_cls = self.pos_embed[:, 0:1, :]                       # (1, 1, C)
            pos_patch = self.pos_embed[:, 1:, :]                      # (1, N_old, C)
            old_grid = int(round((self.pos_embed.shape[1] - 1) ** 0.5))
            new_grid = int(round(num_patches ** 0.5))
            pos_patch = pos_patch.reshape(1, old_grid, old_grid,
                                          -1).permute(0, 3, 1, 2)     # (1, C, G, G)
            pos_patch = F.interpolate(pos_patch, size=(new_grid, new_grid),
                                      mode="bilinear", align_corners=False)
            pos_patch = pos_patch.permute(0, 2, 3, 1).reshape(1, new_grid * new_grid, -1)
            pos_embed = torch.cat([pos_cls, pos_patch], dim=1)
        else:
            pos_embed = self.pos_embed

        x = x + pos_embed
        x = self.pos_drop(x)
        for blk in self.blocks:
            x = blk(x)
        x = self.norm(x)
        cls = x[:, 0]                                # (B, embed_dim)
        patches = x[:, 1:]                           # (B, num_patches, embed_dim)
        return cls, patches

    def forward(self, x: torch.Tensor):
        return self.forward_features(x)


def dinov2_vits14(patch_size: int = 14, embed_dim: int = 384,
                  depth: int = 12, num_heads: int = 6, **kwargs
                  ) -> VisionTransformer:
    """ViT-S/14 (DINOv2-small): embed_dim=384, depth=12, num_heads=6, patch=14."""
    model = VisionTransformer(
        patch_size=patch_size, embed_dim=embed_dim, depth=depth,
        num_heads=num_heads, mlp_ratio=4, qkv_bias=True, **kwargs)
    return model

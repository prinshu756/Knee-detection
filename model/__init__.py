"""model package: Shared Encoder (2.5D ViT) + multi-task heads for RSNA MRNet."""

from .shared_encoder import SharedEncoder, DepthAttnPool
from .vit import dinov2_vits14, VisionTransformer
from .heads import (
    SlotHead,
    BinaryAbnormalityHead,
    RegionHead,
    WeakLocalizationHead,
    MultiTaskModel,
    MultiTaskLoss,
    build_slot_prior,
    FINDINGS,
    REGIONS,
    SLOT_NAMES,
    N_FINDINGS,
    N_REGIONS,
)

__all__ = [
    "SharedEncoder", "DepthAttnPool",
    "dinov2_vits14", "VisionTransformer",
    "SlotHead", "BinaryAbnormalityHead", "RegionHead", "WeakLocalizationHead",
    "MultiTaskModel", "MultiTaskLoss",
    "build_slot_prior", "FINDINGS", "REGIONS", "SLOT_NAMES",
    "N_FINDINGS", "N_REGIONS",
]

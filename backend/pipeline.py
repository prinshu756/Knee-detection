"""Model + preprocessing pipeline, extracted verbatim from the repo notebooks.

Provenance:
  - standardize / resample_depth / preprocess  -> Data_processing.ipynb (strategy='resample',
    TARGET_SLICES=32) and identical in Model_Training.ipynb + Training_and_validation.ipynb
  - MRNet2D (max + logsumexp aggregation)      -> Model_Architecture.ipynb / Model_Training.ipynb
  - Multi-task head (fc -> 3, one model per plane) -> artifacts model_{axial,coronal}_demo.joblib
    (tasks order: ('abnormal', 'acl', 'meniscus'), per-task thresholds)
"""
import numpy as np
import torch
import torch.nn.functional as Fn
from torch import nn
import torchvision.models as tvm

TARGET_SLICES = 32
TASKS = ('abnormal', 'acl', 'meniscus')
PLANES = ('axial', 'coronal', 'sagittal')
DEVICE = 'cuda' if torch.cuda.is_available() else 'cpu'


def standardize(arr):
    """Per-volume z-score (mean/std over all voxels), as in Data_processing.ipynb."""
    arr = arr.astype(np.float32)
    return (arr - arr.mean()) / (arr.std() + 1e-8)


def resample_depth(arr, target=TARGET_SLICES):
    """Trilinear depth resample to `target` slices, H/W untouched."""
    t = torch.from_numpy(np.ascontiguousarray(arr))[None, None]
    return Fn.interpolate(t, size=(target, arr.shape[1], arr.shape[2]),
                          mode='trilinear', align_corners=False)[0, 0].numpy()


def preprocess(arr, target=TARGET_SLICES):
    """Raw (D, H, W) ndarray -> (3, target, H, W) float32 tensor (3 identical channels)."""
    arr = resample_depth(standardize(arr), target)
    return torch.from_numpy(np.stack([arr] * 3))


class MRNet2D(nn.Module):
    """2D slice-aggregation CNN. n_tasks=1 -> original MRNet head; n_tasks=3 -> multi-task plane model."""

    def __init__(self, backbone='resnet18', n_tasks=1):
        super().__init__()
        if backbone == 'resnet18':
            m = tvm.resnet18(weights=None)
            m.fc = nn.Identity()
            self.backbone, self.feat_dim = nn.Sequential(*list(m.children())), 512
        elif backbone == 'alexnet':
            m = tvm.alexnet(weights=None)
            self.backbone, self.feat_dim = nn.Sequential(m.features, nn.AdaptiveAvgPool2d(1), nn.Flatten()), 256
        else:
            raise ValueError(f'unsupported backbone {backbone}')
        self.n_tasks = n_tasks
        self.fc = nn.Linear(2 * self.feat_dim, n_tasks)
        # index of the last conv stage for Grad-CAM (the final nn.Sequential
        # child of the backbone: resnet18 -> layer4, output (B, 512, 8, 8)).
        # Stored as an INDEX (not a module ref) so load_state_dict stays 1:1.
        seqs = [i for i, c in enumerate(self.backbone.children()) if isinstance(c, nn.Sequential)]
        self.cam_index = seqs[-1] if seqs else None

    def forward(self, x):                       # (B, 3, D, H, W)
        b, c, d, h, w = x.shape
        f = self.backbone(x.permute(0, 2, 1, 3, 4).reshape(b * d, c, h, w)).view(b, d, self.feat_dim)
        pooled = torch.cat([f.max(1).values, f.logsumexp(1)], dim=1)   # 'paper' aggregation
        return self.fc(pooled)                  # (B, n_tasks)


def build_model(artifact):
    """artifact: registry dict {kind, backbone, model_state, tasks} -> nn.Module (on CPU)."""
    n = 1 if artifact['kind'] == 'single' else len(artifact['tasks'])
    m = MRNet2D(backbone=artifact.get('backbone', 'resnet18'), n_tasks=n)
    m.load_state_dict(artifact['model_state'])
    return m.eval()


@torch.inference_mode()
def predict_tensor(model, x, task=None, tasks=None):
    """x: (3, D, H, W) preprocessed tensor -> probability for `task` (or all tasks)."""
    amp = DEVICE == 'cuda'
    with torch.amp.autocast('cuda', enabled=amp):
        logits = model(x.unsqueeze(0).to(DEVICE)).float().squeeze(0)   # (n_tasks,)
    probs = torch.sigmoid(logits)
    if task is None:
        return {t: float(p) for t, p in zip(tasks, probs.tolist())}
    idx = tasks.index(task) if tasks else 0
    return float(probs[idx])


# ---------------------------------------------------------------------------
# Grad-CAM (slice-level importance + per-slice 8x8 spatial heatmaps)
# ---------------------------------------------------------------------------
def _cam_layer(model):
    """Last conv stage of the backbone (via stored index): output (B*D, 512, h, w)."""
    if getattr(model, 'cam_index', None) is None:
        return model.backbone
    return model.backbone[model.cam_index]


@torch.enable_grad()
def explain_tensor(model, x, task, tasks=None):
    """Grad-CAM for one exam volume.

    x: (3, D, H, W) preprocessed tensor (CPU). Returns:
      slice_importance: list[D] normalized mean-CAM per slice (which slice drove the decision)
      grids:            list[D] of h*w floats, per-slice CAM normalized to [0, 1]
      grid_w, grid_h:   CAM spatial resolution (8x8 for 256x256 input through resnet18)
      probability:      sigmoid(logit) for the requested task
    Runs in float32 (no autocast) so gradients are stable.
    """
    model.eval()
    feats = {}
    hook = _cam_layer(model).register_forward_hook(lambda m, i, o: feats.__setitem__('A', o))
    try:
        xin = x.unsqueeze(0).to(DEVICE)
        logits = model(xin)                                   # (1, n_tasks)
        idx = tasks.index(task) if tasks else 0
        score = logits[0, idx]
        model.zero_grad(set_to_none=True)
        score.backward()
        A = feats['A'].detach()                               # (B*D, 512, h, w)
        gA = A.grad                                           # gradients flow here
        if gA is None:                                        # fallback: saliency by activation magnitude
            gA = torch.ones_like(A)
        w = gA.mean(dim=(2, 3), keepdim=True)                 # GAP of grads -> channel weights (B*D,512,1,1)
        cam = torch.relu((w * A).sum(dim=1))                  # (B*D, h, w)
        # per-slice normalize to [0, 1]
        flat = cam.flatten(1)
        mx = flat.max(dim=1).values.clamp_min(1e-8).view(-1, 1, 1)
        cam_n = (cam / mx).cpu()
        imp = cam_n.flatten(1).mean(dim=1)                    # slice importance
        imp = (imp / imp.max().clamp_min(1e-8)).tolist()
        gh, gw = cam_n.shape[-2:]
        per_slice = [cam_n[i].flatten().tolist() for i in range(cam_n.shape[0])]
        prob = float(torch.sigmoid(score.detach().float()))
        return {'slice_importance': [round(v, 4) for v in imp],
                'grids': [[round(float(v), 4) for v in s] for s in per_slice],
                'grid_w': gw, 'grid_h': gh, 'probability': round(prob, 4)}
    finally:
        hook.remove()
        model.zero_grad(set_to_none=True)


# ---------------------------------------------------------------------------
# Confidence calibration (temperature scaling on the labeled valid split)
# ---------------------------------------------------------------------------
def fit_temperature(z, y):
    """Grid-search T minimizing NLL of sigmoid(z/T); z, y: 1-D arrays (logits, 0/1 labels)."""
    z = np.asarray(z, dtype=np.float64)
    y = np.asarray(y, dtype=np.float64)
    if len(z) < 8 or len(np.unique(y)) < 2:
        return 1.0, len(z)
    best_T, best_nll = 1.0, float('inf')
    for T in np.linspace(0.25, 6.0, 24):
        p = np.clip(1.0 / (1.0 + np.exp(-(z / T))), 1e-6, 1 - 1e-6)
        nll = float(-np.mean(y * np.log(p) + (1 - y) * np.log(1 - p)))
        if nll < best_nll:
            best_T, best_nll = round(float(T), 3), nll
    return best_T, len(z)


def logit(p):
    p = min(max(float(p), 1e-6), 1 - 1e-6)
    return float(np.log(p / (1 - p)))


def apply_temperature(prob, T):
    """Calibrated probability = sigmoid(logit(p) / T)."""
    import math
    return 1.0 / (1.0 + math.exp(-logit(prob) / max(T, 1e-3)))

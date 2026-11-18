"""Hugging Face Space — RSNA ACL MRNet MRI demo.

Self-contained Gradio app. Loads the three plane-specific MRNet artifacts
(``*.joblib`` dicts produced by the training notebooks), preprocesses an
uploaded 3D knee-MRI volume (D, H, W) exactly as in ``backend/pipeline.py``,
runs each model forward, and returns per-task sigmoid probabilities plus
thresholded labels.

No network access is required at runtime: ``torchvision`` models are created
with ``weights=None`` (random init) and then loaded with the trained
``model_state`` from the artifacts.
"""
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

import gradio as gr
import joblib
import numpy as np
import pandas as pd
import torch
import torch.nn.functional as F
from torch import nn
import torchvision.models as tvm

# ---------------- MRNet inference (self-contained; same math as backend/pipeline.py) ----------------
TARGET_SLICES = 32
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"


def standardize(arr):
    """Per-volume z-score (mean/std over all voxels)."""
    arr = arr.astype(np.float32)
    return (arr - arr.mean()) / (arr.std() + 1e-8)


def resample_depth(arr, target=TARGET_SLICES):
    """Trilinear depth resample to ``target`` slices, H/W untouched."""
    t = torch.from_numpy(np.ascontiguousarray(arr))[None, None]
    return F.interpolate(t, size=(target, arr.shape[1], arr.shape[2]),
                         mode="trilinear", align_corners=False)[0, 0].numpy()


def preprocess(arr):
    """Raw 3D volume (D, H, W) -> preprocessed tensor (3, 32, H, W)."""
    arr = resample_depth(standardize(arr), target=TARGET_SLICES)
    return torch.from_numpy(np.stack([arr] * 3))


class MRNet2D(nn.Module):
    """2D slice-aggregation CNN (max + logsumexp pooling)."""

    def __init__(self, backbone="resnet18", n_tasks=1):
        super().__init__()
        if backbone == "resnet18":
            m = tvm.resnet18(weights=None)
            m.fc = nn.Identity()
            self.backbone = nn.Sequential(*list(m.children()))
            self.feat_dim = 512
        elif backbone == "alexnet":
            m = tvm.alexnet(weights=None)
            self.backbone = nn.Sequential(m.features, nn.AdaptiveAvgPool2d(1), nn.Flatten())
            self.feat_dim = 256
        else:
            raise ValueError(f"unsupported backbone {backbone}")
        self.n_tasks = n_tasks
        self.fc = nn.Linear(2 * self.feat_dim, n_tasks)

    def forward(self, x):  # (B, 3, D, H, W)
        b, c, d, h, w = x.shape
        f = self.backbone(x.permute(0, 2, 1, 3, 4).reshape(b * d, c, h, w)).view(b, d, self.feat_dim)
        pooled = torch.cat([f.max(1).values, f.logsumexp(1)], dim=1)  # 'paper' aggregation
        return self.fc(pooled)  # (B, n_tasks)


def build_model(artifact):
    """artifact: joblib dict {backbone, task/tasks, model_state, ...} -> nn.Module."""
    if "task" in artifact:          # single-task artifact
        n = 1
    elif "tasks" in artifact:       # multi-task artifact
        n = len(artifact["tasks"])
    else:
        raise ValueError("artifact has neither 'task' nor 'tasks'")
    m = MRNet2D(backbone=artifact.get("backbone", "resnet18"), n_tasks=n)
    m.load_state_dict(artifact["model_state"])
    return m.to(DEVICE).eval()


def predict_tensor(model, x, task=None, tasks=None):
    """x: (3, 32, H, W) tensor -> probability for ``task`` (or dict for all tasks)."""
    with torch.inference_mode():
        logits = model(x.unsqueeze(0).to(DEVICE)).float().squeeze(0)
    probs = torch.sigmoid(logits)
    if task is None:
        return {t: float(p) for t, p in zip(tasks, probs.tolist())}
    idx = tasks.index(task) if tasks else 0
    return float(probs[idx])


# ---------------- Load the 3 plane artifacts at startup ----------------
ARTIFACTS = {
    "Sagittal (ACL)": joblib.load("model_acl_sagittal_demo.joblib"),
    "Axial (multi-task)": joblib.load("model_axial_demo_copy.joblib"),
    "Coronal (multi-task)": joblib.load("model_coronal_demo.joblib"),
}

MODELS = {}
for name, art in ARTIFACTS.items():
    kind = "single" if "task" in art else "multi"
    tasks = (art["task"],) if kind == "single" else tuple(art["tasks"])
    if kind == "single":
        thresholds = {art["task"]: float(art.get("threshold", 0.5))}
    else:
        thresholds = {t: float(art.get("thresholds", {}).get(t, 0.5)) for t in tasks}
    MODELS[name] = {
        "model": build_model(art),
        "tasks": tasks,
        "thresholds": thresholds,
        "plane": art.get("plane", "?"),
        "kind": kind,
    }


def predict(model_name, npy_file):
    # --- Validate input ---
    if npy_file is None:
        return pd.DataFrame({"Error": ["Please upload a 3D .npy volume (D, H, W)."]})

    # Gradio File gives either a path string or an object with .name
    path = npy_file.name if hasattr(npy_file, "name") else npy_file

    try:
        arr = np.load(path, allow_pickle=False)
    except Exception as e:
        return pd.DataFrame({"Error": [f"Could not read .npy: {e}"]})

    if arr.ndim != 3:
        return pd.DataFrame({
            "Error": [f"Expected a 3D volume (D, H, W), got shape {list(arr.shape)}"],
        })

    info = MODELS[model_name]

    try:
        x = preprocess(arr)
    except Exception as e:
        return pd.DataFrame({"Error": [f"Preprocessing failed: {e}"]})

    try:
        probs = predict_tensor(info["model"], x, tasks=list(info["tasks"]))
    except Exception as e:
        return pd.DataFrame({"Error": [f"Prediction failed: {e}"]})

    rows = []
    for t in info["tasks"]:
        p = probs[t]
        thr = info["thresholds"].get(t, 0.5)
        rows.append({
            "Task": t,
            "Plane": info["plane"],
            "Probability": round(p, 4),
            "Threshold": thr,
            "Label": int(p >= thr),
            "Class": t if p >= thr else "normal",
        })

    return pd.DataFrame(rows)


# ---------------- UI ----------------
with gr.Blocks(title="RSNA ACL MRNet MRI Demo") as demo:
    gr.Markdown(
        "# 🧠 RSNA ACL MRNet MRI Demo\n"
        "Upload a 3D knee-MRI `.npy` volume (D, H, W) and pick a plane/model. "
        "Each model returns per-task probabilities and a thresholded label."
    )

    with gr.Row():
        model_dd = gr.Dropdown(
            choices=list(MODELS.keys()),
            value=list(MODELS.keys())[0],
            label="Select model / plane",
        )
        file_in = gr.File(
            file_types=[".npy"],
            label="Upload 3D .npy volume (D, H, W)",
        )

    btn = gr.Button("🔮 Predict", variant="primary")
    out = gr.Dataframe(label="Predictions", wrap=True)

    btn.click(fn=predict, inputs=[model_dd, file_in], outputs=out)

# Hugging Face Spaces launches the `demo` object automatically.
# Run locally with:  python app.py
if __name__ == "__main__":
    demo.launch()

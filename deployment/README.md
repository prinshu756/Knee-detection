---
title: RSNA ACL MRI Model Demo
emoji: 🧠
colorFrom: blue
colorTo: indigo
sdk: gradio
sdk_version: 6.20.0
app_file: app.py
pinned: false
---

# 🧠 RSNA ACL MRI Model Demo

Upload a `.npy` dataset and get predictions from one of three trained models
(sagittal, axial, coronal).

## How to use

1. Select a model from the dropdown.
2. Upload a `.npy` file (shape: `[n_samples, n_features]`).
3. Click **🔮 Predict** to see the predictions (and class probabilities, when available).

## Files

- `app.py` — Gradio app
- `requirements.txt` — pinned dependencies
- `*.joblib` — trained scikit-learn models (tracked with Git LFS)

# MRNet Backend

FastAPI server that auto-discovers **every** trained artifact in `outputs/` and serves the
notebook pipeline (standardize → trilinear resample to 32 slices → 3-channel stack →
ResNet18 slice features → max+logsumexp pooling → logistic head).

```bash
pip install -r backend/requirements.txt
python backend/server.py          # http://0.0.0.0:8000
# or: uvicorn backend.server:app --port 8000   (from the repo root)
```

## Artifact map (auto-detected from outputs/)

| File | Kind | Serves |
|---|---|---|
| `model_acl_sagittal_demo.joblib` | single-task | `acl/sagittal` |
| `model_axial_demo.joblib` | multi-task (fc→3) | `abnormal/axial`, `acl/axial`, `meniscus/axial` |
| `model_coronal_demo.joblib` | multi-task (fc→3) | `abnormal/coronal`, `acl/coronal`, `meniscus/coronal` |
| `best_*.pth` | fallback weights | used only when no joblib covers a task/plane |

Any new `model_<...>.joblib` / `best_<...>.pth` dropped into `outputs/` is picked up on the
next server start — no code changes.

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/health` | `{status, device, models_available: ["acl/sagittal", ...], api_key_required}` |
| GET | `/models` | per-model details: artifact file, kind, threshold, epoch, val metrics |
| POST | `/predict?task=<t>&plane=<p>` | multipart `file` (.npy volume) → `{task, plane, probability, label, class}` |
| POST | `/predict_all` | one upload → predictions for **all** available task/plane combos |

Errors: `404` unknown task/plane (lists available), `400` bad/invalid `.npy`,
`413` file > 300 MB.

## API key (optional)

```bash
set MRNET_API_KEY=sk-my-secret        # PowerShell: $env:MRNET_API_KEY='sk-my-secret'
python backend/server.py
```

Requests must then send `Authorization: Bearer sk-my-secret` or `X-API-Key: sk-my-secret` —
exactly what the frontend sends when `VITE_API_KEY` is set in `frontend/.env`.
Without the env var the API is open (localhost dev default).

## Frontend

The Vite dev server proxies `/api/*` → `http://localhost:8000` (see `frontend/vite.config.js`).
With the backend running, open the frontend and click the **MOCK** pill to switch to **LIVE**,
or set `VITE_API_MODE=live` in `frontend/.env`.

> Demo models were trained on 24 exams (fast demo mode) — probabilities prove the plumbing,
> not clinical accuracy. Train with the full dataset via the notebooks for real metrics.
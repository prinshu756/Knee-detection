# MRNet Knee MRI Frontend

React + three.js + GSAP viewer for knee MRI volumes with exam-level diagnosis
(abnormality / ACL tear / meniscal tear), Grad-CAM heatmaps, and calibrated
confidence.

```bash
npm install
npx vite        # dev server on http://localhost:5173
npx vite build  # production bundle in dist/
```

## Backend connection (always on)

There is no mock/simulated mode — the app always talks to a real backend:

- Repo default: `python backend/server.py` from the repo root serves every model
  artifact in `outputs/` on `:8000` (reached through the Vite `/api` proxy).
- Hosted: point `VITE_API_BASE` in `frontend/.env` (copy `.env.example`) at your
  service URL. API keys are supported via `VITE_API_KEY` /
  `VITE_API_KEY_HEADER`.

```ini
# frontend/.env
VITE_API_BASE=https://your-service.example.com
VITE_API_KEY=sk-your-key-here
VITE_API_KEY_HEADER=Authorization   # default: "Authorization: Bearer <key>"
                                    # e.g. "X-API-Key" sends the raw key in that header
```

### Endpoints used (`src/lib/api.js`)

- `GET /health` → status dot, model count, calibration readiness
- `POST /predict_exam` (multipart `file`) → the exam verdicts:
  - per-plane multi-task sigmoids P(abnormal), P(ACL), P(meniscus)
  - aggregation across planes: `prob_avg` and `prob_max` per task
  - thresholded 0/1 decision (`P > threshold`, default 0.5) + confidence
    (distance from the decision boundary)
  - temperature-calibrated per-plane probabilities (`prob_cal`) when the
    server has fitted its calibration on the labeled valid split
- `POST /explain?task=<t>` → Grad-CAM for one task: per-slice importance plus
  a per-slice spatial heatmap grid (8×8 on 256×256 inputs), overlaid as a jet
  heatmap in the viewer

## Grad-CAM overlay

Pick a task card, click **Grad-CAM heatmap**: the currently displayed slice is
tinted by that task's class activation map (importance-weighted per slice, so
unimportant slices barely tint). The sidebar chart shows slice importance —
click a bar to jump to that slice.

## Controls

| Input | Action |
|---|---|
| ◀ ▶ / wheel | scrub slices |
| Space | play/pause |
| I / ◐ | invert |
| 3 | 3D slice-stack mode (drag rotates, ctrl+wheel zooms) |
| drag | pan (slice mode) / rotate (stack mode) |
| double-click | reset view |

`.npy` volumes are parsed in-browser (`src/lib/npy.js`); raster images become a
single 256×256 grayscale slice.

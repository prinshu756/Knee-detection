# MRNet Knee MRI Frontend

React + three.js + GSAP viewer for knee MRI volumes with abnormality prediction.

```bash
npm install
npx vite        # dev server on http://localhost:5173
npx vite build  # production bundle in dist/
```

## Mock API vs Live API

The app talks to a swappable API layer (`src/lib/api.js`):

- **`mock` (default)** — `src/lib/mockApi.js` simulates `/health` and `/predict`
  entirely in the browser: no server, no keys, no network. "Predictions" are a
  stable hash of (file, size, task, plane), so the same input always returns the
  same probability — good for demos. Results are tagged `simulated · mock mode`.
- **`live`** — `src/lib/realApi.js` calls a real backend (FastAPI from
  `Training_and_validation.ipynb` on `:8000` through the Vite `/api` proxy, or any
  compatible service) with optional API-key auth.

### Switching

- Click the **MOCK / LIVE** pill in the prediction panel (runtime toggle, stored in `localStorage`), or
- set `VITE_API_MODE=live` in `frontend/.env` (copy `.env.example` → `.env`).

### Adding your API keys later

```ini
# frontend/.env
VITE_API_MODE=live
VITE_API_BASE=https://your-service.example.com
VITE_API_KEY=sk-your-key-here
VITE_API_KEY_HEADER=Authorization   # default: "Authorization: Bearer <key>"
                                    # e.g. "X-API-Key" sends the raw key in that header
```

The expected backend contract is the notebook's API: `GET /health` →
`{ status, models_available: ["acl/sagittal", ...] }` and
`POST /predict?task=<t>&plane=<p>` (multipart `file`) →
`{ task, plane, probability, label, class }`.

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

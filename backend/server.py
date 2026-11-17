"""MRNet backend — serves every model artifact found in ../outputs.

Artifact map (auto-discovered at startup):
  model_{task}_{plane}*.joblib   single-task models  (fc -> 1)   e.g. model_acl_sagittal_demo.joblib
  model_{plane}*.joblib          multi-task models    (fc -> 3, covers abnormal/acl/meniscus for that plane)
  best_*.pth                     fallback weights used only when no joblib covers a task/plane

Endpoints:
  GET  /health        {status, device, models_available: ["acl/sagittal", ...]}
  GET  /models        detailed registry (files, kind, thresholds, epoch/val metrics)
  POST /predict?task=&plane=   multipart 'file' (.npy) -> {task, plane, probability, label, class}
  POST /predict_all            one upload -> predictions for every available task/plane combo

Auth (optional): set MRNET_API_KEY to require `Authorization: Bearer <key>` or `X-API-Key: <key>`
— matches the frontend's VITE_API_KEY slot.

Run:  python backend/server.py     (or: uvicorn backend.server:app --port 8000)
"""
import glob
import io
import json
import os
import re
import threading

import numpy as np
import torch
import joblib
from fastapi import FastAPI, File, HTTPException, UploadFile, Depends, Query, Header
from fastapi.middleware.cors import CORSMiddleware

from pipeline import (TASKS, PLANES, DEVICE, preprocess, build_model, predict_tensor,
                      explain_tensor, fit_temperature, apply_temperature)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # repo root
OUT_DIR = os.path.join(ROOT, 'outputs')
MAX_UPLOAD = 300 * 1024 * 1024                                       # 300 MB
API_KEY = os.environ.get('MRNET_API_KEY', '')                        # optional auth

app = FastAPI(title='MRNet Knee MRI API', version='2.0')
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])

# --------------------------------------------------------------------------
# artifact registry
# --------------------------------------------------------------------------
REGISTRY = {}          # 'task/plane' -> artifact dict
MODELS = {}            # 'task/plane' -> loaded nn.Module (lazy, on DEVICE)
_locks = {}
_locks_guard = threading.Lock()


def _metrics_from_pth(path):
    try:
        d = torch.load(path, map_location='cpu', weights_only=False)
        return {'epoch': d.get('epoch'), 'val_loss': d.get('val_loss'),
                'params_M': d.get('params'), 'tasks_meta': d.get('tasks'), 'plane_meta': d.get('plane'),
                'task_meta': d.get('task')}
    except Exception:
        return {}


def scan_artifacts():
    """Register every joblib; fill gaps with .pth weights. Returns registry dict."""
    reg = {}
    pth_meta = {}
    for p in glob.glob(os.path.join(OUT_DIR, 'best_*.pth')):
        stem = os.path.basename(p)
        pth_meta[stem] = (p, _metrics_from_pth(p))

    def _pth_metrics(task=None, plane=None):
        """Attach epoch/val_loss/params from the matching best_*.pth, if any."""
        pats = []
        if task and plane:
            pats.append(os.path.join(OUT_DIR, f'best_{task}_{plane}*.pth'))
        if plane:
            pats.append(os.path.join(OUT_DIR, f'best_{plane}*.pth'))
        for pat in pats:
            for hit in glob.glob(pat):
                meta = _metrics_from_pth(hit)
                if meta.get('epoch') is not None:
                    return {k: meta.get(k) for k in ('epoch', 'val_loss', 'params_M')}
        return {}

    for p in sorted(glob.glob(os.path.join(OUT_DIR, 'model_*.joblib'))):
        stem = os.path.basename(p)
        try:
            payload = joblib.load(p)
        except Exception as e:                                              # noqa: BLE001
            print(f'[registry] skipping {stem}: {e}')
            continue
        backbone = payload.get('backbone', 'resnet18')
        state = payload.get('model_state')
        if state is None:
            print(f'[registry] skipping {stem}: no model_state')
            continue
        common = {'file': stem, 'path': p, 'backbone': backbone, 'model_state': state,
                  'kind': None, 'metrics': {}}
        if 'task' in payload and 'plane' in payload:                        # single-task joblib
            art = {**common, 'kind': 'single', 'tasks': (payload['task'],),
                   'thresholds': {payload['task']: float(payload.get('threshold', 0.5))},
                   'metrics': _pth_metrics(payload['task'], payload['plane'])}
            reg[f"{payload['task']}/{payload['plane']}"] = art
        elif 'plane' in payload and 'tasks' in payload:                     # multi-task joblib
            tasks = tuple(payload['tasks'])
            thr = payload.get('thresholds', {})
            art = {**common, 'kind': 'multi', 'tasks': tasks, 'plane': payload['plane'],
                   'thresholds': {t: float(thr.get(t, 0.5)) for t in tasks},
                   'metrics': _pth_metrics(plane=payload['plane'])}
            for t in tasks:
                reg[f'{t}/{payload["plane"]}'] = art
        else:
            print(f'[registry] skipping {stem}: unrecognized payload keys {sorted(payload.keys())}')

    # .pth fallback for combos no joblib covers (same state-dict formats)
    for stem, (p, meta) in pth_meta.items():
        try:
            ckpt = torch.load(p, map_location='cpu', weights_only=True)
        except Exception as e:                                              # noqa: BLE001
            print(f'[registry] skipping {stem}: {e}')
            continue
        if not isinstance(ckpt, dict) or 'model_state' not in ckpt:
            continue
        state = ckpt['model_state']
        plane = meta.get('plane_meta')
        tasks_meta = meta.get('tasks_meta')
        task_meta = meta.get('task_meta')
        cand = []
        if tasks_meta and plane:
            cand += [f'{t}/{plane}' for t in tasks_meta]
        if task_meta and plane:
            cand.append(f'{task_meta}/{plane}')
        if not cand:
            continue
        shared = {'file': stem, 'path': p, 'backbone': 'resnet18', 'model_state': state,
                  'metrics': {k: meta.get(k) for k in ('epoch', 'val_loss', 'params_M')}}
        if tasks_meta:
            art = {**shared, 'kind': 'multi', 'tasks': tuple(tasks_meta),
                   'thresholds': {t: 0.5 for t in tasks_meta}}
            for c in cand:
                reg.setdefault(c, art)
        else:
            reg.setdefault(cand[0], {**shared, 'kind': 'single',
                                     'tasks': (task_meta,), 'thresholds': {task_meta: 0.5}})
    return reg


def get_model(key):
    """Lazy-load the nn.Module for a registry entry (first request moves it to DEVICE)."""
    art = REGISTRY.get(key)
    if art is None:
        return None
    if key not in MODELS:
        with _locks_guard:
            _locks.setdefault(key, threading.Lock())
        with _locks[key]:
            if key not in MODELS:                       # re-check under lock
                m = build_model(art).to(DEVICE)
                MODELS[key] = m
                print(f'[model] {key}: loaded {art["file"]} ({art["kind"]}) on {DEVICE}')
    return MODELS[key]


REGISTRY = scan_artifacts()
MODELS_AVAILABLE = sorted(REGISTRY.keys())

# training metrics csv (task_plane -> row), surfaced through /models
try:
    import csv
    _CSV = {}
    for c in glob.glob(os.path.join(OUT_DIR, 'training_metrics*.csv')):
        with open(c, newline='', encoding='utf-8') as f:
            for row in csv.DictReader(f):
                _CSV[row.get('task_plane', '')] = row
except Exception:
    _CSV = {}

# --------------------------------------------------------------------------
# confidence calibration: temperature scaling per task, fitted on the valid
# split (labels from images/valid-<task>.csv). Runs in a daemon thread at
# startup; /predict_exam applies it once ready. Cache: outputs/calibration.json
# --------------------------------------------------------------------------
IMG_DIR = os.path.join(ROOT, 'images')
CALIB_PATH = os.path.join(OUT_DIR, 'calibration.json')
CALIB = {'ready': False, 'tasks': {}, 'running': False}
_calib_once = threading.Lock()


def _logit(p):
    p = min(max(float(p), 1e-6), 1 - 1e-6)
    return float(np.log(p / (1 - p)))


def _load_valid_ids():
    """Exam ids + per-task labels from the valid CSVs."""
    ids = None
    labels = {}
    for t in TASKS:
        path = os.path.join(IMG_DIR, f'valid-{t}.csv')
        if not os.path.isfile(path):
            continue
        lab = {}
        with open(path, encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                eid, y = line.split(',')[:2]
                lab[str(int(eid))] = int(float(y))
        labels[t] = lab
        ids = set(lab) if ids is None else (ids & set(lab))
    return sorted(ids or []), labels


def _calibrate():
    if CALIB['running'] or CALIB['ready']:
        return
    with _calib_once:
        if CALIB['running'] or CALIB['ready']:
            return
        CALIB['running'] = True
        try:
            ids, labels = _load_valid_ids()
            if not ids:
                print('[calibration] no valid-<task>.csv found — skipping')
                return
            # per artifact: one forward per exam covers all its tasks
            grouped = {}
            for key, art in REGISTRY.items():
                grouped.setdefault(art['file'], (art, []))[1].append(key)

            zs = {t: [] for t in TASKS}          # task -> list of (z, y)
            for art_file, (art, keys) in sorted(grouped.items()):
                plane = keys[0].split('/')[1]
                model = get_model(keys[0])
                for eid in ids:
                    path = os.path.join(IMG_DIR, 'valid', plane, eid + '.npy')
                    if not os.path.isfile(path):
                        continue
                    try:
                        x = preprocess(np.load(path))
                    except Exception:                                        # noqa: BLE001
                        continue
                    probs = predict_tensor(model, x, tasks=list(art['tasks']))
                    for t, p in probs.items():
                        if t in labels and eid in labels[t]:
                            zs[t].append((_logit(p), labels[t][eid]))
                print(f'[calibration] {art_file}: plane={plane} done ({len(zs[TASKS[0]])} exams so far)')

            tasks = {}
            for t, pairs in zs.items():
                if len(pairs) >= 8:
                    z = [p[0] for p in pairs]
                    y = [p[1] for p in pairs]
                    T, n = fit_temperature(z, y)
                    tasks[t] = {'T': T, 'n': n}
            CALIB['tasks'] = tasks
            CALIB['ready'] = bool(tasks)
            try:
                with open(CALIB_PATH, 'w', encoding='utf-8') as f:
                    json.dump(tasks, f, indent=1)
            except OSError:
                pass
            print(f'[calibration] ready: {tasks}')
        finally:
            CALIB['running'] = False


def _maybe_load_calibration():
    """Load a previously fitted calibration from disk at startup."""
    if os.path.isfile(CALIB_PATH):
        try:
            with open(CALIB_PATH, encoding='utf-8') as f:
                CALIB['tasks'] = json.load(f)
            CALIB['ready'] = bool(CALIB['tasks'])
            print(f'[calibration] loaded from {CALIB_PATH}: {CALIB["tasks"]}')
        except Exception:                                                    # noqa: BLE001
            pass


_maybe_load_calibration()

# --------------------------------------------------------------------------
# auth (optional — active only when MRNET_API_KEY is set)
# --------------------------------------------------------------------------


def require_key(authorization: str = Header(default=''), x_api_key: str = Header(default='')):
    if not API_KEY:
        return
    supplied = x_api_key or (authorization[7:] if authorization.lower().startswith('bearer ') else '')
    if supplied != API_KEY:
        raise HTTPException(401, 'invalid or missing API key (use Authorization: Bearer <key> or X-API-Key)')


# --------------------------------------------------------------------------
# endpoints
# --------------------------------------------------------------------------
@app.get('/health')
def health():
    return {'status': 'ok', 'device': DEVICE, 'models_available': MODELS_AVAILABLE,
            'api_key_required': bool(API_KEY),
            'calibration': {'ready': CALIB['ready'], 'running': CALIB['running'],
                            'tasks': {t: v['T'] for t, v in CALIB['tasks'].items()}}}


@app.post('/calibrate')
def calibrate(background: bool = True):
    """Fit temperature scaling on the valid split (blocking unless background)."""
    if CALIB['ready']:
        return {'ready': True, 'tasks': CALIB['tasks']}
    if background:
        threading.Thread(target=_calibrate, daemon=True).start()
        return {'started': True}
    _calibrate()
    return {'ready': CALIB['ready'], 'tasks': CALIB['tasks']}


@app.get('/calibration')
def calibration():
    return {'ready': CALIB['ready'], 'running': CALIB['running'], 'tasks': CALIB['tasks'],
            'file': os.path.basename(CALIB_PATH)}


@app.get('/models', dependencies=[Depends(require_key)])
def models():
    out = {}
    for key, art in REGISTRY.items():
        row = _CSV.get(key, {})
        out[key] = {
            'artifact': art['file'], 'kind': art['kind'], 'backbone': art['backbone'],
            'threshold': art['thresholds'].get(key.split('/')[0], 0.5),
            'epoch': art['metrics'].get('epoch'), 'val_loss': art['metrics'].get('val_loss'),
            'best_val_auc': row.get('best_val_auc'),
            'params_M': art['metrics'].get('params_M') or row.get('params_M'),
        }
    return {'device': DEVICE, 'count': len(out), 'models': out}


def _load_volume(file: UploadFile):
    """multipart .npy -> preprocessed (3, 32, H, W) tensor, with notebook-grade validation."""
    raw = file.file.read(MAX_UPLOAD + 1)
    if len(raw) > MAX_UPLOAD:
        raise HTTPException(413, f'file too large (max {MAX_UPLOAD // (1024 * 1024)} MB)')
    try:
        arr = np.load(io.BytesIO(raw), allow_pickle=False)
    except ValueError as e:
        raise HTTPException(400, f'bad .npy upload: {e}')
    if arr.ndim != 3:
        raise HTTPException(400, f'expected a 3D volume (D, H, W), got shape {list(arr.shape)}')
    if min(arr.shape) < 8:
        raise HTTPException(400, f'volume too small: {list(arr.shape)}')
    try:
        return preprocess(arr)
    except Exception as e:                                              # noqa: BLE001
        raise HTTPException(400, f'preprocessing failed: {e}')


@app.post('/predict')
def predict(task: str, plane: str, file: UploadFile = File(...), _: None = Depends(require_key)):
    key = f'{task}/{plane}'
    art = REGISTRY.get(key)
    if art is None:
        raise HTTPException(404, f"no trained model for task='{task}' plane='{plane}' "
                                 f'| available: {MODELS_AVAILABLE}')
    if task not in TASKS or plane not in PLANES:
        raise HTTPException(400, f'task must be one of {TASKS}, plane one of {PLANES}')
    x = _load_volume(file)
    model = get_model(key)
    prob = predict_tensor(model, x, task=task, tasks=list(art['tasks']))
    thr = art['thresholds'].get(task, 0.5)
    pos = prob >= thr
    return {'task': task, 'plane': plane, 'probability': round(prob, 4),
            'label': int(pos), 'class': task if pos else 'normal'}


@app.post('/predict_all')
def predict_all(file: UploadFile = File(...), _: None = Depends(require_key)):
    """One upload -> every available task/plane combo (multi-task artifacts run once per plane)."""
    x = _load_volume(file)
    results = {}
    # group registry keys by artifact so each model runs exactly once
    by_artifact = {}
    for key, art in REGISTRY.items():
        by_artifact.setdefault(art['file'], (art, []))[1].append(key)
    for art_file, (art, keys) in sorted(by_artifact.items()):
        plane = keys[0].split('/')[1]
        mkey = next(k for k in keys if get_model(k) is not None) or keys[0]
        model = get_model(mkey)
        probs = predict_tensor(model, x, tasks=list(art['tasks']))
        for t, p in probs.items():
            key = f'{t}/{plane}'
            if key not in REGISTRY:
                continue
            thr = art['thresholds'].get(t, 0.5)
            results[key] = {'probability': round(p, 4), 'label': int(p >= thr),
                            'class': t if p >= thr else 'normal'}
    return {'results': results, 'count': len(results)}


@app.post('/predict_exam')
def predict_exam(file: UploadFile = File(...), _: None = Depends(require_key)):
    """Exam-level prediction, exactly the math from the project brief:

    - per-plane multi-task models: three sigmoid outputs per plane
      P(abnormal), P(acl), P(meniscus) for every artifact serving that plane
    - aggregation across planes: average AND max per task
    - thresholded decision: P > threshold (0.5) -> 0/1 label
    - confidence: distance from the decision boundary; probabilities are
      temperature-calibrated when the valid-split fit is ready.
    """
    x = _load_volume(file)
    grouped = {}
    for key, art in REGISTRY.items():
        grouped.setdefault(art['file'], (art, []))[1].append(key)

    per_plane = {}                                   # plane -> task -> dict
    thresholds = {}
    for art_file, (art, keys) in sorted(grouped.items()):
        plane = keys[0].split('/')[1]
        model = get_model(keys[0])
        probs = predict_tensor(model, x, tasks=list(art['tasks']))
        for t, p in probs.items():
            key = f'{t}/{plane}'
            if key not in REGISTRY:
                continue
            thr = art['thresholds'].get(t, 0.5)
            thresholds[t] = thr
            pc = apply_temperature(p, CALIB['tasks'][t]['T']) if (CALIB['ready'] and t in CALIB['tasks']) else None
            per_plane.setdefault(plane, {})[t] = {
                'prob': round(p, 4),
                'prob_cal': round(pc, 4) if pc is not None else None,
                'threshold': thr,
                'label': int((pc or p) >= thr),
            }

    tasks_out = {}
    for t in TASKS:
        planes = {pl: v[t] for pl, v in per_plane.items() if t in v}
        if not planes:
            continue
        vals = [v['prob_cal'] or v['prob'] for v in planes.values()]
        avg = sum(vals) / len(vals)
        mx = max(vals)
        thr = thresholds.get(t, 0.5)
        # decision on the aggregated (avg) probability
        used = avg
        tasks_out[t] = {
            'prob_avg': round(avg, 4), 'prob_max': round(mx, 4),
            'threshold': thr, 'label': int(used >= thr),
            'class': t if used >= thr else 'normal',
            'confidence': round(max(used, 1 - used), 4),
            'planes': planes,
            'n_planes': len(planes),
        }
    return {'tasks': tasks_out, 'aggregation': 'avg', 'calibrated': CALIB['ready'],
            'calibration_T': {t: CALIB['tasks'][t]['T'] for t in tasks_out if t in CALIB['tasks']}
            if CALIB['ready'] else {}}


@app.post('/explain')
def explain(task: str, file: UploadFile = File(...), plane: str = Query(default=None),
            _: None = Depends(require_key)):
    """Grad-CAM for one task: which slices (and where within them) drove the decision.

    Picks the single-task artifact for the task when one exists (dedicated
    supervision), otherwise the multi-task artifact of `plane` (default: first).
    Returns per-slice importance + per-slice 8x8 heatmaps (model slice grid).
    """
    cands = {k: a for k, a in REGISTRY.items() if k.split('/')[0] == task}
    if not cands:
        raise HTTPException(404, f"no model for task='{task}' | available: {MODELS_AVAILABLE}")
    single = [k for k, a in cands.items() if a['kind'] == 'single']
    if single:
        key = single[0]
    elif plane:
        key = next((k for k in cands if k.split('/')[1] == plane), None)
        if key is None:
            raise HTTPException(404, f"no {task} model for plane='{plane}' | have: {sorted(cands)}")
    else:
        key = sorted(cands)[0]
    art = cands[key]
    x = _load_volume(file)
    model = get_model(key)
    out = explain_tensor(model, x, task, tasks=list(art['tasks']))
    out.update({'task': task, 'model_key': key, 'artifact': art['file'],
                'model_slices': len(out['slice_importance'])})
    return out


if __name__ == '__main__':
    import uvicorn
    print(f'MRNet backend | device: {DEVICE} | models: {MODELS_AVAILABLE}')
    # fit temperature calibration in the background (uses images/valid-*.csv)
    threading.Thread(target=_calibrate, daemon=True).start()
    uvicorn.run(app, host='0.0.0.0', port=8000, log_level='info')

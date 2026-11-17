// Backend calls (backend/server.py). Default target: the Vite /api proxy
// (uvicorn on :8000). Point VITE_API_BASE at any compatible service and set
// VITE_API_KEY when you have credentials — authHeaders() applies them.
import { API_BASE, authHeaders } from './config';

const DEFAULT_THRESHOLD = 0.5;
export const TASK_ORDER = ['abnormal', 'acl', 'meniscus'];
export const TASK_LABEL = { abnormal: 'Abnormality', acl: 'ACL tear', meniscus: 'Meniscal tear' };
export const PLANE_ABBR = { axial: 'AX', coronal: 'CO', sagittal: 'SA' };

async function postForm(path, file, onProgress, timeoutMs = 120000) {
  const fd = new FormData();
  fd.append('file', file, file.name || 'exam.npy');
  onProgress?.('uploading');
  const r = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    body: fd,
    headers: authHeaders(),
    signal: AbortSignal.timeout(timeoutMs),
  });
  onProgress?.('done');
  if (r.status === 404) throw Object.assign(new Error(await detail(r) || 'No model for this task on the server.'), { status: 404 });
  if (r.status === 400) throw Object.assign(new Error(await detail(r) || 'Server rejected the file — is it a valid .npy volume?'), { status: 400 });
  if (r.status === 401 || r.status === 403) throw Object.assign(new Error('Unauthorized — check VITE_API_KEY / VITE_API_KEY_HEADER.'), { status: r.status });
  if (!r.ok) throw new Error(`request failed (${r.status})`);
  return r.json();
}

async function detail(r) {
  try {
    const j = await r.json();
    return typeof j.detail === 'string' ? j.detail : '';
  } catch { return ''; }
}

export async function health() {
  const r = await fetch(`${API_BASE}/health`, { headers: authHeaders(), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`health ${r.status}`);
  const j = await r.json();
  return {
    online: true,
    models: j.models_available || [],
    any: (j.models_available || []).length > 0,
    calibration: j.calibration || { ready: false, running: false, tasks: {} },
  };
}

/**
 * Exam-level prediction: runs every plane's multi-task model on the upload and
 * aggregates per task (avg + max) with thresholded 0/1 decisions and
 * temperature-calibrated probabilities (when the server's fit is ready).
 */
export async function predictExam(file, onProgress) {
  const j = await postForm('/predict_exam', file, onProgress, 180000);
  return {
    tasks: j.tasks || {},
    calibrated: !!j.calibrated,
    calibrationT: j.calibration_T || {},
    thresholdNote: `P > ${DEFAULT_THRESHOLD}`,
  };
}

/** Grad-CAM for one task: per-slice importance + per-slice 8x8 heatmaps. */
export async function explain(file, task, onProgress) {
  const j = await postForm(`/explain?task=${encodeURIComponent(task)}`, file, onProgress, 180000);
  return {
    task,
    importance: j.slice_importance || [],
    grids: j.grids || [],
    gridW: j.grid_w || 8,
    gridH: j.grid_h || 8,
    probability: j.probability,
    modelKey: j.model_key,
    artifact: j.artifact,
    modelSlices: j.model_slices || j.importance?.length || 32,
  };
}

/** Label for one task result: positive/negative with margin-based confidence. */
export function taskVerdict(t) {
  const used = t.prob_avg;
  const pos = used >= t.threshold;
  return {
    pos,
    prob: used,
    pct: Math.round(100 * used),
    confidence: Math.round(100 * t.confidence),
    label: pos ? 'positive' : 'negative',
  };
}

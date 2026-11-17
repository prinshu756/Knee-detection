// Live backend calls (mode: 'live').
//
// Default target: the FastAPI app from Training_and_validation.ipynb via the Vite
// /api proxy (uvicorn on :8000). Point VITE_API_BASE at any compatible service and
// set VITE_API_KEY when you have credentials — authHeaders() applies them.
import { API_BASE, authHeaders } from './config';

export async function health() {
  const r = await fetch(`${API_BASE}/health`, { headers: authHeaders(), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`health ${r.status}`);
  const j = await r.json();
  return {
    online: true,
    models: j.models_available || [],
    any: (j.models_available || []).length > 0,
    mock: false,
  };
}

export async function predict(file, task, plane, onProgress) {
  const fd = new FormData();
  fd.append('file', file, file.name || 'exam.npy');
  onProgress?.('uploading');
  const r = await fetch(`${API_BASE}/predict?task=${encodeURIComponent(task)}&plane=${encodeURIComponent(plane)}`, {
    method: 'POST',
    body: fd,
    headers: authHeaders(),
    signal: AbortSignal.timeout(120000),
  });
  onProgress?.('done');
  if (r.status === 404) throw Object.assign(new Error('No trained model for this task/plane on the server.'), { status: 404 });
  if (r.status === 400) throw Object.assign(new Error('Server rejected the file — is it a valid .npy volume?'), { status: 400 });
  if (r.status === 401 || r.status === 403) throw Object.assign(new Error('Unauthorized — check VITE_API_KEY / VITE_API_KEY_HEADER.'), { status: r.status });
  if (!r.ok) throw new Error(`predict failed (${r.status})`);
  return r.json();
}

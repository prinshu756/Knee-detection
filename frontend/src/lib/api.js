// Backend calls: default through the Vite /api proxy (uvicorn Training_and_validation:app on :8000)
const BASE = import.meta.env.VITE_API_BASE || '/api';

const combo = (t) => t.split('/');
export const TASK_PLANE = {
  'abnormal/axial': 'Abnormality · axial', 'abnormal/coronal': 'Abnormality · coronal', 'abnormal/sagittal': 'Abnormality · sagittal',
  'acl/axial': 'ACL tear · axial', 'acl/coronal': 'ACL tear · coronal', 'acl/sagittal': 'ACL tear · sagittal',
  'meniscus/axial': 'Meniscal tear · axial', 'meniscus/coronal': 'Meniscal tear · coronal', 'meniscus/sagittal': 'Meniscal tear · sagittal',
};
export const TASK_LABEL = { abnormal: 'Abnormality', acl: 'ACL tear', meniscus: 'Meniscal tear' };

export async function health() {
  const r = await fetch(`${BASE}/health`, { signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`health ${r.status}`);
  const j = await r.json();
  return {
    online: true,
    models: j.models_available || [],
    any: (j.models_available || []).length > 0,
  };
}

export async function predict(file, task, plane, onProgress) {
  const fd = new FormData();
  fd.append('file', file, file.name || 'exam.npy');
  if (onProgress) onProgress('uploading');
  const r = await fetch(`${BASE}/predict?task=${encodeURIComponent(task)}&plane=${encodeURIComponent(plane)}`, {
    method: 'POST',
    body: fd,
    signal: AbortSignal.timeout(120000),
  });
  onProgress?.('done');
  if (r.status === 404) throw Object.assign(new Error('No trained model for this task/plane on the server.'), { status: 404 });
  if (r.status === 400) throw Object.assign(new Error('Server rejected the file — is it a valid .npy volume?'), { status: 400 });
  if (!r.ok) throw new Error(`predict failed (${r.status})`);
  return r.json();
}

export function verdictLabel(res) {
  const t = TASK_LABEL[res.task] || res.task;
  const pos = res.label === 1;
  const conf = Math.round(100 * Math.max(res.probability, 1 - res.probability));
  return { title: pos ? `${t}: positive` : `${t}: negative`, pos, conf, prob: res.probability };
}

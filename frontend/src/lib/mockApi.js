// Mock backend — the UI runs fully standalone: no server, no keys, no network.
//
// "Predictions" are a stable hash of (file name, size, task, plane), so the same
// input always yields the same probability — repeatable for demos, unlike Math.random().
// Latency is simulated in two stages (upload -> inference) so the busy state is visible.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// all 9 task/plane combos "trained" so the dropdown never 404s in mock mode
export const MOCK_MODELS = [
  'abnormal/axial', 'abnormal/coronal', 'abnormal/sagittal',
  'acl/axial', 'acl/coronal', 'acl/sagittal',
  'meniscus/axial', 'meniscus/coronal', 'meniscus/sagittal',
];

// FNV-1a 32-bit -> [0, 1)
function hash01(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967296;
}

export async function health() {
  await sleep(250);
  return { online: true, models: MOCK_MODELS, any: true, mock: true };
}

export async function predict(file, task, plane, onProgress) {
  onProgress?.('uploading');
  await sleep(350 + 450 * hash01(`${file.name}:${file.size}:up`));
  onProgress?.('analyzing');
  await sleep(600 + 700 * hash01(`${file.name}:${task}:${plane}:run`));

  const p = 0.04 + 0.92 * hash01(`${file.name}|${file.size}|${task}|${plane}`);
  const probability = Math.round(p * 10000) / 10000;   // same 4-decimal shape as the real API
  const pos = probability >= 0.5;
  return { task, plane, probability, label: pos ? 1 : 0, class: pos ? task : 'normal', mock: true };
}

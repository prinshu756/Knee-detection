// API dispatcher — the rest of the app imports from here and never cares which
// backend is active. Mode comes from config (localStorage > VITE_API_MODE > 'mock'):
//   mock — simulated responses (mockApi.js), works with no server and no keys
//   live — real HTTP calls (realApi.js) with optional API-key auth
import { apiMode } from './config';
import * as mock from './mockApi';
import * as real from './realApi';

export const TASK_PLANE = {
  'abnormal/axial': 'Abnormality · axial', 'abnormal/coronal': 'Abnormality · coronal', 'abnormal/sagittal': 'Abnormality · sagittal',
  'acl/axial': 'ACL tear · axial', 'acl/coronal': 'ACL tear · coronal', 'acl/sagittal': 'ACL tear · sagittal',
  'meniscus/axial': 'Meniscal tear · axial', 'meniscus/coronal': 'Meniscal tear · coronal', 'meniscus/sagittal': 'Meniscal tear · sagittal',
};
export const TASK_LABEL = { abnormal: 'Abnormality', acl: 'ACL tear', meniscus: 'Meniscal tear' };

const impl = () => (apiMode() === 'live' ? real : mock);

export { apiMode, setApiMode } from './config';

export function health() {
  return impl().health();
}

export function predict(file, task, plane, onProgress) {
  return impl().predict(file, task, plane, onProgress);
}

export function verdictLabel(res) {
  const t = TASK_LABEL[res.task] || res.task;
  const pos = res.label === 1;
  const conf = Math.round(100 * Math.max(res.probability, 1 - res.probability));
  return { title: pos ? `${t}: positive` : `${t}: negative`, pos, conf, prob: res.probability };
}

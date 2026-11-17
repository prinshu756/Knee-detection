// API configuration — mock now, live later.
//
// Put real values in frontend/.env (see .env.example) when you have keys:
//   VITE_API_MODE=live
//   VITE_API_BASE=https://your-service.example.com
//   VITE_API_KEY=sk-...
//
// Mode precedence: localStorage('mrnet_api_mode') > VITE_API_MODE > 'mock'.
// The MOCK/LIVE pill in the prediction panel flips localStorage and re-checks health.

const LS_KEY = 'mrnet_api_mode';
const env = (typeof import.meta !== 'undefined' && import.meta.env) || {};

export const API_BASE = env.VITE_API_BASE || '/api';

// Auth for live mode. Default sends `Authorization: Bearer <key>`;
// set VITE_API_KEY_HEADER (e.g. 'X-API-Key') to use a plain custom header instead.
export const API_KEY = env.VITE_API_KEY || '';
export const API_KEY_HEADER = env.VITE_API_KEY_HEADER || 'Authorization';

export function authHeaders() {
  if (!API_KEY) return {};
  return API_KEY_HEADER.toLowerCase() === 'authorization'
    ? { Authorization: `Bearer ${API_KEY}` }
    : { [API_KEY_HEADER]: API_KEY };
}

let mode = null;

export function apiMode() {
  if (mode) return mode;
  try {
    const ls = localStorage.getItem(LS_KEY);
    if (ls === 'mock' || ls === 'live') return (mode = ls);
  } catch { /* storage unavailable (private mode) — fall through */ }
  mode = env.VITE_API_MODE === 'live' ? 'live' : 'mock';
  return mode;
}

export function setApiMode(next) {
  mode = next === 'live' ? 'live' : 'mock';
  try { localStorage.setItem(LS_KEY, mode); } catch { /* ignore */ }
  return mode;
}

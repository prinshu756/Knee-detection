// API configuration — the backend (backend/server.py or a hosted equivalent).
//
// Optional settings live in frontend/.env (see .env.example):
//   VITE_API_BASE=https://your-service.example.com   (default: /api -> Vite proxy -> :8000)
//   VITE_API_KEY=sk-...                              (sent as Authorization: Bearer <key>)
//   VITE_API_KEY_HEADER=X-API-Key                    (use a plain custom header instead)

const env = (typeof import.meta !== 'undefined' && import.meta.env) || {};

export const API_BASE = env.VITE_API_BASE || '/api';

// Auth (used when a key is configured). Default sends `Authorization: Bearer <key>`;
// set VITE_API_KEY_HEADER (e.g. 'X-API-Key') to use a plain custom header instead.
export const API_KEY = env.VITE_API_KEY || '';
export const API_KEY_HEADER = env.VITE_API_KEY_HEADER || 'Authorization';

export function authHeaders() {
  if (!API_KEY) return {};
  return API_KEY_HEADER.toLowerCase() === 'authorization'
    ? { Authorization: `Bearer ${API_KEY}` }
    : { [API_KEY_HEADER]: API_KEY };
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// /api/* proxies to the FastAPI app served by Training_and_validation.ipynb (uvicorn :8000)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
});

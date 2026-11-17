import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TASK_LABEL, apiMode, setApiMode } from '../lib';

export default function PredPanel({ vol, file, api, pred, predBusy, runPrediction, onRefresh }) {
  const gaugeRef = useRef(null);
  const numRef = useRef(null);
  const mode = apiMode();

  // MOCK <-> LIVE: flips the localStorage override and re-checks health
  const toggleMode = () => {
    setApiMode(mode === 'live' ? 'mock' : 'live');
    onRefresh();
  };

  // animate gauge + probability counter whenever a prediction arrives
  useEffect(() => {
    if (!pred?.v) return;
    const { prob } = pred.v;
    const arc = gaugeRef.current;
    gsap.fromTo(arc, { strokeDashoffset: 100 }, {
      strokeDashoffset: 100 - prob * 100, duration: 1.1, ease: 'power3.out',
    });
    const counter = { v: 0 };
    gsap.to(counter, {
      v: prob * 100, duration: 1.1, ease: 'power3.out',
      onUpdate: () => { if (numRef.current) numRef.current.textContent = `${counter.v.toFixed(1)}%`; },
    });
    gsap.fromTo('.pred-card', { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)' });
  }, [pred]);

  return (
    <aside className="predpanel">
      <div className="side-h pred-head">Prediction</div>

      <div className="api-row">
        <span className={`api-dot ${mode === 'mock' ? 'mock' : api.online ? (api.any ? 'ok' : 'warn') : 'off'}`} />
        <span className="api-text">
          {mode === 'mock'
            ? 'mock mode · simulated inference'
            : api.online
              ? (api.any ? `backend online · ${api.models.length} model${api.models.length > 1 ? 's' : ''}` : 'backend online · no models trained yet')
              : 'backend offline'}
        </span>
        <button className="mode-pill" onClick={toggleMode}
                title={mode === 'mock' ? 'Switch to a live backend (set VITE_API_BASE / VITE_API_KEY in frontend/.env)' : 'Switch back to the built-in mock API'}>
          {mode === 'live' ? 'LIVE' : 'MOCK'}
        </button>
        <button className="ic tiny" onClick={onRefresh} title="re-check /health">⟳</button>
      </div>

      <button className={`primary-btn wide ${predBusy ? 'busy' : ''}`} disabled={!file || predBusy}
              onClick={() => runPrediction('acl', 'sagittal')}>
        {predBusy ? 'Running model…' : file ? 'Run prediction →' : 'Upload a volume first'}
      </button>

      {mode === 'live' && !api.online && (
        <div className="pred-note">
          No live backend reachable. Start the artifact server from the repo root:
          <div className="mono cmd">python backend/server.py</div>
          It serves every model in <span className="mono">outputs/</span> on port 8000. For a hosted service set <span className="mono">VITE_API_BASE</span> and <span className="mono">VITE_API_KEY</span> in <span className="mono">frontend/.env</span>.
        </div>
      )}

      {pred?.error && <div className="pred-error">⚠ {pred.error}</div>}

      {pred?.v && (
        <div className={`pred-card ${pred.v.pos ? 'pos' : 'neg'}`}>
          <div className="pred-title">{pred.v.title}</div>
          {pred.res.mock && <div className="sim-chip">simulated · mock mode</div>}
          <div className="gauge-wrap">
            <svg viewBox="0 0 100 60" className="gauge">
              <path d="M 10 55 A 40 40 0 0 1 90 55" className="gauge-bg" pathLength="100" />
              <path d="M 10 55 A 40 40 0 0 1 90 55" className={`gauge-arc ${pred.v.pos ? 'hot' : ''}`} ref={gaugeRef} pathLength="100" />
            </svg>
            <div className="gauge-num mono" ref={numRef}>0%</div>
          </div>
          <div className="pred-sub">
            confidence <span className="mono">{Math.round(100 * Math.max(pred.res.probability, 1 - pred.res.probability))}%</span> ·
            task <span className="mono">{TASK_LABEL[pred.res.task] || pred.res.task}</span> ·
            plane <span className="mono">{pred.res.plane}</span>
          </div>
          <div className="pred-sub detail mono">
            P(positive) = {pred.res.probability.toFixed(4)} · label {pred.res.label} ({pred.res.class})
          </div>
        </div>
      )}

      <div className="side-block side-help pred-foot">
        <div>Model: resnet18 · 2D slice aggregation (max + logsumexp)</div>
        <div>Input: .npy volume, standardized + resampled to 32 slices</div>
      </div>
    </aside>
  );
}

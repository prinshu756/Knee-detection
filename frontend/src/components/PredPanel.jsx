import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TASK_ORDER, TASK_LABEL, PLANE_ABBR, taskVerdict } from '../lib';

// Semicircular probability gauge; animates counter + arc on every value change.
function Gauge({ prob, pos }) {
  const arcRef = useRef(null);
  const numRef = useRef(null);
  useEffect(() => {
    if (!arcRef.current) return;
    gsap.fromTo(arcRef.current, { strokeDashoffset: 100 },
      { strokeDashoffset: 100 - prob * 100, duration: 1.0, ease: 'power3.out' });
    const c = { v: 0 };
    gsap.to(c, { v: prob * 100, duration: 1.0, ease: 'power3.out',
      onUpdate: () => { if (numRef.current) numRef.current.textContent = `${c.v.toFixed(1)}%`; } });
  }, [prob]);
  return (
    <div className="gauge-wrap small">
      <svg viewBox="0 0 100 60" className="gauge">
        <path d="M 10 55 A 40 40 0 0 1 90 55" className="gauge-bg" pathLength="100" />
        <path d="M 10 55 A 40 40 0 0 1 90 55" className={`gauge-arc ${pos ? 'hot' : ''}`}
              ref={arcRef} pathLength="100" style={{ strokeDashoffset: 100 }} />
      </svg>
      <div className="gauge-num mono" ref={numRef}>0%</div>
    </div>
  );
}

export default function PredPanel({ vol, file, api, exam, examBusy, runExam, onRefresh,
                                    cam, camTask, camBusy, explainFor, slice, setSlice }) {
  const depth = vol ? vol.shape[0] : 0;

  // cards cascade in when a new exam result arrives
  useEffect(() => {
    if (!exam?.tasks) return;
    gsap.fromTo('.task-card', { opacity: 0.25, y: 10 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' });
  }, [exam]);

  // current displayed slice -> model slice index (model consumes 32 resampled slices)
  const activeSlice = cam?.modelSlices && depth > 1
    ? Math.round(Math.min(slice, depth - 1) * (cam.modelSlices - 1) / (depth - 1)) : 0;

  const jumpToModelSlice = (i) => {
    if (depth > 1 && cam?.modelSlices) {
      setSlice(Math.min(depth - 1, Math.max(0, Math.round(i * (depth - 1) / (cam.modelSlices - 1)))));
    }
  };

  return (
    <aside className="predpanel">
      <div className="side-h pred-head">Diagnosis</div>

      <div className="api-row">
        <span className={`api-dot ${api.online ? (api.any ? 'ok' : 'warn') : 'off'}`} />
        <span className="api-text">
          {api.online
            ? (api.any
              ? `backend online · ${api.models.length} model${api.models.length > 1 ? 's' : ''}`
              : 'backend online · no models trained yet')
            : 'backend offline'}
        </span>
        <button className="ic tiny" onClick={onRefresh} title="re-check /health">⟳</button>
      </div>

      {!api.online && (
        <div className="pred-note">
          No backend reachable. Start the model server from the repo root:
          <div className="mono cmd">python backend/server.py</div>
          It serves every model in <span className="mono">outputs/</span> on port 8000.
          For a hosted service set <span className="mono">VITE_API_BASE</span> and
          <span className="mono"> VITE_API_KEY</span> in <span className="mono">frontend/.env</span>.
        </div>
      )}

      <button className={`primary-btn wide ${examBusy ? 'busy' : ''}`} disabled={!file || examBusy}
              onClick={() => runExam()}>
        {examBusy ? 'Running models…' : file ? 'Run exam prediction →' : 'Upload a volume first'}
      </button>

      {exam?.error && <div className="pred-error">⚠ {exam.error}</div>}

      {exam?.tasks && (
        <div className={`calib-chip ${exam.calibrated ? 'ok' : 'no'}`}
             title={exam.calibrated
               ? `Temperature scaling fitted on the valid split: ${Object.entries(exam.calibrationT).map(([t, T]) => `${t} T=${T}`).join(', ')}`
               : 'Server has not fitted temperature calibration yet'}>
          {exam.calibrated
            ? `temperature-calibrated · T=${[...new Set(Object.values(exam.calibrationT))].join(', ')}`
            : 'uncalibrated probabilities'}
        </div>
      )}

      {exam?.tasks && TASK_ORDER.filter((t) => exam.tasks[t]).map((task) => {
        const t = exam.tasks[task];
        const v = taskVerdict(t);
        const isActive = camTask === task;
        return (
          <div className={`task-card ${v.pos ? 'pos' : 'neg'} ${isActive ? 'cammed' : ''}`} key={task}>
            <div className="task-head">
              <span className="task-name">{TASK_LABEL[task] || task}</span>
              <span className={`verdict-chip ${v.pos ? 'pos' : 'neg'}`}>{v.label}</span>
            </div>
            <Gauge prob={v.prob} pos={v.pos} />
            <div className="task-sub mono">
              avg {t.prob_avg.toFixed(3)} · max {t.prob_max.toFixed(3)} · thr {t.threshold} · conf {v.confidence}%
            </div>

            {/* per-plane predictions: which view drove the decision */}
            <div className="plane-rows">
              {Object.entries(t.planes).map(([pl, pv]) => {
                const val = pv.prob_cal ?? pv.prob;
                const pos = pv.label === 1;
                return (
                  <div className="plane-row" key={pl} title={`P = ${pv.prob}${pv.prob_cal != null ? ` → calibrated ${pv.prob_cal}` : ''} (thr ${pv.threshold})`}>
                    <span className="plane-name">{PLANE_ABBR[pl] || pl}</span>
                    <div className="plane-bar"><div className={`plane-fill ${pos ? 'pos' : ''}`}
                          style={{ width: `${Math.round(100 * val)}%` }} /></div>
                    <span className="plane-val mono">{val.toFixed(3)}</span>
                  </div>
                );
              })}
            </div>

            <button className={`cam-btn ${isActive ? 'active' : ''}`} disabled={!!camBusy || !file}
                    onClick={() => explainFor(task)}
                    title={`Grad-CAM: which slices and regions drove the ${TASK_LABEL[task] || task} decision`}>
              {camBusy === task ? 'computing CAM…' : isActive ? '◉ heatmap on — hide' : 'Grad-CAM heatmap'}
            </button>
          </div>
        );
      })}

      {!exam?.tasks && !exam?.error && !examBusy && (
        <div className="exam-hint">
          <div>One upload → all three diagnoses:</div>
          <div className="mono">abnormal · ACL tear · meniscal tear</div>
          <div>Each task aggregates the per-plane models (avg + max) and thresholds P &gt; 0.5 into a 0/1 verdict.</div>
        </div>
      )}

      {cam && (
        <div className="cam-block">
          <div className="side-h">Grad-CAM · {TASK_LABEL[cam.task] || cam.task}</div>
          <div className="cam-sub mono">{cam.modelKey} · {cam.artifact}</div>
          <div className="imp-bars" title="slice importance — click a bar to jump to that slice">
            {(cam.importance || []).map((v, i) => (
              <div key={i} className={`imp-bar ${i === activeSlice ? 'on' : ''}`}
                   style={{ height: `${Math.max(4, Math.round(100 * v))}%` }}
                   onClick={() => jumpToModelSlice(i)} />
            ))}
          </div>
          <div className="cam-sub2">
            bars = slice importance (click to jump) · P = {cam.probability} · heatmap overlaid in the viewer
          </div>
        </div>
      )}

      <div className="side-block side-help pred-foot">
        <div>resnet18 · 32 slices · max + logsumexp pooling</div>
        <div>multi-task heads: P(abnormal), P(ACL), P(meniscus) per plane</div>
        <div>Grad-CAM on the last conv stage (8×8 per slice)</div>
      </div>
    </aside>
  );
}

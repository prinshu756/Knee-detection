import { useCallback, useEffect, useState } from 'react';
import gsap from 'gsap';
import { loadVolume, sha1file, fmtBytes, health, predict, verdictLabel } from './lib';
import Viewer from './components/Viewer';
import PredPanel from './components/PredPanel';
import { Sidebar, Toolbar, Colorbar } from './components/Chrome';

export default function App() {
  const [file, setFile] = useState(null);
  const [vol, setVol] = useState(null);
  const [meta, setMeta] = useState(null);          // {size, checksum, dims, dtype}
  const [err, setErr] = useState(null);
  const [slice, setSlice] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [colormap, setColormap] = useState('Grayscale');
  const [invert, setInvert] = useState(false);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [win, setWin] = useState([0, 1]);
  const [domain, setDomain] = useState([0, 1]);
  const [stack, setStack] = useState(false);
  const [combo, setCombo] = useState('acl/sagittal');
  const [api, setApi] = useState({ online: false, models: [], any: false, checked: false });
  const [pred, setPred] = useState(null);          // {result} | {error}
  const [predBusy, setPredBusy] = useState(false);

  const depth = vol ? vol.shape[0] : 0;

  const onUpload = useCallback(async (f) => {
    setErr(null); setPred(null); setPlaying(false);
    try {
      const buf = await f.arrayBuffer();
      const v = await loadVolume(f);
      if (!v.shape.length || v.shape.some((s) => !s)) throw new Error('empty volume');
      setFile(f); setVol(v); setSlice(0);
      setMeta({ size: fmtBytes(buf.byteLength), checksum: await sha1file(buf), dims: v.shape.join(' × '), dtype: v.dtype });
      // default contrast window: 1st / 99th percentile of nonzero voxels
      const pos = v.data.filter((x) => x > 0);
      const arr = pos.length > 100 ? pos : v.data;
      const step = Math.max(1, Math.floor(arr.length / 20000));
      const smp = [];
      for (let i = 0; i < arr.length; i += step) smp.push(arr[i]);
      smp.sort((a, b) => a - b);
      const lo = smp[Math.floor(smp.length * 0.01)] ?? 0;
      const hi = smp[Math.floor(smp.length * 0.99)] ?? 1;
      setWin([lo, Math.max(hi, lo + 1e-6)]);
      setDomain([Math.min(lo, 0), Math.max(hi * 2, hi + 1e-6)]);
      gsap.fromTo('.viewer-shell', { opacity: 0.2, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' });
    } catch (e) {
      setErr(`Could not read ${f?.name}: ${e.message}`);
      setVol(null); setFile(null); setMeta(null);
    }
  }, []);

  // slice playback via gsap.ticker (~9 fps)
  useEffect(() => {
    if (!playing || depth < 2) return;
    const tick = () => setSlice((s) => (s + 1) % depth);
    let acc = 0, last = 0;
    const fn = (t, dtMs) => { acc += dtMs; if (acc > 110) { acc = 0; if (performance.now() - last > 90) { last = performance.now(); tick(); } } };
    gsap.ticker.add(fn);
    return () => gsap.ticker.remove(fn);
  }, [playing, depth]);

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') setSlice((s) => Math.min(depth - 1, s + 1));
      if (e.key === 'ArrowLeft') setSlice((s) => Math.max(0, s - 1));
      if (e.key === ' ') { e.preventDefault(); setPlaying((p) => !p); }
      if (e.key.toLowerCase() === 'i') setInvert((v) => !v);
      if (e.key.toLowerCase() === '3') setStack((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [depth]);

  // API health on load + after failures
  const refreshHealth = useCallback(async () => {
    try { setApi({ ...await health(), checked: true }); }
    catch { setApi({ online: false, models: [], any: false, checked: true }); }
  }, []);
  useEffect(() => { refreshHealth(); }, [refreshHealth]);

  const runPrediction = useCallback(async (task, plane, f) => {
    const useFile = f || file;
    if (!useFile) { setPred({ error: 'Upload a .npy volume first.' }); return; }
    setPredBusy(true); setPred(null);
    gsap.fromTo('.pred-card', { opacity: 0.3, y: 8 }, { opacity: 1, y: 0, duration: 0.4 });
    try {
      const res = await predict(useFile, task, plane);
      const v = verdictLabel(res);
      setPred({ res, v });
    } catch (e) {
      setPred({ error: e.message });
      if (!navigator.onLine || e.name === 'AbortError' || e.message.includes('fetch')) refreshHealth();
    } finally { setPredBusy(false); }
  }, [file, refreshHealth]);

  // global drag & drop
  useEffect(() => {
    const over = (e) => { e.preventDefault(); document.body.classList.add('dragging'); };
    const leave = (e) => { if (!e.relatedTarget) document.body.classList.remove('dragging'); };
    const drop = (e) => {
      e.preventDefault();
      document.body.classList.remove('dragging');
      const f = e.dataTransfer?.files?.[0];
      if (f && (!vol || f !== file)) onUpload(f);
    };
    window.addEventListener('dragover', over);
    window.addEventListener('dragleave', leave);
    window.addEventListener('drop', drop);
    return () => {
      window.removeEventListener('dragover', over);
      window.removeEventListener('dragleave', leave);
      window.removeEventListener('drop', drop);
    };
  }, [vol, file, onUpload]);

  const onScrub = useCallback((d) => setSlice((s) => Math.min(depth - 1, Math.max(0, s + d))), [depth]);

  return (
    <div className="app">
      <div className="topbar">
        <button className="icon-btn" title="toggle sidebar" onClick={() => document.body.classList.toggle('noside')}>▥</button>
        <div className="crumbs">
          <span className="crumb-file">{file ? file.name : 'no file loaded'}</span>
          {vol && <><span className="crumb-sep">›</span><span className="crumb-id">MRNet viewer</span></>}
        </div>
        <div className="top-actions">
          <button className="mode-btn active">Display</button>
          <button className="mode-btn" onClick={refreshHealth} title="re-check backend">API {api.online ? 'online' : api.checked ? 'offline' : '…'}</button>
        </div>
      </div>

      <div className="body">
        <Sidebar fileName={file?.name} meta={meta} err={err} onUpload={onUpload} />

        <main className="main">
          <Toolbar playing={playing} setPlaying={setPlaying} slice={slice} depth={depth} setSlice={setSlice}
                   colormap={colormap} setColormap={setColormap} invert={invert} setInvert={setInvert}
                   flipX={flipX} setFlipX={setFlipX} flipY={flipY} setFlipY={setFlipY}
                   win={win} setWin={setWin} domain={domain} stack={stack} setStack={setStack} />
          <div className="viewer-shell">
            {vol ? (
              <>
                <Viewer vol={vol} slice={slice} colormap={colormap} invert={invert} flipX={flipX}
                        flipY={flipY} win={win} stack={stack} onScrub={onScrub} />
                {!stack && <div className="slice-title">{file.name.replace(/\.[^.]+$/, '')}</div>}
                <div className="corner-badge">{stack ? '3D stack · drag to rotate' : `slice ${slice + 1} / ${depth}`}</div>
              </>
            ) : (
              <div className="dropzone" id="dropzone">
                <div className="dz-icon">▦</div>
                <div className="dz-title">Drop a knee MRI here</div>
                <div className="dz-sub">.npy volume (N×256×256) or any image — then pick colormaps, scrub slices, run prediction</div>
                <button className="primary-btn" onClick={() => document.getElementById('file-input')?.click()}>Choose file</button>
                <div className="dz-hint">or drag & drop anywhere</div>
              </div>
            )}
            <Colorbar colormap={colormap} invert={invert} win={win} />
          </div>
        </main>

        <PredPanel vol={vol} file={file} combo={combo} setCombo={setCombo} api={api}
                   pred={pred} predBusy={predBusy} runPrediction={runPrediction}
                   onRefresh={refreshHealth} />
      </div>

      <input id="file-input" type="file" accept=".npy,.png,.jpg,.jpeg,.bmp" hidden
             onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} />
    </div>
  );
}

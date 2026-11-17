import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { COLORMAP_NAMES, cssGradient } from '../lib';

export function Sidebar({ fileName, meta, err, onUpload }) {
  return (
    <aside className="sidebar">
      <div className="side-block side-brand">
        <div className="brand-row"><span className="brand-cube">▦</span> MRNet: Knee MRI's</div>
        {fileName && fileName !== 'no file loaded' && <div className="brand-file mono">{fileName}</div>}
      </div>

      <div className="side-block">
        <label className="side-link" htmlFor="file-input" title="upload volume">⇪ Upload .npy / image</label>
      </div>

      <div className="side-block">
        <div className="side-h">File overview</div>
        {err && <div className="side-err">{err}</div>}
        {meta ? (
          <table className="kv">
            <tbody>
              <tr><td>Size</td><td className="mono">{meta.size}</td></tr>
              <tr><td>Dims</td><td className="mono">{meta.dims}</td></tr>
              <tr><td>Dtype</td><td className="mono">{meta.dtype}</td></tr>
              <tr><td>SHA-1</td><td className="mono md5">{meta.checksum}</td></tr>
            </tbody>
          </table>
        ) : <div className="side-dim">no file yet</div>}
      </div>

      <div className="side-block side-help">
        <div className="side-h">Controls</div>
        <div>◀ ▶ slice · Space play · I invert</div>
        <div>3 — 3D stack · wheel scrub (ctrl zoom)</div>
        <div>drag pan · double-click reset</div>
      </div>
    </aside>
  );
}

export function Toolbar(props) {
  const { playing, setPlaying, slice, depth, setSlice, colormap, setColormap,
          invert, setInvert, flipX, setFlipX, flipY, setFlipY, win, setWin, domain, stack, setStack } = props;
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(barRef.current, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
  }, []);

  const pct = depth > 1 ? (slice / (depth - 1)) * 100 : 0;
  return (
    <div className="toolbar" ref={barRef}>
      <div className="tb-group">
        <button className={`tb-tab ${stack ? '' : 'active'}`} onClick={() => setStack(false)}>▤ Slice</button>
        <button className={`tb-tab ${stack ? 'active' : ''}`} onClick={() => setStack(true)}>⬔ 3D Stack</button>
      </div>

      <div className="tb-group scrubber">
        <button className={`ic ${playing ? 'hot' : ''}`} onClick={() => setPlaying(!playing)} title="play / pause (space)">
          {playing ? '❚❚' : '▶'}
        </button>
        <div className="track" onClick={(e) => {
          if (depth > 1) {
            const r = e.currentTarget.getBoundingClientRect();
            setSlice(Math.round(Math.min(depth - 1, Math.max(0, ((e.clientX - r.left) / r.width) * (depth - 1)))));
          }
        }}>
          <div className="track-fill" style={{ width: `${pct}%` }} />
          <div className="track-knob" style={{ left: `${pct}%` }} />
        </div>
        <span className="mono slice-counter">{depth ? `${slice + 1}/${depth}` : '–/–'}</span>
      </div>

      <div className="tb-group">
        <span className="tb-lab">Colormap</span>
        <select value={colormap} onChange={(e) => setColormap(e.target.value)} className="cmb">
          {COLORMAP_NAMES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button className={`ic ${invert ? 'hot' : ''}`} onClick={() => setInvert(!invert)} title="invert (I)">◐</button>
        <button className={`ic ${flipX ? 'hot' : ''}`} onClick={() => setFlipX(!flipX)} title="flip X">↔</button>
        <button className={`ic ${flipY ? 'hot' : ''}`} onClick={() => setFlipY(!flipY)} title="flip Y">↕</button>
      </div>

      <div className="tb-group win-group">
        <span className="tb-lab">Window</span>
        <input type="range" min={domain?.[0] ?? 0} max={(win[1] || 1) - 1e-6}
               step={Math.pow(10, Math.floor(Math.log10(Math.abs(win[1] - (domain?.[0] ?? 0) || 1)) - 2))}
               value={win[0]}
               onChange={(e) => setWin([Math.min(+e.target.value, win[1] - 1e-6), win[1]])} />
        <input type="range" min={(win[0] || 0) + 1e-6} max={domain?.[1] ?? 1}
               step={Math.pow(10, Math.floor(Math.log10(Math.abs((domain?.[1] ?? 1) - win[0] || 1)) - 2))}
               value={win[1]}
               onChange={(e) => setWin([win[0], Math.max(+e.target.value, win[0] + 1e-6)])} />
      </div>
    </div>
  );
}

export function Colorbar({ colormap, invert, win }) {
  const [lo, hi] = win;
  return (
    <div className="colorbar">
      <div className="cb-max mono">{formatVal(hi)}</div>
      <div className="cb-bar" style={{ background: cssGradient(colormap), transform: invert ? 'rotate(180deg)' : 'none' }} />
      <div className="cb-min mono">{formatVal(lo)}</div>
    </div>
  );
}

const formatVal = (v) => (Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 1 ? v.toFixed(1) : v.toPrecision(2));

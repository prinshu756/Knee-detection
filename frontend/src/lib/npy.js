// Minimal .npy parser (v1/v2, little-endian, C or Fortran order) -> { data: Float32Array, shape, dtype }
const DTYPES = {
  '|b1': { bytes: 1, get: (dv, o) => (dv.getInt8(o) ? 1 : 0) },
  '|u1': { bytes: 1, get: (dv, o) => dv.getUint8(o) },
  '|i1': { bytes: 1, get: (dv, o) => dv.getInt8(o) },
  '<u2': { bytes: 2, get: (dv, o) => dv.getUint16(o, true) },
  '<i2': { bytes: 2, get: (dv, o) => dv.getInt16(o, true) },
  '<u4': { bytes: 4, get: (dv, o) => dv.getUint32(o, true) },
  '<i4': { bytes: 4, get: (dv, o) => dv.getInt32(o, true) },
  '<f4': { bytes: 4, get: (dv, o) => dv.getFloat32(o, true) },
  '<f8': { bytes: 8, get: (dv, o) => dv.getFloat64(o, true) },
};

export function parseNpy(buffer) {
  const bytes = new Uint8Array(buffer);
  const magic = String.fromCharCode(...bytes.slice(0, 6));
  if (magic !== '\x93NUMPY') throw new Error('not a .npy file (bad magic)');
  const major = bytes[6];
  const lenField = major <= 1 ? 2 : 4;
  const dv = new DataView(buffer);
  const off = 8 + lenField;
  const hlen = major <= 1 ? dv.getUint16(8, true) : dv.getUint32(8, true);
  const header = new TextDecoder('latin1').decode(bytes.slice(off, off + hlen));

  const descr = /'descr':\s*'([^']+)'/.exec(header)?.[1];
  const fortran = /'fortran_order':\s*(True|False)/.exec(header)?.[1] === 'True';
  const shapeStr = /'shape':\s*\(([^)]*)\)/.exec(header)?.[1];
  if (!descr || shapeStr === undefined) throw new Error('malformed .npy header');
  const shape = shapeStr.split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => !Number.isNaN(n));

  const dt = DTYPES[descr];
  if (!dt) throw new Error(`unsupported dtype ${descr} (use float32/uint8/int16 volumes)`);

  const dataStart = off + hlen;
  const n = shape.reduce((a, b) => a * b, 1);
  if (dataStart + n * dt.bytes > bytes.length) throw new Error('file truncated');

  const out = new Float32Array(n);
  if (descr === '<f4') {
    out.set(new Float32Array(buffer, dataStart, n));
  } else {
    for (let i = 0; i < n; i++) out[i] = dt.get(dv, dataStart + i * dt.bytes);
  }

  // Bring to (depth, height, width); Fortran order transposes axes.
  if (fortran && shape.length === 3) {
    const [d, h, w] = shape;
    const t = new Float32Array(n);
    for (let k = 0; k < d; k++)
      for (let j = 0; j < h; j++)
        for (let i = 0; i < w; i++) t[(k * h + j) * w + i] = out[(i * h + j) * d + k];
    out.set(t);
  }
  return { data: out, shape, dtype: descr };
}

// Raster image (png/jpg/...) -> 1-slice grayscale volume (256x256)
export async function imageToVolume(file) {
  const bmp = await createImageBitmap(file);
  const S = 256;
  const cvs = document.createElement('canvas');
  cvs.width = cvs.height = S;
  const ctx = cvs.getContext('2d');
  ctx.drawImage(bmp, 0, 0, S, S);
  const px = ctx.getImageData(0, 0, S, S).data;
  const data = new Float32Array(S * S);
  for (let i = 0; i < S * S; i++) {
    data[i] = (0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2]) / 255;
  }
  bmp.close?.();
  return { data, shape: [1, S, S], dtype: 'image' };
}

export async function loadVolume(file) {
  const buf = await file.arrayBuffer();
  if (file.name.toLowerCase().endsWith('.npy')) return parseNpy(buf);
  if (file.type.startsWith('image/')) return imageToVolume(file);
  try {
    return parseNpy(buf);
  } catch {
    return imageToVolume(file);
  }
}

export function sliceOf(vol, k) {
  const [, h, w] = vol.shape;
  const n = h * w;
  return vol.data.subarray(k * n, (k + 1) * n);
}

export async function sha1file(buf) {
  const digest = await crypto.subtle.digest('SHA-1', buf);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 20);
}

export function fmtBytes(b) {
  if (b >= 1e9) return `${(b / 1e9).toFixed(1)} GB`;
  if (b >= 1e6) return `${(b / 1e6).toFixed(1)} MB`;
  if (b >= 1e3) return `${(b / 1e3).toFixed(1)} KB`;
  return `${b} B`;
}

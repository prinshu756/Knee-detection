// Colormaps: 256-entry RGB lookup tables (Uint8Array, 3 bytes/entry, values 0-255)
const clamp01 = (x) => Math.min(1, Math.max(0, x));

function lut(fn) {
  const a = new Uint8Array(256 * 3);
  for (let i = 0; i < 256; i++) {
    const [r, g, b] = fn(i / 255);
    a[i * 3] = clamp01(r) * 255;
    a[i * 3 + 1] = clamp01(g) * 255;
    a[i * 3 + 2] = clamp01(b) * 255;
  }
  return a;
}

// classic grayscale
const GRAY = lut((t) => [t, t, t]);

// matlab "bone": blue-gray ramp with a slight tint
const BONE = lut((t) => {
  const g = t < 0.75 ? (8 / 9) * t : (2 / 3) * t + 1 / 12;
  const r = t < 0.375 ? (23 / 24) * t : t < 0.75 ? (11 / 12) * t + 1 / 24 : t;
  const b = t < 0.375 ? (3 / 4) * t : t < 0.75 ? (35 / 36) * t + 1 / 36 : t;
  return [r, g, b];
});

// matplotlib viridis (key anchor stops, cubic interpolation between them)
const VIRIDIS_STOPS = [
  [0.0, [68, 1, 84]], [0.25, [59, 82, 139]], [0.5, [33, 145, 140]],
  [0.75, [94, 201, 98]], [1.0, [253, 231, 37]],
];
function ramp(stops) {
  return lut((t) => {
    const x = t * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(x));
    const f = x - i;
    const [a, b] = [stops[i][1], stops[i + 1][1]];
    return a.map((v, c) => (v + f * (b[c] - v)) / 255);
  });
}

// rainbow (matplotlib jet)
const RAINBOW = lut((t) => {
  const r = clamp01(1.5 - Math.abs(4 * t - 3));
  const g = clamp01(1.5 - Math.abs(4 * t - 2));
  const b = clamp01(1.5 - Math.abs(4 * t - 1));
  return [r, g, b];
});

// hot (black-red-yellow-white)
const HOT = lut((t) => {
  const r = clamp01(t / 0.375);
  const g = clamp01((t - 0.375) / 0.375);
  const b = clamp01((t - 0.75) / 0.25);
  return [r, g, b];
});

// ice (black-blue-white)
const ICE = lut((t) => [t * t, t, 0.3 + 0.7 * t]);

// "RGB": pseudo colored enhancement (per-channel gamma lift, high contrast)
const RGB = lut((t) => [Math.sqrt(t), t, Math.pow(1 - t, 1.5)]);

export const COLORMAPS = {
  Grayscale: GRAY,
  Bone: BONE,
  Viridis: VIRIDIS_STOPS && ramp(VIRIDIS_STOPS),
  Rainbow: RAINBOW,
  Hot: HOT,
  Ice: ICE,
  RGB: RGB,
};

export const COLORMAP_NAMES = Object.keys(COLORMAPS);

export function cssGradient(name) {
  const a = COLORMAPS[name];
  const stops = [];
  for (let i = 0; i <= 8; i++) {
    const j = Math.round((i / 8) * 255);
    stops.push(`rgb(${a[j * 3]},${a[j * 3 + 1]},${a[j * 3 + 2]}) ${i * 12.5}%`);
  }
  return `linear-gradient(90deg, ${stops.join(',')})`;
}

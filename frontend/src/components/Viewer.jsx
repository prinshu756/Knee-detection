import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { COLORMAPS, sliceOf } from '../lib';

// WebGL slice viewer: intensity -> window/level -> colormap LUT on a three.js ortho quad.
// 'slice' mode = single plane with GSAP crossfade; 'stack' mode = oblique 3D slice stack.
export default function Viewer({ vol, slice, colormap, invert, flipX, flipY, win, stack, onScrub, cam }) {
  const mountRef = useRef(null);
  const S = useRef({}).current;

  // --- init three.js once ---
  useEffect(() => {
    const canvas = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor(0x150609, 1);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.55, 0.55, 0.55, -0.55, 0.01, 100);
    camera.position.set(0, 0, 5);

    const lutData = new Uint8Array(256 * 4);
    {
      const rgb = COLORMAPS.Viridis;
      for (let i = 0; i < 256; i++) {
        lutData[i * 4] = rgb[i * 3]; lutData[i * 4 + 1] = rgb[i * 3 + 1];
        lutData[i * 4 + 2] = rgb[i * 3 + 2]; lutData[i * 4 + 3] = 255;
      }
    }
    const lutTex = new THREE.DataTexture(lutData, 256, 1, THREE.RGBAFormat);
    lutTex.minFilter = lutTex.magFilter = THREE.LinearFilter;
    lutTex.needsUpdate = true;

    // Grad-CAM heatmap texture (one per-slice grid, e.g. 8x8); LinearFilter gives
    // free bilinear upsampling so the coarse grid smoothly covers the slice.
    const camTex = new THREE.DataTexture(new Float32Array(64), 8, 8, THREE.RedFormat, THREE.FloatType);
    camTex.minFilter = camTex.magFilter = THREE.LinearFilter;
    camTex.wrapS = camTex.wrapT = THREE.ClampToEdgeWrapping;
    camTex.needsUpdate = true;

    const makeVolTex = (w, h) => {
      const t = new THREE.DataTexture(new Float32Array(w * h), w, h, THREE.RedFormat, THREE.FloatType);
      t.minFilter = t.magFilter = THREE.NearestFilter;
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      return t;
    };
    const uniforms = {
      uTexA: { value: makeVolTex(4, 4) },
      uTexB: { value: makeVolTex(4, 4) },
      uMix: { value: 0 },
      uLUT: { value: lutTex },
      uCam: { value: camTex },
      uCamMix: { value: 0 },
      uWin: { value: new THREE.Vector2(0, 1) },
      uFlip: { value: new THREE.Vector2(0, 1) },
      uInvert: { value: 0 },
      uAlpha: { value: 1 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform sampler2D uTexA, uTexB, uLUT, uCam;
        uniform float uMix, uInvert, uAlpha, uCamMix;
        uniform vec2 uWin, uFlip;
        varying vec2 vUv;
        // jet colormap: blue -> cyan -> green -> yellow -> red
        vec3 jet(float t) {
          t = clamp(t, 0.0, 1.0);
          return clamp(vec3(1.5 - abs(4.0 * t - 3.0),
                            1.5 - abs(4.0 * t - 2.0),
                            1.5 - abs(4.0 * t - 1.0)), 0.0, 1.0);
        }
        void main() {
          vec2 uv = vec2(uFlip.x < 0.5 ? vUv.x : 1.0 - vUv.x,
                         uFlip.y < 0.5 ? vUv.y : 1.0 - vUv.y);
          float v = mix(texture2D(uTexB, uv).r, texture2D(uTexA, uv).r, 1.0 - uMix);
          if (abs(v) < 1e-6 || v < uWin.x + 1e-6) discard;  // background stays transparent, pre-invert
          float n = uWin.y > uWin.x ? clamp((v - uWin.x) / (uWin.y - uWin.x), 0.0, 1.0) : 0.0;
          if (uInvert > 0.5) n = 1.0 - n;
          vec3 col = texture2D(uLUT, vec2(n, 0.5)).rgb;
          // Grad-CAM overlay: cam value (importance-weighted per slice) tints the tissue
          float cam = texture2D(uCam, uv).r;
          if (uCamMix > 0.001) col = mix(col, jet(cam), uCamMix * min(1.0, cam * 1.15) * 0.85);
          gl_FragColor = vec4(col, uAlpha);
        }`,
      transparent: true,
    });

    Object.assign(S, { renderer, scene, camera, uniforms, mat, zoom: 1, drag: null,
      texA: uniforms.uTexA.value, texB: uniforms.uTexB.value, camTex: uniforms.uCam.value,
      stackGroup: null, volDirty: true, lastSlice: undefined, stackRot: { y: 0.55 } });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    scene.add(plane);
    window.__threeViewer = S;                 // console/debug handle (harmless)

    const resize = () => {
      const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
      renderer.setSize(w, h, false);
      const aspect = w / h, half = 0.5 / S.zoom;
      if (aspect >= 1) { camera.top = half; camera.bottom = -half; camera.left = -half * aspect; camera.right = half * aspect; }
      else { camera.left = -half; camera.right = half; camera.top = half / aspect; camera.bottom = -half / aspect; }
      camera.updateProjectionMatrix();
    };
    S.resize = resize;
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let raf;
    const loop = () => { raf = requestAnimationFrame(loop); renderer.render(scene, camera); };
    loop();

    return () => { cancelAnimationFrame(raf); ro.disconnect(); renderer.dispose(); gsap.ticker.remove(S.autorotate); };
  }, []);

  // --- volume loaded: resize textures and build 3D stack group ---
  useEffect(() => {
    if (!vol || !S.mat) return;
    const [D, H, W] = vol.shape;
    for (const t of [S.texA, S.texB]) {
      t.image = { data: new Float32Array(H * W), width: W, height: H };
      t.flipY = true;                           // row 0 is the image top
      t.needsUpdate = true;
    }
    if (S.stackGroup) {
      S.scene.remove(S.stackGroup);
      S.stackGroup.children.forEach((c) => { c.geometry.dispose(); c.material.dispose(); });
    }
    const group = new THREE.Group();
    const n = Math.min(D, 48), step = Math.max(1, Math.ceil(D / n));
    for (let i = 0; i < n; i++) {
      const tex = new THREE.DataTexture(sliceOf(vol, i * step), W, H, THREE.RedFormat, THREE.FloatType);
      tex.minFilter = tex.magFilter = THREE.NearestFilter;
      tex.flipY = true;
      tex.needsUpdate = true;                   // r169 DataTexture does NOT auto-flag: without this the GPU texture never uploads
      const m = new THREE.ShaderMaterial({
        uniforms: {
          ...S.mat.uniforms,                      // share live uniform objects (LUT/win/flip follow main)
          uTexA: { value: tex }, uTexB: { value: tex }, uAlpha: { value: 0.4 },
          uCamMix: { value: 0 },                  // CAM overlay is a slice-mode feature only
        },
        vertexShader: S.mat.vertexShader, fragmentShader: S.mat.fragmentShader, transparent: true,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
      mesh.position.z = (i - (n - 1) / 2) * 0.04; // centered stack depth
      group.add(mesh);
    }
    group.rotation.set(-0.3, S.stackRot.y, 0);
    group.scale.setScalar(0.42);                  // keep the stack inside the frustum
    group.visible = false;
    S.scene.add(group);
    S.stackGroup = group;
    S.volDirty = true;
  }, [vol]);

  // --- slice change: copy old frame to texB, write new to texA, GSAP crossfade ---
  useEffect(() => {
    if (!vol || !S.texA) return;
    if (!S.volDirty && S.lastSlice !== undefined) {
      S.texB.image.data.set(S.texA.image.data);
      S.texB.needsUpdate = true;
      S.uniforms.uMix.value = 1;
      gsap.to(S.uniforms.uMix, { value: 0, duration: 0.22, ease: 'power2.out', overwrite: true });
    }
    S.texA.image.data.set(sliceOf(vol, Math.min(slice, vol.shape[0] - 1)));
    S.texA.needsUpdate = true;
    S.volDirty = false;
    S.lastSlice = slice;
  }, [vol, slice]);

  // --- colormap / invert / flips / window level ---
  useEffect(() => {
    if (!S.uniforms) return;
    const rgb = COLORMAPS[colormap], data = S.uniforms.uLUT.value.image.data;
    for (let i = 0; i < 256; i++) {
      data[i * 4] = rgb[i * 3]; data[i * 4 + 1] = rgb[i * 3 + 1]; data[i * 4 + 2] = rgb[i * 3 + 2];
    }
    S.uniforms.uLUT.value.needsUpdate = true;
  }, [colormap]);
  useEffect(() => { if (S.uniforms) S.uniforms.uInvert.value = invert ? 1 : 0; }, [invert]);
  useEffect(() => { if (S.uniforms) S.uniforms.uFlip.value.set(flipX ? 1 : 0, flipY ? 0 : 1); }, [flipX, flipY]);
  useEffect(() => {
    if (S.uniforms) gsap.to(S.uniforms.uWin.value, { x: win[0], y: win[1], duration: 0.4, ease: 'power2.out', overwrite: true });
  }, [win[0], win[1]]);

  // --- Grad-CAM overlay: importance-weighted 8x8 grid of the current slice ---
  // The model consumes 32 uniformly resampled slices, so displayed slice s maps to
  // model position s*(n-1)/(D-1); neighbouring CAM grids are blended across it and
  // weighted by their slice importance (dim slices barely tint, hot ones glow).
  useEffect(() => {
    if (!S.uniforms) return;
    if (!cam || !cam.grids?.length) {
      if (S.camActive) {
        S.camActive = false;
        gsap.to(S.uniforms.uCamMix, { value: 0, duration: 0.35, overwrite: true });
      }
      return;
    }
    S.camActive = true;
    const n = cam.modelSlices || cam.grids.length;
    const D = vol ? vol.shape[0] : 1;
    const p = D > 1 ? (Math.min(slice, D - 1) * (n - 1)) / (D - 1) : 0;
    const i0 = Math.min(n - 1, Math.floor(p));
    const i1 = Math.min(n - 1, i0 + 1);
    const f = p - i0;
    const gw = cam.gridW || 8, gh = cam.gridH || 8;
    if (S.camTex.image.width !== gw || S.camTex.image.height !== gh) {
      S.camTex.image = { data: new Float32Array(gw * gh), width: gw, height: gh };
    }
    const g0 = cam.grids[i0] || [];
    const g1 = cam.grids[i1] || g0;
    const imp = cam.importance || [];
    const w0 = imp[i0] ?? 1, w1 = imp[i1] ?? 1;
    const data = S.camTex.image.data;
    for (let k = 0; k < data.length; k++) {
      const a = g0[k] ?? 0, b = g1[k] ?? a;
      const w = w0 + (w1 - w0) * f;
      data[k] = (a + (b - a) * f) * w;
    }
    S.camTex.needsUpdate = true;
    gsap.to(S.uniforms.uCamMix, { value: 1, duration: 0.5, overwrite: true });
  }, [vol, slice, cam]);

  // --- stack mode: reveal / hide + gentle auto-rotate ---
  useEffect(() => {
    const g = S.stackGroup;
    if (!g || !S.uniforms) return;
    if (stack) {
      g.visible = true;
      g.children.forEach((c) => gsap.to(c.material.uniforms.uAlpha, { value: 0.45, duration: 0.8 }));
      gsap.to(S.uniforms.uAlpha, { value: 0, duration: 0.3 });
      gsap.fromTo(g.rotation, { x: 0, y: S.stackRot.y }, { x: -0.28, duration: 1.1, ease: 'power3.out' });
      S.autorotate ||= (_t, dtMs) => { if (stack && !S.drag) { g.rotation.y += (dtMs / 1000) * 0.1; } };
      gsap.ticker.add(S.autorotate);
    } else {
      gsap.ticker.remove(S.autorotate);
      if (g.visible) {
        gsap.to(g.children.map((c) => c.material.uniforms.uAlpha), {
          value: 0, duration: 0.3,
          onComplete: () => { g.visible = false; g.children.forEach((c) => (c.material.uniforms.uAlpha.value = 0.45)); },
        });
      }
      gsap.to(S.uniforms.uAlpha, { value: 1, duration: 0.5, delay: 0.15 });
    }
  }, [stack]);

  // --- pointer: drag pan (slice) / rotate (stack); wheel scrub; ctrl+wheel zoom ---
  useEffect(() => {
    const el = mountRef.current;
    const down = (e) => { S.drag = { x: e.clientX, y: e.clientY }; el.setPointerCapture(e.pointerId); };
    const move = (e) => {
      if (!S.drag) return;
      const dx = (e.clientX - S.drag.x) / el.clientWidth, dy = (e.clientY - S.drag.y) / el.clientHeight;
      S.drag = { x: e.clientX, y: e.clientY };
      if (stack) { S.stackGroup.rotation.y += dx * 2.5; S.stackRot.y = S.stackGroup.rotation.y; }
      else {
        S.camera.position.x -= dx * (S.camera.right - S.camera.left);
        S.camera.position.y += dy * (S.camera.top - S.camera.bottom);
      }
    };
    const up = () => { S.drag = null; };
    const wheel = (e) => {
      e.preventDefault();
      if (e.ctrlKey || stack) {
        S.zoom = Math.min(6, Math.max(0.6, S.zoom * (e.deltaY < 0 ? 1.1 : 0.9)));
        S.resize();
      } else onScrub(e.deltaY < 0 ? 1 : -1);
    };
    const dbl = () => { S.zoom = 1; gsap.to(S.camera.position, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' }); S.resize(); };
    el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up); el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('dblclick', dbl);
    return () => {
      el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up); el.removeEventListener('wheel', wheel);
      el.removeEventListener('dblclick', dbl);
    };
  }, [stack, onScrub]);

  return <canvas ref={mountRef} className="viewer-canvas" />;
}

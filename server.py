"""
Backend for Knee MRI Model Dashboard.

Serves the HTML frontend and exposes /api/infer which:
  1. Receives uploaded DICOM/PNG/JPG slices
  2. Groups them into the 6 MR slots (SAG_FS, COR_FS, AX_FS, SAG_NOFS, COR_NOFS, AX_NOFS)
  3. Builds model input X (6, 16, 336, 336) uint8 + mask (6,)
  4. Runs the MultiTaskModel + PostProcessor
  5. Returns JSON: abnormality, findings, regions, confidences

External verification data (other models / website ground truth) is NEVER
stored here. It lives only in a temp dir outside this project and is deleted
after the check.

Usage:
    python server.py
    then open http://127.0.0.1:8765
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Optional

import cv2
import numpy as np
import torch
from flask import Flask, request, jsonify, send_from_directory

# ---------------------------------------------------------------------------
# Imports from the RSNA project (same folder)
# ---------------------------------------------------------------------------
from dataset import SLOT_NAMES
from model import MultiTaskModel, SharedEncoder
from post_processing import PostProcessor, PostProcessConfig, DEFAULT_TAU
from infer import DEFAULT_CHECKPOINT

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent
HTML_FILE = ROOT / "Knee MRI Model Dashboard.html"
CHECKPOINT = Path(r"D:\MachineLearning\RSNA\checkpoints\best_model.pt")
THRESHOLDS = Path(r"D:\MachineLearning\RSNA\cache_preprocessed\thresholds.json")

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
SLOT_ORDER = list(SLOT_NAMES)  # ["SAG_FS","COR_FS","AX_FS","SAG_NOFS","COR_NOFS","AX_NOFS"]
SLOT_TO_IDX = {s: i for i, s in enumerate(SLOT_ORDER)}

S = 6
D = 16
H = 336
W = 336

# ---------------------------------------------------------------------------
# DICOM parsing (minimal, mirrors the HTML's parser)
# ---------------------------------------------------------------------------
_LONG_VR = {"OB", "OW", "OF", "SQ", "UT", "UN", "OD", "OL", "UC", "UR"}
_WANT = {
    "0008,0060": "modality",
    "0008,103e": "desc",
    "0018,0050": "thick",
    "0020,0013": "inst",
    "0028,0010": "rows",
    "0028,0011": "cols",
    "0028,0100": "bits",
    "0028,0103": "prep",
    "0020,0037": "iop",
    "0018,0087": "field",
    "0028,0030": "spacing",
    "0020,0011": "sernum",
}


def _ascii(u8: np.ndarray, s: int, l: int) -> str:
    t = ""
    end = min(s + l, int(u8.size))
    for i in range(s, end):
        t += chr(int(u8[i]))
    return t.replace("\0", "").strip()


def _h4(n: int) -> str:
    return ("0000" + format(int(n), "x"))[-4:]


class _DV:
    """Tiny DataView-like reader over a bytes buffer (little-endian)."""
    def __init__(self, b: bytes):
        self.b = b

    def getUint16(self, o: int) -> int:
        return int.from_bytes(self.b[o:o + 2], "little")

    def getUint32(self, o: int) -> int:
        return int.from_bytes(self.b[o:o + 4], "little")


def parse_dicom(buf: bytes) -> Optional[dict]:
    u8 = np.frombuffer(buf, dtype=np.uint8)
    if u8.size < 140:
        return None
    if _ascii(u8, 128, 4) != "DICM":
        return None
    dv = _DV(bytes(buf))
    p = 132
    explicit = True
    ts = "1.2.840.10008.1.2.1"
    o = {}
    try:
        while p + 8 <= u8.size:
            g = dv.getUint16(p)
            e = dv.getUint16(p + 2)
            key = _h4(g) + "," + _h4(e)
            if g == 0xFFFE:
                p += 8
                continue
            vr = None
            length = 0
            hdr = 8
            if g == 2 or explicit:
                vr = bytes(buf[p + 4:p + 6]).decode("ascii", errors="ignore")
                if vr in _LONG_VR:
                    length = dv.getUint32(p + 8)
                    hdr = 12
                else:
                    length = dv.getUint16(p + 6)
                    hdr = 8
            else:
                length = dv.getUint32(p + 4)
                hdr = 8
            if g == 0x7FE0 and e == 0x10:
                o["pixOff"] = p + hdr
                o["pixLen"] = length
                break
            if vr == "SQ" or length == 0xFFFFFFFF:
                p += hdr
                continue
            vs = p + hdr
            if g == 2 and e == 0x10:
                ts = _ascii(u8, vs, length)
                if ts == "1.2.840.10008.1.2":
                    explicit = False
            nm = _WANT.get(key)
            if nm and nm not in o:
                if nm in {"rows", "cols", "bits", "prep"}:
                    o[nm] = dv.getUint16(vs)
                else:
                    o[nm] = _ascii(u8, vs, length)
            p = vs + length
    except Exception:
        pass
    o["ts"] = ts
    return o


def decode_dicom(buf: bytes, o: dict):
    if "pixOff" not in o or not o.get("rows") or not o.get("cols"):
        return None
    if o.get("ts") not in ("1.2.840.10008.1.2", "1.2.840.10008.1.2.1"):
        return "compressed"
    n = int(o["rows"]) * int(o["cols"])
    bytes_per = 2 if (o.get("bits") or 16) > 8 else 1
    if o["pixOff"] + n * bytes_per > len(buf):
        return None
    raw = buf[o["pixOff"]:o["pixOff"] + n * bytes_per]
    if bytes_per == 2:
        data = np.frombuffer(raw, dtype=np.uint8).astype(np.uint16).reshape(int(o["rows"]), int(o["cols"]))
    else:
        data = np.frombuffer(raw, dtype=np.uint8).reshape(int(o["rows"]), int(o["cols"]))
    return data


def guess_slot(desc: str, iop: Optional[str]) -> str:
    d = (desc or "").lower()
    pl = None
    if re.search(r"sag", d):
        pl = "SAG"
    elif re.search(r"cor", d):
        pl = "COR"
    elif re.search(r"\bax|tra", d):
        pl = "AX"
    if not pl and iop:
        try:
            v = [float(x) for x in iop.split("\\")]
            if len(v) >= 6:
                nx = v[1] * v[5] - v[2] * v[4]
                ny = v[2] * v[3] - v[0] * v[5]
                nz = v[0] * v[4] - v[1] * v[3]
                ax, ay, az = abs(nx), abs(ny), abs(nz)
                if ax >= ay and ax >= az:
                    pl = "SAG"
                elif ay >= az:
                    pl = "COR"
                else:
                    pl = "AX"
        except Exception:
            pass
    if not pl:
        return ""
    fs = bool(re.search(r"fs|fat.?sat|stir|spair|spir", d))
    return pl + ("_FS" if fs else "_NOFS")


# ---------------------------------------------------------------------------
# Image -> slot assignment
# ---------------------------------------------------------------------------
def load_grayscale_from_file(file_storage):
    """Read one uploaded file (DICOM or image).

    Returns (arr, meta) where arr is a 2D uint8 array (or None) and
    meta is {"name":..., "desc":..., "iop":...} for DICOM else {"name":...}.
    """
    name = file_storage.filename.lower()
    buf = file_storage.read()
    file_storage.seek(0)
    meta = {"name": file_storage.filename}
    if name.endswith((".dcm", ".dicom")):
        if len(buf) > 132 and buf[128:132] == b"DICM":
            o = parse_dicom(buf)
            if not o:
                return None, None
            px = decode_dicom(buf, o)
            if px == "compressed" or px is None:
                return None, None
            meta["desc"] = o.get("desc", "")
            meta["iop"] = o.get("iop")
            return px.astype(np.uint8), meta
        return None, None
    arr = cv2.imdecode(np.frombuffer(buf, dtype=np.uint8), cv2.IMREAD_GRAYSCALE)
    if arr is None:
        return None, None
    return arr.astype(np.uint8), meta


def filename_slot(low: str) -> str:
    """Guess slot from a lowercase filename (image files)."""
    if re.search(r"sag", low):
        if re.search(r"nofs", low):
            return "SAG_NOFS"
        if re.search(r"fs|sat|stir", low):
            return "SAG_FS"
        return "SAG_NOFS"
    if re.search(r"cor", low):
        if re.search(r"nofs", low):
            return "COR_NOFS"
        if re.search(r"fs|sat|stir", low):
            return "COR_FS"
        return "COR_NOFS"
    if re.search(r"\bax|tra", low):
        if re.search(r"nofs", low):
            return "AX_NOFS"
        if re.search(r"fs|sat|stir", low):
            return "AX_FS"
        return "AX_NOFS"
    return "AX_FS"


def resize336(arr: np.ndarray) -> np.ndarray:
    return cv2.resize(arr, (W, H), interpolation=cv2.INTER_AREA)


def build_model_input(slot_images: dict):
    """
    slot_images: {slot_name: [np.ndarray (2D), ...]}  slices in acquisition order
    Returns X (6,16,336,336) uint8, mask (6,) uint8
    """
    X = np.zeros((S, D, H, W), dtype=np.uint8)
    mask = np.zeros(S, dtype=np.uint8)
    for slot, imgs in slot_images.items():
        if slot not in SLOT_TO_IDX:
            continue
        si = SLOT_TO_IDX[slot]
        if not imgs:
            continue
        n = len(imgs)
        if n >= D:
            start = (n - D) // 2
            chosen = imgs[start:start + D]
        else:
            chosen = list(imgs) + [np.zeros((H, W), dtype=np.uint8)] * (D - n)
        stack = np.stack([resize336(im) for im in chosen], axis=0)  # (16,336,336)
        X[si] = stack
        mask[si] = 1
    return X, mask


# ---------------------------------------------------------------------------
# Model + post-processor (loaded once)
# ---------------------------------------------------------------------------
_model: Optional[MultiTaskModel] = None
_proc: Optional[PostProcessor] = None


def get_model() -> MultiTaskModel:
    global _model
    if _model is None:
        encoder = SharedEncoder(pretrained=False).to(DEVICE).eval()
        _model = MultiTaskModel(encoder).to(DEVICE).eval()
        if CHECKPOINT.is_file():
            ckpt = torch.load(CHECKPOINT, map_location=DEVICE)
            _model.load_state_dict(ckpt["model_state_dict"])
            print(f"[server] loaded checkpoint: {CHECKPOINT}")
        else:
            print(f"[server] WARNING: no checkpoint at {CHECKPOINT} — random weights")
    return _model


def get_processor() -> PostProcessor:
    global _proc
    if _proc is None:
        cfg = PostProcessConfig()
        cfg.tau = dict(DEFAULT_TAU)
        if THRESHOLDS.is_file():
            try:
                data = json.loads(THRESHOLDS.read_text())
                cfg.tau.update(data.get("thresholds", {}))
                print(f"[server] loaded thresholds: {THRESHOLDS}")
            except Exception as exc:
                print(f"[server] could not load thresholds: {exc}")
        _proc = PostProcessor(config=cfg)
    return _proc


# ---------------------------------------------------------------------------
# Flask app
# ---------------------------------------------------------------------------
app = Flask(__name__, static_folder=str(ROOT), static_url_path="")


@app.route("/")
def index():
    return send_from_directory(ROOT, HTML_FILE.name)


@app.route("/api/infer", methods=["POST"])
def api_infer():
    if "files" not in request.files:
        return jsonify({"error": "no files field"}), 400
    files = request.files.getlist("files")
    if not files:
        return jsonify({"error": "no files"}), 400

    slot_images: dict = {s: [] for s in SLOT_ORDER}
    meta = []
    for fs in files:
        arr, m = load_grayscale_from_file(fs)
        if arr is None:
            continue
        # Determine slot: DICOM header (desc + iop) takes priority, else filename.
        slot = ""
        if m.get("desc") or m.get("iop"):
            slot = guess_slot(m.get("desc", ""), m.get("iop"))
        if not slot:
            slot = filename_slot(m["name"].lower())
        slot_images.setdefault(slot, []).append(arr)
        meta.append({
            "name": m["name"],
            "slot": slot,
            "desc": m.get("desc", ""),
            "shape": [int(arr.shape[0]), int(arr.shape[1])],
        })

    X, mask = build_model_input(slot_images)

    model = get_model()
    proc = get_processor()

    X_t = torch.from_numpy(X).to(DEVICE)[None]      # (1,6,16,336,336)
    mask_t = torch.from_numpy(mask).to(DEVICE)[None]  # (1,6)
    with torch.no_grad():
        out = model(X_t, mask_t)

    result = proc.process(
        out["logit_abn"][0].cpu().numpy(),
        out["logits_12"][0].cpu().numpy(),
        out.get("logits_region", torch.zeros(1, 10))[0].cpu().numpy(),
        out.get("heatmaps", torch.zeros(1, 12, 336, 336))[0].cpu().numpy(),
        study_id="upload",
    )
    d = proc.to_dict(result)

    warnings = []
    for i, present in enumerate(mask.tolist()):
        if not present:
            warnings.append(f"Missing slot: {SLOT_NAMES[i]}")

    return jsonify({
        "study_id": d["study_id"],
        "is_abnormal": d["is_abnormal"],
        "prob_abnormal": d["prob_abnormal"],
        "findings": d["findings"],
        "affected_regions": d["affected_regions"],
        "probs_findings": d["probs_findings"],
        "probs_regions": d["probs_regions"],
        "warnings": warnings,
        "meta": meta,
        "heatmaps_shape": d.get("heatmaps_shape"),
    })


if __name__ == "__main__":
    print(f"Device: {DEVICE}")
    print(f"HTML: {HTML_FILE} (exists={HTML_FILE.is_file()})")
    print(f"Checkpoint: {CHECKPOINT} (exists={CHECKPOINT.is_file()})")
    print(f"Thresholds: {THRESHOLDS} (exists={THRESHOLDS.is_file()})")
    app.run(host="127.0.0.1", port=8765, debug=False)

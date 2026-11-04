"""
Frontend — Gradio app for RSNA MRNet inference.

Upload a study (select from cached train/validation, or upload a .npy volume)
and get: is_abnormal, findings, affected_regions, confidence, heatmaps, warnings.

Usage:
    python app.py
Then open the URL Gradio prints (http://127.0.0.1:7860).
"""

from __future__ import annotations

from pathlib import Path

import gradio as gr
import numpy as np
import torch

from infer import run_inference, DEFAULT_CHECKPOINT, DEFAULT_THRESHOLDS
from dataset import MRNetDataset
from post_processing import FINDINGS, REGIONS

CACHE_ROOT = Path(r"D:\MachineLearning\RSNA\cache_preprocessed")


def list_studies(split: str) -> list[str]:
    ds = MRNetDataset(split, cache_root=CACHE_ROOT)
    return [ds.files[i].stem for i in range(len(ds))]


TRAIN_STUDIES = list_studies("train")
VAL_STUDIES = list_studies("validation")


def infer_study(
    study_id: str,
    checkpoint: str,
    thresholds: str,
    use_fitted_thresholds: bool,
) -> tuple[str, list[str], list[tuple[str, str, str]]]:
    """Run inference and return (json_text, findings_table, warning_list)."""
    ckpt = Path(checkpoint) if checkpoint and Path(checkpoint).is_file() else DEFAULT_CHECKPOINT
    thr = Path(thresholds) if (use_fitted_thresholds and thresholds and Path(thresholds).is_file()) else DEFAULT_THRESHOLDS

    result = run_inference(study_id, ckpt, thr, output_dir="gradio_output")
    r = result["result"]

    # JSON text
    json_text = (
        f"{{\n"
        f'  "study_id": "{r["study_id"]}",\n'
        f'  "is_abnormal": {r["is_abnormal"]},\n'
        f'  "prob_abnormal": {r["prob_abnormal"]},\n'
        f'  "findings": {r["findings"]},\n'
        f'  "affected_regions": {r["affected_regions"]},\n'
        f'  "confidence_findings": {r["probs_findings"]},\n'
        f'  "confidence_regions": {r["probs_regions"]},\n'
        f'  "warnings": {result["warnings"]}\n'
        f"}}"
    )

    # Findings table: (finding, confidence, status)
    findings_table = []
    for name in FINDINGS:
        conf = r["probs_findings"].get(name, 0.0)
        status = "✓" if name in r["findings"] else "—"
        findings_table.append((name, f"{conf:.3f}", status))

    return json_text, findings_table, result["warnings"]


def build_app() -> gr.Blocks:
    with gr.Blocks(title="RSNA MRNet — Knee MRI Inference") as demo:
        gr.Markdown("# RSNA MRNet — Knee MRI Abnormality Detection")
        gr.Markdown(
            "Select a cached study to run inference. "
            "Outputs: abnormality flag, 12 findings, 10 regions, per-target confidence, heatmaps, and warnings."
        )

        with gr.Row():
            with gr.Column(scale=1):
                split = gr.Radio(["train", "validation"], value="validation", label="Split")
                study_dropdown = gr.Dropdown(
                    choices=VAL_STUDIES, value=VAL_STUDIES[0] if VAL_STUDIES else None,
                    label="Study ID", allow_custom_value=True)
                split.change(
                    fn=lambda s: gr.Dropdown(choices=list_studies(s),
                                             value=list_studies(s)[0] if list_studies(s) else None),
                    inputs=split, outputs=study_dropdown)

                checkpoint = gr.Textbox(
                    value=str(DEFAULT_CHECKPOINT), label="Checkpoint path")
                thresholds = gr.Textbox(
                    value=str(DEFAULT_THRESHOLDS), label="Thresholds JSON path")
                use_fitted = gr.Checkbox(value=True, label="Use fitted thresholds")
                run_btn = gr.Button("Run Inference", variant="primary")

            with gr.Column(scale=1):
                result_json = gr.Code(label="Result JSON", language="json")
                warnings_out = gr.JSON(label="Warnings", value={})

        with gr.Row():
            findings_table = gr.Dataframe(
                headers=["Finding", "Confidence", "Detected"],
                label="12 Findings",
                wrap=True)

        with gr.Row():
            region_conf = gr.Dataframe(
                headers=["Region", "Confidence"],
                label="10 Regions",
                wrap=True)

        with gr.Row():
            heatmap_gallery = gr.Gallery(
                label="Heatmap Overlays (per finding)",
                show_label=True,
                columns=4,
                rows=3,
                height="400px")

        def run(split_val, study_id, ckpt, thr, use_fitted):
            ckpt_p = Path(ckpt) if ckpt and Path(ckpt).is_file() else DEFAULT_CHECKPOINT
            thr_p = Path(thr) if (use_fitted and thr and Path(thr).is_file()) else DEFAULT_THRESHOLDS
            result = run_inference(study_id, ckpt_p, thr_p, output_dir="gradio_output")
            r = result["result"]

            json_text = (
                f"{{\n"
                f'  "study_id": "{r["study_id"]}",\n'
                f'  "is_abnormal": {r["is_abnormal"]},\n'
                f'  "prob_abnormal": {r["prob_abnormal"]},\n'
                f'  "findings": {r["findings"]},\n'
                f'  "affected_regions": {r["affected_regions"]},\n'
                f'  "confidence_findings": {r["probs_findings"]},\n'
                f'  "confidence_regions": {r["probs_regions"]},\n'
                f'  "warnings": {result["warnings"]}\n'
                f"}}"
            )

            # Findings table: (finding, confidence, status)
            findings_rows = []
            for name in FINDINGS:
                conf = r["probs_findings"].get(name, 0.0)
                status = "✓" if name in r["findings"] else "—"
                findings_rows.append([name, f"{conf:.3f}", status])

            # Regions table
            region_rows = [[reg, f"{r['probs_regions'].get(reg, 0.0):.3f}"] for reg in REGIONS]

            # Heatmap images
            overlay_dir = Path(result["output_dir"]) / "overlays"
            heatmap_images = []
            if overlay_dir.is_dir():
                heatmap_images = [str(f) for f in sorted(overlay_dir.glob("*.png"))]

            return json_text, findings_rows, result["warnings"], region_rows, heatmap_images

        run_btn.click(
            fn=run,
            inputs=[split, study_dropdown, checkpoint, thresholds, use_fitted],
            outputs=[result_json, findings_table, warnings_out, region_conf, heatmap_gallery],
        )

    return demo


if __name__ == "__main__":
    app = build_app()
    app.launch(server_name="127.0.0.1", server_port=7860, share=False)

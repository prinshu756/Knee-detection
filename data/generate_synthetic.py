"""
Generate synthetic RSNA-like .npy image data matching the CSV file structure.

Creates grayscale CT-scan-like slices (.npy files) organized as:
    data/
        axial/
            train/0000.npy ... train/NNNN.npy
            valid/0000.npy ... valid/NNNN.npy
        sagittal/
            train/0000.npy ... train/NNNN.npy
            valid/0000.npy ... valid/NNNN.npy

And a labels file mapping each file -> class (0 = normal, 1 = abnormal).
"""
from __future__ import annotations

import os
import numpy as np
import pandas as pd


def generate_synthetic_rsna(
    output_dir: str = "data",
    n_axial_train: int = 400,
    n_axial_valid: int = 100,
    n_sagittal_train: int = 400,
    n_sagittal_valid: int = 100,
    img_size: tuple[int, int] = (64, 64),
    abnormal_ratio: float = 0.35,
    seed: int = 42,
) -> None:
    """Generate synthetic .npy slices and a labels CSV."""
    rng = np.random.default_rng(seed)

    base = os.path.join(output_dir)
    records: list[dict] = []

    for view, n_train, n_valid in (
        ("axial", n_axial_train, n_axial_valid),
        ("sagittal", n_sagittal_train, n_sagittal_valid),
    ):
        for split, n in (("train", n_train), ("valid", n_valid)):
            folder = os.path.join(base, view, split)
            os.makedirs(folder, exist_ok=True)

            for i in range(n):
                fname = f"{i:04d}.npy"
                fpath = os.path.join(folder, fname)

                # Base "normal" tissue: low-intensity background with some noise
                img = rng.normal(loc=0.15, scale=0.05, size=img_size).astype(np.float32)
                img = np.clip(img, 0.0, 1.0)

                is_abnormal = rng.random() < abnormal_ratio
                if is_abnormal:
                    # Add a bright "lesion" blob to simulate pathology
                    cx = rng.integers(img_size[0] // 4, 3 * img_size[0] // 4)
                    cy = rng.integers(img_size[1] // 4, 3 * img_size[1] // 4)
                    radius = rng.integers(4, 10)
                    yy, xx = np.ogrid[: img_size[0], : img_size[1]]
                    mask = (xx - cx) ** 2 + (yy - cy) ** 2 <= radius**2
                    img[mask] = np.clip(img[mask] + rng.uniform(0.5, 0.9), 0.0, 1.0)

                np.save(fpath, img)
                records.append(
                    {
                        "Name": f"{view}/{split}/{fname}",
                        "Folder": split,
                        "Size": os.path.getsize(fpath),
                        "label": int(is_abnormal),
                    }
                )

    labels_df = pd.DataFrame(records)
    labels_path = os.path.join(base, "labels.csv")
    labels_df.to_csv(labels_path, index=False)
    print(f"Generated {len(labels_df)} synthetic slices.")
    print(f"  Train: {(labels_df['Folder'] == 'train').sum()}")
    print(f"  Valid: {(labels_df['Folder'] == 'valid').sum()}")
    print(f"  Abnormal: {(labels_df['label'] == 1).sum()}")
    print(f"  Normal:  {(labels_df['label'] == 0).sum()}")
    print(f"Labels saved to {labels_path}")


if __name__ == "__main__":
    generate_synthetic_rsna()

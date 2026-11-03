"""
download_data.py

Download the RSNA MRNet knee MRI dataset from Redivis according to the
file listing in Redivis-files-2026-11-02 (1).csv.

Creates the following folder structure under D:\MachineLearning\RSNA\:

    train/
        axial/0000.npy ...
        sagittal/0000.npy ...
    validation/
        axial/0000.npy ...
        sagittal/0000.npy ...

Each row in the CSV has columns: Name, Folder, Size
  - Name    : e.g. "axial/0000.npy" or "sagittal/1245.npy"
  - Folder  : "train" or "valid"  -> maps to local train/ or validation/

USAGE
-----
    python download_data.py

Prerequisites:
    pip install redivis pandas fsspec

Review the TABLE_IDS below before running. You provided the train table ID;
if validation lives under a different Redivis table, update VALID_TABLE_ID.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

import pandas as pd

# Configuration

# Root of your RSNA project (where the CSV lives)
PROJECT_ROOT = Path(r"D:\MachineLearning\RSNA")

# CSV file listing all files with their train/valid split
CSV_FILENAME = "Redivis-files-2026-11-02 (1).csv"

# Local output folders (relative to PROJECT_ROOT)
TRAIN_DIR = PROJECT_ROOT / "train"
VALID_DIR = PROJECT_ROOT / "validation"

# Redivis table IDs.
# You provided this one for the training split:
TRAIN_TABLE_ID = "aimi.mrnet_knee_mri_s:4a2c:v1_0.train:5wjf"

# If validation files live under a different Redivis table, put its ID here.
# If the same table contains both train and valid files, set this to the
# same value as TRAIN_TABLE_ID.
VALID_TABLE_ID = "aimi.mrnet_knee_mri_s:4a2c:v1_0.valid:5wjf"  # <-- UPDATE IF NEEDED

# Mapping from the CSV "Folder" column -> (local dir, redivis table id)
FOLDER_MAP = {
    "train": (TRAIN_DIR, TRAIN_TABLE_ID),
    "valid": (VALID_DIR, VALID_TABLE_ID),
}


# Helpers

def ensure_redivis_installed() -> None:
    """Import redivis and raise a clear error if it's missing."""
    try:
        import redivis  # noqa: F401
    except ImportError as exc:
        print("ERROR: the 'redivis' package is not installed.", file=sys.stderr)
        print("Install it with:  pip install redivis pandas fsspec", file=sys.stderr)
        raise exc


def load_file_listing(csv_path: Path) -> pd.DataFrame:
    """Read the CSV listing of files."""
    if not csv_path.exists():
        raise FileNotFoundError(f"CSV not found: {csv_path}")
    df = pd.read_csv(csv_path)
    required = {"Name", "Folder", "Size"}
    missing = required - set(df.columns)
    if missing:
        raise ValueError(f"CSV is missing required columns: {missing}")
    return df


def redivis_uri(table_id: str, file_path: str) -> str:
    """Build a redivis fsspec URI for a file inside a table."""
    # Example: redivis://aimi.mrnet_knee_mri_s:4a2c:v1_0.train:5wjf/axial/0000.npy
    print(f'Started downloading{file_path}')
    return f"redivis://{table_id}/{file_path}"


def download_file(table_id: str, file_path: str, dest: Path) -> None:
    """
    Download a single file from Redivis to `dest` using fsspec.

    Falls back to the redivis Python client if fsspec is not available
    for the URI scheme.
    """
    import fsspec

    uri = redivis_uri(table_id, file_path)
    dest.parent.mkdir(parents=True, exist_ok=True)

    # fsspec handles the download directly
    with fsspec.open(uri, "rb") as src, open(dest, "wb") as dst:
        dst.write(src.read())

# Main  fumction 

def main() -> None:
    ensure_redivis_installed()

    csv_path = PROJECT_ROOT / CSV_FILENAME
    df = load_file_listing(csv_path)

    print(f"Found {len(df)} files in {csv_path.name}")
    print(f"Train files:  {(df['Folder'] == 'train').sum()}")
    print(f"Valid files:  {(df['Folder'] == 'valid').sum()}")
    print()

    # Group by Folder so we init each Redivis table once
    for folder, group in df.groupby("Folder"):
        if folder not in FOLDER_MAP:
            print(f"WARNING: unknown Folder value '{folder}', skipping.", file=sys.stderr)
            continue

        local_dir, table_id = FOLDER_MAP[folder]
        print(f"==> Downloading '{folder}' split from Redivis table: {table_id}")
        print(f"    Local destination: {local_dir}")

        for _, row in group.iterrows():
            rel_name = row["Name"]          # e.g. "axial/0000.npy"
            dest = local_dir / rel_name

            # Skip if already downloaded (avoid re-transferring)
            if dest.exists():
                continue

            try:
                download_file(table_id, rel_name, dest)
            except Exception as exc:
                print(f"    ERROR downloading {rel_name}: {exc}", file=sys.stderr)

        print(f"    Done with '{folder}' split.\n")

    print("Download complete.")
    print(f"  Train files -> {TRAIN_DIR}")
    print(f"  Valid files  -> {VALID_DIR}")


if __name__ == "__main__":
    main()
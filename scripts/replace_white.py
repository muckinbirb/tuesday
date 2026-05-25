#!/usr/bin/env python3
"""
replace_white.py — replace pure white (#FFFFFF) pixels in all PNGs in a folder.
Saves results to a parallel output folder; originals untouched.

Usage: python3 replace_white.py <input_folder> <hex_color>
  Example: python3 replace_white.py "/path/to/Spread_01_layers" F4EAD8
"""

import sys
import os
import numpy as np
from PIL import Image

def hex_to_rgb(hex_color):
    h = hex_color.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def replace_white_in_png(src_path, dst_path, new_rgb):
    img = Image.open(src_path).convert("RGBA")
    data = np.array(img, dtype=np.uint8)

    # Mask: pixels where R=255, G=255, B=255 and alpha > 0
    mask = (
        (data[:, :, 0] == 255) &
        (data[:, :, 1] == 255) &
        (data[:, :, 2] == 255) &
        (data[:, :, 3] > 0)
    )

    if not mask.any():
        return False

    data[mask, 0] = new_rgb[0]
    data[mask, 1] = new_rgb[1]
    data[mask, 2] = new_rgb[2]

    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    Image.fromarray(data).save(dst_path, "PNG", compress_level=6)
    return True

def main():
    if len(sys.argv) < 3:
        print("Usage: replace_white.py <input_folder> <hex_color>")
        sys.exit(1)

    input_folder = sys.argv[1].rstrip("/")
    hex_color = sys.argv[2]
    output_folder = input_folder + "_recolored"
    new_rgb = hex_to_rgb(hex_color)

    print(f"Input:  {os.path.basename(input_folder)}")
    print(f"Output: {os.path.basename(output_folder)}")
    print(f"Color:  #{hex_color.upper()} → RGB{new_rgb}")
    print()

    processed = 0
    skipped = 0
    errors = 0

    for root, dirs, files in os.walk(input_folder):
        dirs.sort()
        for fname in sorted(files):
            if not fname.lower().endswith(".png"):
                continue
            src = os.path.join(root, fname)
            rel = os.path.relpath(src, input_folder)
            dst = os.path.join(output_folder, rel)
            try:
                changed = replace_white_in_png(src, dst, new_rgb)
                if changed:
                    print(f"  Saved: {rel}")
                    processed += 1
                else:
                    print(f"  Skipped (no white): {rel}")
                    skipped += 1
            except Exception as e:
                print(f"  ERROR: {rel} — {e}")
                errors += 1

    print()
    print(f"Done. {processed} updated, {skipped} skipped (no white), {errors} errors.")
    print(f"Output folder: {output_folder}")

if __name__ == "__main__":
    main()

# replace_white.py

Replaces pure white (`#FFFFFF`) pixels in all PNGs inside a folder (recursively) with a new color. Saves results into a new `_recolored` folder alongside the original — originals are never modified.

## Requirements

Python 3 with Pillow and numpy:

```bash
python3 -m pip install Pillow numpy
```

## Usage

```bash
python3 scripts/replace_white.py "/path/to/layers/folder" "RRGGBB"
```

### Example

```bash
python3 scripts/replace_white.py \
  "/Users/annkennedy/Documents/CYOD/Raw Spread PSDs/Spread_01_layers" \
  "F4EAD8"
```

This reads from `Spread_01_layers/` and writes to `Spread_01_layers_recolored/`, mirroring the full subfolder structure.

## What it does

- Walks every `.png` in the input folder and all subfolders
- For each PNG: replaces pixels where R=255, G=255, B=255 (and alpha > 0) with the new color
- Transparency is preserved — only the RGB values of white pixels change
- Skips files with no white pixels (logs them as "Skipped")
- Creates the output folder automatically if it doesn't exist

## Output

Progress is printed to the terminal as it runs, with a summary at the end:

```
Done. 9 updated, 21 skipped (no white), 0 errors.
Output folder: .../Spread_01_layers_recolored
```

## Notes

- The hex color should be 6 characters, with or without a leading `#` (e.g. `F4EAD8` or `#F4EAD8`)
- Only pure white is replaced — near-whites and off-whites are left alone
- To run on all spreads at once, loop over the folders:

```bash
BASE="/Users/annkennedy/Documents/CYOD/Raw Spread PSDs"
for folder in Spread_01_layers Spread_01-02_layers Spread_03-08_layers \
              Spread_09-14_layers "Spread_15-20,_23_layers" \
              Spread_21-22,_24-25-Recovered_layers; do
    python3 scripts/replace_white.py "$BASE/$folder" "F4EAD8"
done
```

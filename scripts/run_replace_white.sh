#!/usr/bin/env bash
# run_replace_white.sh — replace pure white pixels in all PNGs in a folder
# Saves results into a new folder alongside the original; originals untouched.
# Usage: ./scripts/run_replace_white.sh "/path/to/layers/folder" "FF5733"

set -euo pipefail

if [[ $# -lt 2 ]]; then
    echo "Usage: $0 /path/to/layers/folder RRGGBB"
    echo "  Example: $0 \"/path/to/Spread_01_layers\" \"FF5733\""
    exit 1
fi

TARGET_FOLDER="$(realpath "$1")"
REPLACE_COLOR="${2#\#}"  # strip leading # if present
OUTPUT_FOLDER="${TARGET_FOLDER}_recolored"
JSX_PATH="$(realpath "$(dirname "$0")/replace_white.jsx")"
LOG_PATH="${OUTPUT_FOLDER}/replace_white_log.txt"

if [[ ! -d "$TARGET_FOLDER" ]]; then
    echo "Error: Folder not found: $TARGET_FOLDER"
    exit 1
fi

mkdir -p "$OUTPUT_FOLDER"
rm -f "$LOG_PATH"

escape_js() { printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'; }
JS_FOLDER="$(escape_js "$TARGET_FOLDER")"
JS_OUTPUT="$(escape_js "$OUTPUT_FOLDER")"
JS_JSX="$(escape_js "$JSX_PATH")"
JS_COLOR="$(escape_js "$REPLACE_COLOR")"

WRAPPER="/tmp/ps_replace_white_current.jsx"
cat > "$WRAPPER" <<EOF
var targetFolder = "${JS_FOLDER}";
var outputFolder = "${JS_OUTPUT}";
var replaceColor = "${JS_COLOR}";
\$.evalFile(new File("${JS_JSX}"));
EOF

echo "Input:  $(basename "$TARGET_FOLDER")"
echo "Output: $(basename "$OUTPUT_FOLDER")"
echo "Color:  #${REPLACE_COLOR}"

osascript -e 'tell application "Adobe Photoshop 2026" to activate'

osascript <<APPLESCRIPT
ignoring application responses
    tell application "Adobe Photoshop 2026"
        do javascript file "$WRAPPER"
    end tell
end ignoring
APPLESCRIPT

ELAPSED=0
TIMEOUT=7200
echo "Waiting for Photoshop to finish..."
until strings "$LOG_PATH" 2>/dev/null | grep -q "^Done\." || [[ $ELAPSED -ge $TIMEOUT ]]; do
    sleep 10
    ELAPSED=$((ELAPSED + 10))
done

rm -f "$WRAPPER"

if [[ $ELAPSED -ge $TIMEOUT ]]; then
    echo "ERROR: Timed out after ${TIMEOUT}s waiting for Photoshop."
    exit 1
fi

strings "$LOG_PATH"
echo "---"

#!/usr/bin/env bash
# run_export.sh — invoke export_layers.jsx in Photoshop for a given PSD
# Usage: ./scripts/run_export.sh "/path/to/MyFile.psd"

set -euo pipefail

if [[ $# -lt 1 ]]; then
    echo "Usage: $0 /path/to/file.psd"
    exit 1
fi

PSD_PATH="$(realpath "$1")"
JSX_PATH="$(realpath "$(dirname "$0")/export_layers.jsx")"
LOG_PATH="${PSD_PATH%.psd}_export_log.txt"

if [[ ! -f "$PSD_PATH" ]]; then
    echo "Error: PSD not found: $PSD_PATH"
    exit 1
fi

# Don't wipe the log — the JSX recreates it and resume skips existing PNGs

escape_js() { printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'; }
JS_PSD="$(escape_js "$PSD_PATH")"
JS_JSX="$(escape_js "$JSX_PATH")"

# Write wrapper to a stable path (not deleted until after Photoshop finishes)
WRAPPER="/tmp/ps_export_current.jsx"
cat > "$WRAPPER" <<EOF
var psdPath = "${JS_PSD}";
\$.evalFile(new File("${JS_JSX}"));
EOF

echo "Exporting layers from: $(basename "$PSD_PATH")"

# Step 1: activate Photoshop and wait until it's ready (blocking, quick)
osascript -e 'tell application "Adobe Photoshop 2026" to activate'

# Step 2: fire the script without waiting for reply so we don't block/timeout
osascript <<APPLESCRIPT
ignoring application responses
    tell application "Adobe Photoshop 2026"
        do javascript file "$WRAPPER"
    end tell
end ignoring
APPLESCRIPT

# Poll for the log file to contain the "Done." completion line.
# The wrapper is kept alive until polling ends so Photoshop can read it.
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

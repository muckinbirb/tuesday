# coords

A lightweight click-to-copy coordinate tool for positioning elements over a fullscreen image. Built on 2026-05-22 during work on the Choose Your Own Day project.

## What it does

- **Hover** over the image to see a red crosshair (horizontal + vertical rules)
- **Click** anywhere to copy `x% y%` to your clipboard
- **Toggle** the tool on/off with the button in the bottom-left corner

Coordinates are returned as percentages relative to the image, so they work at any screen size.

## How to use

1. Add the required HTML to your page:

```html
<div id="stage">
  <img id="spread" alt="">
  <!-- other layers go here -->
</div>

<div id="coord-ui">
  <div id="coords"></div>
  <button id="coord-toggle">📍 coords: on</button>
</div>
```

2. Drop in the script (after your other scripts):

```html
<script src="coord-tool.js"></script>
```

That's it. The script injects its own CSS, so no separate stylesheet is needed.

## Notes

- `#stage` should be `position: relative` and sized to match your image
- The crosshair lines are `pointer-events: none` so they don't interfere with clicks
- Works alongside the tuesday engine — the engine's `coordsOn` flag controls click-to-skip vs click-to-copy separately

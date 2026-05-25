/**
 * coords — click-to-copy coordinate tool
 *
 * Drop this script into any project that uses a fullscreen image stage.
 * Required HTML structure:
 *
 *   <div id="stage">
 *     <img id="spread" alt="">
 *     <!-- other content -->
 *   </div>
 *   <div id="coord-ui">
 *     <div id="coords"></div>
 *     <button id="coord-toggle">📍 coords: on</button>
 *   </div>
 *
 * Click anywhere on #spread to copy "x% y%" to clipboard.
 * Hover to see a red crosshair. Toggle with the button.
 */

(function () {
  const stage       = document.getElementById('stage');
  const spread      = document.getElementById('spread');
  const coords      = document.getElementById('coords');
  const coordToggle = document.getElementById('coord-toggle');

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .crosshair-h, .crosshair-v {
      position: absolute;
      background: red;
      opacity: 0.35;
      pointer-events: none;
      display: none;
    }
    .crosshair-h { left: 0; width: 100%; height: 1px; }
    .crosshair-v { top: 0; height: 100%; width: 1px; }

    #coord-ui {
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-family: monospace;
      font-size: 13px;
    }
    #coords {
      background: rgba(0,0,0,0.75);
      color: #fff;
      padding: 0.4rem 0.7rem;
      border-radius: 4px;
      pointer-events: none;
      display: none;
    }
    #coord-toggle {
      background: rgba(0,0,0,0.75);
      color: #fff;
      border: none;
      padding: 0.4rem 0.7rem;
      border-radius: 4px;
      cursor: pointer;
      text-align: left;
    }
    #coord-toggle:hover { background: rgba(0,0,0,0.9); }
  `;
  document.head.appendChild(style);

  // Crosshair lines
  const crosshairH = document.createElement('div');
  const crosshairV = document.createElement('div');
  crosshairH.className = 'crosshair-h';
  crosshairV.className = 'crosshair-v';
  stage.appendChild(crosshairH);
  stage.appendChild(crosshairV);

  let coordsOn = true;

  function setCoords(on) {
    coordsOn = on;
    coords.style.display = on ? 'block' : 'none';
    coordToggle.textContent = `📍 coords: ${on ? 'on' : 'off'}`;
    if (!on) {
      crosshairH.style.display = 'none';
      crosshairV.style.display = 'none';
    }
  }

  coordToggle.addEventListener('click', () => setCoords(!coordsOn));

  spread.addEventListener('mousemove', e => {
    if (!coordsOn) return;
    const r = spread.getBoundingClientRect();
    crosshairV.style.left = ((e.clientX - r.left) / r.width  * 100) + '%';
    crosshairH.style.top  = ((e.clientY - r.top)  / r.height * 100) + '%';
  });

  spread.addEventListener('mouseenter', () => {
    if (!coordsOn) return;
    crosshairH.style.display = 'block';
    crosshairV.style.display = 'block';
  });

  spread.addEventListener('mouseleave', () => {
    crosshairH.style.display = 'none';
    crosshairV.style.display = 'none';
  });

  spread.addEventListener('click', e => {
    if (!coordsOn) return;
    const r = spread.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
    const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
    const text = `${x}% ${y}%`;
    coords.textContent = `${text} — copied!`;
    navigator.clipboard.writeText(text);
  });

  setCoords(true);
})();

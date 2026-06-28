const stage            = document.getElementById('stage');
const spread           = document.getElementById('spread');
const textLayer        = document.getElementById('text-layer');
const hotspots         = document.getElementById('hotspots');
const coords           = document.getElementById('coords');
const coordToggle      = document.getElementById('coord-toggle');
const spreadIdDisplay     = document.getElementById('spread-id');
const spreadWidthDisplay  = document.getElementById('spread-width');
const smallScreenOverlay  = document.getElementById('small-screen-overlay');
const smallScreenHeader   = document.getElementById('small-screen-header');
const smallScreenText     = document.getElementById('small-screen-text');
const smallScreenContent  = document.getElementById('small-screen-content');
const splashOverlay    = document.getElementById('splash-overlay');
const btnBack          = document.getElementById('btn-back');
const btnContinue      = document.getElementById('btn-continue');

const SMALL_SCREEN_HEADER  = "oops, too small :-(";
const SMALL_SCREEN_MESSAGE = "this experience works best on desktop. please come back on a larger screen!";
const BREAKPOINT = 600;

let overlayShown = false;
let overlayTypeTimer = null;

function typeString(el, str, speed, onDone) {
  let i = 0;
  overlayTypeTimer = setInterval(() => {
    el.textContent = str.slice(0, ++i);
    if (i >= str.length) { clearInterval(overlayTypeTimer); if (onDone) onDone(); }
  }, speed);
}

function showSmallScreenOverlay() {
  overlayShown = true;
  smallScreenOverlay.classList.add('visible');
  stage.classList.add('blurred');
  smallScreenHeader.textContent = SMALL_SCREEN_HEADER;
  smallScreenText.textContent = SMALL_SCREEN_MESSAGE;
  smallScreenContent.style.height = smallScreenContent.offsetHeight + 'px';
  smallScreenText.textContent = '';
  typeString(smallScreenText, SMALL_SCREEN_MESSAGE, 30, null);
}

function hideSmallScreenOverlay() {
  overlayShown = false;
  clearInterval(overlayTypeTimer);
  smallScreenOverlay.classList.remove('visible');
  stage.classList.remove('blurred');
  smallScreenContent.style.height = '';
  smallScreenHeader.textContent = '';
  smallScreenText.textContent = '';
}

function addHoverAnim(btn, src1, src2) {
  const img = btn.querySelector('img');
  let timer = null;
  let state = 0;
  btn.addEventListener('mouseenter', () => {
    timer = setInterval(() => {
      state = 1 - state;
      img.src = state === 0 ? src1 : src2;
    }, 200);
  });
  btn.addEventListener('mouseleave', () => {
    clearInterval(timer);
    img.src = src1;
    state = 0;
  });
}

addHoverAnim(document.getElementById('btn-back'), 'images/Global-Back1.png',     'images/Global-Back2.png');
addHoverAnim(document.getElementById('btn-die'),  'images/Global-ColorDie1.png', 'images/Global-ColorDie2.png');
addHoverAnim(document.getElementById('btn-menu'), 'images/Global-Menu1.png',     'images/Global-Menu2.png');

let dieRollCount = 0;
document.getElementById('btn-die').addEventListener('click', () => {
  dieRollCount++;
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 41) + 40; // 40–80%
  const isLight = dieRollCount % 3 === 0;
  const l = isLight
    ? Math.floor(Math.random() * 21) + 70  // 70–90% (black-legible)
    : Math.floor(Math.random() * 41) + 25; // 25–65% (not black, not necessarily light)
  document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
});
function addHoverSwap(btn, src1, src2) {
  const img = btn.querySelector('img');
  btn.addEventListener('mouseenter', () => { img.src = src2; });
  btn.addEventListener('mouseleave', () => { img.src = src1; });
}

function addBubbleHover(btn, srcA, srcB) {
  const img = btn.querySelector('img');
  let timer = null, state = 0;
  btn.addEventListener('mouseenter', () => {
    state = 0;
    timer = setInterval(() => {
      state = 1 - state;
      img.src = state === 0 ? srcA : srcB;
    }, 200);
  });
  btn.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = null;
    state = 0;
    img.src = srcA;
  });
}

addBubbleHover(document.getElementById('btn-start'), 'images/Splash_StartBubble-a.png', 'images/Splash_StartBubble-b.png');
addBubbleHover(btnContinue,                          'images/Splash_ContBubble-a.png',  'images/Splash_ContBubble-b.png');

const bgMusic = document.getElementById('bg-music');

let musicOn = true;
let sfxOn   = true;

const btnMusic   = document.getElementById('btn-music');
const btnSfx     = document.getElementById('btn-sfx');
const btnRestart = document.getElementById('btn-restart');

function addToggleHover(btn, src1on, src2on, src1off, src2off, getState) {
  const img = btn.querySelector('img');
  let timer = null, frame = 0;
  btn.addEventListener('mouseenter', () => {
    frame = 0;
    timer = setInterval(() => {
      frame = 1 - frame;
      const [a, b] = getState() ? [src1on, src2on] : [src1off, src2off];
      img.src = frame === 0 ? a : b;
    }, 200);
  });
  btn.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = null;
    img.src = getState() ? src1on : src1off;
  });
}

addToggleHover(btnMusic,
  'images/Menu-Music-On1.png', 'images/Menu-Music-On2.png',
  'images/Menu-Music-Off1.png', 'images/Menu-Music-Off2.png',
  () => musicOn
);

addToggleHover(btnSfx,
  'images/Menu-SFX-On1.png', 'images/Menu-SFX-On2.png',
  'images/Menu-SFX-Off1.png', 'images/Menu-SFX-Off2.png',
  () => sfxOn
);

addHoverAnim(btnRestart, 'images/Menu-Restart1.png', 'images/Menu-Restart2.png');

btnMusic.addEventListener('click', () => {
  musicOn = !musicOn;
  btnMusic.querySelector('img').src = musicOn ? 'images/Menu-Music-On1.png' : 'images/Menu-Music-Off1.png';
  if (musicOn) bgMusic.play(); else bgMusic.pause();
});

btnSfx.addEventListener('click', () => {
  sfxOn = !sfxOn;
  btnSfx.querySelector('img').src = sfxOn ? 'images/Menu-SFX-On1.png' : 'images/Menu-SFX-Off1.png';
});

btnRestart.addEventListener('click', () => {
  closeMenu();
  pageHistory.length = 0;
  document.body.style.backgroundColor = '';
  renderPage('splash', false);
});

btnBack.addEventListener('click', goBack);

const menuOverlay   = document.getElementById('menu-overlay');
const btnMenu       = document.getElementById('btn-menu');
const btnCloseMenu  = document.getElementById('btn-close-menu');

addHoverAnim(btnCloseMenu, 'images/Global-Close1.png', 'images/Global-Close2.png');
btnCloseMenu.addEventListener('click', closeMenu);

const saxImg             = document.getElementById('sax-img');
const specialThanksBlock = document.getElementById('special-thanks-block');
let saxTimer = null, saxFrame = 0;

specialThanksBlock.addEventListener('mouseenter', () => {
  saxImg.style.display = 'block';
  saxFrame = 0;
  saxTimer = setInterval(() => {
    saxFrame = 1 - saxFrame;
    saxImg.src = saxFrame === 0 ? 'images/Menu-Sax1.png' : 'images/Menu-Sax2.png';
  }, 200);
});

specialThanksBlock.addEventListener('mouseleave', () => {
  clearInterval(saxTimer);
  saxTimer = null;
  saxImg.style.display = 'none';
  saxImg.src = 'images/Menu-Sax1.png';
});

const btnDie = document.getElementById('btn-die');
const navUi  = document.getElementById('nav-ui');

function openMenu() {
  menuOverlay.classList.add('visible');
  stage.classList.add('blurred');
  splashOverlay.classList.add('blurred');
  navUi.style.visibility = 'hidden';
}

function closeMenu() {
  menuOverlay.classList.remove('visible');
  stage.classList.remove('blurred');
  splashOverlay.classList.remove('blurred');
  navUi.style.visibility = '';
}

btnMenu.addEventListener('click', () => {
  menuOverlay.classList.contains('visible') ? closeMenu() : openMenu();
});

menuOverlay.addEventListener('click', e => {
  if (e.target === menuOverlay) closeMenu();
});

new ResizeObserver(() => {
  const w = spread.clientWidth;
  document.documentElement.style.setProperty('--font-scale', (w / 1000).toFixed(4));
  spreadWidthDisplay.textContent = `spread: ${w}px`;
  if (!currentPage || currentPage === 'splash') return;
  if (w < BREAKPOINT && !overlayShown) showSmallScreenOverlay();
  if (w >= BREAKPOINT && overlayShown) hideSmallScreenOverlay();
}).observe(spread);

// ── Coordinate helper ─────────────────────────────────────────
let coordsOn = true;

const crosshairH = document.createElement('div');
const crosshairV = document.createElement('div');
crosshairH.className = 'crosshair-h';
crosshairV.className = 'crosshair-v';
stage.appendChild(crosshairH);
stage.appendChild(crosshairV);

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

function setCoords(on) {
  coordsOn = on;
  const ui = document.getElementById('coord-ui');
  ui.style.opacity = on ? '1' : '0';
  ui.style.pointerEvents = on ? 'auto' : 'none';
  coords.style.display = on ? 'block' : 'none';
  coordToggle.textContent = `📍 coords: ${on ? 'on' : 'off'}`;
  if (!on) {
    crosshairH.style.display = 'none';
    crosshairV.style.display = 'none';
  }
}

coordToggle.addEventListener('click', () => setCoords(!coordsOn));

spread.addEventListener('click', e => {
  if (!coordsOn) return;
  const r = spread.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
  const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
  const text = `${x}% ${y}%`;
  coords.textContent = `${text} — copied!`;
  navigator.clipboard.writeText(text);
});

setCoords(false);

const FADE_MS      = 350;
const POST_FADE_MS = 500;

let typeTimer = null;
let pageOverlays = [];
let currentPage = null;
const pageHistory = [];

function triggerOverlay(ov) {
  const img = document.createElement('img');
  img.className = `overlay ${ov.jitter || ''}`.trim();
  img.src = ov.src;
  stage.insertBefore(img, hotspots);
  if (!img.className.includes('twinkle') && !img.className.includes('z-seq') && !img.classList.contains('beep')) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      img.style.opacity = '1';
    }));
  }
}

function fireOverlays(trigger, index) {
  pageOverlays
    .filter(ov => ov.trigger === trigger && (index === undefined || ov.index === index))
    .forEach(ov => setTimeout(() => triggerOverlay(ov), ov.delay || 0));
}

// ── Polygon bubble helpers ────────────────────────────────────
function distributeWords(text, slotWidths) {
  const span = document.createElement('span');
  Object.assign(span.style, {
    position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap',
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '10pt', letterSpacing: '-0.01em'
  });
  document.body.appendChild(span);
  const measure = t => { span.textContent = t; return span.getBoundingClientRect().width; };

  const words = text.split(' ');
  const lines = Array(slotWidths.length).fill('');
  let s = 0, w = 0;
  while (w < words.length && s < slotWidths.length) {
    const candidate = lines[s] ? lines[s] + ' ' + words[w] : words[w];
    if (measure(candidate) <= slotWidths[s]) {
      lines[s] = candidate;
      w++;
    } else if (!lines[s]) {
      lines[s] = words[w++]; // force a word that's too wide rather than looping forever
      s++;
    } else {
      s++;
    }
  }
  document.body.removeChild(span);
  return lines;
}

function typeAcrossSlots(els, lines, slotIdx, onDone) {
  while (slotIdx < lines.length && !lines[slotIdx]) slotIdx++;
  if (slotIdx >= lines.length) { onDone(); return; }

  const el   = els[slotIdx];
  const text = lines[slotIdx];
  let i = 0;

  function skipAll() {
    clearInterval(typeTimer);
    if (!coordsOn) spread.removeEventListener('click', skipAll);
    for (let s = slotIdx; s < els.length; s++) {
      if (lines[s]) els[s].textContent = lines[s];
    }
    onDone();
  }

  typeTimer = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) {
      clearInterval(typeTimer);
      if (!coordsOn) spread.removeEventListener('click', skipAll);
      typeAcrossSlots(els, lines, slotIdx + 1, onDone);
    }
  }, 22);

  if (!coordsOn) spread.addEventListener('click', skipAll, { once: true });
}

function typePolygonBubble(b, onDone) {
  const r = spread.getBoundingClientRect();
  const W = r.width, H = r.height;

  // Parse 'x% y%' strings → pixel coords (clockwise: TL, TR, BR, BL)
  const pts = b.points.map(p => {
    const [px, py] = p.split(' ');
    return [parseFloat(px) / 100 * W, parseFloat(py) / 100 * H];
  });
  const [TL, TR, BR, BL] = pts;

  // Bounding box for the wrapper div
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const bx = Math.min(...xs), by = Math.min(...ys);
  const bw = Math.max(...xs) - bx, bh = Math.max(...ys) - by;

  const wrapper = document.createElement('div');
  Object.assign(wrapper.style, {
    position: 'absolute',
    left: bx / W * 100 + '%', top: by / H * 100 + '%',
    width: bw / W * 100 + '%', height: bh / H * 100 + '%',
    transform: `rotate(${b.rotation || '0deg'})`
  });
  textLayer.appendChild(wrapper);

  // Measure one line height
  const probe = document.createElement('span');
  probe.className = 'bubble-text';
  Object.assign(probe.style, { position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' });
  probe.textContent = 'Ag';
  textLayer.appendChild(probe);
  const lineH = probe.getBoundingClientRect().height;
  textLayer.removeChild(probe);

  // Build line slots by interpolating left/right edges at each line y
  const slotEls = [], slotWidths = [];
  const startY = Math.min(TL[1], TR[1]);
  const endY   = Math.max(BL[1], BR[1]);

  for (let y = startY; y + lineH * 0.5 <= endY; y += lineH) {
    const tL    = Math.max(0, Math.min(1, (y - TL[1]) / (BL[1] - TL[1])));
    const tR    = Math.max(0, Math.min(1, (y - TR[1]) / (BR[1] - TR[1])));
    const leftX  = TL[0] + tL * (BL[0] - TL[0]);
    const rightX = TR[0] + tR * (BR[0] - TR[0]);
    const slotW  = rightX - leftX;
    if (slotW < 8) continue;

    const el = document.createElement('p');
    el.className = 'bubble-text';
    Object.assign(el.style, {
      position: 'absolute',
      left:       (leftX - bx) / bw * 100 + '%',
      top:        (y     - by) / bh * 100 + '%',
      width:      slotW        / bw * 100 + '%',
      height:     lineH        / bh * 100 + '%',
      whiteSpace: 'nowrap'
    });
    wrapper.appendChild(el);
    slotEls.push(el);
    slotWidths.push(slotW);
  }

  const lines = distributeWords(b.text, slotWidths);
  typeAcrossSlots(slotEls, lines, 0, onDone);
}

// ── Splash screen ─────────────────────────────────────────────
function showSplash() {
  splashOverlay.classList.remove('hidden');
  stage.style.visibility = 'hidden';
  updateBackBtn();
}

function hideSplash() {
  splashOverlay.classList.add('hidden');
  stage.style.visibility = '';
}

function updateBackBtn() {
  if (pageHistory.length > 0) {
    btnBack.classList.add('visible');
  } else {
    btnBack.classList.remove('visible');
  }
}

const SAVE_KEY = 'tuesday_page';

const savedPage = localStorage.getItem(SAVE_KEY);
if (savedPage && story.pages[savedPage]) btnContinue.style.display = '';

document.getElementById('btn-start').addEventListener('click', () => {
  localStorage.removeItem(SAVE_KEY);
  btnContinue.style.display = 'none';
  hideSplash();
  if (musicOn) bgMusic.play();
  renderPage('spread_01', false);
});

btnContinue.addEventListener('click', () => {
  hideSplash();
  if (musicOn) bgMusic.play();
  renderPage(localStorage.getItem(SAVE_KEY), false);
});

// ── Page rendering ────────────────────────────────────────────
function goBack() {
  if (pageHistory.length === 0) return;
  renderPage(pageHistory.pop(), false);
}

function renderPage(pageId, pushHistory = true) {
  if (pageId === 'splash') {
    if (pushHistory && currentPage) pageHistory.push(currentPage);
    currentPage = 'splash';
    spreadIdDisplay.textContent = '';
    textLayer.innerHTML = '';
    hotspots.innerHTML = '';
    stage.querySelectorAll('.wdyd-img, .overlay').forEach(el => el.remove());
    if (typeTimer) clearInterval(typeTimer);
    showSplash();
    return;
  }

  hideSplash();

  const isFirstLoad = !currentPage || currentPage === 'splash';

  if (pushHistory && currentPage) pageHistory.push(currentPage);
  currentPage = pageId;
  spreadIdDisplay.textContent = pageId;
  localStorage.setItem(SAVE_KEY, pageId);
  updateBackBtn();

  const page = story.pages[pageId];
  if (!page) return;

  const load = () => {
    textLayer.innerHTML = '';
    hotspots.innerHTML = '';
    stage.querySelectorAll('.wdyd-img, .overlay').forEach(el => el.remove());
    if (typeTimer) clearInterval(typeTimer);

    pageOverlays = page.overlays || [];

    const begin = () => typeBubbles(page.bubbles, 0, () => {
      if (page.wdyd) {
        setTimeout(() => showWdyd(page.wdyd, () => showChoices(page.choices)), page.wdyd.delay || 0);
      } else {
        showChoices(page.choices);
      }
    });

    spread.src = page.image;
    requestAnimationFrame(() => {
      const onLoaded = () => {
        stage.style.opacity = '1';
        setTimeout(begin, FADE_MS + POST_FADE_MS);
      };
      if (spread.naturalWidth > 0) {
        onLoaded();
      } else {
        spread.onload = () => { spread.onload = null; onLoaded(); };
      }
    });
  };

  stage.style.opacity = '0';
  if (isFirstLoad) {
    load();
  } else {
    setTimeout(load, FADE_MS);
  }
}

function typeBubbles(bubbles, index, onDone) {
  if (index >= bubbles.length) { onDone(); return; }

  const b = bubbles[index];

  fireOverlays('bubble-start', index);

  function onBubbleDone() {
    fireOverlays('bubble-end', index);
    typeBubbles(bubbles, index + 1, onDone);
  }

  if (b.type === 'polygon') {
    typePolygonBubble(b, onBubbleDone);
    return;
  }

  const el = document.createElement('p');
  el.className = 'bubble-text';
  Object.assign(el.style, { left: b.left, top: b.top, width: b.width, height: b.height, transform: `rotate(${b.rotation || '0deg'})` });
  textLayer.appendChild(el);

  function advance() {
    clearInterval(typeTimer);
    el.textContent = b.text;
    if (!coordsOn) spread.removeEventListener('click', advance);
    onBubbleDone();
  }

  let i = 0;
  typeTimer = setInterval(() => {
    el.textContent += b.text[i++];
    if (i >= b.text.length) {
      clearInterval(typeTimer);
      if (!coordsOn) spread.removeEventListener('click', advance);
      onBubbleDone();
    }
  }, 22);

  if (!coordsOn) spread.addEventListener('click', advance, { once: true });
}

function showWdyd(wdyd, onDone) {
  const img = document.createElement('img');
  img.className = 'wdyd-img';
  img.src = wdyd.src;
  Object.assign(img.style, { left: wdyd.left, top: wdyd.top, width: wdyd.width });
  if (wdyd.animate === false) img.style.animation = 'none';
  if (wdyd.transformOrigin) img.style.transformOrigin = wdyd.transformOrigin;
  stage.insertBefore(img, hotspots);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    img.style.opacity = '1';
  }));

  setTimeout(onDone, 300);
}

function showChoices(choices) {
  hotspots.innerHTML = '';
  fireOverlays('before-choices');

  const addButtons = () => {
    choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'hotspot';
      btn.setAttribute('aria-label', choice.label);
      Object.assign(btn.style, {
        left: choice.left, top: choice.top, width: choice.width, height: choice.height,
        transform: `rotate(${choice.rotation || '0deg'})`
      });

      let overlay = null;
      if (choice.src) {
        const srcA = choice.src;
        const srcB = choice.src.replace(/a\.png$/i, 'b.png');
        overlay = document.createElement('img');
        overlay.src = srcA;
        overlay.className = 'overlay choice-overlay';
        stage.insertBefore(overlay, hotspots);

        const cx = (parseFloat(choice.left) + parseFloat(choice.width)  / 2).toFixed(1) + '%';
        const cy = (parseFloat(choice.top)  + parseFloat(choice.height) / 2).toFixed(1) + '%';
        let hoverTimer = null;
        let hoverState = 0;

        btn.addEventListener('mouseenter', () => {
          overlay.style.transformOrigin = `${cx} ${cy}`;
          overlay.style.scale = '1.1';
          hoverTimer = setInterval(() => {
            hoverState = 1 - hoverState;
            overlay.src = hoverState === 0 ? srcA : srcB;
          }, 200);
        });
        btn.addEventListener('mouseleave', () => {
          overlay.style.scale = '';
          overlay.src = srcA;
          hoverState = 0;
          clearInterval(hoverTimer);
          hoverTimer = null;
        });
      }

      const label = document.createElement('span');
      label.className = 'choice-label';
      label.textContent = choice.label;
      btn.appendChild(label);

      btn.addEventListener('click', () => renderPage(choice.next, true));

      hotspots.appendChild(btn);

      setTimeout(() => {
        btn.style.opacity = '1';
        if (choice.src) overlay.style.opacity = '1';
      }, i * 150);
    });

    fireOverlays('after-choices');
  };

  const hasBeforeChoices = pageOverlays.some(ov => ov.trigger === 'before-choices');
  setTimeout(addButtons, hasBeforeChoices ? 400 : 0);
}

renderPage(story.start);

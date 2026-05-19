(() => {
  const SAVE_KEY  = 'cyoa_progress';

  const titleScreen  = document.getElementById('title-screen');
  const gameScreen   = document.getElementById('game-screen');
  const endScreen    = document.getElementById('end-screen');
  const imageArea    = document.getElementById('image-area');
  const textArea     = document.getElementById('text-area');
  const pageText     = document.getElementById('page-text');
  const choicesArea  = document.getElementById('choices-area');
  const btnNewGame   = document.getElementById('btn-new-game');
  const btnContinue  = document.getElementById('btn-continue');
  const btnReplay    = document.getElementById('btn-replay');
  const btnMute      = document.getElementById('btn-mute');

  let typewriterTimer = null;
  let typingDone = false;

  // ── Screen transitions ──────────────────────────────────────
  function showScreen(el) {
    [titleScreen, gameScreen, endScreen].forEach(s => s.classList.remove('active'));
    el.classList.add('active');
  }

  function fadeOutIn(callback) {
    gameScreen.style.transition = 'opacity 0.4s ease';
    gameScreen.style.opacity = '0';
    setTimeout(() => {
      callback();
      gameScreen.style.opacity = '1';
    }, 400);
  }

  // ── Page rendering ──────────────────────────────────────────
  function renderPage(pageId) {
    const page = story.pages[pageId];
    if (!page) { console.error('Unknown page:', pageId); return; }

    localStorage.setItem(SAVE_KEY, pageId);

    fadeOutIn(() => {
      // Images
      imageArea.innerHTML = '';
      imageArea.className = 'layout-' + page.layout;

      if (page.layout === 'spread') {
        (page.images || []).forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = '';
          imageArea.appendChild(img);
        });
      } else {
        const img = document.createElement('img');
        img.src = page.image || '';
        img.alt = '';
        imageArea.appendChild(img);
      }

      // Audio
      if (page.music) Audio.playTrack(page.music);

      // Text + choices
      choicesArea.innerHTML = '';

      if (page.text) {
        textArea.classList.remove('hidden');
        pageText.textContent = '';
        startTypewriter(page.text, () => showChoices(page.choices));
      } else {
        textArea.classList.add('hidden');
        showChoices(page.choices);
      }
    });
  }

  // ── Typewriter ──────────────────────────────────────────────
  function startTypewriter(text, onDone) {
    clearTypewriter();
    typingDone = false;
    let i = 0;

    typewriterTimer = setInterval(() => {
      pageText.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearTypewriter();
        typingDone = true;
        onDone();
      }
    }, 40);

    // Click/tap anywhere on text area to skip
    textArea.addEventListener('click', skipTypewriter, { once: true });

    function skipTypewriter() {
      if (typingDone) return;
      clearTypewriter();
      pageText.textContent = text;
      typingDone = true;
      onDone();
    }
  }

  function clearTypewriter() {
    if (typewriterTimer) { clearInterval(typewriterTimer); typewriterTimer = null; }
  }

  // ── Choices ─────────────────────────────────────────────────
  function showChoices(choices) {
    choicesArea.innerHTML = '';

    if (!choices || choices.length === 0) {
      // Ending page
      setTimeout(() => showScreen(endScreen), 600);
      return;
    }

    choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.label;
      btn.addEventListener('click', () => {
        Audio.playSfx('click');
        renderPage(choice.next);
      });
      choicesArea.appendChild(btn);

      // Staggered reveal
      setTimeout(() => btn.classList.add('visible'), i * 120);
    });
  }

  // ── Init ────────────────────────────────────────────────────
  function init() {
    const saved = localStorage.getItem(SAVE_KEY);

    if (saved && story.pages[saved]) {
      btnContinue.classList.remove('hidden');
      btnContinue.addEventListener('click', () => {
        showScreen(gameScreen);
        renderPage(saved);
      });
    }

    btnNewGame.addEventListener('click', () => {
      localStorage.removeItem(SAVE_KEY);
      showScreen(gameScreen);
      renderPage(story.start);
    });

    btnReplay.addEventListener('click', () => {
      localStorage.removeItem(SAVE_KEY);
      showScreen(gameScreen);
      renderPage(story.start);
    });

    btnMute.addEventListener('click', () => {
      const muted = Audio.toggleMute();
      btnMute.classList.toggle('muted', muted);
    });

    // Reflect initial mute state
    if (Audio.isMuted()) btnMute.classList.add('muted');

    showScreen(titleScreen);
  }

  init();
})();

const Audio = (() => {
  const tracks = {
    theme_main: "assets/audio/music/theme_main.mp3"
    // add more: key: "assets/audio/music/filename.mp3"
  };

  const sfx = {
    click: "assets/audio/sfx/click.mp3",
    turn:  "assets/audio/sfx/turn.mp3"
  };

  let muted = localStorage.getItem('cyoa_muted') === 'true';
  let currentTrackKey = null;

  // Two players for crossfade
  const playerA = new window.Audio();
  const playerB = new window.Audio();
  playerA.loop = true;
  playerB.loop = true;
  let active = playerA;
  let inactive = playerB;

  function setVolume(player, vol) {
    player.volume = muted ? 0 : Math.max(0, Math.min(1, vol));
  }

  function crossfadeTo(src, duration = 1000) {
    if (!src) return;
    inactive.src = src;
    inactive.currentTime = 0;
    setVolume(inactive, 0);
    inactive.play().catch(() => {});

    const steps = 20;
    const interval = duration / steps;
    let step = 0;

    const fade = setInterval(() => {
      step++;
      setVolume(active, 1 - step / steps);
      setVolume(inactive, step / steps);
      if (step >= steps) {
        clearInterval(fade);
        active.pause();
        active.src = '';
        [active, inactive] = [inactive, active];
      }
    }, interval);
  }

  function playTrack(key) {
    if (key === currentTrackKey) return;
    currentTrackKey = key;
    const src = tracks[key];
    if (!src) return;
    if (!active.src) {
      active.src = src;
      setVolume(active, 1);
      active.play().catch(() => {});
    } else {
      crossfadeTo(src);
    }
  }

  function playSfx(key) {
    if (muted) return;
    const src = sfx[key];
    if (!src) return;
    const el = new window.Audio(src);
    el.volume = 0.6;
    el.play().catch(() => {});
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('cyoa_muted', muted);
    setVolume(active, 1);
    setVolume(inactive, 0);
    return muted;
  }

  function isMuted() { return muted; }

  return { playTrack, playSfx, toggleMute, isMuted };
})();

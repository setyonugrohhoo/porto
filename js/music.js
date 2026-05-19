// js/music.js
// Generates a simple ambient drone via Web Audio API (no external file needed)
(function () {
  const btn = document.getElementById('music-toggle');
  if (!btn) return;

  let ctx = null;
  let nodes = [];
  let playing = false;

  function createAmbience() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();

    const freqs = [55, 82.4, 110, 165, 220];

    freqs.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      const pan  = ctx.createStereoPanner();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Slow detune oscillation for movement
      const lfo  = ctx.createOscillator();
      const lfog = ctx.createGain();
      lfo.frequency.value = 0.05 + i * 0.02;
      lfog.gain.value = 3;
      lfo.connect(lfog);
      lfog.connect(osc.detune);
      lfo.start();

      gain.gain.setValueAtTime(0.06 / freqs.length, ctx.currentTime);
      pan.pan.value = (i / (freqs.length - 1)) * 2 - 1;

      osc.connect(gain);
      gain.connect(pan);
      pan.connect(ctx.destination);
      osc.start();

      nodes.push(osc, gain, pan, lfo, lfog);
    });
  }

  btn.addEventListener('click', () => {
    if (!playing) {
      if (!ctx) createAmbience();
      else ctx.resume();
      playing = true;
      btn.classList.add('active');
      btn.textContent = '♫';
    } else {
      ctx.suspend();
      playing = false;
      btn.classList.remove('active');
      btn.textContent = '♪';
    }
  });
})();

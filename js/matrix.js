// js/matrix.js
(function () {
  const canvas  = document.getElementById('matrix-canvas');
  const exitBtn = document.getElementById('matrix-exit');
  const trigger = document.getElementById('matrix-toggle');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, cols, drops;
  let active = false;
  let raf;

  const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ01アβΩ∑∇SETYO01SYS';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    const colW = 18;
    cols = Math.floor(W / colW);
    drops = Array(cols).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#00FF88';
    ctx.font = '14px JetBrains Mono, monospace';

    drops.forEach((y, i) => {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillStyle = i % 7 === 0 ? '#fff' : '#00FF88';
      ctx.fillText(char, i * 18, y * 18);
      if (y * 18 > H && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });

    raf = requestAnimationFrame(draw);
  }

  window.enterMatrix = function () {
    if (active) return;
    active = true;
    resize();
    canvas.classList.add('active');
    exitBtn.classList.add('active');
    draw();
  };

  window.exitMatrix = function () {
    active = false;
    canvas.classList.remove('active');
    exitBtn.classList.remove('active');
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, W, H);
  };

  trigger?.addEventListener('click', enterMatrix);
  window.addEventListener('resize', () => { if (active) resize(); });
})();

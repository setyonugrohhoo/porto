// js/cursor.js
(function () {
  const glow = document.getElementById('cursor-glow');
  const dot  = document.getElementById('cursor-dot');

  let mx = 0, my = 0;
  let gx = 0, gy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateGlow() {
    gx = lerp(gx, mx, 0.08);
    gy = lerp(gy, my, 0.08);
    glow.style.left = gx + 'px';
    glow.style.top  = gy + 'px';
    requestAnimationFrame(animateGlow);
  }

  animateGlow();

  // Scale dot on hover of interactive elements
  document.querySelectorAll('a, button, input, textarea, .project-card, .skill-chip').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(2.5)';
      dot.style.background = 'transparent';
      dot.style.border     = '1px solid var(--cyan)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)';
      dot.style.background = 'var(--cyan)';
      dot.style.border     = 'none';
    });
  });
})();

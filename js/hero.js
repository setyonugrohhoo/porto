// js/hero.js
(function () {
  // ── Boot Sequence ──
  const lines = document.querySelectorAll('.boot-line');
  const heroMain = document.getElementById('hero-main');

  document.addEventListener('portfolio-ready', () => {
    lines.forEach(line => {
      const delay = parseInt(line.dataset.delay || 0);
      setTimeout(() => line.classList.add('visible'), delay);
    });

    const lastDelay = Math.max(...Array.from(lines).map(l => parseInt(l.dataset.delay || 0)));
    setTimeout(() => {
      if (heroMain) heroMain.classList.add('visible');
    }, lastDelay + 600);
  });

  // ── Typewriter Effect ──
  const roles = [
    'Fullstack Developer',
    'System Builder',
    'UI Explorer',
    'Spring Boot Engineer',
    'Frontend Craftsman',
  ];

  const el = document.getElementById('typewriter');
  let roleIdx = 0, charIdx = 0, deleting = false;

  function typewrite() {
    if (!el) return;
    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typewrite, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }

    setTimeout(typewrite, deleting ? 60 : 100);
  }

  setTimeout(typewrite, 3200);

  // ── Realtime Clock ──
  const clockEl = document.getElementById('realtime-clock');

  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const hh  = String(now.getHours()).padStart(2, '0');
    const mm  = String(now.getMinutes()).padStart(2, '0');
    const ss  = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hh}:${mm}:${ss}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
})();

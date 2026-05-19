// js/navbar.js
(function () {
  // ── Fake system monitor ──
  const cpuEl = document.getElementById('cpu-val');
  const ramEl = document.getElementById('ram-val');

  function randBetween(a, b) { return Math.floor(Math.random() * (b - a) + a); }

  let cpuTarget = randBetween(18, 55);
  let ramTarget = randBetween(40, 72);
  let cpuCur = cpuTarget, ramCur = ramTarget;

  setInterval(() => {
    cpuTarget = randBetween(18, 60);
    ramTarget = randBetween(38, 75);
  }, 4000);

  function updateMonitor() {
    cpuCur = cpuCur + (cpuTarget - cpuCur) * 0.1;
    ramCur = ramCur + (ramTarget - ramCur) * 0.1;
    if (cpuEl) cpuEl.textContent = Math.round(cpuCur);
    if (ramEl) ramEl.textContent = Math.round(ramCur);
  }

  setInterval(updateMonitor, 100);

  // ── Navbar scroll behavior ──
  const nav = document.getElementById('navbar');
  let last = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.style.padding = '0.6rem 2.5rem';
    } else {
      nav.style.padding = '1rem 2.5rem';
    }
    last = y;
  });

  // ── Active link highlight ──
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();

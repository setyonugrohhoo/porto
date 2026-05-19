// js/scroll-reveal.js
(function () {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger children in grids
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((el, i) => {
    // auto-stagger siblings in grid containers
    const siblings = el.parentElement?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (siblings && siblings.length > 1) {
      const idx = Array.from(siblings).indexOf(el);
      el.dataset.delay = idx * 100;
    }
    observer.observe(el);
  });
})();

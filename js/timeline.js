// js/timeline.js
// Timeline items use the .reveal-left / .reveal-right classes
// which are handled by scroll-reveal.js.
// This file is reserved for any future timeline-specific interactions.
(function () {
  // Highlight the active (current year) timeline card on page load
  const activeCard = document.querySelector('.tl-item.active .tl-card');
  if (activeCard) {
    setTimeout(() => {
      activeCard.style.boxShadow = '0 0 30px rgba(0,245,255,0.15)';
    }, 1200);
  }
})();

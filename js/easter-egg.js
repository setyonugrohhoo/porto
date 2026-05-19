// js/easter-egg.js
// Easter egg: type "sudo access" anywhere (not in input) → triggers
(function () {
  let typed = '';
  const secret = 'sudo access';

  document.addEventListener('keydown', (e) => {
    // Don't intercept if user is typing in an input
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    typed += e.key.toLowerCase();
    if (typed.length > secret.length) typed = typed.slice(-secret.length);

    if (typed === secret) {
      typed = '';
      showDenied();
    }
  });

  function showDenied() {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      background: #04080F;
      border: 2px solid #FF3366;
      padding: 3rem 4rem;
      font-family: 'JetBrains Mono', monospace;
      text-align: center;
      box-shadow: 0 0 60px rgba(255,51,102,0.4);
      animation: fadeIn 0.3s ease;
    `;
    el.innerHTML = `
      <div style="font-size:.7rem;letter-spacing:.2em;color:#FF3366;margin-bottom:1rem">⚠ SUDO DETECTED</div>
      <div style="font-size:1.5rem;font-weight:700;color:#FF3366;letter-spacing:.1em;margin-bottom:.5rem">ACCESS DENIED</div>
      <div style="font-size:.9rem;color:#7A8FA8">:)</div>
      <div style="margin-top:1.5rem;font-size:.65rem;color:#3D5068;letter-spacing:.1em">Nice try though. Click to close.</div>
    `;
    el.addEventListener('click', () => el.remove());
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
})();

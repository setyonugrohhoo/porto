// js/contact.js
(function () {
  const btn    = document.getElementById('transmit-btn');
  const status = document.getElementById('transmit-status');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name  = document.getElementById('f-name')?.value.trim();
    const email = document.getElementById('f-email')?.value.trim();
    const msg   = document.getElementById('f-msg')?.value.trim();

    if (!name || !email || !msg) {
      if (status) { status.style.color = 'var(--red)'; status.textContent = '⚠ All fields required.'; }
      return;
    }

    // Simulate sending
    btn.disabled = true;
    const steps = [
      'Encrypting payload...',
      'Establishing secure channel...',
      'Transmitting data...',
      'Awaiting confirmation...',
      '✓ Message transmitted successfully!',
    ];

    let i = 0;
    if (status) status.style.color = 'var(--cyan)';

    const iv = setInterval(() => {
      if (status) status.textContent = steps[i];
      i++;
      if (i >= steps.length) {
        clearInterval(iv);
        btn.disabled = false;
        if (status) status.style.color = 'var(--green)';
        // Clear form
        setTimeout(() => {
          document.getElementById('f-name').value  = '';
          document.getElementById('f-email').value = '';
          document.getElementById('f-msg').value   = '';
          if (status) status.textContent = '';
        }, 3000);
      }
    }, 600);
  });
})();

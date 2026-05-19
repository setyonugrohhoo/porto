// js/loading.js
(function () {
  const screen   = document.getElementById('loading-screen');
  const bar      = document.querySelector('.loading-bar');
  const loadText = document.getElementById('loading-text');

  const messages = [
    'Initializing portfolio...',
    'Loading modules...',
    'Mounting components...',
    'Calibrating UI...',
    'Access granted.',
  ];

  let progress = 0;
  let msgIdx   = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 22 + 8;
    if (progress >= 100) { progress = 100; clearInterval(interval); finish(); }

    bar.style.width = progress + '%';

    const targetMsg = Math.floor((progress / 100) * (messages.length - 1));
    if (targetMsg !== msgIdx) {
      msgIdx = targetMsg;
      loadText.textContent = messages[msgIdx];
    }
  }, 280);

  function finish() {
    loadText.textContent = messages[messages.length - 1];
    setTimeout(() => {
      screen.classList.add('hidden');
      document.dispatchEvent(new Event('portfolio-ready'));
    }, 500);
  }
})();

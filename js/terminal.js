// js/terminal.js
(function () {
  const output = document.getElementById('terminal-output');
  const input  = document.getElementById('terminal-input');
  if (!output || !input) return;

  const commands = {
    help: () => [
      { type: 'info',    text: '╔════════════════════════════╗' },
      { type: 'info',    text: '║     AVAILABLE COMMANDS     ║' },
      { type: 'info',    text: '╚════════════════════════════╝' },
      { type: 'success', text: '  about      → Who is Setyo?' },
      { type: 'success', text: '  skills     → Tech stack' },
      { type: 'success', text: '  projects   → Project list' },
      { type: 'success', text: '  contact    → Get in touch' },
      { type: 'success', text: '  stack      → Technologies used' },
      { type: 'success', text: '  clear      → Clear terminal' },
      { type: 'dim',     text: '  [Try: sudo access]' },
    ],

    about: () => [
      { type: '',        text: '┌─────────────────────────────────────┐' },
      { type: '',        text: '│           SETYO NUGROHO             │' },
      { type: '',        text: '└─────────────────────────────────────┘' },
      { type: 'success', text: '  Name     : Setyo Nugroho' },
      { type: 'success', text: '  Role     : Fullstack Developer' },
      { type: 'success', text: '  Focus    : Web & System Development' },
      { type: 'success', text: '  Location : Indonesia / Java' },
      { type: '',        text: '' },
      { type: '',        text: '  "Gua suka bikin sesuatu yang bukan' },
      { type: '',        text: '   cuma jalan, tapi juga punya rasa.' },
      { type: '',        text: '   Pas dipake."' },
    ],

    skills: () => [
      { type: 'info',    text: '⟨ TECH ARSENAL ⟩' },
      { type: '',        text: '' },
      { type: 'success', text: '  FRONTEND  →  HTML · CSS · JavaScript · React · Tailwind' },
      { type: 'cmd',     text: '  BACKEND   →  Java · Spring Boot · PHP · REST API' },
      { type: 'info',    text: '  DATABASE  →  MySQL' },
      { type: '',        text: '  TOOLS     →  Git · Figma · VS Code' },
    ],

    projects: () => [
      { type: 'info',    text: 'Loading projects...' },
      { type: '',        text: '' },
      { type: 'success', text: '  [1] Sistem Absensi Mahasiswa' },
      { type: '',        text: '      Stack: Java · Spring Boot · MySQL' },
      { type: '',        text: '      Status: ✓ Completed' },
      { type: '',        text: '' },
      { type: 'success', text: '  [2] Smart Calculator' },
      { type: '',        text: '      Stack: HTML · CSS · JavaScript' },
      { type: '',        text: '      Status: ✓ Completed' },
      { type: '',        text: '' },
      { type: 'success', text: '  [3] Game Topup Store' },
      { type: '',        text: '      Stack: HTML · CSS · JS · PHP' },
      { type: '',        text: '      Status: ◌ In Progress' },
    ],

    contact: () => [
      { type: 'info',    text: '⟨ OPEN CONNECTION ⟩' },
      { type: '',        text: '' },
      { type: 'success', text: '  Email    : setyo@example.com' },
      { type: 'success', text: '  GitHub   : github.com/setyo' },
      { type: 'success', text: '  LinkedIn : linkedin.com/in/setyo' },
      { type: '',        text: '' },
      { type: 'dim',     text: '  Tip: Scroll to #contact for the form.' },
    ],

    stack: () => [
      { type: 'info',    text: '⟨ PORTFOLIO STACK ⟩' },
      { type: 'success', text: '  Frontend: HTML5 · CSS3 · Vanilla JS' },
      { type: 'success', text: '  Fonts: Orbitron · JetBrains Mono · Syne' },
      { type: 'success', text: '  Effects: Canvas · CSS Animations · IntersectionObserver' },
      { type: 'success', text: '  No framework, no dependencies — pure craft.' },
    ],

    'sudo access': () => [
      { type: 'error',   text: '⚠  Attempting privilege escalation...' },
      { type: 'error',   text: '   Scanning credentials...' },
      { type: 'error',   text: '' },
      { type: 'error',   text: '   ACCESS DENIED :)' },
      { type: 'dim',     text: '   Nice try, though.' },
    ],

    clear: () => 'CLEAR',
  };

  const history = [];
  let histIdx = -1;

  function print(lines) {
    lines.forEach((l, i) => {
      setTimeout(() => {
        const p = document.createElement('p');
        p.className = `t-line ${l.type || ''}`;
        p.textContent = l.text;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
      }, i * 40);
    });
  }

  function printLine(text, type = '') {
    const p = document.createElement('p');
    p.className = `t-line ${type}`;
    p.textContent = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Echo the command
    printLine(`setyo@portfolio:~$ ${raw}`, 'cmd');

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    const handler = commands[cmd];

    if (handler) {
      const result = handler();
      if (result !== 'CLEAR') print(result);
    } else {
      printLine(`bash: ${cmd}: command not found. Type 'help' for available commands.`, 'error');
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      history.unshift(val);
      histIdx = -1;
      run(val);
      input.value = '';
    }
    if (e.key === 'ArrowUp') {
      histIdx = Math.min(histIdx + 1, history.length - 1);
      input.value = history[histIdx] || '';
    }
    if (e.key === 'ArrowDown') {
      histIdx = Math.max(histIdx - 1, -1);
      input.value = histIdx === -1 ? '' : history[histIdx];
    }
  });

  // Auto-focus terminal on section click
  document.getElementById('terminal')?.addEventListener('click', () => input.focus());
})();

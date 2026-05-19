// js/skills.js
(function () {
  const skills = [
    { name: 'HTML',        icon: '🌐', level: 'Expert',      cat: 'frontend', xp: '3+ yrs' },
    { name: 'CSS',         icon: '🎨', level: 'Expert',      cat: 'frontend', xp: '3+ yrs' },
    { name: 'JavaScript',  icon: '⚡', level: 'Advanced',    cat: 'frontend', xp: '2+ yrs' },
    { name: 'React',       icon: '⚛',  level: 'Intermediate', cat: 'frontend', xp: '1 yr'  },
    { name: 'Java',        icon: '☕', level: 'Advanced',    cat: 'backend',  xp: '2+ yrs' },
    { name: 'Spring Boot', icon: '🌱', level: 'Advanced',    cat: 'backend',  xp: '1.5 yrs' },
    { name: 'MySQL',       icon: '🗃',  level: 'Intermediate', cat: 'db',      xp: '1.5 yrs' },
    { name: 'Git',         icon: '🔀', level: 'Intermediate', cat: 'tool',    xp: '2+ yrs' },
    { name: 'REST API',    icon: '🔌', level: 'Advanced',    cat: 'backend',  xp: '1.5 yrs' },
    { name: 'Tailwind',    icon: '💨', level: 'Intermediate', cat: 'frontend', xp: '1 yr'  },
    { name: 'PHP',         icon: '🐘', level: 'Beginner',    cat: 'backend',  xp: '6 mo'  },
    { name: 'Figma',       icon: '✏️',  level: 'Intermediate', cat: 'tool',    xp: '1 yr'  },
  ];

  const grid = document.querySelector('.skills-grid');
  if (!grid) return;

  skills.forEach(sk => {
    const chip = document.createElement('div');
    chip.className = 'skill-chip';
    chip.dataset.cat = sk.cat;
    chip.innerHTML = `
      <span class="chip-icon">${sk.icon}</span>
      <span>${sk.name}</span>
      <span class="chip-level">${sk.level} · ${sk.xp}</span>
    `;
    grid.appendChild(chip);
  });

  // ── Radar Canvas ──
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const SIZE = 400;
  canvas.width  = SIZE;
  canvas.height = SIZE;

  const cx = SIZE / 2, cy = SIZE / 2;
  const categories = ['Frontend', 'Backend', 'DB', 'Tools', 'UI/UX', 'System'];
  const values     = [0.9, 0.8, 0.7, 0.75, 0.7, 0.65];
  const rings      = 5;
  const maxR       = SIZE / 2 - 20;

  function drawRadar() {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Draw rings
    for (let r = rings; r >= 1; r--) {
      const radius = (maxR / rings) * r;
      ctx.beginPath();
      for (let i = 0; i < categories.length; i++) {
        const angle = (Math.PI * 2 / categories.length) * i - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0,245,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axes
    categories.forEach((_, i) => {
      const angle = (Math.PI * 2 / categories.length) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
      ctx.strokeStyle = 'rgba(0,245,255,0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw data
    ctx.beginPath();
    values.forEach((v, i) => {
      const angle = (Math.PI * 2 / values.length) * i - Math.PI / 2;
      const x = cx + maxR * v * Math.cos(angle);
      const y = cy + maxR * v * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,245,255,0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,245,255,0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawRadar();
})();

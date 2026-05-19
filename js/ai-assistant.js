// js/ai-assistant.js
(function () {
  const toggle   = document.getElementById('ai-toggle');
  const panel    = document.getElementById('ai-panel');
  const messages = document.getElementById('ai-messages');
  const input    = document.getElementById('ai-input');
  const send     = document.getElementById('ai-send');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) input?.focus();
  });

  const responses = {
    'siapa setyo':    'Setyo Nugroho adalah Fullstack Developer dari Indonesia yang fokus di Web Development. Expert di HTML, CSS, JS, Java, dan Spring Boot. Suka bikin sesuatu yang bukan cuma jalan, tapi juga punya rasa pas dipake. 🚀',
    'setyo':          'Setyo adalah System Builder & UI Explorer. Saat ini sedang mengerjakan portfolio ini dan beberapa project keren lainnya!',
    'project apa aja': '3 project utama:\n1️⃣ Sistem Absensi Mahasiswa (Java + Spring Boot)\n2️⃣ Smart Calculator (JS + Glassmorphism)\n3️⃣ Game Topup Store (In Progress)\n\nScroll ke bagian PROJECTS untuk detail lengkapnya!',
    'project':        'Setyo punya 3 project aktif: Sistem Absensi Mahasiswa, Smart Calculator, dan Game Topup Store. Lihat di section #projects!',
    'contact':        'Kamu bisa hubungi Setyo di:\n📧 setyo@example.com\n🐙 github.com/setyo\n💼 linkedin.com/in/setyo\n\nAtau scroll ke bagian Contact untuk kirim pesan langsung!',
    'stack':          'Stack yang digunakan: HTML · CSS · JavaScript · Java · Spring Boot · MySQL · Git · REST API · Tailwind. Fullstack baby! 💪',
    'skills':         'Setyo punya keahlian di Frontend (HTML, CSS, JS, React) dan Backend (Java, Spring Boot). Plus database MySQL dan tools seperti Git & Figma.',
    'hello':          'Halo! Kamu bisa tanya apa aja tentang Setyo. Coba: "siapa setyo", "project apa aja", atau "contact".',
    'hi':             'Hi there! 👋 Ada yang bisa aku bantu tentang portfolio Setyo?',
    'halo':           'Halo! Selamat datang di portfolio Setyo Nugroho. Tanya aku apa saja!',
  };

  function getResponse(q) {
    const lq = q.toLowerCase().trim();
    for (const [key, val] of Object.entries(responses)) {
      if (lq.includes(key)) return val;
    }
    return `Hmm, aku belum tau tentang "${q}". Coba tanya: "siapa setyo", "project apa aja", "skills", atau "contact".`;
  }

  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = `ai-msg ${type}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function handleSend() {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';

    // Simulate thinking
    setTimeout(() => addMsg(getResponse(val), 'bot'), 400);
  }

  send?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
})();

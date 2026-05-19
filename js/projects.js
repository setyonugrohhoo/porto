// js/projects.js
(function () {
  const overlay = document.getElementById('project-overlay');
  const content = document.getElementById('overlay-content');

  const details = {
    absensi: `
<div style="display:grid;grid-template-columns:1.3fr .7fr;gap:1.5rem;margin-bottom:1.5rem">

  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.5rem">
    <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:1rem">
      LIVE ATTENDANCE MONITOR
    </div>

    <div style="display:flex;justify-content:space-between;margin-bottom:1rem">
      <div>
        <div style="font-size:2rem;color:var(--cyan);font-family:var(--font-display)">324</div>
        <div style="font-size:.65rem;color:var(--text-dim)">TOTAL MAHASISWA</div>
      </div>

      <div>
        <div style="font-size:2rem;color:var(--green);font-family:var(--font-display)">287</div>
        <div style="font-size:.65rem;color:var(--text-dim)">HADIR HARI INI</div>
      </div>
    </div>

    <div style="height:8px;background:#111;border-radius:999px;overflow:hidden;margin-bottom:.8rem">
      <div style="width:89%;height:100%;background:linear-gradient(90deg,var(--cyan),#00ff99)"></div>
    </div>

    <div style="font-size:.7rem;color:var(--text-secondary)">
      Attendance performance increased +12% this semester.
    </div>
  </div>

  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.5rem">
    <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:1rem">
      SYSTEM STATUS
    </div>

    <div style="display:flex;flex-direction:column;gap:.7rem">
      <div style="display:flex;justify-content:space-between">
        <span style="font-size:.7rem">QR Scanner</span>
        <span style="color:var(--green)">ONLINE</span>
      </div>

      <div style="display:flex;justify-content:space-between">
        <span style="font-size:.7rem">Database</span>
        <span style="color:var(--green)">STABLE</span>
      </div>

      <div style="display:flex;justify-content:space-between">
        <span style="font-size:.7rem">Export Service</span>
        <span style="color:var(--cyan)">ACTIVE</span>
      </div>
    </div>
  </div>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.5rem;margin-top:1.5rem">

  <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:1rem">
    RECENT ACTIVITY
  </div>

  <div style="display:flex;flex-direction:column;gap:.8rem">

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:var(--text-secondary)">Mahasiswa scan QR kelas TI-2A</span>
      <span style="color:var(--green)">2m ago</span>
    </div>

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:var(--text-secondary)">Export laporan semester berhasil</span>
      <span style="color:var(--cyan)">10m ago</span>
    </div>

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:var(--text-secondary)">Admin login detected</span>
      <span style="color:var(--yellow)">22m ago</span>
    </div>

  </div>
</div>
<div class="attendance-system">

  <h3>ABSENSI MAHASISWA</h3>

  <input type="text" id="studentName" placeholder="Nama Mahasiswa">

  <button onclick="markAttendance()">
    ABSEN SEKARANG
  </button>

  <div id="attendanceLog"></div>

</div>
    `,

    calculator: `
      <div style="font-family:var(--font-mono)">
        <h2 style="font-family:var(--font-display);font-size:1.5rem;color:var(--purple);letter-spacing:.1em;margin-bottom:1.5rem">
          SMART CALCULATOR
        </h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem">
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:1.5rem">
            <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:.8rem">OVERVIEW</div>
            <p style="font-size:.8rem;color:var(--text-secondary);line-height:1.7">
              Scientific calculator bergaya glassmorphism macOS. Mendukung keyboard input, dark/light mode,
              history kalkulasi, konversi mata uang & mode grafik.
            </p>
          </div>
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:1.5rem">
            <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:.8rem">FEATURES</div>
            <div style="display:flex;flex-direction:column;gap:.4rem">
              ${['⌨ Keyboard support','📜 Calculation history','🌙 Dark / Light mode','💱 Currency converter','📊 Graph / Plot mode','✨ Satisfying animations'].map(f =>
                `<div style="font-size:.75rem;color:var(--text-secondary)">${f}</div>`
              ).join('')}
            </div>
          </div>
        </div>
        <div style="background:var(--bg-card);border:1px solid rgba(168,85,247,.2);border-radius:6px;padding:1.5rem">
          <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:.8rem">TECH STACK</div>
          <div style="display:flex;flex-wrap:wrap;gap:.4rem">
            ${['HTML5','CSS3 Glassmorphism','Vanilla JavaScript','Chart.js (graph)','Exchange Rate API'].map(s =>
              `<span style="border:1px solid rgba(168,85,247,.3);padding:.2rem .6rem;border-radius:2px;font-size:.65rem;color:var(--purple)">${s}</span>`
            ).join('')}
          </div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr .8fr;gap:1.5rem;margin-top:1.5rem">

  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.5rem">

    <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:1rem">
      CALCULATION HISTORY
    </div>

    <div style="display:flex;flex-direction:column;gap:.8rem;font-family:var(--font-mono)">

      <div style="display:flex;justify-content:space-between">
        <span>125 × 4</span>
        <span style="color:var(--cyan)">500</span>
      </div>

      <div style="display:flex;justify-content:space-between">
        <span>sqrt(144)</span>
        <span style="color:var(--green)">12</span>
      </div>

      <div style="display:flex;justify-content:space-between">
        <span>USD → IDR</span>
        <span style="color:var(--purple)">16.245</span>
      </div>

    </div>
  </div>

  <div style="background:linear-gradient(135deg,#120024,#1B0036);border:1px solid rgba(168,85,247,.25);border-radius:8px;padding:1.5rem">

    <div style="font-size:.65rem;color:#d8b4fe;letter-spacing:.2em;margin-bottom:1rem">
      AI MATH ASSIST
    </div>

    <div style="font-size:.78rem;line-height:1.7;color:#f5e9ff">
      Smart Calculator dapat memberikan rekomendasi rumus otomatis berdasarkan input pengguna.
    </div>

    <div style="margin-top:1rem;padding:.8rem;border-radius:6px;background:rgba(255,255,255,.03);font-size:.72rem;color:#d8b4fe;font-family:var(--font-mono)">
      Suggestion: Use Quadratic Formula.
    </div>

  </div>
</div>
<div class="live-calculator">

  <div class="calc-screen">
    <input type="text" id="calc-display" readonly value="0">
  </div>

  <div class="calc-buttons">
    <button onclick="appendCalc('7')">7</button>
    <button onclick="appendCalc('8')">8</button>
    <button onclick="appendCalc('9')">9</button>
    <button onclick="appendCalc('/')">÷</button>

    <button onclick="appendCalc('4')">4</button>
    <button onclick="appendCalc('5')">5</button>
    <button onclick="appendCalc('6')">6</button>
    <button onclick="appendCalc('*')">×</button>

    <button onclick="appendCalc('1')">1</button>
    <button onclick="appendCalc('2')">2</button>
    <button onclick="appendCalc('3')">3</button>
    <button onclick="appendCalc('-')">−</button>

    <button onclick="appendCalc('0')">0</button>
    <button onclick="appendCalc('.')">.</button>
    <button onclick="calculateResult()">=</button>
    <button onclick="appendCalc('+')">+</button>
  </div>

  <div class="calc-actions">
    <button onclick="clearCalc()">CLEAR</button>
  </div>

</div>
    `,

    topup: `
      <div style="font-family:var(--font-mono)">
        <h2 style="font-family:var(--font-display);font-size:1.5rem;color:#FF2D78;letter-spacing:.1em;margin-bottom:1.5rem;text-shadow:0 0 20px #FF2D78">
          GAME TOPUP STORE
        </h2>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin-bottom:2rem">
          ${[{n:'Mobile Legends',c:'#0066FF'},{n:'Valorant',c:'#FF4655'},{n:'Free Fire',c:'#FF8C00'},{n:'Genshin',c:'#C8A03C'}].map(g =>
            `<div style="border:1px solid ${g.c}40;border-radius:6px;padding:1rem;text-align:center;background:${g.c}08">
               <div style="font-size:.7rem;color:${g.c};font-weight:700">${g.n}</div>
             </div>`
          ).join('')}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem">
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:1.5rem">
            <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:.8rem">OVERVIEW</div>
            <p style="font-size:.8rem;color:var(--text-secondary);line-height:1.7">
              Platform top-up game dengan UI gaming neon. Mendukung banyak game populer dengan
              sistem pembayaran, invoice, dan live transaction feed.
            </p>
          </div>
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:1.5rem">
            <div style="font-size:.65rem;color:var(--text-dim);letter-spacing:.2em;margin-bottom:.8rem">FEATURES</div>
            <div style="display:flex;flex-direction:column;gap:.4rem">
              ${['🎮 Multi-game support','💳 Payment gateway','🧾 Invoice popup','🔐 User authentication','🎁 Promo banner system','⚡ Fake realtime transactions'].map(f =>
                `<div style="font-size:.75rem;color:var(--text-secondary)">${f}</div>`
              ).join('')}
            </div>
          </div>
        </div>
        <div style="background:#FF2D7810;border:1px solid #FF2D7830;border-radius:6px;padding:1rem;font-size:.75rem;color:#FF2D78;letter-spacing:.05em">
          ◌ STATUS: IN PROGRESS — Expected completion Q3 2026
        </div>
      </div>
      <div style="background:linear-gradient(135deg,#0A0015,#17002F);border:1px solid rgba(255,45,120,.2);border-radius:8px;padding:1.5rem;margin-top:1.5rem">

  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
    <div style="font-size:.65rem;color:#ff8ac2;letter-spacing:.2em">
      LIVE TRANSACTION FEED
    </div>

    <div style="font-size:.65rem;color:#00ff99">
      ● LIVE
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:.9rem">

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:#fff">Topup 120 Diamonds ML</span>
      <span style="color:#00ff99">SUCCESS</span>
    </div>

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:#fff">Valorant 475 VP</span>
      <span style="color:#00ff99">PAID</span>
    </div>

    <div style="display:flex;justify-content:space-between;font-size:.75rem">
      <span style="color:#fff">Genesis Crystal x2</span>
      <span style="color:#FFD700">PROCESSING</span>
    </div>

  </div>
</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin-top:1.5rem">

  ${['QRIS','DANA','OVO','GOPAY'].map(pay => `
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);padding:1rem;border-radius:6px;text-align:center;font-size:.7rem;color:#fff;font-family:var(--font-mono)">
      ${pay}
    </div>
  `).join('')}

</div>

<div class="topup-system">

  <div class="topup-header">
    GAME TOPUP SYSTEM
  </div>

  <select id="gameSelect">
    <option>Mobile Legends</option>
    <option>Valorant</option>
    <option>Free Fire</option>
    <option>Genshin Impact</option>
  </select>

  <input type="text" id="userId" placeholder="Masukkan User ID">

  <select id="diamondSelect">
    <option value="15000">86 Diamonds - Rp15.000</option>
    <option value="30000">172 Diamonds - Rp30.000</option>
    <option value="50000">257 Diamonds - Rp50.000</option>
  </select>

  <button onclick="processTopup()">
    PROCESS PAYMENT
  </button>

  <div id="topupResult"></div>

</div>
    `,
  };

  window.openProject = function (id) {
    if (!overlay || !content) return;
    content.innerHTML = details[id] || '<p style="color:var(--text-secondary)">Project details coming soon...</p>';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeProject = function () {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on background click
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeProject();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
  });
})();

function appendCalc(value) {
  const display = document.getElementById('calc-display');

  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearCalc() {
  document.getElementById('calc-display').value = '0';
}

function calculateResult() {
  const display = document.getElementById('calc-display');

  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'ERROR';
  }
}

function processTopup() {
  const game = document.getElementById('gameSelect').value;
  const userId = document.getElementById('userId').value;
  const amount = document.getElementById('diamondSelect').value;

  const result = document.getElementById('topupResult');

  if (!userId) {
    result.innerHTML = `
      <div class="topup-error">
        User ID wajib diisi.
      </div>
    `;

    return;
  }

  result.innerHTML = `
    <div class="topup-success">
      <h3>PAYMENT SUCCESS</h3>
      <p>Game: ${game}</p>
      <p>User ID: ${userId}</p>
      <p>Total: Rp${amount}</p>
    </div>
  `;
}

function markAttendance() {
  const name = document.getElementById('studentName').value;
  const log = document.getElementById('attendanceLog');

  if (!name) return;

  const item = document.createElement('div');

  item.className = 'attendance-item';

  item.innerHTML = `
    <span>${name}</span>
    <span>HADIR</span>
  `;

  log.prepend(item);

  document.getElementById('studentName').value = '';
}
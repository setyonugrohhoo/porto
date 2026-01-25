// --- 1. CONFIGURATION (GANTI DATA DI SINI) ---
const myName = "Setyo Nugroho"; // Ganti dengan nama Anda
const myPhone = "6281353927663"; // Ganti NO WA (format: 628xxx tanpa +)
const waMessage = "Halo, saya melihat portofolio Anda dan tertarik untuk berdiskusi.";

// Set Nama di HTML
document.getElementById('myName').innerText = myName;

// --- 2. DATA PROYEK (Simulasi Database) ---
// --- Update DATA PROYEK dengan Link Gambar ---
const projects = {
    1: {
        title: "Website E-Commerce Modern",
        tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
        image: "projek-1.jpg", // Nama file gambar proyek 1
        desc: "Ini adalah proyek website toko online full-stack. Pengunjung dapat melakukan checkout, pembayaran via API gateway, dan admin panel untuk mengelola stok."
    },
    2: {
        title: "Aplikasi Manajemen Tugas",
        tech: ["React Native", "Firebase", "Redux"],
        image: "projek-2.jpg", // Nama file gambar proyek 2
        desc: "Aplikasi mobile produktivitas yang membantu pengguna mengatur jadwal harian. Dilengkapi fitur notifikasi push dan sinkronisasi cloud real-time."
    },
    3: {
        title: "Sesi Fotografi Komersial",
        tech: ["Sony Alpha", "Lightroom", "Photoshop"],
        image: "projek-3.jpg", // Nama file gambar proyek 3
        desc: "Sesi foto untuk brand makanan lokal. Fokus pada pencahayaan natural dan color grading yang menggugah selera untuk kebutuhan media sosial."
    }
};

// --- 3. FUNCTION WHATSAPP ---
function openWhatsApp() {
    const url = `https://wa.me/${myPhone}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');
}

// --- 4. FUNCTION TYPING EFFECT ---
const textElement = document.getElementById('typing-element');
// --- Update Bagian Phrases (Baris 33-an) ---
const phrases = [
    "Mahasiswa Telkom University", 
    "Aspiring Full Stack Developer", 
    "Tech Enthusiast"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Tunggu sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
document.addEventListener('DOMContentLoaded', type);

// --- 5. FUNCTION BUKA/TUTUP TAMPILAN BARU (MODAL) ---
const mainView = document.getElementById('main-view');
const detailView = document.getElementById('project-detail-view');

function openProject(id) {
    const data = projects[id];
    
    // 1. Isi data teks
    document.getElementById('detail-title').innerText = data.title;
    document.getElementById('detail-desc').innerText = data.desc;
    
    // 2. GANTI GAMBAR SECARA DINAMIS
    const detailImg = document.getElementById('main-detail-image');
    if (detailImg) {
        detailImg.src = data.image;
        detailImg.alt = data.title;
    }

    // 3. Render Tech Stack (sama seperti sebelumnya)
    const techContainer = document.getElementById('detail-tech');
    techContainer.innerHTML = ""; 
    data.tech.forEach(tech => {
        let span = document.createElement('span');
        span.innerText = tech;
        techContainer.appendChild(span);
    });

    // 4. Ganti Tampilan
    mainView.style.display = 'none';
    detailView.style.display = 'block';
    window.scrollTo(0,0);
}

function closeProject() {
    detailView.style.display = 'none';
    mainView.style.display = 'block';
}

// 1. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Hover Effect pada Link (Memperbesar Kursor)
const links = document.querySelectorAll('a, .btn-main');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor2.classList.add('hover-active');
        cursor2.style.width = '60px';
        cursor2.style.height = '60px';
    });
    link.addEventListener('mouseleave', () => {
        cursor2.classList.remove('hover-active');
        cursor2.style.width = '40px';
        cursor2.style.height = '40px';
    });
});

// 2. Typing Effect pada Hero Section
const textElement = document.querySelector('.typing-text');
const words = ["Membangun Web Modern.", "Mahasiswa Telkom Univ.", "Suka Koding & Desain."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Jalankan typing effect saat halaman dimuat
document.addEventListener('DOMContentLoaded', typeEffect);

// 3. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);

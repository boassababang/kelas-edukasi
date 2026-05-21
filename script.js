// 1. LOGIKA RESPONSIVE MOBILE MENU (HAMBURGER)
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('toggle-animation');
});

// Tutup menu otomatis jika salah satu tautan navigasi diklik (di mode HP)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// 2. LOGIKA INTERAKTIF KUIS KILAT
function cekJawaban(apakahBenar) {
    const feedback = document.getElementById('feedback');
    
    if (apakahBenar) {
        feedback.innerText = "🎉 Hebat! Jawabanmu Tepat Sekali!";
        feedback.style.color = "#06D6A0"; // Warna Sukses (Hijau)
    } else {
        feedback.innerText = "❌ Hmm, coba hitung lagi yuk!";
        feedback.style.color = "#FFD166"; // Warna Peringatan (Kuning cerah)
    }
}

// 3. EFEK AKTIF NAVIGASI SAAT DI-SCROLL
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
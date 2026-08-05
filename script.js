/* =========================================================
   KELLY ADAMS — SCRIPT UTAMA
   Navbar scroll, fade-in on scroll, scroll-to-top,
   active nav link, tahun footer otomatis.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Navbar shadow saat discroll ---------- */
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('shadow', window.scrollY > 30);
    });
  }

  /* ---------- 2. Fade-in saat elemen masuk viewport ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 3. Tombol Scroll to Top ---------- */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 4. Highlight menu navbar sesuai section aktif (Home) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link[href^="#"]');
  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.navbar-custom .nav-link[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach((sec) => navObserver.observe(sec));
  }

  /* ---------- 5. Tutup navbar mobile setelah klik menu ---------- */
  const navbarCollapse = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

  /* ---------- 6. Tahun otomatis di footer ---------- */
  const yearEls = document.querySelectorAll('.current-year');
  const thisYear = new Date().getFullYear();
  yearEls.forEach((el) => (el.textContent = thisYear));

  /* ---------- 7. Notifikasi tombol Download CV jika file belum ada ---------- */
  document.querySelectorAll('.js-download-cv').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const href = btn.getAttribute('href');
      if (!href || href === '#' || href.trim() === '') {
        e.preventDefault();
        alert('Silakan tambahkan file CV.pdf pada folder assets untuk mengaktifkan tombol download.');
      }
    });
  });

});

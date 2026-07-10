// =========================================================
// Ariel S Toi — Portfolio
// Theme toggle + mobile nav + small UX touches
// =========================================================

(function () {
  const root = document.documentElement;
  const THEME_KEY = 'ast-portfolio-theme';

  // ---- Theme: init from saved preference or system setting ----
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(getPreferredTheme());

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ---- Mobile nav ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });

  // ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();
})();

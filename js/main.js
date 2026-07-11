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

  // ---- Hero ID card: mouse-follow 3D tilt + spotlight ----
  const tiltCard = document.getElementById('tiltCard');
  if (tiltCard && window.matchMedia('(hover: hover)').matches) {
    const MAX_TILT = 6; // degrees — subtle, not distracting

    function handleTiltMove(e) {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width;   // 0 -> 1
      const py = y / rect.height;  // 0 -> 1

      const rotateY = (px - 0.5) * MAX_TILT * 2;
      const rotateX = (0.5 - py) * MAX_TILT * 2;

      tiltCard.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      tiltCard.style.setProperty('--mx', `${px * 100}%`);
      tiltCard.style.setProperty('--my', `${py * 100}%`);
      tiltCard.classList.add('is-tilting');
    }

    function resetTilt() {
      tiltCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
      tiltCard.classList.remove('is-tilting');
    }

    tiltCard.addEventListener('mousemove', handleTiltMove);
    tiltCard.addEventListener('mouseleave', resetTilt);
  }

  // ---- About lanyard badge: pause idle swing + tilt toward cursor on hover ----
  const lanyard = document.getElementById('lanyard');
  const lanyardBadge = lanyard ? lanyard.querySelector('.lanyard-badge') : null;
  if (lanyard && lanyardBadge && window.matchMedia('(hover: hover)').matches) {
    lanyard.addEventListener('mouseenter', () => lanyard.classList.add('is-active'));

    lanyard.addEventListener('mousemove', (e) => {
      const rect = lanyard.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
      const rotate = (px - 0.5) * 8; // degrees — gentle, not erratic
      lanyardBadge.style.transform = `rotate(${rotate}deg)`;
    });

    lanyard.addEventListener('mouseleave', () => {
      lanyard.classList.remove('is-active');
      lanyardBadge.style.transform = '';
    });
  }

  // ---- Scroll reveal (fail-safe: content is visible unless JS confirms it can animate it) ----
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Only now do we opt into the hidden->reveal CSS states.
    document.documentElement.classList.add('js-reveal-ready');

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    revealEls.forEach((el) => io.observe(el));

    // Safety net: if anything is still hidden a few seconds after load
    // (e.g. an edge case with fast/interrupted smooth scrolling), just show it.
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('in-view'));
    }, 3000);
  }
  // If IO isn't supported or reduced-motion is on, .reveal elements simply
  // stay at their default CSS state: fully visible. Nothing to do.
})();

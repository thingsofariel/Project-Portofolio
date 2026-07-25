"use client";

import { useState } from "react";

const THEME_KEY = "ast-portfolio-theme";

const NAV_LINKS = [
  { href: "#about", idx: "01", label: "About" },
  { href: "#skills", idx: "02", label: "Skills" },
  { href: "#projects", idx: "03", label: "Projects" },
  { href: "#contact", idx: "04", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just
      // won't persist across visits, which is a fine degradation.
    }
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          AST<span className="logo-dot">.</span>
          <span className="logo-sub">dev</span>
        </a>

        <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span className="idx">{link.idx}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label="Toggle dark / light theme"
            title="Toggle theme"
            onClick={toggleTheme}
          >
            <i className="bi bi-moon-stars-fill theme-icon-dark" />
            <i className="bi bi-sun-fill theme-icon-light" />
          </button>
          <button
            className="icon-btn nav-burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"} />
          </button>
        </div>
      </div>
    </header>
  );
}

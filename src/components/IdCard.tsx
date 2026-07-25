"use client";

import { useRef, type MouseEvent } from "react";

const MAX_TILT = 6; // degrees — subtle, not distracting

export default function IdCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card || !window.matchMedia("(hover: hover)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * MAX_TILT * 2;
    const rotateX = (0.5 - py) * MAX_TILT * 2;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
    card.classList.add("is-tilting");
  }

  function resetTilt() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.classList.remove("is-tilting");
  }

  return (
    <div className="id-card" id="tiltCard" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}>
      <div className="id-card-glow" aria-hidden="true" />
      <div className="id-card-top">
        <span className="id-dot red" /><span className="id-dot yellow" /><span className="id-dot green" />
        <span className="id-card-label">access_card.tsx</span>
      </div>

      <div className="photo-slot photo-slot--hero">
        <div className="photo-placeholder">
          <i className="bi bi-person-circle" />
          <span>assets/images/profile.webp</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/profile.webp"
          alt="Ariel S Toi"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>

      <div className="id-card-info">
        <h3>Ariel S Toi</h3>
        <p>System Architect</p>
        <div className="id-card-footer">
          <span><span className="status-dot" />Online — Kupang, NTT</span>
          <a href="#contact" className="btn btn-mini">Contact</a>
        </div>
      </div>
    </div>
  );
}

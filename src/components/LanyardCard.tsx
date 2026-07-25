"use client";

import { useRef, type MouseEvent } from "react";
import { useRevealEffect } from "@/components/Reveal";

export default function LanyardCard() {
  const lanyardRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  useRevealEffect(lanyardRef);

  function handleMouseEnter() {
    if (window.matchMedia("(hover: hover)").matches) {
      lanyardRef.current?.classList.add("is-active");
    }
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const lanyard = lanyardRef.current;
    const badge = badgeRef.current;
    if (!lanyard || !badge || !window.matchMedia("(hover: hover)").matches) return;

    const rect = lanyard.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const rotate = (px - 0.5) * 8; // degrees — gentle, not erratic
    badge.style.transform = `rotate(${rotate}deg)`;
  }

  function handleMouseLeave() {
    lanyardRef.current?.classList.remove("is-active");
    if (badgeRef.current) badgeRef.current.style.transform = "";
  }

  return (
    <div
      className="lanyard reveal"
      id="lanyard"
      ref={lanyardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="lanyard-strap" aria-hidden="true">
        <span className="lanyard-strap-text">AST.DEV &middot; AST.DEV &middot; AST.DEV &middot; AST.DEV</span>
      </div>
      <div className="lanyard-clip" aria-hidden="true" />

      <div className="lanyard-badge" ref={badgeRef}>
        <span className="lanyard-badge-punch" aria-hidden="true" />

        <div className="lanyard-badge-header">
          <span className="lanyard-badge-org">AST<span className="logo-dot">.</span>DEV</span>
          <span className="lanyard-badge-id">ID // 0104</span>
        </div>

        <div className="photo-slot photo-slot--about">
          <div className="photo-placeholder">
            <i className="bi bi-image" />
            <span>assets/images/about.webp</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/about.webp"
            alt="Ariel at work"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <div className="lanyard-badge-info">
          <h4>Ariel S Toi</h4>
          <p>System Architect</p>
          <div className="lanyard-badge-footer">
            <span className="lanyard-badge-barcode" aria-hidden="true" />
            <span className="lanyard-badge-valid">VALID</span>
          </div>
        </div>
      </div>
    </div>
  );
}

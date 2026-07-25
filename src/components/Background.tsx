export default function Background() {
  return (
    <div className="blueprint-grid-wrapper" aria-hidden="true">
      <div className="blueprint-grid" />

      <div className="ocean-bg">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v150h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="color-mix(in srgb, var(--accent) 30%, transparent)" />
            <use href="#gentle-wave" x="48" y="10" fill="color-mix(in srgb, var(--accent) 45%, transparent)" />
            <use href="#gentle-wave" x="48" y="20" fill="color-mix(in srgb, var(--accent) 60%, transparent)" />
            <use href="#gentle-wave" x="48" y="30" fill="color-mix(in srgb, var(--accent) 75%, transparent)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

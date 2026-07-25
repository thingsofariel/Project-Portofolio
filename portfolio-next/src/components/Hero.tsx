import IdCard from "@/components/IdCard";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob aurora-blob--a" />
        <span className="aurora-blob aurora-blob--b" />
        <span className="aurora-blob aurora-blob--c" />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow"><i className="bi bi-braces" /> Portfolio — Sheet 00 / Overview</p>
          <h1>Ariel S Toi</h1>
          <p className="role-line">
            <span className="role-tag">IT Support</span>
            <span className="role-tag">Web Developer</span>
            <span className="role-tag">System Architect</span>
          </p>

          <blockquote className="tagline">
            &ldquo;AI will most likely never replace you — but someone who can use AI
            better than you, might.&rdquo;
          </blockquote>

          <div className="hero-actions">
            <a href="/assets/Ariel_CV.pdf" className="btn btn-primary" download>
              <i className="bi bi-download" /> Download CV
            </a>
            <a href="#projects" className="btn btn-ghost">
              <i className="bi bi-arrow-down-right" /> View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <IdCard />
          <div className="corner-tag corner-tag--tl">FIG. 01</div>
          <div className="corner-tag corner-tag--br">SCALE 1:1</div>
        </div>
      </div>
    </section>
  );
}

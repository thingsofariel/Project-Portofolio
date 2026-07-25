import Reveal from "@/components/Reveal";
import LanyardCard from "@/components/LanyardCard";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="div" className="title-block">
          <span className="title-block-index">01</span>
          <div>
            <h2>About</h2>
            <p className="title-block-sub">Background &amp; specification sheet</p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal as="div" className="about-copy card">
            <p>
              As a Computer Science graduate and dedicated web developer and system
              architect, I focus on building robust, high-performance, and highly
              scalable solutions with clean, modular codebases. My technical expertise
              spans structural architecture, system stability, and front-end
              technologies like HTML, CSS, and Bootstrap Icons to craft seamless user
              interfaces.
            </p>
            <p>
              Embracing a <strong>&ldquo;SeniorIntern&rdquo;</strong> mindset, I am deeply committed
              to continuous growth, mastering modern web ecosystems, and optimizing
              runtime performance. Beyond the screen, I am passionate about leveraging
              open-source collaboration to drive community empowerment and digital
              literacy.
            </p>

            <div className="tag-row">
              <span className="tag"><i className="bi bi-camera" /> Photography</span>
              <span className="tag"><i className="bi bi-translate" /> Fluent English speaker</span>
              <span className="tag"><i className="bi bi-geo-alt" /> Kupang, NTT — Indonesia</span>
            </div>
          </Reveal>

          <div className="about-stats">
            <Reveal as="div" className="stat-card card">
              <span className="stat-value">3.47</span>
              <span className="stat-label">GPA</span>
            </Reveal>
            <Reveal as="div" className="stat-card card">
              <span className="stat-value">4<span className="stat-plus">+</span></span>
              <span className="stat-label">Repos Shipped</span>
            </Reveal>
            <Reveal as="div" className="stat-card card">
              <span className="stat-value"><i className="bi bi-diagram-3" /></span>
              <span className="stat-label">Full-Stack &amp; Systems</span>
            </Reveal>

            <LanyardCard />
          </div>
        </div>
      </div>
    </section>
  );
}

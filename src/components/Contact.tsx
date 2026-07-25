import Reveal from "@/components/Reveal";

const CONTACT_LINKS = [
  {
    href: "https://github.com/thingsofariel",
    icon: "bi bi-github",
    label: "GitHub",
    handle: "thingsofariel",
  },
  {
    href: "https://wa.me/6281358704911",
    icon: "bi bi-whatsapp",
    label: "WhatsApp",
    handle: "081358704911",
  },
  {
    href: "https://www.instagram.com/ariel.toi",
    icon: "bi bi-instagram",
    label: "Instagram",
    handle: "ariel.toi",
  },
  {
    href: "https://www.facebook.com/ariel.anando",
    icon: "bi bi-facebook",
    label: "Facebook",
    handle: "ariel anando",
  },
];

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <Reveal as="div" className="title-block">
          <span className="title-block-index">04</span>
          <div>
            <h2>Contact</h2>
            <p className="title-block-sub">Open to work &amp; collaboration</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div" className="contact-copy card">
            <p className="contact-lead">
              Have a project in mind, or just want to talk architecture and AI-assisted dev? Reach out.
            </p>
            <a className="btn btn-primary" href="mailto:arieslsyaloomtoi@gmail.com">
              <i className="bi bi-envelope" /> arieslsyaloomtoi@gmail.com
            </a>
          </Reveal>

          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <Reveal
                as="a"
                className="contact-link card"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
              >
                <i className={link.icon} />
                <span>{link.label}</span>
                <small>{link.handle}</small>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

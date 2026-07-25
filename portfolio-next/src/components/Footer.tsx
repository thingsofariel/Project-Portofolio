import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © <CurrentYear /> Ariel S Toi. Built with Next.js, TypeScript &amp; Tailwind.
        </p>
        <p className="footer-tag">SeniorIntern mindset. Always shipping.</p>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TAGLINES = [
  "Data finds the story.\nI tell it.",
  "Numbers don't lie.\nContext does.",
  "Every decision\nleaves a signal.",
];

const NAV_CARDS = [
  { to: "/about", label: "About", sub: "The story behind the work" },
  { to: "/work", label: "Work", sub: "5 projects, real outcomes" },
  { to: "/community", label: "Community", sub: "Beyond the brief" },
];

export default function HeroPage() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => { document.title = "Mridul Pathak — Decision Analytics & Product Strategy"; }, []);

  useEffect(() => {
    const build = () => setLines(Array.from({ length: Math.ceil(window.innerHeight / 50) + 2 }, (_, i) => i * 50));
    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % TAGLINES.length); setFading(false); }, 500);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const s = Math.floor(p * 7200), fr = Math.floor((p * 7200 % 1) * 24);
      const pad = n => String(n).padStart(2, "0");
      setTc(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(fr)}`);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div id="hero-page">
      <div className="ruled-lines" aria-hidden="true">
        {lines.map(t => <div key={t} className="ruled-line" style={{ top: t }} />)}
      </div>
      <div className="letterbox top" aria-hidden="true" />
      <div className="letterbox bottom" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-eyebrow">// 001 &nbsp;·&nbsp; Richmond, VA &nbsp;·&nbsp; VCU MDA '26</div>
        <h1 className="hero-name">Mridul<br />Pathak</h1>
        <p className="hero-tagline" style={{ opacity: fading ? 0 : 1 }}>{TAGLINES[idx]}</p>
        <div className="hero-tags">
          {["Product Strategy", "Decision Analytics", "Market Entry", "Forecasting", "CPT / OPT Ready"].map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
          <span className="hero-tag highlight">Joining TMF as PM · May 2026</span>
        </div>

        {/* Accessible nav cards */}
        <div className="hero-nav-cards">
          {NAV_CARDS.map(({ to, label, sub }) => (
            <Link key={to} to={to} className="hero-nav-card">
              <span className="hero-nav-card__label">{label}</span>
              <span className="hero-nav-card__sub">{sub}</span>
              <span className="hero-nav-card__arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="hero-bottom-links">
          <Link to="/skills" className="hero-text-link">Skills</Link>
          <span className="hero-text-link-dot">·</span>
          <Link to="/services" className="hero-text-link">Services</Link>
          <span className="hero-text-link-dot">·</span>
          <Link to="/contact" className="hero-text-link">Contact</Link>
          <span className="hero-text-link-dot">·</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-text-link" style={{ color: "var(--red)" }}>Résumé ↓</a>
        </div>
      </div>

      <div className="timecode" aria-hidden="true">{tc}</div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TAGLINES = [
  "Data finds the story. I tell it in a way you can act on.",
  "Every situation has a signal. I help you find it before it costs you.",
  "I'm not building tools to impress. I'm building them to help.",
];

const NAV_CARDS = [
  { to: "/about", label: "About", sub: "The story behind the work" },
  { to: "/work",  label: "Work",  sub: "5 projects · real outcomes" },
  { to: "/community", label: "Community", sub: "Beyond the brief" },
];

const STATS = [
  { label: "Role",    value: "PM · TMF",   sub: "Working there now" },
  { label: "Built",  value: null,          sub: "People at Hoops Fest", countTo: 1000, suffix: "+" },
  { label: "Building", value: "MAT",       sub: "Free · For you" },
  { label: "Open to",  value: "Everything",sub: "Ideas · Questions · Opportunities" },
];

export default function HeroPage() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const [tc, setTc] = useState("00:00:00:00");
  const [count, setCount] = useState(0);
  const ruledRef = useRef(null);

  useEffect(() => {
    document.title = "Mridul Pathak — Decision Analytics & Product Strategy";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Mridul Pathak — Product Manager at TMF, Richmond VA. Decision Analytics student at VCU. Building MAT, a free market intelligence platform. Open to conversations about ideas, markets, and problems worth solving.");
    m("property", "og:title", "Mridul Pathak — Decision Analytics & Product Strategy");
    m("name", "twitter:card", "summary_large_image");
  }, []);

  useEffect(() => {
    const build = () => setLines(Array.from({ length: Math.ceil(window.innerHeight / 50) + 2 }, (_, i) => i * 50));
    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % TAGLINES.length); setFading(false); }, 450);
    }, 4000);
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

  // count up animation
  useEffect(() => {
    let v = 0;
    const target = 1000;
    const step = () => {
      v = Math.min(v + 28, target);
      setCount(v);
      if (v < target) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 900);
    return () => clearTimeout(t);
  }, []);

  // mouse parallax on ruled lines
  useEffect(() => {
    const onMove = (e) => {
      if (!ruledRef.current) return;
      const cy = (e.clientY / window.innerHeight) - 0.5;
      ruledRef.current.querySelectorAll(".ruled-line").forEach((el, i) => {
        el.style.transform = `translateY(${cy * ((i % 3) + 1) * 5}px)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div id="hero-page">
      <div className="ruled-lines" ref={ruledRef} aria-hidden="true">
        {lines.map(t => <div key={t} className="ruled-line" style={{ top: t }} />)}
      </div>
      <div className="letterbox top" aria-hidden="true" />
      <div className="letterbox bottom" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-eyebrow">// 001 &nbsp;·&nbsp; Richmond, VA &nbsp;·&nbsp; VCU MDA '26</div>

        <h1 className="hero-name">
          <span className="hero-name__first">Mridul</span>
          <br />
          <span className="hero-name__last">Pathak</span>
        </h1>

        <p className="hero-tagline" style={{ opacity: fading ? 0 : 1 }}>{TAGLINES[idx]}</p>

        <div className="hero-tags">
          {["Product Strategy", "Decision Analytics", "Market Entry", "Forecasting", "CPT / OPT Ready"].map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
          <span className="hero-tag highlight">PM · TMF · Richmond</span>
        </div>

        {/* stats row with count-up */}
        <div className="hero-stats">
          {STATS.map(({ label, value, sub, countTo, suffix }) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat__label">{label}</div>
              <div className="hero-stat__value">
                {countTo ? (count >= 1000 ? `1,000${suffix}` : count) : value}
              </div>
              <div className="hero-stat__sub">{sub}</div>
            </div>
          ))}
        </div>

        {/* nav cards */}
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
          <Link to="/contact" className="hero-text-link">Start a conversation</Link>
          <span className="hero-text-link-dot">·</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-text-link" style={{ color: "var(--red)" }}>Résumé ↓</a>
        </div>
      </div>

      <div className="timecode" aria-hidden="true">{tc}</div>
    </div>
  );
}

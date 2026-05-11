import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TAGLINES = [
  "Data finds the story.\nI tell it.",
  "Numbers don't lie.\nContext does.",
  "Every decision\nleaves a signal.",
];

export default function HeroPage() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    document.title = "Mridul Pathak — Decision Analytics & Product Strategy";
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
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/about" style={{ fontFamily: "var(--font-mono)", fontSize: ".54rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none", border: "1px solid rgba(10,10,8,.22)", padding: ".5rem 1.1rem", borderRadius: "2px", transition: "background .2s, color .2s" }}
            onMouseEnter={e => { e.target.style.background = "var(--ink)"; e.target.style.color = "var(--paper)"; }}
            onMouseLeave={e => { e.target.style.background = ""; e.target.style.color = "var(--ink)"; }}
          >About →</Link>
          <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: ".54rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)", textDecoration: "none", border: "1px solid rgba(192,57,43,.35)", padding: ".5rem 1.1rem", borderRadius: "2px", transition: "background .2s, color .2s" }}
            onMouseEnter={e => { e.target.style.background = "var(--red)"; e.target.style.color = "var(--paper)"; }}
            onMouseLeave={e => { e.target.style.background = ""; e.target.style.color = "var(--red)"; }}
          >See Work →</Link>
        </div>
      </div>
      <div className="timecode" aria-hidden="true">{tc}</div>
      <div className="scroll-cue" aria-hidden="true">
        <div className="scroll-arrow" />
        Navigate above
      </div>
    </div>
  );
}

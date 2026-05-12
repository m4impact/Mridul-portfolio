import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TAGLINES = [
  "Data finds the story. I tell it in a way you can act on.",
  "Every situation has a signal. I help you find it before it costs you.",
  "I'm not building tools to impress. I'm building them to help.",
];

const STATS = [
  { label: "Role",     value: "PM · TMF",    sub: "Working there now" },
  { label: "Built",    value: null,           sub: "People at Hoops Fest", countTo: 1000, suffix: "+" },
  { label: "Building", value: "MAT",          sub: "Free · For you" },
  { label: "Open to",  value: "Everything",   sub: "Ideas · Questions · Opportunities" },
];

const NAV_ITEMS = [
  { to: "/about",     label: "About",     sub: "The story" },
  { to: "/work",      label: "Work",      sub: "Real outcomes" },
  { to: "/skills",    label: "Skills",    sub: "What I know" },
  { to: "/services",  label: "Services",  sub: "What I offer" },
  { to: "/community", label: "Community", sub: "Beyond the brief" },
  { to: "/contact",   label: "Contact",   sub: "Start here" },
];

export default function HeroPage() {
  const [idx, setIdx]       = useState(0);
  const [fading, setFading] = useState(false);
  const [count, setCount]   = useState(0);
  const [tc, setTc]         = useState("00:00:00:00");
  const [lines, setLines]   = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ruledRef = useRef(null);
  const animRef  = useRef(null);
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Mridul Pathak — Decision Analytics & Product Strategy";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Mridul Pathak — Product Manager at TMF, Richmond VA. Decision Analytics at VCU. Building MAT. Open to conversations about ideas, markets, and problems worth solving.");
  }, []);

  // ruled lines
  useEffect(() => {
    const build = () => setLines(Array.from({ length: Math.ceil(window.innerHeight / 48) + 2 }, (_, i) => i * 48));
    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  // tagline rotation
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % TAGLINES.length); setFading(false); }, 450);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  // timecode on scroll
  useEffect(() => {
    const fn = () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const s = Math.floor(p * 7200), fr = Math.floor((p * 7200 % 1) * 24);
      const pad = n => String(n).padStart(2, "0");
      setTc(`${pad(Math.floor(s/3600))}:${pad(Math.floor(s/60)%60)}:${pad(s%60)}:${pad(fr)}`);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // count up 0 → 1000
  useEffect(() => {
    let v = 0;
    const step = () => { v = Math.min(v + 22, 1000); setCount(v); if (v < 1000) requestAnimationFrame(step); };
    const t = setTimeout(() => requestAnimationFrame(step), 1000);
    return () => clearTimeout(t);
  }, []);

  // smooth mouse parallax on ruled lines
  useEffect(() => {
    const onMove = e => {
      targetMouse.current = {
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (targetMouse.current.x - prev.x) * 0.06,
        y: prev.y + (targetMouse.current.y - prev.y) * 0.06,
      }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div id="hero-page">
      {/* ruled lines with parallax */}
      <div className="ruled-lines" ref={ruledRef} aria-hidden="true">
        {lines.map((top, i) => (
          <div
            key={top}
            className="ruled-line"
            style={{
              top,
              transform: `translateY(${mousePos.y * ((i % 4) + 1) * 6}px)`,
              transition: "none",
            }}
          />
        ))}
      </div>

      {/* top letterbox only */}
      <div className="letterbox top" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-eyebrow">// 001 &nbsp;·&nbsp; Richmond, VA &nbsp;·&nbsp; VCU MDA '26</div>

        <h1 className="hero-name">
          <span className="hero-name__first">Mridul</span>
          <br />
          <span className="hero-name__last">Pathak</span>
        </h1>

        <p
          className="hero-tagline"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.45s ease" }}
        >
          {TAGLINES[idx]}
        </p>

        <div className="hero-tags">
          {["Product Strategy", "Decision Analytics", "Market Entry", "Forecasting", "CPT / OPT Ready"].map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
          <span className="hero-tag highlight">PM · TMF · Richmond</span>
        </div>

        <div className="hero-stats">
          {STATS.map(({ label, value, sub, countTo, suffix }) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat__label">{label}</div>
              <div className="hero-stat__value">
                {countTo
                  ? (count >= 1000 ? `1,000${suffix}` : count || "0")
                  : value}
              </div>
              <div className="hero-stat__sub">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* full-width nav bar — fills from bottom on hover */}
      <div className="hero-nav-bar">
        {NAV_ITEMS.map(({ to, label, sub }) => (
          <Link key={to} to={to} className="hero-nav-bar__item">
            <span className="hero-nav-bar__label">{label}</span>
            <span className="hero-nav-bar__sub">{sub}</span>
            <span className="hero-nav-bar__arrow">→</span>
          </Link>
        ))}
      </div>

      <div className="timecode" aria-hidden="true">{tc}</div>
    </div>
  );
}

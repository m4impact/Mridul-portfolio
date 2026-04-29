import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sections = [["about","About"],["work","Work"],["skills","Skills"],["services","Services"],["contact","Contact"]];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onCommunity = location.pathname === "/community";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    if (onCommunity) {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={scrolled ? "scrolled" : ""} role="navigation" aria-label="Main navigation">
      <button className="nav-logo" onClick={() => onCommunity ? navigate("/") : window.scrollTo({ top:0, behavior:"smooth" })}>
        Mridul Pathak
      </button>
      <div className="nav-links">
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)}>{label}</button>
        ))}
        <Link to="/community" className={`community-link${onCommunity ? " active" : ""}`}>Community</Link>
        <a href="/resume.pdf" className="resume" target="_blank" rel="noopener noreferrer">Résumé ↓</a>
      </div>
      <div className="nav-status" aria-label="Current status">
        <div className="status-dot" aria-hidden="true" />
        Student · Building
      </div>
    </nav>
  );
}

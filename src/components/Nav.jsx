import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["/about", "About"],
  ["/work", "Work"],
  ["/skills", "Skills"],
  ["/services", "Services"],
  ["/contact", "Contact"],
  ["/community", "Community"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""} role="navigation" aria-label="Main navigation">
      <Link to="/" className="nav-logo">Mridul Pathak</Link>
      <div className="nav-links">
        {links.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            className={
              to === "/community"
                ? `community-link${location.pathname === to ? " active" : ""}`
                : location.pathname === to ? "active" : ""
            }
          >
            {label}
          </Link>
        ))}
        <a href="/resume.pdf" className="resume" target="_blank" rel="noopener noreferrer">Résumé ↓</a>
      </div>
      <div className="nav-status" aria-label="Current status">
        <div className="status-dot" aria-hidden="true" />
        Founder · Building
      </div>
    </nav>
  );
}

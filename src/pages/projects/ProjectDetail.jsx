import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../components/useScrollReveal";
import Footer from "../../components/Footer";

export default function ProjectDetail({ project }) {
  useEffect(() => { document.title = `${project.name} — Mridul Pathak`; }, [project.name]);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">{project.eyebrow}</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(3rem,8vw,9rem)" }}>{project.name}</h1>
        <p className="page-hero__sub">{project.sub}</p>
        <span className="page-hero__divider-label">{project.year}</span>
      </div>

      <div style={{ padding: "5rem 3.5rem", maxWidth: "900px" }}>

        {/* Stats row */}
        <div className="proj-stats-row reveal">
          {project.stats.map(([label, value]) => (
            <div key={label} className="proj-stat-item">
              <div className="proj-stat-label">{label}</div>
              <div className="proj-stat-value">{value}</div>
            </div>
          ))}
        </div>

        {/* Hero image */}
        {project.heroImage && (
          <div className="proj-hero-img reveal" style={{ margin: "3rem 0" }}>
            <img src={project.heroImage} alt={project.name} style={{ width: "100%", display: "block", filter: "grayscale(8%) sepia(6%)" }} />
          </div>
        )}

        {/* Body */}
        <div className="proj-body reveal">
          {project.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Outcome */}
        {project.outcome && (
          <div className="proj-outcome reveal">
            <div className="proj-outcome__label">// Outcome</div>
            <div className="proj-outcome__text">{project.outcome}</div>
          </div>
        )}

        {/* Photo grid */}
        {project.photos && project.photos.length > 0 && (
          <div className="proj-photos reveal" style={{ marginTop: "3rem" }}>
            {project.photos.length === 2 && (
              <div className="photo-pair">
                {project.photos.map((src, i) => (
                  <div key={i}><img src={src.src} alt={src.alt} /></div>
                ))}
              </div>
            )}
            {project.photos.length === 3 && (
              <div className="photo-triple">
                {project.photos.map((src, i) => (
                  <div key={i}><img src={src.src} alt={src.alt} /></div>
                ))}
              </div>
            )}
            {project.photos.length === 1 && (
              <img src={project.photos[0].src} alt={project.photos[0].alt} style={{ width: "100%", display: "block", filter: "grayscale(8%) sepia(6%)" }} />
            )}
          </div>
        )}

        {/* Report download */}
        {project.reportUrl && (
          <div className="proj-report reveal" style={{ marginTop: "4rem" }}>
            <div className="proj-report__label">// Report</div>
            <p className="proj-report__desc">{project.reportDesc}</p>
            <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="proj-report__btn">
              Download Report ↓
            </a>
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(10,10,8,0.08)" }}>
          <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(10,10,8,.35)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => { e.target.style.color = "var(--ink)"; }}
            onMouseLeave={e => { e.target.style.color = "rgba(10,10,8,.35)"; }}>
            ← All Work
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

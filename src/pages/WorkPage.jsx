import { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { projects } from "../data/content";

const hooks = {
  "01": "Because the founders who need market clarity the most are the ones who can least afford to pay for it.",
  "02": "Because the right answer to 'should I expand?' isn't yes or no — it's a framework that makes the decision survivable either way.",
  "03": "Because a forecast that helps a real business plan better is worth more than any grade.",
  "04": "Because the farmer who needs the technology most is the one nobody designed it for.",
  "05": "Because 1,000 people in those stands saw someone from their city decide it was worth doing — and that changes what people believe is possible.",
};

function ProjectRow({ p }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(o => !o), []);
  return (
    <div>
      <div className="project-row reveal" role="button" tabIndex={0} aria-expanded={open}
        onClick={toggle}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}>
        <span className="project-num" aria-hidden="true">{p.num}</span>
        <div>
          <div className="project-name">{p.name}</div>
          <div className="project-sub">{p.sub}</div>
          <div className="project-tags">{p.tags.map(([cls, t], i) => <span key={i} className={`project-tag${cls ? " " + cls : ""}`}>{t}</span>)}</div>
        </div>
        <div className="project-meta" aria-hidden="true">
          <span className="project-year">{p.year}</span>
          <div className="project-expand">{open ? "Collapse ↑" : "Expand →"}</div>
        </div>
      </div>
      <div className={`project-detail${open ? " open" : ""}`}>
        <div className="project-detail-inner">
          <div className="project-body">
            {/* human hook */}
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", color: "rgba(10,10,8,0.55)", marginBottom: "1.2rem", borderLeft: "2px solid var(--red)", paddingLeft: "0.8rem" }}>
              {hooks[p.num]}
            </p>
            {p.body.split("\n\n").map((para, i) => <p key={i} style={{ marginBottom: "1rem" }}>{para}</p>)}
            <span className="project-outcome">{p.outcome}</span>
            {p.note && <span className="project-note" style={{ display: "block", marginTop: "1rem" }}>{p.note}</span>}
            {p.link && <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>View Case Study →</a>}
            {p.hasPhotos && (
              <div style={{ marginTop: "1.5rem" }}>
                <div className="hoops-hero"><img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest champions" /><div className="photo-overlay"><div className="photo-overlay-label">Kashipur · March 2024</div><div className="photo-overlay-sub">Champions receive ₹51,000 prize</div></div></div>
                <div className="hoops-pair">
                  <div><img src="/hoops-ceremony.jpg" alt="Opening ceremony" /><div className="photo-overlay"><div className="photo-overlay-label">Opening Ceremony</div></div></div>
                  <div><img src="/hoops-opening.jpg" alt="Lamp lighting" /><div className="photo-overlay"><div className="photo-overlay-label">Inauguration</div></div></div>
                </div>
              </div>
            )}
          </div>
          <div className="project-stats">{p.stats.map(([l, v]) => <div key={l} className="project-stat"><span className="stat-label">{l}</span><span className="stat-value">{v}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  useEffect(() => {
    document.title = "Work — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Five real projects. Market entry strategy, demand forecasting, a drone startup, a basketball tournament, and a platform in progress. Real problems, real outcomes, real receipts.");
  }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 003 · Selected Work</div>
        <h1 className="page-hero__title">Work.</h1>
        <p className="page-hero__sub">Five projects. Real problems. Real outcomes. Real receipts.</p>
        <span className="page-hero__divider-label">003 — Projects</span>
      </div>
      <div className="work-wrap">
        {projects.map(p => <ProjectRow key={p.num} p={p} />)}
        <div style={{ borderTop: "1px solid rgba(10,10,8,.08)" }} />
      </div>
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {["Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market",
            "Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market"
          ].map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

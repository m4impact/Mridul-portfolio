import { useEffect } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { skills, tools, certs } from "../data/content";

export default function SkillsPage() {
  useEffect(() => { document.title = "Skills — Mridul Pathak"; }, []);
  useScrollReveal();

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll(".skill-fill").forEach(f => { f.style.width = f.dataset.width; });
        io.unobserve(e.target);
      });
    }, { threshold: .1 });
    const t = document.querySelector(".skills-list");
    if (t) io.observe(t);
    return () => io.disconnect();
  }, []);

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 004 · Capabilities</div>
        <h1 className="page-hero__title">Skills.</h1>
        <p className="page-hero__sub">What I actually know — not what sounds good on paper.</p>
        <span className="page-hero__divider-label">004 — Skills</span>
      </div>
      <div className="skills-wrap">
        <div className="skills-bg" aria-hidden="true">SKILL</div>
        <h2 className="skills-heading reveal">What I<br />actually <span className="accent">know.</span></h2>
        <div className="skills-list">
          {skills.map(({ name, pct, pills }, i) => (
            <div key={i} className="skill-row reveal">
              <span className="skill-name">{name}</span>
              <div className="skill-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} ${pct}%`}>
                <div className="skill-fill" data-width={`${pct}%`} />
              </div>
              <div className="skill-pills">{pills.map(p => <span key={p} className="skill-pill">{p}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="tools-block reveal d2">
          <div className="tools-label">// Tools</div>
          <div className="tools-list">{tools.map(t => <span key={t} className="tool-tag">{t}</span>)}</div>
        </div>
        <div className="tools-block reveal d3">
          <div className="tools-label">// Certifications</div>
          <div className="tools-list">{certs.map(c => <span key={c} className="tool-tag cert">{c}</span>)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

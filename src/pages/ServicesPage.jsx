import { useEffect } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { services, tiers } from "../data/content";

export default function ServicesPage() {
  useEffect(() => { document.title = "Services — Mridul Pathak"; }, []);
  useScrollReveal();
  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 005 · What I Can Do</div>
        <h1 className="page-hero__title">Services.</h1>
        <p className="page-hero__sub">Grounded in real work. The conversation is always free.</p>
        <span className="page-hero__divider-label">005 — Services</span>
      </div>
      <div className="services-wrap">
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * .07}s` }}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".18em", textTransform: "uppercase", opacity: .28, marginBottom: "1.8rem" }} className="reveal">// How I work</div>
        <div className="reveal d1" style={{ maxWidth: 620, marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.2rem,2.2vw,1.8rem)", color: "var(--ink)", lineHeight: 1.45, marginBottom: "1.2rem" }}>
            It is not always about the money.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "rgba(10,10,8,.45)", lineHeight: 1.95, letterSpacing: ".03em" }}>
            Some of the best work starts with a conversation — no brief, no budget, no commitment.
            If you have a problem that needs thinking through, reach out. The conversation is always free.
          </p>
        </div>
        <div className="tiers">
          {tiers.map((t, i) => (
            <div key={i} className="tier-card reveal" style={{ transitionDelay: `${i * .12}s` }}>
              <div className="tier-name">{t.name}</div>
              <p className="tier-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

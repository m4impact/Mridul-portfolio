import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { projects } from "../data/content";

const projectImages = {
  "01": { src: "/mat-logo.png",         bg: "#0A0A08", fit: "contain", pad: true },
  "02": { src: "/crafteve-logo.png",    bg: "#F5F0E8", fit: "contain", pad: true },
  "03": { src: "/nightingale-logo.png", bg: "#F5EDE0", fit: "contain", pad: true },
  "04": { src: null,                    bg: "#E8E4DA", fit: "contain", pad: true },
  "05": { src: "/krishi-logo.png",      bg: "#F2EFE8", fit: "contain", pad: true },
  "06": { src: "/hoops-champions.jpg",  bg: "#0A0A08", fit: "cover",   pad: false },
};

const hooks = {
  "01": "Because the founders who need market clarity most are the ones who can least afford to pay for it.",
  "02": "Because the right answer to 'should I expand?' isn't yes or no — it's a framework that makes the decision survivable either way.",
  "03": "Because a forecast that helps a real business plan better is worth more than any grade.",
  "04": "Because 40% utilization in a perishable-goods operation isn't a number — it's money leaving the building every day.",
  "05": "Because the farmer who needs the technology most is the one nobody designed it for.",
  "06": "Because 1,000 people in those stands saw someone from their city decide it was worth doing — and that changes what people believe is possible.",
};

const detailRoutes = {
  "01": "/work/mat",
  "02": "/work/crafteve",
  "03": "/work/nightingale",
  "04": "/work/pfg",
  "05": "/work/krishi",
  "06": "/work/hoops",
};

export default function WorkPage() {
  useEffect(() => {
    document.title = "Work — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Six projects. Market entry, demand forecasting, supply chain optimization, a drone startup, a basketball tournament, and a platform in progress. Real problems. Real outcomes.");
  }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 003 · Selected Work</div>
        <h1 className="page-hero__title">Work.</h1>
        <p className="page-hero__sub">Real problems. Real outcomes. Click any project for the full picture.</p>
        <span className="page-hero__divider-label">003 — Projects</span>
      </div>

      <div className="work-list">
        {projects.map((p, i) => {
          const img = projectImages[p.num];
          const route = detailRoutes[p.num];
          const isDark = img.bg === "#0A0A08";

          return (
            <div key={p.num} className="work-item reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <Link to={route} className="work-item__inner">
                <div className="work-item__img" style={{ background: img.bg }}>
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={p.name}
                      style={{
                        width: "100%", height: "100%", display: "block",
                        objectFit: img.fit, objectPosition: "center",
                        padding: img.pad ? "2.5rem" : 0,
                        filter: isDark ? "grayscale(20%) sepia(10%) brightness(0.85)" : "grayscale(15%) sepia(8%)",
                        transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1), filter 0.4s ease",
                      }}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,4rem)", color: "rgba(10,10,8,0.12)", letterSpacing: "0.02em", textAlign: "center", padding: "1rem" }}>{p.name}</span>
                    </div>
                  )}
                  <div className="work-item__overlay" />
                </div>
                <div className="work-item__text">
                  <div className="work-item__meta">
                    <span className="work-item__num">{p.num}</span>
                    <span className="work-item__year">{p.year}</span>
                  </div>
                  <h2 className="work-item__name">{p.name}</h2>
                  <p className="work-item__hook">{hooks[p.num]}</p>
                  <div className="work-item__tags">
                    {p.tags.slice(0, 3).map(([, t], i) => (
                      <span key={i} className="work-item__tag">{t}</span>
                    ))}
                  </div>
                  <span className="work-item__cta">Full project →</span>
                </div>
              </Link>
              {i < projects.length - 1 && <div className="work-item__divider" />}
            </div>
          );
        })}
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {["Decision Analytics","Market Entry","Demand Forecasting","Product Management","Supply Chain","Go-To-Market",
            "Decision Analytics","Market Entry","Demand Forecasting","Product Management","Supply Chain","Go-To-Market"
          ].map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

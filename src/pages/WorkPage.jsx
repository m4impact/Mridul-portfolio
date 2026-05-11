import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { projects } from "../data/content";

const projectImages = {
  "01": { src: "/mat-logo.png",        style: { objectFit: "contain", background: "#0A0A08", padding: "2rem" } },
  "02": { src: "/crafteve-cover.png",  style: { objectFit: "cover", objectPosition: "center top" } },
  "03": { src: "/nightingale-logo.png",style: { objectFit: "contain", background: "#f5efe4", padding: "2rem" } },
  "04": { src: "/krishi-logo.png",     style: { objectFit: "contain", background: "#fff", padding: "2rem" } },
  "05": { src: "/hoops-champions.jpg", style: { objectFit: "cover", objectPosition: "center top" } },
};

const hooks = {
  "01": "Because the founders who need market clarity the most are the ones who can least afford to pay for it.",
  "02": "Because the right answer to 'should I expand?' isn't yes or no — it's a framework that makes the decision survivable either way.",
  "03": "Because a forecast that helps a real business plan better is worth more than any grade.",
  "04": "Because the farmer who needs the technology most is the one nobody designed it for.",
  "05": "Because 1,000 people in those stands saw someone from their city decide it was worth doing — and that changes what people believe is possible.",
};

const detailRoutes = {
  "01": "/work/mat",
  "02": "/work/crafteve",
  "03": "/work/nightingale",
  "04": "/work/krishi",
  "05": "/work/hoops",
};

export default function WorkPage() {
  useEffect(() => {
    document.title = "Work — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Five real projects. Market entry strategy, demand forecasting, a drone startup, a basketball tournament, and a platform in progress. Real problems, real outcomes.");
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
          return (
            <div key={p.num} className="work-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <Link to={route} className="work-item__inner">
                {/* image */}
                <div className="work-item__img">
                  <img src={img.src} alt={p.name} style={{ width: "100%", height: "100%", display: "block", filter: "grayscale(8%) sepia(4%)", transition: "transform 0.6s ease", ...img.style }} />
                </div>
                {/* text */}
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
          {["Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market",
            "Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market"
          ].map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

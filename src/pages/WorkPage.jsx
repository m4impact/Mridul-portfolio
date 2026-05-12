import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";
import { projects } from "../data/content";

const projectImages = {
  "01": { src: "/mat-logo.png",         bg: "#0A0A08", fit: "contain", pad: true  },
  "02": { src: "/crafteve-logo.png",    bg: "#F5F0E8", fit: "contain", pad: true  },
  "03": { src: "/nightingale-logo.png", bg: "#F5EDE0", fit: "contain", pad: true  },
  "04": { src: "/krishi-logo.png",      bg: "#F2EFE8", fit: "contain", pad: true  },
  "05": { src: "/ukhf-inaug.jpg",       bg: "#0A0A08", fit: "cover",   pad: false },
  "06": { src: null,                    bg: "#0A0A08", fit: "contain", pad: true  },
  "07": { src: null,                    bg: "#0A0A08", fit: "contain", pad: true  },
  "08": { src: null,                    bg: "#1A1A18", fit: "contain", pad: true  },
};

const hooks = {
  "01": "Because the founders who need market clarity most are the ones who can least afford to pay for it.",
  "02": "Because the right answer to 'should I expand?' isn't yes or no — it's a framework that makes the decision survivable either way.",
  "03": "Because a forecast that helps a real business plan better is worth more than any grade.",
  "04": "Because the farmer who needs the technology most is the one nobody designed it for.",
  "05": "Because 1,000 people in those stands saw someone from their city decide it was worth doing — and that changes what people believe is possible.",
  "06": "Because 60 days of emails, follow-ups, and waiting shouldn't be what stands between an F-1 student and their internship.",
  "07": "Because the same data tells three completely different stories depending on who you're designing for.",
  "08": "Because 40% utilization in a perishable-goods operation isn't a number — it's money leaving the building every day.",
};

const detailRoutes = {
  "01": "/work/mat",
  "02": "/work/crafteve",
  "03": "/work/nightingale",
  "04": "/work/krishi",
  "05": "/work/hoops",
  "06": "/work/globalintern",
  "07": "/work/nba",
  "08": "/work/pfg",
};

const filteredProjects = [
  { id: "mat",        name: "MAT",               category: "Product",   brief: "Free market intelligence platform. In development. First-time founders.", year: "2026", route: "/work/mat",        report: false },
  { id: "crafteve",   name: "Crafteve India",     category: "Strategy",  brief: "U.S. market entry. Phased pilot recommendation adopted. CBA + sensitivity.", year: "2025", route: "/work/crafteve",   report: true },
  { id: "nightingale",name: "Nightingale",        category: "Analytics", brief: "Demand forecasting. R Studio. ~12% overstock reduction from forecast.", year: "2025", route: "/work/nightingale", report: false },
  { id: "pfg",        name: "PFG Group",          category: "Operations",brief: "Supply chain optimization. Freezer utilization 40% → 92%. Real logistics operation.", year: "2025", route: "/work/pfg",         report: false },
  { id: "krishi",     name: "Krishi Drone",       category: "Product",   brief: "Agri-tech startup. UPES incubator accepted. Farmer-first go-to-market.", year: "2024", route: "/work/krishi",     report: true },
  { id: "hoops",      name: "Hoops Fest",         category: "Operations",brief: "3-day tournament. 1,000+ attendees. 7 sponsors. Indian Air Force teams.", year: "2024", route: "/work/hoops",      report: false },
  { id: "nba",        name: "NBA Data Visualization",category: "Analytics", brief: "Same dataset. Three infographics for three different audience personas. Persona mapping, color psychology, narrative design.", year: "2026", route: "/work/nba",        report: false },
  { id: "globalintern", name: "GlobalIntern",            category: "Analytics", brief: "19-table Oracle Apex database centralizing F-1 CPT/OPT authorization. 3NF schema, disjoint subtypes, 5 SQL queries. Built from personal experience.", year: "2026", route: "/work/globalintern", report: false },
];

const filterCategories = ["All", "Analytics", "Strategy", "Product", "Operations"];

function WorkFilter() {
  const [active, setActive] = useState("All");
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  const filtered = active === "All" ? filteredProjects : filteredProjects.filter(p => p.category === active);

  const goTo = (idx) => {
    const next = Math.max(0, Math.min(idx, filtered.length - 1));
    setCurrent(next);
    const card = scrollRef.current?.children[next];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  useEffect(() => { setCurrent(0); if (scrollRef.current) scrollRef.current.scrollLeft = 0; }, [active]);

  return (
    <div style={{ padding: "6rem 3.5rem 4rem", borderTop: "1px solid rgba(10,10,8,0.08)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.28, marginBottom: "1.5rem" }}>// Filter by discipline</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div className="comm-filter-bar" style={{ marginBottom: 0 }}>
          {filterCategories.map(f => (
            <button key={f} className={`comm-filter-btn${active === f ? " active" : ""}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="comm-scroll-hint__arrows">
          <button className="comm-scroll-hint__btn" onClick={() => goTo(current - 1)} disabled={current === 0}>←</button>
          <button className="comm-scroll-hint__btn" onClick={() => goTo(current + 1)} disabled={current === filtered.length - 1}>→</button>
        </div>
      </div>
      <div ref={scrollRef} className="comm-projects-scroll" style={{ background: "rgba(10,10,8,0.03)" }}>
        {filtered.map((p) => (
          <Link key={p.id} to={p.route} className="comm-project-card">
            <span className="comm-project-card__category">{p.category}</span>
            <span className="comm-project-card__name">{p.name}</span>
            <p className="comm-project-card__brief">{p.brief}</p>
            <div className="comm-project-card__meta">
              <span className="comm-project-card__year">{p.year}</span>
              <span className="comm-project-card__cta">{p.report ? "Report available →" : "View project →"}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="comm-slider-dots" style={{ marginTop: "1rem" }}>
        {filtered.map((_, i) => (
          <button key={i} className={`comm-slider-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

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
                  ) : p.num === "06" ? (
                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.6rem", padding: "2rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,5rem)", color: "var(--red)", lineHeight: 1 }}>19</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,239,232,0.25)" }}>tables</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,2vw,1.4rem)", color: "rgba(242,239,232,0.12)", lineHeight: 1.2, textAlign: "center", marginTop: "0.5rem" }}>F-1 Authorization<br/>Platform</span>
                    </div>
                  ) : p.num === "07" ? (
                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.8rem", padding: "2rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "rgba(242,239,232,0.15)", lineHeight: 1, textAlign: "center" }}>The Invisible Star</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "rgba(192,57,43,0.5)", lineHeight: 1, textAlign: "center" }}>ROI on the Court</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "rgba(242,239,232,0.15)", lineHeight: 1, textAlign: "center" }}>Efficiency vs. Volume</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,239,232,0.18)", marginTop: "0.3rem" }}>3 audiences · 1 dataset</span>
                    </div>
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", color: "rgba(242,239,232,0.12)", lineHeight: 1 }}>40%</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", color: "var(--red)", lineHeight: 1 }}>92%</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,239,232,0.2)", marginTop: "0.5rem" }}>Freezer utilization</span>
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

      <WorkFilter />
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

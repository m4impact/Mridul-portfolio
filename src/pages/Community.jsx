import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.unobserve(el); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`comm-fade${visible ? " comm-fade--in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Credit({ value, label }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`comm-credit${visible ? " comm-fade--in" : ""}`}>
      <span className="comm-credit__value">{value}</span>
      <span className="comm-credit__label">{label}</span>
    </div>
  );
}

const blogs = [
  {
    to: "/community/hoops",
    label: "Community · Sports · 2024",
    title: "The thing about building something before anyone asks you to.",
    excerpt: "Kashipur had basketball. It didn't have a stage. This is what I was thinking when I decided to build one — before anyone said it could exist.",
    img: "/hoops-champions.jpg",
    imgStyle: { objectFit: "cover", objectPosition: "center top" },
    imgBg: "#0A0A08",
  },
  {
    to: "/community/mat",
    label: "Product · Build · 2026",
    title: "Why I'm building a free market intelligence tool nobody asked for.",
    excerpt: "The founders who need market clarity most are the ones who can least afford to pay for it. MAT is my answer to that.",
    img: "/mat-logo.png",
    imgStyle: { objectFit: "contain", padding: "3rem" },
    imgBg: "#0A0A08",
  },
  {
    to: "/community/krishi",
    label: "Agri-Tech · Community · 2024",
    title: "The farmer asked why nobody built this earlier.",
    excerpt: "Most agri-tech is built for the farm that already has margin. This is about designing for the person everyone else forgot.",
    img: "/krishi-logo.png",
    imgStyle: { objectFit: "contain", padding: "3rem" },
    imgBg: "#F2EFE8",
  },
];

const allProjects = [
  { id: "hoops",      name: "Uttarakhand Hoops Fest",          brief: "3-day basketball tournament. 1,000+ attendees. Indian Air Force sent teams. 7 sponsors. Built from nothing.", year: "2024", category: "community", route: "/work/hoops",      report: null },
  { id: "mat",        name: "MAT — My Ambition Tool",           brief: "Free market intelligence platform for first-time founders. In development. Not a class project.", year: "2026", category: "product",   route: "/work/mat",        report: null },
  { id: "krishi",     name: "Krishi Drone",                     brief: "Agri-tech startup for smallholder farmers. UPES incubator accepted. Farmer-first go-to-market.", year: "2024", category: "product",   route: "/work/krishi",     report: "/reports/krishi-drone-business-case.pdf" },
  { id: "crafteve",   name: "Crafteve India — U.S. Market Entry",brief: "Decision analytics consulting. Phased U.S. pilot recommendation adopted by client. CBA + sensitivity.", year: "2025", category: "strategy",  route: "/work/crafteve",   report: "/reports/crafteve-market-entry.pdf" },
  { id: "nightingale",name: "Nightingale Ice Cream",            brief: "Demand forecasting for real Richmond business. R Studio. ~12% overstock reduction from forecast.", year: "2025", category: "analytics", route: "/work/nightingale", report: null },
  { id: "pfg",        name: "PFG Group — Supply Chain",         brief: "Optimization model for real logistics operation. Freezer utilization improved from 40% to 92%.", year: "2025", category: "analytics", route: "/work/pfg",         report: null },
];

const filters = ["all", "analytics", "strategy", "product", "community"];

export default function Community() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Community — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Everything built has been for people who didn't have what they needed. The tournament, the drone, the platform — and the conversations that followed.");
  }, []);

  const filtered = activeFilter === "all" ? allProjects : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="comm">

      {/* OPENING */}
      <section className="comm-opening">
        <div className="comm-opening__eyebrow"><span>// 007</span><span>·</span><span>BEYOND THE BRIEF</span></div>
        <h1 className="comm-opening__line comm-opening__line--1">Everything</h1>
        <h1 className="comm-opening__line comm-opening__line--2">I've built</h1>
        <h1 className="comm-opening__line comm-opening__line--3">has been for</h1>
        <h1 className="comm-opening__line comm-opening__line--4">a room full of</h1>
        <h1 className="comm-opening__line comm-opening__line--5">people who</h1>
        <h1 className="comm-opening__line comm-opening__line--6">didn't have</h1>
        <h1 className="comm-opening__line comm-opening__line--7">what they needed.</h1>
        <Fade className="comm-opening__sub" delay={900}>
          <p>The tournament was for athletes in a city that didn't see them. The drone was for farmers no one was designing for. MAT is for founders who can't afford the table. Click into any of these to read the full story — the decision-making, the doubts, and what actually happened.</p>
        </Fade>
      </section>

      <div className="comm-rule" />

      {/* THREE MAJESTIC BLOG SHOWCASES */}
      <section className="comm-section">
        <Fade>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>// Three stories worth reading</div>
        </Fade>
        <div className="comm-blogs">
          {blogs.map((b, i) => (
            <Fade key={b.to} delay={i * 100}>
              <Link to={b.to} className="comm-blog">
                <div className="comm-blog__img" style={{ background: b.imgBg }}>
                  {b.img ? (
                    <img src={b.img} alt={b.title} style={{ ...b.imgStyle }} />
                  ) : (
                    <div className="comm-blog__img-placeholder" />
                  )}
                </div>
                <div className="comm-blog__body">
                  <span className="comm-blog__label">{b.label}</span>
                  <span className="comm-blog__title">{b.title}</span>
                  <p className="comm-blog__excerpt">{b.excerpt}</p>
                  <span className="comm-blog__cta">Read the story →</span>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      <div className="comm-rule" />

      {/* KASHIPUR NARRATIVE */}
      <section className="comm-section">
        <Fade><div className="comm-location">Kashipur in March.</div></Fade>
        <Fade delay={120}><div className="comm-standalone">The stands filled before the first game started.</div></Fade>
        <Fade className="comm-body">
          <p>That doesn't happen unless something in the air already feels different — unless the people arriving sense that this time, someone actually means it.</p>
        </Fade>
        <Fade className="comm-body comm-body--spaced">
          <p>So I built it. No institution. No permission. A belief that if you make something real enough, the right people will feel it and arrive.</p>
        </Fade>
        <Fade className="comm-impact-line">The Indian Air Force sent teams.</Fade>
        <Fade delay={120} className="comm-impact-line">A news channel came twice — before the event and on the day itself.</Fade>
        <Fade className="comm-photo comm-photo--full">
          <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest champions — Kashipur, March 2024" />
        </Fade>
        <Fade className="comm-body comm-body--italic">
          <p>I think about what that felt like for the athletes. To finally be in a room that was made for them.</p>
        </Fade>
        <div className="comm-credits">
          <Credit value="1,000+" label="People in the stands" />
          <Credit value="7" label="Sponsors secured" />
          <Credit value="2" label="News stories" />
        </div>
        <Fade className="comm-pullquote">
          <blockquote>The show didn't start with a full house. It started with a decision: build the thing before anyone tells you it can exist.</blockquote>
        </Fade>
      </section>

      <div className="comm-rule" />

      {/* FARMER'S QUESTION */}
      <section className="comm-section">
        <Fade><div className="comm-location">The farmer's question.</div></Fade>
        <Fade className="comm-body">
          <p>That question — <em>who is this actually for</em> — is the one I keep returning to. It's what made the Krishi Drone project matter. Most agri-technology is built for the farm that already has margin. The farmer I was thinking about had two acres and one good season to get it right.</p>
        </Fade>
        <Fade className="comm-quote-alone">
          <p>"Then why didn't anyone build this earlier?"</p>
          <cite>— A farmer in Uttarakhand, 2024</cite>
        </Fade>
        <Fade className="comm-body comm-body--italic">
          <p>I didn't have an answer. That was the answer.</p>
        </Fade>
        <div className="comm-pillars">
          <Fade className="comm-pillar"><span className="comm-pillar__value">UPES</span><span className="comm-pillar__label">Incubator acceptance</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={100} className="comm-pillar"><span className="comm-pillar__value">Farmer-first</span><span className="comm-pillar__label">Go-to-market position</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={200} className="comm-pillar"><span className="comm-pillar__value">Seasonal</span><span className="comm-pillar__label">Cash flow model</span></Fade>
        </div>
      </section>

      <div className="comm-rule" />

      {/* MAT */}
      <section className="comm-section">
        <Fade><div className="comm-location">The same person.<br />Different rooms.</div></Fade>
        <Fade className="comm-body">
          <p>MAT exists because I kept meeting the same person in different rooms. Motivated. Clear-eyed. With an idea that deserved to exist — and no way to build the analytical case for it without spending money they didn't have.</p>
        </Fade>
        <Fade className="comm-impact-line">Not a class project.</Fade>
        <Fade delay={100} className="comm-impact-line">Not a side hustle.</Fade>
        <Fade delay={200} className="comm-impact-line">The thing I am building because the need is still there.</Fade>
        <div className="comm-pillars">
          <Fade className="comm-pillar"><span className="comm-pillar__value">Free</span><span className="comm-pillar__label">By intention</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={100} className="comm-pillar"><span className="comm-pillar__value">Plain language</span><span className="comm-pillar__label">From the ground up</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={200} className="comm-pillar"><span className="comm-pillar__value">Early build</span><span className="comm-pillar__label">Honest current status</span></Fade>
        </div>
        <Fade className="comm-body comm-body--spaced">
          <p>TMF is where I work as a Product Manager. MAT is what I'm building because the workday ends and the need doesn't.</p>
        </Fade>
      </section>

      <div className="comm-rule" />

      {/* FILTERED PROJECTS */}
      <section className="comm-section" style={{ maxWidth: "1100px" }}>
        <Fade>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>// All work — filter by discipline</div>
        </Fade>
        <Fade delay={100}>
          <div className="comm-filter-bar">
            {filters.map(f => (
              <button
                key={f}
                className={`comm-filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </Fade>
        <div className="comm-projects-grid">
          {filtered.map((p, i) => (
            <Fade key={p.id} delay={i * 60}>
              <Link to={p.route} className="comm-project-card">
                <span className="comm-project-card__category">{p.category}</span>
                <span className="comm-project-card__name">{p.name}</span>
                <p className="comm-project-card__brief">{p.brief}</p>
                <div className="comm-project-card__meta">
                  <span className="comm-project-card__year">{p.year}</span>
                  <span className="comm-project-card__cta">
                    {p.report ? "Report available →" : "View project →"}
                  </span>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      {/* CLOSE */}
      <section className="comm-close">
        <Fade><div className="comm-close__eyebrow">// If this page landed for you</div></Fade>
        <Fade delay={200}>
          <h2 className="comm-close__heading">Reach out if you want<br />to talk through a<br />real problem.</h2>
        </Fade>
        <Fade delay={400} className="comm-close__sub">
          <p>If something on this page sounded like your situation — whether you are building, trying to understand a market, or looking for someone who operates by solving real gaps — this is for you.</p>
          <p className="comm-close__not-a-form">Not a form. Not a pitch. Just a way in.</p>
        </Fade>
        <Fade delay={600}>
          <a href="mailto:pathakm3@vcu.edu" className="comm-close__email">pathakm3@vcu.edu</a>
        </Fade>
      </section>

      <Footer />
    </div>
  );
}

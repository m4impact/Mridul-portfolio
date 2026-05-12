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

const blogs = [
  {
    to: "/community/hoops",
    label: "Community · Sports · 2024",
    title: "The thing about building something before anyone asks you to.",
    excerpt: "Kashipur had basketball. It didn't have a stage. This is what I was thinking when I decided to build one — before anyone said it could exist.",
    img: "/hoops-champions.jpg",
    imgStyle: { objectFit: "cover" },
    imgBg: "#0A0A08",
  },
  {
    to: "/community/mat",
    label: "Product · Build · 2026",
    title: "Why I'm building a free market intelligence tool nobody asked for.",
    excerpt: "The founders who need market clarity most are the ones who can least afford to pay for it. MAT is my answer to that.",
    img: "/mat-logo.png",
    imgStyle: { objectFit: "contain" },
    imgBg: "#0A0A08",
  },
  {
    to: "/community/krishi",
    label: "Agri-Tech · Community · 2024",
    title: "The farmer asked why nobody built this earlier.",
    excerpt: "Most agri-tech is built for the farm that already has margin. This is about designing for the person everyone else forgot.",
    img: "/krishi-logo.png",
    imgStyle: { objectFit: "contain" },
    imgBg: "#F2EFE8",
  },
];

// What I'm thinking about right now — update this periodically
const realTalk = [
  {
    q: "What I'm working on",
    a: "At TMF learning what product management actually looks like inside a real organisation — the gap between theory and what gets you from a decision to a shipped thing. At VCU finishing the quantitative foundation. Building MAT in the hours between.",
  },
  {
    q: "What's on my mind",
    a: "Why most tools built for early founders assume the founder already speaks the language. That assumption excludes the exact person who needs the tool most. MAT is my attempt to remove that assumption entirely.",
  },
  {
    q: "What I'm figuring out",
    a: "How to be genuinely useful to someone without making them dependent on you. The goal is always to leave the person clearer than I found them — not to become a recurring cost they can't step away from.",
  },
  {
    q: "What I want to talk about",
    a: "Markets that don't behave the way the textbook says they should. Ideas that seem too small to matter but turn out to be the whole thing. Problems where the data and the human story are pointing in different directions.",
  },
];

function FilmstripCarousel({ blogs }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const goTo = (idx) => {
    const next = Math.max(0, Math.min(idx, blogs.length - 1));
    setCurrent(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * 33.333}%)`;
    }
  };

  return (
    <div className="comm-film-wrap">
      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          className="comm-film-track"
          style={{ transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)" }}
        >
          {blogs.map((b) => (
            <Link key={b.to} to={b.to} className="comm-film-card">
              <div className="comm-film-card__img" style={{ background: b.imgBg }}>
                <img
                  src={b.img}
                  alt={b.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: b.imgStyle?.objectFit || "cover",
                    objectPosition: "center",
                    display: "block",
                    padding: b.imgStyle?.objectFit === "contain" ? "3rem" : 0,
                    filter: b.imgBg === "#0A0A08"
                      ? "grayscale(15%) sepia(8%) brightness(0.85)"
                      : "grayscale(12%) sepia(8%)",
                  }}
                />
              </div>
              <div className="comm-film-card__body">
                <span className="comm-film-card__label">{b.label}</span>
                <span className="comm-film-card__title">{b.title}</span>
                <p className="comm-film-card__excerpt">{b.excerpt}</p>
                <span className="comm-film-card__cta">Read the story →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="comm-film-controls">
        <div className="comm-film-dots">
          {blogs.map((_, i) => (
            <button key={i} className={`comm-film-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)} aria-label={`Story ${i + 1}`} />
          ))}
        </div>
        <div className="comm-film-arrows">
          <button className="comm-film-arrow" onClick={() => goTo(current - 1)} disabled={current === 0}>←</button>
          <button className="comm-film-arrow" onClick={() => goTo(current + 1)} disabled={current === blogs.length - 1}>→</button>
        </div>
      </div>
    </div>
  );
}

function HorizontalScroll({ projects }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  const goTo = (idx) => {
    const next = Math.max(0, Math.min(idx, projects.length - 1));
    setCurrent(next);
    const card = scrollRef.current?.children[next];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <div className="comm-slider-wrap">
      <div className="comm-slider-controls">
        <div className="comm-slider-dots">
          {projects.map((_, i) => (
            <button key={i} className={`comm-slider-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <div className="comm-scroll-hint__arrows">
          <button className="comm-scroll-hint__btn" onClick={() => goTo(current - 1)} disabled={current === 0}>←</button>
          <button className="comm-scroll-hint__btn" onClick={() => goTo(current + 1)} disabled={current === projects.length - 1}>→</button>
        </div>
      </div>
      <div ref={scrollRef} className="comm-projects-scroll">
        {projects.map((p) => (
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
    </div>
  );
}

export default function Community() {
  useEffect(() => {
    document.title = "Community — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "Everything built has been for people who didn't have what they needed. Three stories. A real talk. An open door.");
  }, []);

  return (
    <div className="comm">

      {/* ── OPENING ── */}
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
          <p>Three stories below. Each one is about who it was actually for — not what I built. After the stories, a real talk. And at the end, an open door.</p>
        </Fade>
      </section>

      {/* ── FILMSTRIP ── */}
      <Fade>
        <div style={{ padding: "0 0 0.5rem" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.28, padding: "2rem 3.5rem 1rem" }}>// Three stories worth reading</div>
        </div>
      </Fade>
      <FilmstripCarousel blogs={blogs} />

      {/* ── REAL TALK ── */}
      <section className="comm-real-talk">
        <Fade>
          <div className="comm-real-talk__label">// Real talk</div>
          <h2 className="comm-real-talk__heading">Where I actually am<br />right now.</h2>
          <p className="comm-real-talk__intro">Not the polished version. What's actually on my mind, what I'm figuring out, and what I want to talk about.</p>
        </Fade>

        <div className="comm-real-talk__grid">
          {realTalk.map(({ q, a }, i) => (
            <Fade key={i} delay={i * 80} className="comm-real-talk__item">
              <div className="comm-real-talk__q">{q}</div>
              <p className="comm-real-talk__a">{a}</p>
            </Fade>
          ))}
        </div>

        <Fade delay={200} className="comm-real-talk__footer">
          <p>This section gets updated. If something here is months old, reach out and I'll tell you what's changed.</p>
        </Fade>
      </section>

      {/* ── CLOSE ── */}
      <section className="comm-close">
        <Fade><div className="comm-close__eyebrow">// If this page landed for you</div></Fade>
        <Fade delay={200}>
          <h2 className="comm-close__heading">Reach out if you want<br />to talk through a<br />real problem.</h2>
        </Fade>
        <Fade delay={400} className="comm-close__sub">
          <p>If something on this page sounded like your situation — whether you are building, trying to understand a market, or just looking for someone who will actually engage with what you're working on — this is for you.</p>
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

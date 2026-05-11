import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";

const bio = [
  "I grew up watching decisions get made with the wrong data — or no data at all. That gap between what numbers show and what people actually do became the thing I kept coming back to.",
  "Economics at Delhi gave me the language. An MBA at UPES gave me the pressure. In between, I worked in industrial supply — not glamorous, but it taught me how real businesses make decisions under real constraints.",
  "In 2024 I stopped theorizing and built something. A basketball tournament in the mountains of Uttarakhand. No blueprint, no budget, just a belief it was worth doing. The Indian Air Force sent teams. 1,000 people filled the stands.",
  "Now I'm at VCU completing an MS in Decision Analytics, graduating December 2026. And I'm at TMF as a Product Manager. Find the signal. Make it useful. Help someone decide.",
];

const timeline = [
  { year: "2018–21",  place: "Delhi",        note: "BA Economics · University of Delhi · Markets are just people making decisions under uncertainty." },
  { year: "2022–23",  place: "Rudrapur",     note: "Marketing Intern · Industrial supply · Learned that data without context is just noise." },
  { year: "2024–25",  place: "Dehradun",     note: "MBA · UPES · School of Business · Trident Titans · Krishi Drone · Budget Competition Runner-up." },
  { year: "Aug 2025–",place: "Richmond, VA", note: "MS Decision Analytics · VCU · Marketing Concentration · Graduating Dec 2026. PM at TMF." },
];

const certList = [
  { name: "Project Management Certificate", org: "London School of Business and Finance", date: "Jul 2025" },
  { name: "VCU Leadership Foundations",     org: "Virginia Commonwealth University",    date: "Dec 2025" },
  { name: "CAPM — Certified Associate in Project Management", org: "PMI", date: "In Progress" },
];



function UPESChapter() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOpen(true); io.unobserve(el); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="upes-wrap" ref={ref}>
      <div className="upes-header">
        <div className="upes-meta">
          <span className="upes-year">2024–25</span>
          <img src="/upes-logo.png" alt="UPES" className="upes-logo" />
        </div>
        <div className="upes-title">Dehradun.<br />Where curiosity got a structure.</div>
        <div className="upes-subtitle">MBA · School of Business · Trident Titans · GEMS Club · Krishi Drone</div>
      </div>
      <div className={`upes-body${open ? " open" : ""}`}>
        <div className="upes-inner">
          <div className="upes-hero reveal">
            <img src="/upes-hero.jpg" alt="Mridul Pathak — UPES university basketball" />
            <div className="upes-hero-text">
              <div className="upes-hero-eyebrow">UPES · School of Business · 2024–25</div>
              <div className="upes-hero-title">The year I stopped<br />theorising.</div>
              <div className="upes-hero-sub">Dehradun gave me structure. The court gave me proof.</div>
            </div>
          </div>
          <div className="upes-narrative">
            <p>Delhi gave me the vocabulary of economics. Rudrapur gave me the reality of business — messy, human, nothing like the textbooks. But standing inside both, I kept running into the same wall: I could see what needed to happen, but I didn't have the framework to make it happen professionally. That gap is what drove me to UPES.</p>
            <p>The MBA wasn't a credential play. It was a <strong>deliberate repair job.</strong> I came in curious and undirected. I left knowing how to channel it.</p>
          </div>
          <div className="upes-pillars reveal">
            <div className="upes-pillar">
              <span className="pillar-label">On the court</span>
              <span className="pillar-value">Trident<br />Titans</span>
              <span className="pillar-body">Point guard. School of Business. Led the team to victory. Won when it mattered.</span>
            </div>
            <div className="upes-pillar">
              <span className="pillar-label">In the room</span>
              <span className="pillar-value">2 sponsors<br />closed</span>
              <span className="pillar-body">First event after joining GEMS Marketing Club. Just the pitch. No university name doing the work.</span>
            </div>
            <div className="upes-pillar">
              <span className="pillar-label">At the desk</span>
              <span className="pillar-value">3.4<br />GPA</span>
              <span className="pillar-body">Consistent across strategy, research methods, operations. Every project treated as a real brief.</span>
            </div>
          </div>
          <div className="photo-pair reveal">
            <div><img src="/upes-game-2.jpg" alt="Mridul defending — UPES basketball" /><div className="photo-caption"><div className="photo-caption-label">University Games · Defense</div><div className="photo-caption-sub">Reading the game before the play develops</div></div></div>
            <div><img src="/upes-game-1.jpg" alt="Mridul #10 — UPES basketball" /><div className="photo-caption"><div className="photo-caption-label">Trident Titans · #10</div><div className="photo-caption-sub">Under the basket. School of Business on the back.</div></div></div>
          </div>
          <div className="photo-triple reveal" style={{ marginTop: "4px" }}>
            <div><img src="/upes-present-1.jpg" alt="Mridul presenting at UPES" /><div className="photo-caption"><div className="photo-caption-label">Academic Presentation</div><div className="photo-caption-sub">Every project treated as a real brief</div></div></div>
            <div><img src="/upes-present-2.jpg" alt="Team presentation at UPES" /><div className="photo-caption"><div className="photo-caption-label">Collaborative Research</div><div className="photo-caption-sub">Applied marketing — real brand, real analysis</div></div></div>
            <div><img src="/upes-letter.jpg" alt="BUZZ Society letter" /><div className="photo-caption"><div className="photo-caption-label">BUZZ Society · Core Member</div><div className="photo-caption-sub">Appointment — School of Business, UPES</div></div></div>
          </div>
          <div className="upes-cert reveal">
            <div>
              <span className="cert-body-label">Budget Formulation Tournament · UPES</span>
              <span className="cert-body-title">Second.<br />Out of everyone.</span>
              <p className="cert-body-desc">Before the official Union Budget was announced, teams were given the same data the government had. We came second — close enough to matter, far enough to still be thinking about what we'd change.</p>
              <span className="cert-result">// Runner-up · National Budget Formulation Competition · UPES 2025</span>
            </div>
            <img src="/upes-cert.jpg" alt="Certificate — Budget Formulation Tournament" />
          </div>
          <div className="pull-quote reveal">
            <blockquote>"The court was the only place it was entirely, undeniably mine. No institution's name helping. No collaborator to share the credit. Just people believing in the vision."</blockquote>
            <cite>— On representing School of Business at UPES University Games</cite>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "The full story: Delhi to Rudrapur to Dehradun to Richmond. Decision analytics, product thinking, and a belief that the right analysis should be accessible to everyone — not just people who can afford it.");
  }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 002 · The Story</div>
        <h1 className="page-hero__title">About.</h1>
        <p className="page-hero__sub">The person behind the work. The honest version.</p>
        <span className="page-hero__divider-label">002 — About</span>
      </div>

      <div className="about-grid">
        <div className="about-sidebar reveal" aria-hidden="true">
          // 002<br />About<br /><br />
          VCU<br />Richmond, VA<br /><br />
          MDA · Marketing<br />Concentration<br /><br />
          Grad: Dec 2026<br /><br />
          PM · TMF<br />Working now<br /><br />
          MBA · UPES<br />India · 2024–25<br /><br />
          B.A. Econ<br />Delhi · 2021
        </div>

        <div className="about-body">
          <h2 className="about-heading reveal">
            The kind of person<br />you call when you need<br />someone to actually<br /><span className="accent">think with you.</span>
          </h2>

          <p className="reveal d1">
            I'm a <strong>Product Manager at TMF in Richmond</strong> and a Masters student in Decision Analytics at VCU, graduating December 2026. But the credentials are context, not the point.
          </p>

          <p className="reveal d2">
            The point is this: I'm learning everything I can — data tools, AI, market frameworks, product thinking — not to put it on a resume. To use it for the people around me. If you're building something and need someone to help you read the situation clearly, I'm interested. If you have an idea and you don't know if it holds up, let's look at it together. If something went sideways and you need to understand why — not just what happened, but why — that's exactly the kind of conversation I want to have.
          </p>

          <p className="reveal d3">
            On the side, I'm building <strong>MAT</strong> — a free market intelligence platform for first-time founders who can't afford to get the analysis wrong. Plain language. Real outputs. Because the gap between a good idea and a fundable one is usually just access to clear thinking.
          </p>

          {/* The key line */}
          <div className="about-keyline reveal">
            <p>I'm not here to give you an answer and walk away. I'm here to make sure you understand your situation well enough that you don't need me anymore — and you reach back out anyway, because the conversation was worth having.</p>
          </div>

          <div className="rule reveal" />

          <div className="facts-grid reveal">
            <div className="fact-item"><div className="fact-label">Role</div><div className="fact-value red">PM · TMF <span className="sub">Richmond</span></div></div>
            <div className="fact-item"><div className="fact-label">Degree</div><div className="fact-value">MDA <span className="sub">· VCU '26</span></div></div>
            <div className="fact-item"><div className="fact-label">Undergrad</div><div className="fact-value">B.A. Econ <span className="sub">· Delhi</span></div></div>
            <div className="fact-item"><div className="fact-label">Status</div><div className="fact-value" style={{ fontSize: ".85rem", color: "var(--red)" }}>CPT / OPT Ready</div></div>
            <div className="fact-item"><div className="fact-label">Activities</div><div className="fact-value" style={{ fontSize: ".82rem" }}>AMA <span className="sub">· Gamma Iota Sigma</span></div></div>
            <div className="fact-item"><div className="fact-label">Building</div><div className="fact-value" style={{ fontSize: "1rem", color: "var(--red)" }}>MAT</div></div>
          </div>

          <a className="resume-btn reveal d2" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

          {/* Subtle CTA — no explanation, just an open door */}
          <div className="about-open-door reveal" style={{ marginTop: "3rem" }}>
            <Link to="/contact" className="about-open-door__link">
              <span className="about-open-door__label">// Open to conversations</span>
              <span className="about-open-door__text">Ideas · Problems · Opportunities · Questions</span>
              <span className="about-open-door__arrow">→</span>
            </Link>
          </div>

          {/* Bio */}
          <div className="bio-grid reveal" style={{ marginTop: "4rem" }}>
            <div>{bio.map((p, i) => <p key={i} style={{ transitionDelay: `${i * .08}s` }}>{p}</p>)}</div>
            <div className="headshot-wrap">
              <img src="/mridul-headshot.jpg" alt="Mridul Pathak — Uttarakhand Hoops Fest press conference" />
              <div className="headshot-caption">
                <div className="cap-label">Press Conference</div>
                <div className="cap-sub">Uttarakhand Hoops Fest · March 2024</div>
              </div>
            </div>
          </div>

          <div className="section-label reveal" style={{ marginTop: "3rem" }}>// The path</div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-row reveal" style={{ transitionDelay: `${i * .1}s` }}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" aria-hidden="true" />
                <div><div className="timeline-place">{t.place}</div><div className="timeline-note">{t.note}</div></div>
              </div>
            ))}
          </div>

          <UPESChapter />

          <div className="section-label reveal" style={{ marginTop: "3rem" }}>// Certifications</div>
          <div className="cert-list">
            {certList.map((c, i) => (
              <div key={i} className="cert-row reveal" style={{ transitionDelay: `${i * .1}s` }}>
                <div><div className="cert-name">{c.name}</div><div className="cert-org">{c.org}</div></div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>

          <div className="section-label reveal" style={{ marginTop: "2rem" }}>// In the press</div>
          <p className="reveal d1" style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.85, color: "rgba(10,10,8,.72)", marginBottom: "2rem", maxWidth: "580px" }}>
            A local news channel covered the Hoops Fest twice. That doesn't happen unless something real is being built.
          </p>
          <div className="press-grid">
            <div className="press-card reveal">
              <div className="press-video"><iframe src="https://www.youtube.com/embed/NaBxIBpsMDE" title="Uttarakhand Hoops Fest press conference" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div>
              <div className="press-card-body"><div className="press-card-label">Pre-event · Press Conference</div><blockquote className="press-card-quote">Nothing meaningful happens alone. This city showed up for its youth — and its youth showed up for sport.</blockquote></div>
            </div>
            <div className="press-card reveal d1">
              <div className="press-video"><iframe src="https://www.youtube.com/embed/UuKnFZZl_vs?start=170" title="Event day coverage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div>
              <div className="press-card-body"><div className="press-card-label">Event Day · News Coverage</div><blockquote className="press-card-quote">We wanted them to walk into that stadium and realise — there is a future here.</blockquote></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

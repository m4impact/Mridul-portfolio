import { useState, useEffect, useRef, useCallback } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Filmstrip from "../components/Filmstrip";
import Footer from "../components/Footer";
import { projects, skills, tools, certs, services, tiers } from "../data/content";

function useSEO() {
  useEffect(() => {
    document.title = "Mridul Pathak — Decision Analytics & Product Strategy";
    const m = (a,k,v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a,k); document.head.appendChild(el); } el.setAttribute("content",v); };
    m("name","description","MDA student at VCU, Richmond VA. Decision analytics, market entry strategy, demand forecasting, product management. CPT/OPT ready. Incoming PM at TMF May 2026.");
    m("property","og:title","Mridul Pathak — Decision Analytics & Product Strategy");
    m("property","og:image","https://www.mridulpathak.com/og-preview.jpg");
    m("name","twitter:card","summary_large_image");
  }, []);
}

const TAGLINES = ["Data finds the story.\nI tell it.","Numbers don't lie.\nContext does.","Every decision\nleaves a signal."];

function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    const build = () => setLines(Array.from({ length: Math.ceil(window.innerHeight/50)+2 }, (_,i) => i*50));
    build(); window.addEventListener("resize", build); return () => window.removeEventListener("resize", build);
  }, []);
  useEffect(() => {
    const t = setInterval(() => { setFading(true); setTimeout(() => { setIdx(i => (i+1)%TAGLINES.length); setFading(false); }, 500); }, 3800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const fn = () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const s = Math.floor(p*7200), fr = Math.floor((p*7200%1)*24);
      const pad = n => String(n).padStart(2,"0");
      setTc(`${pad(Math.floor(s/3600))}:${pad(Math.floor(s/60)%60)}:${pad(s%60)}:${pad(fr)}`);
    };
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <section id="hero" aria-label="Introduction">
      <div className="ruled-lines" aria-hidden="true">{lines.map(t => <div key={t} className="ruled-line" style={{top:t}} />)}</div>
      <div className="letterbox top" aria-hidden="true" />
      <div className="letterbox bottom" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-eyebrow">// 001 &nbsp;·&nbsp; Richmond, VA &nbsp;·&nbsp; VCU MDA 26</div>
        <h1 className="hero-name">Mridul<br />Pathak</h1>
        <p className="hero-tagline" style={{opacity: fading ? 0 : 1}}>{TAGLINES[idx]}</p>
        <div className="hero-tags">
          {["Product Strategy","Decision Analytics","Market Entry","Forecasting","CPT / OPT Ready"].map(t => <span key={t} className="hero-tag">{t}</span>)}
          <span className="hero-tag highlight">Joining TMF as PM · May 2026</span>
        </div>
      </div>
      <div className="timecode" aria-hidden="true">{tc}</div>
      <div className="scroll-cue" aria-hidden="true"><div className="scroll-arrow" />Scroll to play</div>
    </section>
  );
}

function UPESChapter() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOpen(true); io.unobserve(el); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="upes-wrap" ref={ref}>
      <div className="upes-header">
        <div className="upes-meta"><span className="upes-year">2024-25</span><img src="/upes-logo.png" alt="UPES" className="upes-logo" /></div>
        <div className="upes-title">Dehradun.<br />Where curiosity got a structure.</div>
        <div className="upes-subtitle">MBA · School of Business · Trident Titans · GEMS Club · Krishi Drone</div>
      </div>
      <div className={`upes-body${open ? " open" : ""}`}>
        <div className="upes-inner">
          <div className="upes-hero reveal">
            <img src="/upes-hero.jpg" alt="Mridul Pathak — Trident 07 at UPES university basketball" />
            <div className="upes-hero-text">
              <div className="upes-hero-eyebrow">UPES · School of Business · 2024-25</div>
              <div className="upes-hero-title">The year I stopped<br />theorising.</div>
              <div className="upes-hero-sub">Dehradun gave me structure. The court gave me proof.</div>
            </div>
          </div>
          <div className="upes-narrative">
            <p>Delhi gave me the vocabulary of economics. Rudrapur gave me the reality of business — messy, human, nothing like the textbooks. But standing inside both, I kept running into the same wall: I could see what needed to happen, but I did not have the framework to make it happen professionally. That gap is what drove me to UPES.</p>
            <p>The MBA was not a credential play. It was a <strong>deliberate repair job.</strong> At UPES I learned how businesses are actually structured — how strategy flows through process, how decisions get made inside organisations. I came in curious and undirected. I left knowing how to channel it.</p>
            <p>The work happened on three fronts simultaneously — and none of them were optional.</p>
          </div>
          <div className="upes-pillars reveal">
            <div className="upes-pillar"><span className="pillar-label">On the court</span><span className="pillar-value">Trident<br />Titans</span><span className="pillar-body">Point guard. School of Business representative. Led the team to victory. Won when it mattered.</span></div>
            <div className="upes-pillar"><span className="pillar-label">In the room</span><span className="pillar-value">2 sponsors<br />closed</span><span className="pillar-body">First event after joining GEMS Marketing Club. Walked in as Sponsorship and PR. Walked out with two vendors committed. Just the pitch.</span></div>
            <div className="upes-pillar"><span className="pillar-label">At the desk</span><span className="pillar-value">3.4<br />GPA</span><span className="pillar-body">Consistent across strategy, research methods, operations. Treated every project as a real brief.</span></div>
          </div>
          <div className="photo-pair reveal">
            <div><img src="/upes-game-2.jpg" alt="Mridul defending — UPES basketball" /><div className="photo-caption"><div className="photo-caption-label">University Games · Defense</div><div className="photo-caption-sub">Reading the game before the play develops</div></div></div>
            <div><img src="/upes-game-1.jpg" alt="Mridul #10 — UPES basketball" /><div className="photo-caption"><div className="photo-caption-label">Trident Titans · #10</div><div className="photo-caption-sub">Under the basket. School of Business on the back.</div></div></div>
          </div>
          <div className="photo-triple reveal" style={{marginTop:"4px"}}>
            <div><img src="/upes-present-1.jpg" alt="Mridul presenting at UPES" /><div className="photo-caption"><div className="photo-caption-label">Academic Presentation</div><div className="photo-caption-sub">Every project treated as a real brief</div></div></div>
            <div><img src="/upes-present-2.jpg" alt="Team presentation at UPES" /><div className="photo-caption"><div className="photo-caption-label">Collaborative Research</div><div className="photo-caption-sub">Applied marketing — real brand, real analysis</div></div></div>
            <div><img src="/upes-letter.jpg" alt="BUZZ Society letter" /><div className="photo-caption"><div className="photo-caption-label">BUZZ Society · Core Member</div><div className="photo-caption-sub">Appointment — School of Business, UPES</div></div></div>
          </div>
          <div className="upes-cert reveal">
            <div>
              <span className="cert-body-label">Budget Formulation Tournament · UPES</span>
              <span className="cert-body-title">Second.<br />Out of everyone.</span>
              <p className="cert-body-desc">Before the official Union Budget was announced, teams were given the same data the government had. We came second — close enough to matter, far enough to still be thinking about what we would change.</p>
              <span className="cert-result">// Runner-up · National Budget Formulation Competition · UPES 2025</span>
            </div>
            <img src="/upes-cert.jpg" alt="Certificate — Budget Formulation Tournament" />
          </div>
          <div className="pull-quote reveal">
            <blockquote>The court was the only place it was entirely, undeniably mine. No institution name helping. No collaborator to share the credit. Just people believing in the vision.</blockquote>
            <cite>— On representing School of Business at UPES University Games</cite>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const bio = [
    "I grew up watching decisions get made with the wrong data — or no data at all. That gap between what numbers show and what people actually do became the thing I kept coming back to.",
    "Economics at Delhi gave me the language. An MBA at UPES gave me the pressure. In between, I worked in industrial supply — not glamorous, but it taught me how real businesses make decisions under real constraints.",
    "In 2024 I stopped theorizing and built something. A basketball tournament in the mountains of Uttarakhand. No blueprint, no budget, just a belief it was worth doing. The Indian Air Force sent teams. 1,000 people filled the stands.",
    "Now I am at VCU completing an MS in Decision Analytics, graduating December 2026. Find the signal. Make it useful. Help someone decide.",
  ];
  const timeline = [
    { year:"2018-21", place:"Delhi", note:"BA Economics · University of Delhi · Markets are just people making decisions under uncertainty." },
    { year:"2022-23", place:"Rudrapur", note:"Marketing Intern · Industrial supply · Learned that data without context is just noise." },
    { year:"2024-25", place:"Dehradun", note:"MBA · UPES · School of Business · Trident Titans · Krishi Drone · Budget Competition Runner-up." },
    { year:"Aug 2025-", place:"Richmond, VA", note:"MS Decision Analytics · VCU · Marketing Concentration · Graduating Dec 2026." },
  ];
  const certList = [
    { name:"Project Management Certificate", org:"London School of Business and Finance", date:"Jul 2025" },
    { name:"VCU Leadership Foundations", org:"Virginia Commonwealth University", date:"Dec 2025" },
    { name:"CAPM — Certified Associate in Project Management", org:"PMI", date:"In Progress" },
  ];
  return (
    <section id="about" aria-label="About">
      <div className="about-sidebar reveal" aria-hidden="true">
        // 002<br />About<br /><br />VCU<br />Richmond, VA<br /><br />MDA · Marketing<br />Concentration<br /><br />Grad: Dec 2026<br /><br />MBA · UPES<br />India · 2024-25<br /><br />B.A. Econ<br />Delhi · 2021
      </div>
      <div className="about-body">
        <h2 className="about-heading reveal">The kind of<br />analyst who<br />actually <span className="accent">ships.</span></h2>
        <p className="reveal d1">I am a <strong>Masters student in Decision Analytics</strong> at Virginia Commonwealth University, concentrating in marketing. Real businesses, real data, real decisions.</p>
        <p className="reveal d2">On the side, I am building <strong>MAT</strong> — a market intelligence platform for first-time founders who cannot afford to get the analysis wrong. Free. Plain language. Built because the need is real.</p>
        <p className="reveal d3">In <strong>May 2026</strong>, I join <strong>TMF Richmond</strong> as a Product Manager. TMF is where I am going. MAT is what I am building because the workday ends and the need does not.</p>
        <div className="rule reveal" />
        <div className="facts-grid reveal">
          <div className="fact-item"><div className="fact-label">Degree</div><div className="fact-value">MDA <span className="sub">· VCU 26</span></div></div>
          <div className="fact-item"><div className="fact-label">Undergrad</div><div className="fact-value">B.A. Econ <span className="sub">· Delhi</span></div></div>
          <div className="fact-item"><div className="fact-label">Joining</div><div className="fact-value red">PM · TMF <span className="sub" style={{color:"var(--red)",opacity:.7}}>May 26</span></div></div>
          <div className="fact-item"><div className="fact-label">Status</div><div className="fact-value" style={{fontSize:'.85rem',color:'var(--red)'}}>CPT / OPT Ready</div></div>
          <div className="fact-item"><div className="fact-label">Activities</div><div className="fact-value" style={{fontSize:'.82rem'}}>AMA <span className="sub">· Gamma Iota Sigma</span></div></div>
          <div className="fact-item"><div className="fact-label">Building</div><div className="fact-value" style={{fontSize:"1rem",color:"var(--red)"}}>MAT</div></div>
        </div>
        <a className="resume-btn reveal d2" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <div className="about-extended">
          <div className="bio-grid reveal">
            <div>{bio.map((p,i) => <p key={i} style={{transitionDelay:`${i*.08}s`}}>{p}</p>)}</div>
            <div className="headshot-wrap">
              <img src="/mridul-headshot.jpg" alt="Mridul Pathak — Uttarakhand Hoops Fest press conference" />
              <div className="headshot-caption"><div className="cap-label">Press Conference</div><div className="cap-sub">Uttarakhand Hoops Fest · March 2024</div></div>
            </div>
          </div>
          <div className="section-label reveal">// The path</div>
          <div className="timeline">
            {timeline.map((t,i) => (
              <div key={i} className="timeline-row reveal" style={{transitionDelay:`${i*.1}s`}}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" aria-hidden="true" />
                <div><div className="timeline-place">{t.place}</div><div className="timeline-note">{t.note}</div></div>
              </div>
            ))}
          </div>
          <UPESChapter />
          <div className="section-label reveal" style={{marginTop:"4rem"}}>// Certifications</div>
          <div className="cert-list">
            {certList.map((c,i) => (
              <div key={i} className="cert-row reveal" style={{transitionDelay:`${i*.1}s`}}>
                <div><div className="cert-name">{c.name}</div><div className="cert-org">{c.org}</div></div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>
          <div className="section-label reveal" style={{marginTop:"2rem"}}>// In the press</div>
          <p className="reveal d1" style={{fontSize:"1.25rem",fontWeight:400,lineHeight:1.85,color:"rgba(10,10,8,.75)",marginBottom:"2rem",maxWidth:"580px"}}>A local news channel covered the Hoops Fest twice — before the event and on the day. That does not happen unless something real is being built.</p>
          <div className="press-grid">
            <div className="press-card reveal">
              <div className="press-video"><iframe src="https://www.youtube.com/embed/NaBxIBpsMDE" title="Uttarakhand Hoops Fest press conference" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div>
              <div className="press-card-body"><div className="press-card-label">Pre-event · Press Conference</div><blockquote className="press-card-quote">Nothing meaningful happens alone. This city showed up for its youth — and its youth showed up for sport.</blockquote></div>
            </div>
            <div className="press-card reveal d1">
              <div className="press-video"><iframe src="https://www.youtube.com/embed/UuKnFZZl_vs?start=170" title="Uttarakhand Hoops Fest event day" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div>
              <div className="press-card-body"><div className="press-card-label">Event Day · News Coverage</div><blockquote className="press-card-quote">We wanted them to walk into that stadium and realise — there is a future here.</blockquote></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ p }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(o => !o), []);
  return (
    <div>
      <div className="project-row reveal" role="button" tabIndex={0} aria-expanded={open} onClick={toggle} onKeyDown={e => { if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle();} }}>
        <span className="project-num" aria-hidden="true">{p.num}</span>
        <div>
          <div className="project-name">{p.name}</div>
          <div className="project-sub">{p.sub}</div>
          <div className="project-tags">{p.tags.map(([cls,t],i) => <span key={i} className={`project-tag${cls?" "+cls:""}`}>{t}</span>)}</div>
        </div>
        <div className="project-meta" aria-hidden="true">
          <span className="project-year">{p.year}</span>
          <div className="project-expand">{open ? "Collapse" : "Expand"}</div>
        </div>
      </div>
      <div className={`project-detail${open?" open":""}`}>
        <div className="project-detail-inner">
          <div className="project-body">
            {p.body.split("\n\n").map((para,i) => <p key={i} style={{marginBottom:"1rem"}}>{para}</p>)}
            <span className="project-outcome">{p.outcome}</span>
            {p.note && <span className="project-note" style={{display:"block",marginTop:"1rem"}}>{p.note}</span>}
            {p.link && <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}>View Case Study</a>}
            {p.hasPhotos && (
              <div style={{marginTop:"1.5rem"}}>
                <div className="hoops-hero"><img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest champions" /><div className="photo-overlay"><div className="photo-overlay-label">Kashipur · March 2024</div><div className="photo-overlay-sub">Champions receive prize</div></div></div>
                <div className="hoops-pair">
                  <div><img src="/hoops-ceremony.jpg" alt="Opening ceremony" /><div className="photo-overlay"><div className="photo-overlay-label">Opening Ceremony</div></div></div>
                  <div><img src="/hoops-opening.jpg" alt="Lamp lighting" /><div className="photo-overlay"><div className="photo-overlay-label">Inauguration</div></div></div>
                </div>
              </div>
            )}
          </div>
          <div className="project-stats">{p.stats.map(([l,v]) => <div key={l} className="project-stat"><span className="stat-label">{l}</span><span className="stat-value">{v}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" aria-label="Selected work">
      <div className="section-head reveal"><h2 className="section-heading">Selected<br />Work.</h2><span className="section-count">05 projects</span></div>
      {projects.map(p => <ProjectRow key={p.num} p={p} />)}
      <div style={{borderTop:"1px solid rgba(10,10,8,.08)"}} />
    </section>
  );
}

function Marquee() {
  const items = ["Decision Analytics","Market Entry Strategy","Demand Forecasting","Product Management","Stakeholder Communication","Go-To-Market"];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">{[...items,...items].map((t,i) => <span key={i} className="marquee-item">{t}</span>)}</div>
    </div>
  );
}

function Skills() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return; e.target.querySelectorAll(".skill-fill").forEach(f => { f.style.width = f.dataset.width; }); io.unobserve(e.target); });
    }, { threshold: .1 });
    const t = document.querySelector(".skills-list"); if (t) io.observe(t);
    return () => io.disconnect();
  }, []);
  return (
    <section id="skills" aria-label="Skills">
      <div className="skills-bg" aria-hidden="true">SKILL</div>
      <h2 className="skills-heading reveal">What I<br />actually <span className="accent">know.</span></h2>
      <div className="skills-list">
        {skills.map(({name,pct,pills},i) => (
          <div key={i} className="skill-row reveal">
            <span className="skill-name">{name}</span>
            <div className="skill-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><div className="skill-fill" data-width={`${pct}%`} /></div>
            <div className="skill-pills">{pills.map(p => <span key={p} className="skill-pill">{p}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="tools-block reveal d2"><div className="tools-label">// Tools</div><div className="tools-list">{tools.map(t => <span key={t} className="tool-tag">{t}</span>)}</div></div>
      <div className="tools-block reveal d3"><div className="tools-label">// Certifications</div><div className="tools-list">{certs.map(c => <span key={c} className="tool-tag cert">{c}</span>)}</div></div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" aria-label="Services">
      <div className="section-head reveal"><h2 className="section-heading">What I<br />can do.</h2><span className="section-count">06 offerings</span></div>
      <div className="services-grid">
        {services.map((s,i) => <div key={i} className="service-card reveal" style={{transitionDelay:`${i*.07}s`}}><h3>{s.title}</h3><p>{s.body}</p></div>)}
      </div>
      <div className="section-label reveal">// How I work</div>
      <div className="reveal d1" style={{maxWidth:620,marginBottom:"3.5rem"}}>
        <p style={{fontFamily:"var(--font-serif)",fontStyle:"italic",fontWeight:300,fontSize:"clamp(1.2rem,2.2vw,1.8rem)",color:"var(--ink)",lineHeight:1.45,marginBottom:"1.2rem"}}>It is not always about the money.</p>
        <p style={{fontFamily:"var(--font-mono)",fontSize:".6rem",color:"rgba(10,10,8,.45)",lineHeight:1.95,letterSpacing:".03em"}}>Some of the best work starts with a conversation — no brief, no budget, no commitment. If you have a problem that needs thinking through, reach out. The conversation is always free.</p>
      </div>
      <div className="tiers">{tiers.map((t,i) => <div key={i} className="tier-card reveal" style={{transitionDelay:`${i*.12}s`}}><div className="tier-name">{t.name}</div><p className="tier-desc">{t.desc}</p></div>)}</div>
    </section>
  );
}

function Contact() {
  const [fields, setFields] = useState({name:"",email:"",message:""});
  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) e.email = "Valid email required";
    if (!fields.message.trim()) e.message = "Required";
    setErrors(e); return Object.keys(e).length === 0;
  };
  const inputStyle = (f) => ({ width:"100%", background:"transparent", border:"none", borderBottom:`1px solid ${focused===f?"var(--red)":errors[f]?"#c0392b":"rgba(10,10,8,.18)"}`, color:"var(--ink)", fontFamily:"var(--font-mono)", fontSize:".72rem", padding:"10px 0", outline:"none", transition:"border-color .25s", letterSpacing:".04em", boxSizing:"border-box" });
  const contactLinks = [
    ["mailto:pathakm3@vcu.edu","Email","pathakm3@vcu.edu"],
    ["https://linkedin.com/in/mridul-pathak","LinkedIn","mridul-pathak"],
    ["/resume.pdf","Resume","Download PDF"],
    ["https://github.com/m4impact","GitHub","m4impact"],
  ];
  return (
    <section id="contact" aria-label="Contact">
      <div>
        <h2 className="contact-heading reveal">Lets talk<br />about<br />something<br />real.</h2>
        <p className="contact-sub reveal d1">If you are building something, need analysis done, or just want to talk strategy — I am around.</p>
        <div className="contact-links reveal d2">
          {contactLinks.map(([href,name,arrow]) => (
            <a key={name} className="contact-link" href={href} target={href.startsWith("http")||href.endsWith(".pdf")?"_blank":"_self"} rel="noopener noreferrer">
              <span className="link-name">{name}</span><span className="link-arrow">{arrow}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="reveal d1">
        {sent ? (
          <div className="form-success" role="status"><div className="success-tick">✓</div><div className="success-msg">Message sent. I will be in touch shortly.</div></div>
        ) : (
          <form className="contact-form" onSubmit={e=>{e.preventDefault();if(validate())setSent(true);}} noValidate>
            {["name","email","message"].map(f => (
              <div key={f}>
                <label htmlFor={`cf-${f}`} className={`form-label${focused===f?" focused":""}${errors[f]?" error":""}`}>{f}{errors[f]&&<span style={{fontStyle:"italic",marginLeft:"6px"}}>{errors[f]}</span>}</label>
                {f==="message"
                  ? <textarea id={`cf-${f}`} rows={5} value={fields[f]} onChange={e=>setFields(p=>({...p,[f]:e.target.value}))} onFocus={()=>setFocused(f)} onBlur={()=>setFocused("")} style={{...inputStyle(f),resize:"none",lineHeight:1.8}} className="form-input" aria-required="true" />
                  : <input id={`cf-${f}`} type={f==="email"?"email":"text"} value={fields[f]} onChange={e=>setFields(p=>({...p,[f]:e.target.value}))} onFocus={()=>setFocused(f)} onBlur={()=>setFocused("")} style={inputStyle(f)} className="form-input" aria-required="true" />}
              </div>
            ))}
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  useSEO();
  useScrollReveal();
  return (
    <>
      <a className="skip-link" href="#hero">Skip to content</a>
      <Filmstrip />
      <main>
        <Hero />
        <div className="section-divider reveal" aria-hidden="true"><span>001 — 002</span></div>
        <About />
        <div className="section-divider reveal" aria-hidden="true"><span>002 — 003</span></div>
        <Work />
        <Marquee />
        <Skills />
        <div className="section-divider reveal" style={{background:"var(--paper)"}} aria-hidden="true"><span style={{background:"var(--ink)"}}>004 — 005</span></div>
        <Services />
        <div className="section-divider reveal" aria-hidden="true"><span>005 — 006</span></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

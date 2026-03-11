import { useState, useEffect, useRef } from "react";

// ── Hooks ──────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCountUp(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

// ── Cursor ─────────────────────────────────────────────────────────────────
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let rx = 0, ry = 0;
    const move = (e) => {
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
    };
    const smooth = () => {
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      requestAnimationFrame(smooth);
    };
    window.addEventListener("mousemove", move);
    smooth();
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={dot} style={{ position:"fixed",width:6,height:6,borderRadius:"50%",background:"#C97D4E",pointerEvents:"none",zIndex:9999,transform:"translate(-50%,-50%)",transition:"opacity .2s" }} />
      <div ref={ring} style={{ position:"fixed",width:32,height:32,borderRadius:"50%",border:"1.5px solid rgba(201,125,78,.45)",pointerEvents:"none",zIndex:9998,transform:"translate(-50%,-50%)" }} />
    </>
  );
}

// ── Fade wrapper ───────────────────────────────────────────────────────────
function Fade({ children, delay = 0, from = "bottom", className = "" }) {
  const [ref, visible] = useInView();
  const transforms = { bottom:"translateY(32px)", left:"translateX(-32px)", right:"translateX(32px)", none:"none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : transforms[from],
      transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`
    }}>
      {children}
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────
function Nav({ active, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Home","About","Portfolio","Services","Contact"];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      padding:"0 clamp(24px,5vw,64px)",
      height:64,display:"flex",alignItems:"center",justifyContent:"space-between",
      background: scrolled ? "rgba(10,9,8,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,125,78,.12)" : "none",
      transition:"all .4s ease"
    }}>
      <button onClick={() => { setPage("Home"); window.scrollTo(0,0); }} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:"#F5EFE6",letterSpacing:".04em" }}>
        Mridul Pathak
      </button>
      <div style={{ display:"flex",gap:32 }}>
        {links.map(l => (
          <button key={l} onClick={() => { setPage(l); window.scrollTo(0,0); setMenuOpen(false); }} style={{
            background:"none",border:"none",cursor:"pointer",
            fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:".12em",textTransform:"uppercase",
            color: active === l ? "#C97D4E" : "rgba(245,239,230,.6)",
            transition:"color .2s",padding:"4px 0",
            borderBottom: active === l ? "1px solid #C97D4E" : "1px solid transparent"
          }}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ── HOME ───────────────────────────────────────────────────────────────────
const headlines = [
  "Data finds the story.\nI tell it.",
  "Numbers don't lie.\nContext does.",
  "Every decision\nleaves a signal."
];

function Home({ setPage }) {
  const [hIdx, setHIdx] = useState(0);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setHIdx(i => (i + 1) % headlines.length); setFading(false); }, 500);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const [statsRef, statsVisible] = useInView();
  const c1 = useCountUp(1000, statsVisible);
  const c2 = useCountUp(100, statsVisible, 1200);
  const c3 = useCountUp(3, statsVisible, 1500);

  return (
    <div style={{ background:"#0A0908", minHeight:"100vh" }}>
      {/* Hero */}
      <section style={{
        minHeight:"100vh",display:"flex",alignItems:"center",
        padding:"0 clamp(24px,8vw,120px)",
        position:"relative",overflow:"hidden"
      }}>
        {/* Hero background image */}
        <div style={{ position:"absolute",inset:0,backgroundImage:'url("/hero-bg.png")',backgroundSize:"cover",backgroundPosition:"center",opacity:.55,pointerEvents:"none" }} />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,rgba(10,9,8,.88) 40%,rgba(10,9,8,.3) 100%)",pointerEvents:"none" }} />
        {/* Grain overlay */}
        <div style={{ position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,opacity:.6,pointerEvents:"none" }} />
        {/* Ambient glow */}
        <div style={{ position:"absolute",top:"20%",right:"10%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,125,78,.07) 0%,transparent 70%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:"15%",left:"5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,125,78,.04) 0%,transparent 70%)",pointerEvents:"none" }} />

        <div style={{ maxWidth:820,zIndex:1 }}>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:32,opacity:.8 }}>
            Decision Analytics · VCU · Richmond VA
          </div>
          <h1 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:"clamp(52px,8vw,108px)",
            fontWeight:300,lineHeight:1.05,
            color:"#F5EFE6",
            margin:"0 0 32px",
            whiteSpace:"pre-line",
            opacity: fading ? 0 : 1,
            transition:"opacity .5s ease"
          }}>
            {headlines[hIdx]}
          </h1>
          <p style={{ fontFamily:"'DM Mono',monospace",fontSize:14,lineHeight:1.8,color:"rgba(245,239,230,.5)",maxWidth:480,marginBottom:48 }}>
            Graduate researcher. Market analyst. Founder.<br />
            Open to CPT opportunities across the US.
          </p>
          <div style={{ display:"flex",gap:16,flexWrap:"wrap" }}>
            <button onClick={() => { setPage("Portfolio"); window.scrollTo(0,0); }} style={{
              fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:".12em",textTransform:"uppercase",
              padding:"14px 32px",background:"#C97D4E",color:"#0A0908",border:"none",cursor:"pointer",
              transition:"all .25s ease"
            }}
              onMouseEnter={e => { e.target.style.background="#F5EFE6"; }}
              onMouseLeave={e => { e.target.style.background="#C97D4E"; }}
            >
              See My Work
            </button>
            <button onClick={() => { setPage("Contact"); window.scrollTo(0,0); }} style={{
              fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:".12em",textTransform:"uppercase",
              padding:"14px 32px",background:"transparent",color:"#F5EFE6",border:"1px solid rgba(245,239,230,.3)",cursor:"pointer",
              transition:"all .25s ease"
            }}
              onMouseEnter={e => { e.target.style.borderColor="#C97D4E"; e.target.style.color="#C97D4E"; }}
              onMouseLeave={e => { e.target.style.borderColor="rgba(245,239,230,.3)"; e.target.style.color="#F5EFE6"; }}
            >
              Work With Me
            </button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position:"absolute",bottom:40,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".15em",color:"rgba(245,239,230,.3)",textTransform:"uppercase" }}>scroll</div>
          <div style={{ width:1,height:40,background:"linear-gradient(to bottom,rgba(201,125,78,.6),transparent)",animation:"scrollPulse 2s infinite" }} />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ padding:"80px clamp(24px,8vw,120px)",borderTop:"1px solid rgba(201,125,78,.1)",borderBottom:"1px solid rgba(201,125,78,.1)" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:40,maxWidth:720 }}>
          {[
            { val: c1, suffix:"+", label:"Attendees at Uttarakhand Hoops Fest — founded, funded, and run from scratch" },
            { val: c2, suffix:"K+", label:"Dollar project — market entry research for Crafteve India entering the US" },
            { val: c3, suffix:"", label:"Research projects translating raw data into decisions that held up in the real world" },
          ].map((s,i) => (
            <Fade key={i} delay={i * .15}>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,6vw,72px)",fontWeight:300,color:"#C97D4E",lineHeight:1 }}>
                  {s.val}{s.suffix}
                </div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.4)",marginTop:12,lineHeight:1.6,letterSpacing:".04em" }}>
                  {s.label}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Delhi → Richmond Journey */}
      <section style={{ padding:"120px clamp(24px,8vw,120px)",borderTop:"1px solid rgba(201,125,78,.1)" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:24,opacity:.8 }}>The journey</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 80px",lineHeight:1.1 }}>
            Delhi to Richmond.<br />
            <span style={{ color:"rgba(245,239,230,.3)" }}>Always asking why.</span>
          </h2>
        </Fade>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:0,position:"relative" }}>
          {[
            { city:"Delhi", year:"2018", line1:"Economics degree.", line2:"Learned that markets are just people making decisions under uncertainty.", accent:false },
            { city:"Rudrapur", year:"2022", line1:"First real job.", line2:"Watched a manufacturing company make expensive decisions without data to back them.", accent:false },
            { city:"Dehradun", year:"2024", line1:"Founded Hoops Fest.", line2:"1,000 people showed up. Sponsorships secured. No blueprint — just execution.", accent:true },
            { city:"Richmond, VA", year:"2025", line1:"VCU. Decision Analytics.", line2:"Now I build the frameworks I always wished those companies had.", accent:false },
          ].map((s,i) => (
            <Fade key={i} delay={i*.18} from="bottom">
              <div style={{
                padding:"40px 32px",
                borderLeft: i===0 ? "none" : "1px solid rgba(201,125,78,.1)",
                borderTop: s.accent ? "2px solid #C97D4E" : "2px solid transparent",
                transition:"border-color .3s"
              }}>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"#C97D4E",letterSpacing:".15em",marginBottom:16 }}>{s.year}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:400,color:"#F5EFE6",marginBottom:16 }}>{s.city}</div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.6)",marginBottom:10,lineHeight:1.6 }}>{s.line1}</div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.35)",lineHeight:1.8 }}>{s.line2}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section style={{ padding:"120px clamp(24px,8vw,120px)" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:16,opacity:.8 }}>What I do</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 64px",lineHeight:1.1 }}>
            Three ways I can help.
          </h2>
        </Fade>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:1,border:"1px solid rgba(201,125,78,.12)" }}>
          {[
            { n:"01", title:"Research & Insights", body:"Market research reports. Consumer insight decks. Demand forecasting. I find what the data is actually saying and make it usable." },
            { n:"02", title:"Strategy & Analysis", body:"Market entry analysis. Decision support. Competitive landscape mapping. I help you understand before you commit." },
            { n:"03", title:"Events & Sponsorship", body:"From running a 1,000-person tournament to advising startups on sponsor strategy. I know what it takes to make events work commercially." },
          ].map((c,i) => (
            <Fade key={i} delay={i*.15} from="bottom">
              <div style={{
                padding:"48px 40px",background:"#0A0908",borderRight:"1px solid rgba(201,125,78,.12)",
                transition:"background .3s ease",cursor:"default"
              }}
                onMouseEnter={e => e.currentTarget.style.background="#110F0D"}
                onMouseLeave={e => e.currentTarget.style.background="#0A0908"}
              >
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"#C97D4E",marginBottom:24,letterSpacing:".1em" }}>{c.n}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:400,color:"#F5EFE6",margin:"0 0 16px" }}>{c.title}</h3>
                <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,lineHeight:1.9,color:"rgba(245,239,230,.45)" }}>{c.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <style>{`@keyframes scrollPulse { 0%,100%{opacity:.3} 50%{opacity:.8} }`}</style>
    </div>
  );
}

// ── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  const timeline = [
    { year:"2018–21", place:"Delhi", note:"BA Economics · University of Delhi · First lesson — markets are just people making decisions under uncertainty." },
    { year:"2022–23", place:"Rudrapur", note:"Marketing Intern · Industrial supply sector · Learned that data without context is just noise." },
    { year:"2024–25", place:"Dehradun", note:"MBA · UPES · Founded Uttarakhand Hoops Fest. Built it from nothing. 1,000+ people showed up." },
    { year:"2025–now", place:"Richmond, VA", note:"MS Decision Analytics · VCU · Building the quantitative foundation to match the intuitions I've earned in the field." },
  ];
  return (
    <div style={{ background:"#0A0908", minHeight:"100vh", paddingTop:64 }}>

      {/* ── HERO ── */}
      <section style={{ padding:"100px clamp(24px,8vw,120px) 80px" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:24,opacity:.8 }}>About</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,6vw,80px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.1,maxWidth:800,margin:0 }}>
            From Delhi to Richmond —<br />always asking why.
          </h1>
        </Fade>
      </section>

      {/* ── BIO + HEADSHOT ── */}
      <section style={{ padding:"0 clamp(24px,8vw,120px) 100px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 500px",gap:"48px",alignItems:"start" }}>
          <div>
            {[
              "I grew up watching decisions get made with the wrong data — or no data at all. That gap between what numbers show and what people actually do became the thing I kept coming back to.",
              "Economics at Delhi gave me the language. An MBA at UPES gave me the pressure. In between, I worked in industrial supply — not glamorous, but it taught me how real businesses make decisions under real constraints.",
              "In 2024 I stopped theorizing and built something. A basketball tournament in the mountains of Uttarakhand. No blueprint, no budget, just a belief it was worth doing. The Indian Air Force sent teams. Corporate sponsors came on board. A local news channel showed up — twice. 1,000 people filled the stands.",
              "Now I'm at VCU completing an MS in Decision Analytics. The work is more rigorous, the models more precise — but the instinct is the same. Find the signal. Make it useful. Help someone decide.",
            ].map((p,i) => (
              <Fade key={i} delay={i*.08}>
                <p style={{ fontFamily:"'DM Mono',monospace",fontSize:13,lineHeight:2,color:"rgba(245,239,230,.65)",marginBottom:28 }}>{p}</p>
              </Fade>
            ))}
          </div>
          <Fade from="right" delay={0.15}>
            <div style={{ position:"sticky",top:100 }}>
              <div style={{ position:"relative" }}>
                <img
                  src="/mridul-headshot.jpg"
                  alt="Mridul Pathak"
                  style={{ width:"100%",display:"block",filter:"grayscale(15%) sepia(10%)" }}
                />
                <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"40px 18px 18px",background:"linear-gradient(transparent,rgba(10,9,8,.96))" }}>
                  <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"#C97D4E",letterSpacing:".15em",textTransform:"uppercase",marginBottom:4 }}>Press Conference</div>
                  <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"rgba(245,239,230,.35)",letterSpacing:".06em" }}>Uttarakhand Hoops Fest · March 2024</div>
                </div>
                <div style={{ position:"absolute",inset:0,outline:"1px solid rgba(201,125,78,.18)",outlineOffset:-1,pointerEvents:"none" }} />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding:"80px clamp(24px,8vw,120px)",borderTop:"1px solid rgba(201,125,78,.08)" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(201,125,78,.5)",marginBottom:16 }}>The path</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 64px" }}>Every stop taught something.</h2>
        </Fade>
        <div style={{ position:"relative",maxWidth:680 }}>
          <div style={{ position:"absolute",left:72,top:8,bottom:8,width:1,background:"rgba(201,125,78,.15)" }} />
          {timeline.map((t,i) => (
            <Fade key={i} delay={i*.1} from="left">
              <div style={{ display:"flex",gap:32,marginBottom:52,position:"relative",alignItems:"flex-start" }}>
                <div style={{ minWidth:72,textAlign:"right",paddingTop:2 }}>
                  <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"#C97D4E",letterSpacing:".06em" }}>{t.year}</div>
                </div>
                <div style={{ width:7,height:7,borderRadius:"50%",background:"#C97D4E",flexShrink:0,marginTop:5,position:"relative",zIndex:1,boxShadow:"0 0 0 3px rgba(201,125,78,.12)" }} />
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:"#F5EFE6",fontWeight:400,marginBottom:8,lineHeight:1 }}>{t.place}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.4)",lineHeight:1.9 }}>{t.note}</div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ── PRESS ── */}
      <section style={{ padding:"100px clamp(24px,8vw,120px)",borderTop:"1px solid rgba(201,125,78,.08)",background:"#0b0a09" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(201,125,78,.5)",marginBottom:16 }}>In the press</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 16px" }}>A local news channel covered it twice.</h2>
          <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,color:"rgba(245,239,230,.4)",lineHeight:1.9,maxWidth:560,margin:"0 0 64px" }}>Before the tournament. And on the day itself. That doesn't happen unless something real is being built.</p>
        </Fade>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:40 }}>
          <Fade from="left">
            <div style={{ display:"flex",flexDirection:"column",border:"1px solid rgba(201,125,78,.12)" }}>
              <div style={{ position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden" }}>
                <iframe src="https://www.youtube.com/embed/NaBxIBpsMDE?start=0" title="Pre-event press conference"
                  style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div style={{ padding:"28px 24px 32px",borderTop:"1px solid rgba(201,125,78,.1)",flex:1,display:"flex",flexDirection:"column",gap:16 }}>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"#C97D4E" }}>Pre-event · Press Conference</div>
                <blockquote style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(17px,1.8vw,24px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.4,margin:0,fontStyle:"italic",flex:1 }}>
                  "Nothing meaningful happens alone. This city showed up for its youth — and its youth showed up for sport."
                </blockquote>
              </div>
            </div>
          </Fade>
          <Fade from="right" delay={0.1}>
            <div style={{ display:"flex",flexDirection:"column",border:"1px solid rgba(201,125,78,.12)" }}>
              <div style={{ position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden" }}>
                <iframe src="https://www.youtube.com/embed/UuKnFZZl_vs?start=170" title="Event day coverage"
                  style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div style={{ padding:"28px 24px 32px",borderTop:"1px solid rgba(201,125,78,.1)",flex:1,display:"flex",flexDirection:"column",gap:16 }}>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"#C97D4E" }}>Event Day · News Coverage</div>
                <blockquote style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(17px,1.8vw,24px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.4,margin:0,fontStyle:"italic",flex:1 }}>
                  "We wanted them to walk into that stadium and realise — there is a future here. That belief filled three days and brought a thousand people."
                </blockquote>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ padding:"80px clamp(24px,8vw,120px)",borderTop:"1px solid rgba(201,125,78,.08)" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(201,125,78,.5)",marginBottom:16 }}>Toolbox</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 48px" }}>What I work with.</h2>
        </Fade>
        <div style={{ display:"flex",flexWrap:"wrap",gap:10 }}>
          {["Python","R","SQL","Tableau","Power BI","Excel","AMPL","Demand Forecasting","Market Research","Decision Analytics","Six Sigma","Stakeholder Analysis","Consumer Insights","Event Operations","Sponsorship Strategy"].map((s,i) => (
            <Fade key={s} delay={i*.025}>
              <span style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".08em",padding:"8px 16px",border:"1px solid rgba(201,125,78,.2)",color:"rgba(245,239,230,.55)",transition:"all .2s ease",cursor:"default" }}
                onMouseEnter={e=>{ e.target.style.borderColor="#C97D4E"; e.target.style.color="#C97D4E"; }}
                onMouseLeave={e=>{ e.target.style.borderColor="rgba(201,125,78,.2)"; e.target.style.color="rgba(245,239,230,.55)"; }}>
                {s}
              </span>
            </Fade>
          ))}
        </div>
      </section>

    </div>
  );
}

// ── PORTFOLIO ──────────────────────────────────────────────────────────────
const projects = [
  {
    id:"01",
    title:"Demand Forecasting for Nightingale Ice Cream",
    tags:["Forecasting","Excel","Time Series","Analytics"],
    year:"2025",
    body:"An emerging ice cream brand needed to understand its seasonal demand patterns before scaling inventory. I built moving average and exponential smoothing models, ran parameter sensitivity tests across historical periods, and mapped forecast error to business decisions. The output wasn't a number — it was a framework for deciding when to stock more and when to hold.",
    outcome:"Identified optimal smoothing parameters to reduce forecast error across seasonal peaks."
  },
  {
    id:"02",
    title:"U.S. Market Entry Strategy for Crafteve India",
    tags:["Market Research","Strategy","Cost-Benefit","Decision Analytics"],
    year:"2025",
    body:"Crafteve, an Indian handicrafts brand, was weighing a $100,000 direct U.S. market launch against a phased pilot approach. I researched target consumer segments, mapped the competitive landscape, and built a cost-benefit model comparing both paths. The phased pilot preserved capital while validating real demand — and the numbers backed it clearly.",
    outcome:"Recommended phased pilot over $100,000 direct investment. Decision aligned with actual market conditions."
  },
  {
    id:"03",
    title:"Pricing Research for Krishi Drone — Agritech",
    tags:["Stakeholder Research","Pricing","Agritech","Qualitative"],
    year:"2024",
    body:"Krishi Drone was developing precision farming technology for rural India. The question wasn't whether the product worked — it was whether farmers would pay for it. I conducted stakeholder interviews with rural farmers and drone service operators, evaluated subscription vs. per-use pricing models, and assessed willingness-to-pay across different farm sizes.",
    outcome:"Surfaced a clear preference for seasonal subscription over per-use pricing among small-hold farmers."
  },
  {
    id:"04",
    title:"Uttarakhand Hoops Fest — Event Strategy & Operations",
    tags:["Event Strategy","Sponsorship","Operations","Community"],
    year:"2024",
    body:"Founded and ran a 3-day basketball tournament in the Uttarakhand mountains. Built the event from zero — secured teams from the Indian Air Force, Indian Railways, and colleges across the region. Negotiated sponsorships with FMCG brands, sports equipment companies, and digital media partners. Ran career workshops for athletes alongside the competition.",
    outcome:"1,000+ attendees. Full sponsorship coverage. Zero blueprint — just execution."
  },
];

function Portfolio() {
  const [active, setActive] = useState(null);
  return (
    <div style={{ background:"#0A0908",minHeight:"100vh",paddingTop:64 }}>
      <section style={{ padding:"100px clamp(24px,8vw,120px) 80px" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:24,opacity:.8 }}>Portfolio</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,6vw,80px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.1,margin:0 }}>
            Real problems.<br />Real analysis.
          </h1>
        </Fade>
      </section>

      <section style={{ padding:"0 clamp(24px,8vw,120px) 120px" }}>
        {projects.map((p,i) => (
          <Fade key={p.id} delay={i*.1}>
            <div
              onClick={() => setActive(active === p.id ? null : p.id)}
              style={{
                borderTop:"1px solid rgba(201,125,78,.15)",
                padding:"40px 0",cursor:"pointer",
                transition:"all .3s ease"
              }}
            >
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:24 }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",gap:16,alignItems:"center",marginBottom:16,flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"#C97D4E",letterSpacing:".1em" }}>{p.id}</span>
                    <span style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.3)",letterSpacing:".08em" }}>{p.year}</span>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.35)",border:"1px solid rgba(201,125,78,.2)",padding:"2px 10px",letterSpacing:".06em" }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,3vw,36px)",fontWeight:300,color:"#F5EFE6",margin:0,lineHeight:1.2 }}>{p.title}</h3>
                </div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:20,color:"rgba(201,125,78,.6)",flexShrink:0,transition:"transform .3s",transform: active===p.id?"rotate(45deg)":"none" }}>+</div>
              </div>

              {active === p.id && (
                <div style={{ marginTop:32,paddingTop:32,borderTop:"1px solid rgba(201,125,78,.08)" }}>
                  <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,lineHeight:2,color:"rgba(245,239,230,.55)",maxWidth:680,marginBottom:24 }}>{p.body}</p>
                  <div style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:40 }}>
                    <div style={{ width:2,height:40,background:"#C97D4E",flexShrink:0,marginTop:2 }} />
                    <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,color:"#C97D4E",lineHeight:1.8,margin:0 }}>{p.outcome}</p>
                  </div>
                  {p.id === "04" && (
                    <div>
                      {/* Hero image — champions with cheque */}
                      <div style={{ position:"relative",marginBottom:16,overflow:"hidden" }}>
                        <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest Champions"
                          style={{ width:"100%",maxHeight:560,objectFit:"cover",objectPosition:"center top",display:"block",filter:"grayscale(10%) sepia(8%)" }} />
                        <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"48px 24px 20px",background:"linear-gradient(transparent,rgba(10,9,8,.92))" }}>
                          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"#C97D4E",letterSpacing:".15em",textTransform:"uppercase",marginBottom:4 }}>Kashipur · March 2024</div>
                          <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"#F5EFE6",fontStyle:"italic" }}>Champions receive ₹51,000 prize — Uttarakhand Hoops Fest Basketball Tournament</div>
                        </div>
                      </div>
                      {/* Supporting row — two smaller images */}
                      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                        <div style={{ position:"relative",overflow:"hidden" }}>
                          <img src="/hoops-ceremony.jpg" alt="Opening ceremony"
                            style={{ width:"100%",height:360,objectFit:"cover",objectPosition:"center",display:"block",filter:"grayscale(10%) sepia(8%)" }} />
                          <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"32px 16px 14px",background:"linear-gradient(transparent,rgba(10,9,8,.88))" }}>
                            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"rgba(245,239,230,.45)",letterSpacing:".1em" }}>Opening Ceremony</div>
                          </div>
                        </div>
                        <div style={{ position:"relative",overflow:"hidden" }}>
                          <img src="/hoops-opening.jpg" alt="Lamp lighting ceremony"
                            style={{ width:"100%",height:360,objectFit:"cover",objectPosition:"center 40%",display:"block",filter:"grayscale(10%) sepia(8%)" }} />
                          <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"32px 16px 14px",background:"linear-gradient(transparent,rgba(10,9,8,.88))" }}>
                            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"rgba(245,239,230,.45)",letterSpacing:".1em" }}>Inauguration · Lamp Lighting</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Fade>
        ))}
        <div style={{ borderTop:"1px solid rgba(201,125,78,.15)" }} />
      </section>
    </div>
  );
}

// ── SERVICES ───────────────────────────────────────────────────────────────
function Services() {
  const services = [
    { title:"Market Research Reports", body:"Comprehensive analysis of your market landscape. Competitive mapping, segment sizing, consumer profiling — packaged into a report you can act on." },
    { title:"Consumer Insight Decks", body:"Qualitative and quantitative research into how your customers think, what they want, and why they buy. Delivered as a presentation-ready deck." },
    { title:"Demand Forecasting", body:"Time series modeling to help you anticipate what's coming. Moving averages, exponential smoothing, scenario testing." },
    { title:"Sponsorship Consulting", body:"From pitch decks to partnership structures. Built on real experience securing sponsors for a 1,000-person event in India." },
    { title:"Event Strategy", body:"End-to-end strategic planning for events — from concept to execution. Operations, stakeholder management, commercial strategy." },
    { title:"Data Analysis & Visualization", body:"Turn raw data into clarity. Python, R, Tableau, Power BI — whichever gets the insight across cleanest." },
  ];
  const tiers = [
    { name:"Starter", price:300, desc:"For individuals and early-stage startups exploring a specific question." },
    { name:"Pro", price:600, desc:"For growing businesses with defined research or analytics needs." },
    { name:"Expert", price:900, desc:"For established teams requiring depth, ongoing work, or multiple deliverables." },
  ];
  return (
    <div style={{ background:"#0A0908",minHeight:"100vh",paddingTop:64 }}>
      <section style={{ padding:"100px clamp(24px,8vw,120px) 80px" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:24,opacity:.8 }}>Services</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,6vw,80px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.1,margin:0 }}>
            Here is what<br />I can do for you.
          </h1>
        </Fade>
      </section>

      <section style={{ padding:"0 clamp(24px,8vw,120px) 100px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:1,border:"1px solid rgba(201,125,78,.12)" }}>
          {services.map((s,i) => (
            <Fade key={i} delay={i*.08}>
              <div style={{
                padding:"40px 36px",background:"#0A0908",
                borderRight:"1px solid rgba(201,125,78,.1)",
                borderBottom:"1px solid rgba(201,125,78,.1)",
                transition:"background .3s",cursor:"default"
              }}
                onMouseEnter={e => e.currentTarget.style.background="#110F0D"}
                onMouseLeave={e => e.currentTarget.style.background="#0A0908"}
              >
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,color:"#F5EFE6",margin:"0 0 16px" }}>{s.title}</h3>
                <p style={{ fontFamily:"'DM Mono',monospace",fontSize:11,lineHeight:1.9,color:"rgba(245,239,230,.42)",margin:0 }}>{s.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section style={{ padding:"80px clamp(24px,8vw,120px) 120px",borderTop:"1px solid rgba(201,125,78,.1)" }}>
        <Fade>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,4vw,52px)",fontWeight:300,color:"#F5EFE6",margin:"0 0 16px" }}>Choose your level.</h2>
          <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,color:"rgba(245,239,230,.4)",marginBottom:64 }}>All prices are per project. Scope discussed before commitment.</p>
        </Fade>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24 }}>
          {tiers.map((t,i) => (
            <Fade key={i} delay={i*.12}>
              <div style={{
                padding:"40px 36px",border:"1px solid rgba(201,125,78,.2)",
                transition:"all .3s",cursor:"default"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#C97D4E"; e.currentTarget.style.background="rgba(201,125,78,.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(201,125,78,.2)"; e.currentTarget.style.background="transparent"; }}
              >
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"#C97D4E",letterSpacing:".12em",textTransform:"uppercase",marginBottom:20 }}>{t.name}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:56,fontWeight:300,color:"#F5EFE6",lineHeight:1,marginBottom:8 }}>${t.price}</div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.3)",marginBottom:24,letterSpacing:".06em" }}>per project</div>
                <p style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.45)",lineHeight:1.8,margin:0 }}>{t.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── CONTACT ────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const inputStyle = (field) => ({
    width:"100%",background:"transparent",border:"none",
    borderBottom:`1px solid ${focused===field ? "#C97D4E" : "rgba(245,239,230,.2)"}`,
    color:"#F5EFE6",fontFamily:"'DM Mono',monospace",fontSize:13,
    padding:"12px 0",outline:"none",transition:"border-color .3s",
    boxSizing:"border-box"
  });

  const labelStyle = (field) => ({
    fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",
    color: focused===field || form[field] ? "#C97D4E" : "rgba(245,239,230,.35)",
    transition:"color .3s",display:"block",marginBottom:8
  });

  return (
    <div style={{ background:"#0A0908",minHeight:"100vh",paddingTop:64 }}>
      <section style={{ padding:"100px clamp(24px,8vw,120px) 80px" }}>
        <Fade>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#C97D4E",marginBottom:24,opacity:.8 }}>Contact</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,6vw,80px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.1,margin:0 }}>
            Let's talk.
          </h1>
          <p style={{ fontFamily:"'DM Mono',monospace",fontSize:12,color:"rgba(245,239,230,.4)",marginTop:24 }}>I respond within 24 hours.</p>
        </Fade>
      </section>

      <section style={{ padding:"0 clamp(24px,8vw,120px) 120px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px 120px" }}>
        {/* Info */}
        <Fade from="left">
          <div>
            <div style={{ marginBottom:48 }}>
              {[
                { label:"Email", val:"mridulpathak007@gmail.com", href:"mailto:mridulpathak007@gmail.com" },
                { label:"LinkedIn", val:"mridul-pathak", href:"https://linkedin.com/in/mridul-pathak" },
                { label:"Location", val:"Richmond, VA, USA", href:null },
              ].map((c,i) => (
                <div key={i} style={{ marginBottom:32 }}>
                  <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".15em",textTransform:"uppercase",color:"#C97D4E",marginBottom:8 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:"rgba(245,239,230,.7)",textDecoration:"none",transition:"color .2s" }}
                      onMouseEnter={e=>e.target.style.color="#C97D4E"} onMouseLeave={e=>e.target.style.color="rgba(245,239,230,.7)"}
                    >{c.val}</a>
                  ) : (
                    <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:"rgba(245,239,230,.7)" }}>{c.val}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ padding:"24px 0",borderTop:"1px solid rgba(201,125,78,.15)" }}>
              <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(245,239,230,.35)",lineHeight:1.9 }}>
                Open to CPT internship opportunities<br />across the United States.
              </div>
            </div>
          </div>
        </Fade>

        {/* Form */}
        <Fade from="right">
          {sent ? (
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",height:300 }}>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:48,color:"#C97D4E",marginBottom:16 }}>✓</div>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:12,color:"rgba(245,239,230,.5)" }}>Message sent. I'll be in touch.</div>
              </div>
            </div>
          ) : (
            <div style={{ display:"flex",flexDirection:"column",gap:40 }}>
              {["name","email","message"].map(field => (
                <div key={field}>
                  <label style={labelStyle(field)}>{field}</label>
                  {field === "message" ? (
                    <textarea rows={4} value={form[field]}
                      onChange={e => setForm(f => ({...f,[field]:e.target.value}))}
                      onFocus={() => setFocused(field)} onBlur={() => setFocused("")}
                      style={{...inputStyle(field),resize:"none",lineHeight:1.8}}
                    />
                  ) : (
                    <input type={field==="email"?"email":"text"} value={form[field]}
                      onChange={e => setForm(f => ({...f,[field]:e.target.value}))}
                      onFocus={() => setFocused(field)} onBlur={() => setFocused("")}
                      style={inputStyle(field)}
                    />
                  )}
                </div>
              ))}
              <button onClick={() => { if(form.name&&form.email&&form.message) setSent(true); }} style={{
                alignSelf:"flex-start",fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:".12em",textTransform:"uppercase",
                padding:"14px 40px",background:"#C97D4E",color:"#0A0908",border:"none",cursor:"pointer",transition:"all .25s"
              }}
                onMouseEnter={e=>{e.target.style.background="#F5EFE6";}}
                onMouseLeave={e=>{e.target.style.background="#C97D4E";}}
              >
                Send Message
              </button>
            </div>
          )}
        </Fade>
      </section>
    </div>
  );
}

// ── FOOTER ─────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{ background:"#060504",borderTop:"1px solid rgba(201,125,78,.1)",padding:"40px clamp(24px,8vw,120px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20 }}>
      <button onClick={() => { setPage("Home"); window.scrollTo(0,0); }} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"rgba(245,239,230,.4)" }}>
        Mridul Pathak
      </button>
      <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.25)",letterSpacing:".08em" }}>
        Open to CPT opportunities across the US
      </div>
      <div style={{ display:"flex",gap:24 }}>
        <a href="mailto:mridulpathak007@gmail.com" style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.3)",textDecoration:"none",letterSpacing:".08em",transition:"color .2s" }}
          onMouseEnter={e=>e.target.style.color="#C97D4E"} onMouseLeave={e=>e.target.style.color="rgba(245,239,230,.3)"}>Email</a>
        <a href="https://linkedin.com/in/mridul-pathak" target="_blank" rel="noreferrer" style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.3)",textDecoration:"none",letterSpacing:".08em",transition:"color .2s" }}
          onMouseEnter={e=>e.target.style.color="#C97D4E"} onMouseLeave={e=>e.target.style.color="rgba(245,239,230,.3)"}>LinkedIn</a>
        <a href="https://github.com/m4impact" target="_blank" rel="noreferrer" style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"rgba(245,239,230,.3)",textDecoration:"none",letterSpacing:".08em",transition:"color .2s" }}
          onMouseEnter={e=>e.target.style.color="#C97D4E"} onMouseLeave={e=>e.target.style.color="rgba(245,239,230,.3)"}>GitHub</a>
      </div>
    </footer>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");
  const pages = { Home, About, Portfolio, Services, Contact };
  const PageComponent = pages[page];
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0908; cursor: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0908; }
        ::-webkit-scrollbar-thumb { background: rgba(201,125,78,.4); border-radius: 2px; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>
      <Cursor />
      <Nav active={page} setPage={setPage} />
      <PageComponent setPage={setPage} />
      <Footer setPage={setPage} />
    </>
  );
}
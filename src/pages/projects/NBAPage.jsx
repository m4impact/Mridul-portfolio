import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function NBAPage() {
  useEffect(() => { document.title = "Audience-Driven Data Visualization — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 06 · Marketing Analytics · VCU · Spring 2026</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)" }}>The same data.<br />Three different truths.</h1>
        <p className="page-hero__sub">NBA player efficiency (2014–2024) · Audience persona mapping · Data visualization design</p>
        <span className="page-hero__divider-label">MKTG-678 · Spring 2026</span>
      </div>

      <div style={{ padding: "5rem 3.5rem", maxWidth: "860px" }}>

        {/* stats */}
        <div className="proj-stats-row reveal">
          {[["Dataset","2,156 player-seasons"],["Seasons","10 years (2014–2024)"],["Variants","3 audience personas"],["Tools","Excel · NotebookLM"],["Course","MKTG-678 · VCU"],["Status","Completed Spring 2026"]].map(([l,v]) => (
            <div key={l} className="proj-stat-item">
              <div className="proj-stat-label">{l}</div>
              <div className="proj-stat-value">{v}</div>
            </div>
          ))}
        </div>

        {/* body */}
        <div className="proj-body">

          <p className="reveal" style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1.1rem,1.8vw,1.4rem)", color:"var(--ink)", lineHeight:1.7, borderLeft:"2px solid var(--red)", paddingLeft:"1.2rem", marginBottom:"2.5rem" }}>
            The project started with a comment: "I wish I could help more, but I'm not very familiar with sports." That single line reframed everything.
          </p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What I was actually asking</h2>
          <p className="reveal">If the analytical findings are the same — player efficiency matters more than raw scoring — how much does the presentation need to change for different people? The standard answer is "simplify for beginners, add detail for experts." That treats it like a volume knob. I suspected it was more fundamental than that.</p>
          <p className="reveal">So alongside the primary deliverable, I ran a parallel exploration: take the exact same dataset and findings, and redesign the communication from scratch for three genuinely different audience types — not different levels of the same audience, but people who think differently, consume differently, and need different things from the same information.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>The three audiences</h2>
          <p className="reveal">The first audience — analytics enthusiasts — wants methodological transparency. Jargon isn't a barrier for them; it's a signal that the content is serious. They care about outliers, contrarian takes, the player who breaks the model.</p>
          <p className="reveal">The second — sports-aware generalists — understands ROI, efficiency metrics, quadrant frameworks. They don't know basketball-specific language but they do know how to read a BCG matrix. The framing needs to transfer across contexts without requiring domain fluency.</p>
          <p className="reveal">The third — curious newcomers — needs the concept explained before the data. Jargon reads as gatekeeping. Visual metaphors land faster than scatter plots. They want a story that doesn't require them to already care about basketball to understand what's interesting.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What changed between variants</h2>
          <p className="reveal">Everything. Not just the language — the color palette, the graph type, the narrative hook, the level of statistical transparency, where visual emphasis lands, what counts as a meaningful number.</p>
          <p className="reveal">For newcomers: high-contrast orange and yellow-green because warm colors signal individual performance and cooler tones suggest collaboration — associations that do communicative work before the text does. One big number. No scatter plots. The "+20%" hook because simple, concrete, unexpected facts stick.</p>
          <p className="reveal">For generalists: muted earth tones to signal analytical professionalism, not sports entertainment. A quadrant framework familiar from business strategy. Business terminology — ROI, salary efficiency gap — instead of PER or RAPTOR. The faint court outline in the background activates enough context without demanding basketball expertise.</p>
          <p className="reveal">For enthusiasts: color gradient encoding a third variable. Regression line with confidence interval — because this audience audits methodology, and leaving out statistical uncertainty signals sloppiness. Specific player callouts on the cases that break the pattern, because they care about who defies the model, not just that the model exists.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What it actually revealed</h2>
          <p className="reveal">Jargon isn't just vocabulary. It's an audience filter. Technical terminology signals who the content is for — and that signal lands before anyone reads a sentence. You can't solve that with a glossary. You need a different design.</p>
          <p className="reveal">Color isn't decorative. High-contrast primaries say "this will be easy to follow." Muted earth tones say "this is serious analysis." Sequential gradients say "this has statistical depth." A mismatch between the palette and the content creates cognitive dissonance — the design sends one signal while the data sends another.</p>
          <p className="reveal">And the most important thing: the data doesn't have one story. The same NBA dataset simultaneously supports "invisible stars make teammates better," "salary efficiency reveals market gaps," and "Jokic defies the efficiency-volume trade-off." Effective communication isn't about finding the story in the data. It's about choosing the story that resonates with this specific person.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>Where this thinking went next</h2>
          <p className="reveal">Directly into MAT. The platform adapts how it presents market intelligence based on where someone is in their decision-making — early exploration, validation, pitch preparation. Same underlying data, different presentation depth and tone. This project gave me the framework to think about that adaptation systematically rather than intuitively.</p>
          <p className="reveal">And into my work at TMF, where the same platform data serves audiences with fundamentally different mental models — content creators who need engagement insights and local businesses who need conversion metrics. The persona-driven approach from this project is now informing which dashboard modules I build for which user type.</p>

        </div>

        {/* outcome */}
        <div className="proj-outcome reveal">
          <div className="proj-outcome__label">// Outcome</div>
          <div className="proj-outcome__text">Three distinct variants built and documented with design decisions grounded in audience research. Framework directly applied to MAT's adaptive interface architecture and TMF dashboard work.</div>
        </div>

        {/* variants showcase */}
        <div className="reveal" style={{ marginTop:"4rem" }}>
          <div style={{ fontFamily:"var(--font-mono)", fontSize:".52rem", letterSpacing:".18em", textTransform:"uppercase", opacity:.28, marginBottom:"1.5rem" }}>// The three variants</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", background:"rgba(10,10,8,0.08)", border:"1px solid rgba(10,10,8,0.08)" }}>
            {[
              { name:"The Invisible Star", audience:"Newcomers", hook:"Stars and silhouettes. One big number. Zero jargon. High-contrast orange and yellow-green doing the narrative work before the text does." },
              { name:"ROI on the Court", audience:"Generalists", hook:"Earth tones. Quadrant framework. Business language. The BCG matrix translated into basketball without requiring basketball knowledge." },
              { name:"Efficiency vs. Volume", audience:"Enthusiasts", hook:"Color gradient encoding a third variable. Regression with confidence intervals. Specific outliers named. Methodology documented because this audience audits it." },
            ].map(({ name, audience, hook }) => (
              <div key={name} style={{ background:"var(--paper)", padding:"1.8rem 1.6rem", borderRight:"1px solid rgba(10,10,8,0.08)" }}>
                <div style={{ fontFamily:"var(--font-mono)", fontSize:".44rem", letterSpacing:".16em", textTransform:"uppercase", color:"var(--red)", marginBottom:".6rem" }}>{audience}</div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", color:"var(--ink)", lineHeight:1, marginBottom:".7rem" }}>{name}</div>
                <p style={{ fontFamily:"var(--font-mono)", fontSize:".52rem", color:"rgba(10,10,8,0.42)", lineHeight:1.8 }}>{hook}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid rgba(10,10,8,0.08)" }}>
          <Link to="/work" style={{ fontFamily:"var(--font-mono)", fontSize:".52rem", letterSpacing:".14em", textTransform:"uppercase", color:"rgba(10,10,8,.35)", textDecoration:"none" }}>← All Work</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

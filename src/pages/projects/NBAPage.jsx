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
        <div className="page-hero__eyebrow">// Marketing Analytics · VCU · Spring 2026</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)" }}>The same data.<br />Three different truths.</h1>
        <p className="page-hero__sub">NBA player efficiency (2014–2024) · Audience persona mapping · Data visualization design</p>
        <span className="page-hero__divider-label">MKTG-678 · Spring 2026</span>
      </div>

      <div style={{ padding: "5rem 3.5rem", maxWidth: "860px" }}>

        <div className="proj-stats-row reveal">
          {[["Dataset","2,156 player-seasons"],["Seasons","10 years (2014–2024)"],["Variants","3 audience personas"],["Tools","Excel · NotebookLM"],["Course","MKTG-678 · VCU"],["Status","Completed Spring 2026"]].map(([l,v]) => (
            <div key={l} className="proj-stat-item">
              <div className="proj-stat-label">{l}</div>
              <div className="proj-stat-value">{v}</div>
            </div>
          ))}
        </div>

        <div className="proj-body">

          <p className="reveal" style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1.1rem,1.8vw,1.4rem)", color:"var(--ink)", lineHeight:1.7, borderLeft:"2px solid var(--red)", paddingLeft:"1.2rem", marginBottom:"2.5rem" }}>
            The project started with a comment from my professor: "I wish I could help more, but I'm not very familiar with sports." That single line reframed everything.
          </p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What I was actually asking</h2>
          <p className="reveal">If the analytical findings are the same — player efficiency matters more than raw scoring — how much does the presentation need to change for different people? The standard answer is "simplify for beginners, add detail for experts." That treats it like a volume knob. I suspected it was more fundamental than that.</p>
          <p className="reveal">So alongside the primary deliverable, I ran a parallel exploration: take the exact same dataset and findings, and redesign the communication from scratch for three genuinely different audience types — not different levels of the same audience, but people who think differently, consume differently, and need different things from the same information.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>The three audiences</h2>
          <p className="reveal">Analytics enthusiasts want methodological transparency. Jargon is a signal that the content is serious. They care about outliers, contrarian takes, the player who breaks the model.</p>
          <p className="reveal">Sports-aware generalists understand ROI, efficiency metrics, quadrant frameworks. They don't know basketball-specific language but they do know how to read a BCG matrix. The framing needs to transfer across contexts without requiring domain fluency.</p>
          <p className="reveal">Curious newcomers need the concept explained before the data. Jargon reads as gatekeeping. Visual metaphors land faster than scatter plots. They want a story that doesn't require them to already care about basketball to understand what's interesting.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What changed between variants</h2>
          <p className="reveal">Everything. Not just the language — the color palette, the graph type, the narrative hook, the level of statistical transparency, where visual emphasis lands, what counts as a meaningful number.</p>
          <p className="reveal">For newcomers: high-contrast orange and yellow-green because warm colors signal individual performance and cooler tones suggest collaboration. One big number. No scatter plots. The "+20%" hook because simple, concrete, unexpected facts stick.</p>
          <p className="reveal">For generalists: muted earth tones to signal analytical professionalism, not sports entertainment. A quadrant framework familiar from business strategy. Business terminology — ROI, salary efficiency gap — instead of PER or RAPTOR. The faint court outline in the background activates enough context without demanding basketball expertise.</p>
          <p className="reveal">For enthusiasts: color gradient encoding a third variable. Regression line with confidence interval — because this audience audits methodology, and leaving out statistical uncertainty signals sloppiness. Specific player callouts on the cases that break the pattern, because they care about who defies the model, not just that the model exists.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>What it actually revealed</h2>
          <p className="reveal">Jargon isn't just vocabulary. It's an audience filter. Technical terminology signals who the content is for — and that signal lands before anyone reads a sentence. You can't solve that with a glossary. You need a different design.</p>
          <p className="reveal">Color isn't decorative. High-contrast primaries say "this will be easy to follow." Muted earth tones say "this is serious analysis." Sequential gradients say "this has statistical depth." A mismatch between the palette and the content creates cognitive dissonance — the design sends one signal while the data sends another.</p>
          <p className="reveal">And the most important thing: the data doesn't have one story. The same NBA dataset simultaneously supports "invisible stars make teammates better," "salary efficiency reveals market gaps," and "Jokic defies the efficiency-volume trade-off." Effective communication isn't about finding the story in the data. It's about choosing the story that resonates with this specific person.</p>

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>Methodology note — how NotebookLM was used</h2>
          <p className="reveal">After the data analysis was complete in Excel, I used NotebookLM as an iteration tool for narrative exploration — not to generate content, but to generate perspective options. I'd upload the Excel outputs alongside a persona profile and ask: given this dataset and this audience, what framing would make them engage? The outputs were starting points, not finished ideas. I'd evaluate each suggestion against the actual data, cross-check for accuracy, then design the visuals independently.</p>
          <p className="reveal">The most useful thing NotebookLM did was compress the divergent thinking phase. It suggested the ROI lens for generalists when I was still thinking in PER terms. It proposed the "invisible star" metaphor for newcomers. It identified Jokic as the key outlier case for enthusiasts. None of those were final decisions — but they were directions I wouldn't have tested as quickly without it. The tool accelerated iteration, not production.</p>

          <div className="reveal" style={{ margin:"2rem 0", padding:"1.4rem 1.8rem", background:"rgba(10,10,8,0.03)", borderLeft:"2px solid rgba(10,10,8,0.12)" }}>
            <div style={{ fontFamily:"var(--font-mono)", fontSize:"0.46rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(10,10,8,0.3)", marginBottom:"0.6rem" }}>// Theoretical grounding</div>
            <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.54rem", color:"rgba(10,10,8,0.5)", lineHeight:1.85, margin:0 }}>The persona-based design approach draws on narrative transportation theory — the mechanism by which audiences become absorbed in a message and reduce critical resistance. Different audiences require different narrative entry points, not just different complexity levels. This is the core finding, and it applies beyond data visualization to any communication problem where the same information needs to reach genuinely different people.</p>
          </div>

        </div>

        {/* variants showcase */}
        <div className="reveal" style={{ marginTop:"4rem" }}>
          <div style={{ fontFamily:"var(--font-mono)", fontSize:".52rem", letterSpacing:".18em", textTransform:"uppercase", opacity:.28, marginBottom:"2rem" }}>// The three variants</div>

          {[
            { img:"/nba-variant-1.jpg", audience:"For Newcomers", name:"The Invisible Star", hook:"Stars and silhouettes. One big number. Zero jargon. High-contrast orange and yellow-green doing the narrative work before the text does.", bg:"#f0f4f8" },
            { img:"/nba-variant-2.jpg", audience:"For Generalists", name:"ROI on the Court", hook:"Earth tones. Quadrant framework. Business language. The BCG matrix translated into basketball without requiring domain knowledge.", bg:"#f5f0e8" },
            { img:"/nba-variant-3.jpg", audience:"For Enthusiasts", name:"Efficiency vs. Volume", hook:"Color gradient encoding RAPTOR score. Regression with confidence interval. Specific player callouts. Methodology documented.", bg:"#1a1a18" },
          ].map(({ img, audience, name, hook, bg }, i) => (
            <div key={name} className="reveal" style={{ marginBottom:"4rem", transitionDelay:`${i*0.1}s` }}>
              <div style={{ fontFamily:"var(--font-mono)", fontSize:".46rem", letterSpacing:".18em", textTransform:"uppercase", color:"var(--red)", marginBottom:".5rem" }}>{audience}</div>
              <div style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.4rem,2.5vw,2rem)", color:"var(--ink)", lineHeight:1, marginBottom:"1rem" }}>{name}</div>
              <div style={{ background:bg, padding:"1.5rem", marginBottom:"1rem" }}>
                <img src={img} alt={name} style={{ width:"100%", display:"block", filter: bg === "#1a1a18" ? "brightness(1.05)" : "grayscale(5%) sepia(4%)" }} />
              </div>
              <p style={{ fontFamily:"var(--font-mono)", fontSize:".54rem", color:"rgba(10,10,8,0.45)", lineHeight:1.85, maxWidth:"540px" }}>{hook}</p>
              {i < 2 && <div style={{ height:"1px", background:"rgba(10,10,8,0.07)", marginTop:"3rem" }} />}
            </div>
          ))}
        </div>

        <div className="proj-report reveal" style={{ marginTop:"4rem" }}>
          <div className="proj-report__label">// Report</div>
          <p className="proj-report__desc">Full project report — persona mapping, three infographic variants, 30+ documented design decisions, AI iteration process, and framework applications beyond basketball.</p>
          <a href="/reports/nba-persona-report.pdf" target="_blank" rel="noopener noreferrer" className="proj-report__btn">Download Report ↓</a>
        </div>

        <div style={{ marginTop:"2rem", paddingTop:"2rem", borderTop:"1px solid rgba(10,10,8,0.08)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Link to="/work" style={{ fontFamily:"var(--font-mono)", fontSize:".52rem", letterSpacing:".14em", textTransform:"uppercase", color:"rgba(10,10,8,.35)", textDecoration:"none" }}>← All Work</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

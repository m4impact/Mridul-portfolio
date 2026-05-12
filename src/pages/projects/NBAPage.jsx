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

          <h2 className="reveal" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"var(--ink)", lineHeight:1, marginTop:"3rem", marginBottom:"1.2rem" }}>Methodology note — how NotebookLM was used</h2>
          <p className="reveal">After the data analysis was complete in Excel, I used NotebookLM as an iteration tool for narrative exploration — not to generate content, but to generate perspective options. I'd upload the Excel outputs alongside a persona profile and ask: given this dataset and this audience, what framing would make them engage? The outputs were starting points, not finished ideas. I'd evaluate each suggestion against the actual data, cross-check for accuracy, then design the visuals independently.</p>
          <p className="reveal">The most useful thing NotebookLM did was compress the divergent thinking phase. It suggested the ROI lens for generalists when I was still thinking in PER terms. It proposed the "invisible star" metaphor for newcomers. It identified Jokic as the key outlier case for enthusiasts. None of those were final decisions — but they were directions I wouldn't have tested as quickly without it. The tool accelerated iteration, not production.</p>
          <p className="reveal">This approach — AI as a perspective generator, human judgment as the filter — is something I've continued thinking about. The question of how to use generative AI honestly in research without overclaiming what it contributed is one I documented deliberately in the full project report.</p>

          <div className="reveal" style={{ margin:"2rem 0", padding:"1.4rem 1.8rem", background:"rgba(10,10,8,0.03)", borderLeft:"2px solid rgba(10,10,8,0.12)" }}>
            <div style={{ fontFamily:"var(--font-mono)", fontSize:"0.46rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(10,10,8,0.3)", marginBottom:"0.6rem" }}>// Theoretical grounding</div>
            <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.54rem", color:"rgba(10,10,8,0.5)", lineHeight:1.85, margin:0 }}>The persona-based design approach draws on narrative transportation theory — the mechanism by which audiences become absorbed in a message and reduce critical resistance. Different audiences require different narrative entry points not just different complexity levels. This is the core finding, and it applies beyond data visualization to any communication problem where the same information needs to reach genuinely different people.</p>
          </div>


        {/* variants showcase
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function ChargeBasePage() {
  useEffect(() => { document.title = "ChargeBase — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "4rem" }}>
        <div className="page-hero__eyebrow">// Consultancy · Decision Optimization · Nov 2025 → Ongoing</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)", lineHeight: 0.88 }}>ChargeBase.</h1>
        <p className="page-hero__sub" style={{ maxWidth: "520px" }}>
          A decision engine for early-stage businesses. Pricing, breakeven, resource allocation — solved with mathematical optimization and real economic data.
        </p>
        <span className="page-hero__divider-label">Active · Selective engagements</span>
      </div>

      <div style={{ padding: "5rem 3.5rem", maxWidth: "860px" }}>

        <div className="proj-stats-row reveal">
          {[
            ["Type",     "Decision consultancy"],
            ["Status",   "Active"],
            ["Focus",    "Pricing · Breakeven · Allocation"],
            ["Stack",    "R · Python · SQL"],
            ["Clients",  "Early-stage founders"],
            ["Capital",  "$10K–$100K decisions"],
          ].map(([l, v]) => (
            <div key={l} className="proj-stat-item">
              <div className="proj-stat-label">{l}</div>
              <div className="proj-stat-value" style={{ fontSize: "0.9rem" }}>{v}</div>
            </div>
          ))}
        </div>

        <div className="proj-body">

          <p className="reveal" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "var(--ink)", lineHeight: 1.7, borderLeft: "2px solid var(--red)", paddingLeft: "1.2rem", marginBottom: "2.5rem" }}>
            Not generic consulting. Mathematical optimization and economic analysis delivered as a decision — not a deck of possibilities.
          </p>

          <h2 className="blog-h2 reveal">What ChargeBase solves</h2>
          <p className="reveal">Four questions. Each one specific enough to have a correct answer, if you have the right data and the right model behind it.</p>

          <div className="reveal" style={{ margin: "2rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)" }}>
            {[
              { q: "What should I charge?", a: "Pricing optimization — demand forecasting, competitor analysis, unit economics, margin modeling. Not a range. An optimal price point." },
              { q: "When will I break even?", a: "Breakeven modeling — cash flow projection, revenue milestones, cost structures, sensitivity analysis across conservative, moderate, and aggressive scenarios." },
              { q: "How should I allocate my budget?", a: "Resource optimization — constraint-based modeling to distribute capital across inventory, marketing, operations, and reserves." },
              { q: "Is this market entry viable?", a: "Go/no-go analysis — market intelligence, financial scenario modeling, risk assessment. Sometimes the answer is don't." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "var(--paper)", padding: "1.8rem 1.6rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1.1, marginBottom: "0.7rem" }}>{q}</div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(10,10,8,0.42)", lineHeight: 1.85 }}>{a}</p>
              </div>
            ))}
          </div>

          <h2 className="blog-h2 reveal">Real client — Crafteve India</h2>
          <p className="reveal">A handmade wooden craft business in India considering U.S. market entry. The decision on the table: invest $100K for a full launch, or $10K for a phased entry?</p>
          <p className="reveal">The analysis covered the U.S. ethical fashion market — growth rate, competitor pricing, customer acquisition benchmarks, unit economics. It fed into a constraint-based optimization model with the client's budget as the hard limit and breakeven timeline as the objective.</p>

          <div className="reveal" style={{ margin: "2.5rem 0", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)" }}>
            {[
              { n: "$68", sub: "Optimal price point per signature piece" },
              { n: "Month 11", sub: "Projected breakeven — 180 units sold" },
              { n: "$90K", sub: "Saved by choosing phased $10K entry" },
            ].map(({ n, sub }) => (
              <div key={sub} style={{ background: "var(--paper)", padding: "2rem 1.6rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--ink)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.1em", color: "rgba(10,10,8,0.32)", marginTop: "0.4rem", textTransform: "uppercase" }}>{sub}</div>
              </div>
            ))}
          </div>

          <p className="reveal">Recommendation: don't spend $100K. Phased $10K — $4K inventory, $3K customer acquisition, $3K operations buffer. Client accepted. Launched successfully.</p>

          <h2 className="blog-h2 reveal">How it works</h2>
          <p className="reveal">The intelligence layer comes from federal economic data — Bureau of Economic Analysis, Bureau of Labor Statistics, Census Bureau — combined with industry benchmarking, competitor research, and demand forecasting using statistical modeling in R and Python. The optimization layer takes that intelligence and solves for the best decision given real constraints.</p>
          <p className="reveal">The output isn't a range of possibilities. It's a recommendation. A price. A timeline. An allocation. Something actionable.</p>

          <h2 className="blog-h2 reveal">ChargeBase and MAT</h2>
          <p className="reveal">ChargeBase is the paid execution layer of the MAT ecosystem. MAT answers whether a market exists. ChargeBase answers what to do about it. The two are designed to work together — MAT's market intelligence feeds directly into ChargeBase's optimization models.</p>
          <p className="reveal">For founders who need more than data — who need a decision — ChargeBase is where that happens.</p>

        </div>

        <div className="proj-outcome reveal">
          <div className="proj-outcome__label">// Status</div>
          <div className="proj-outcome__text">Active. Selective engagements. Founders with $10K–$100K capital decisions and a real question that needs a real answer.</div>
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(10,10,8,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(10,10,8,.35)", textDecoration: "none" }}>← All Work</Link>
          <a href="mailto:pathakm3@vcu.edu" style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".1em", color: "var(--red)", textDecoration: "none", borderBottom: "1px solid rgba(192,57,43,0.3)", paddingBottom: "2px" }}>Start a conversation → pathakm3@vcu.edu</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

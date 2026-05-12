import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function MATBlog() {
  useEffect(() => { document.title = "Building MAT — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "4rem" }}>
        <div className="page-hero__eyebrow">// Blog · Product · 2026</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)", lineHeight: 0.88 }}>
          I had an idea.<br />I didn't know<br /><span style={{ color: "var(--red)" }}>how anyone actually does this.</span>
        </h1>
        <p className="page-hero__sub" style={{ maxWidth: "520px" }}>
          MAT started as a mirror. This is what I saw in it — and why I'm building it free.
        </p>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span><span>·</span>
          <span>Richmond, VA</span><span>·</span>
          <span>2026 → Ongoing</span><span>·</span>
          <span>7 min read</span>
        </div>

        {/* MAT logo */}
        <div className="blog-hero-img reveal" style={{ background: "#0A0A08", height: "320px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3.5rem" }}>
          <img src="/mat-logo.png" alt="MAT" style={{ width: "200px", height: "200px", objectFit: "contain", filter: "brightness(0.9)" }} />
        </div>

        <div className="blog-body">

          <div className="blog-pullquote reveal" style={{ marginBottom: "3rem", marginTop: 0 }}>
            <blockquote>I wanted to do something as a business. I had the idea. What I didn't have was any honest sense of how people actually go from an idea to something real.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">What I was looking for</h2>
          <p className="reveal">Not theory. Not a framework. I wanted to understand how money actually moves. How effort actually converts. How the emotion of building something — the uncertainty, the decisions, the moments where you don't know if it's working — how all of that actually feels when you're inside it.</p>
          <p className="reveal">I searched. I asked ChatGPT. I read. What I got back was textbook-specific. Technically correct and emotionally empty. I couldn't feel the transaction. I couldn't feel what it was like to stand at the point where an idea meets reality and figure out if they're compatible.</p>
          <p className="reveal">That gap — between the information that exists and the understanding that's actually useful — is where MAT came from.</p>

          {/* Visual break — the gap made concrete */}
          <div className="reveal" style={{ margin: "3rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)" }}>
            <div style={{ background: "var(--paper)", padding: "2rem 1.8rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem" }}>What exists</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "rgba(10,10,8,0.6)", lineHeight: 1.75 }}>Textbook frameworks. Generic search results. Advice written for someone who already knows the language.</div>
            </div>
            <div style={{ background: "var(--paper)", padding: "2rem 1.8rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem" }}>What's missing</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "rgba(10,10,8,0.6)", lineHeight: 1.75 }}>The actual transaction. The emotion of the decision. What it feels like to not know and have to move anyway.</div>
            </div>
          </div>

          <h2 className="blog-h2 reveal">MAT as a mirror</h2>
          <p className="reveal">I related to this problem personally — and then I saw it in everyone around me. People with real ideas, real ambition, real willingness to work — who hit a wall the moment the idea needed to meet the world. Not because they weren't capable. Because the resources that exist weren't built for them.</p>
          <p className="reveal">MAT is the thing I wish had existed when I was trying to figure out how to start. Authentic. Real. Free. Not free as a pricing strategy — free as a design commitment. Because the moment it costs money, I've excluded the exact person who needs it most.</p>

          {/* Pull quote */}
          <div className="blog-pullquote reveal">
            <blockquote>Even if someone goes through MAT and decides not to build the thing — they'll still know the whole process. They'll know how different businesses work, how money moves, where the decisions are. They'll find their niche. That's enough.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">What MAT actually is</h2>
          <p className="reveal">A market intelligence platform. City-specific to start. Not trying to boil the ocean — starting where I am. MAT Virginia. Then MAT DC. MAT New York. MAT US. Eventually MAT India. MAT Global — a living index of businesses, markets, and the intelligence that connects them.</p>
          <p className="reveal">Each layer adds context. Each city adds real data from real markets. The goal isn't to be a search engine or a consultant or an AI chat. The goal is to be the thing that makes someone feel the transaction — the real movement of effort and money and decision — so they can make a better one themselves.</p>

          {/* Vision ladder */}
          <div className="reveal" style={{ margin: "3rem 0" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(10,10,8,0.28)", marginBottom: "1rem" }}>// The build roadmap</div>
            <div style={{ borderLeft: "1px solid rgba(10,10,8,0.1)", paddingLeft: "2rem" }}>
              {[
                { stage: "Now", label: "MAT Virginia", note: "City-specific market intelligence · Early build" },
                { stage: "Next", label: "MAT DC · MAT NY", note: "Regional expansion · More markets, more data" },
                { stage: "Then", label: "MAT US", note: "National market intelligence layer" },
                { stage: "Vision", label: "MAT India · MAT Global", note: "Listing and business intel at scale · Everyone, everywhere" },
              ].map(({ stage, label, note }, i) => (
                <div key={stage} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.8rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: "52px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.12em", textTransform: "uppercase", color: i === 0 ? "var(--red)" : "rgba(10,10,8,0.28)" }}>{stage}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--ink)", lineHeight: 1, marginBottom: "0.3rem" }}>{label}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(10,10,8,0.38)", lineHeight: 1.7 }}>{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="blog-h2 reveal">Why I'm building this while working at TMF</h2>
          <p className="reveal">TMF is where I work as a Product Manager. I'm learning what it means to take something from decision to shipped inside a real organisation. That's irreplaceable. But MAT exists in a different space — the space between when the workday ends and when the need for this tool disappears. Which is never.</p>
          <p className="reveal">Not a class project. Not a side hustle. The thing I'm building because I believe access to real, honest market intelligence should not be a privilege.</p>

          <div className="reveal" style={{ margin: "2rem 0", padding: "1.6rem 2rem", background: "var(--ink)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.6rem" }}>// Current status</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "var(--paper)", lineHeight: 1 }}>Design + early build</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(242,239,232,0.3)", marginTop: "0.5rem", lineHeight: 1.8 }}>Target: Beta to first 50 users · December 2026 · Free at launch, permanently</div>
          </div>

          <p className="reveal">If you're the person this is being built for — reach out. I want to know what you're trying to figure out.</p>

        </div>

        <div className="blog-footer reveal">
          <Link to="/community" className="blog-back">← Back to Community</Link>
          <a href="mailto:pathakm3@vcu.edu" className="blog-contact-cta">Interested in MAT → pathakm3@vcu.edu</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

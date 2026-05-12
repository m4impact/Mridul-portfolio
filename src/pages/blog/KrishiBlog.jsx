import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function KrishiBlog() {
  useEffect(() => { document.title = "Krishi Drone — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "4rem" }}>
        <div className="page-hero__eyebrow">// Blog · Agri-Tech · 2024</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)", lineHeight: 0.88 }}>
          The labour is leaving.<br />The land<br /><span style={{ color: "var(--red)" }}>is still there.</span>
        </h1>
        <p className="page-hero__sub" style={{ maxWidth: "520px" }}>
          Krishi Drone wasn't about the technology. It was about who the technology was actually for — and what it would take for them to trust it.
        </p>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span><span>·</span>
          <span>Uttarakhand, India</span><span>·</span>
          <span>Aug – Dec 2024</span><span>·</span>
          <span>8 min read</span>
        </div>

        <div className="blog-hero-img reveal" style={{ background: "#F2EFE8", display: "flex", alignItems: "center", justifyContent: "center", height: "300px", marginBottom: "3.5rem" }}>
          <img src="/krishi-logo.png" alt="Krishi Udaan" style={{ width: "260px", height: "260px", objectFit: "contain", filter: "grayscale(10%) sepia(8%)" }} />
        </div>

        <div className="blog-body">

          <div className="blog-pullquote reveal" style={{ marginBottom: "3rem", marginTop: 0 }}>
            <blockquote>Agriculture in India is quietly running out of people to do the work. Not because the work disappeared — because the people who used to do it found other options. The land is still there. The labour isn't.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">The problem nobody was framing correctly</h2>
          <p className="reveal">The conversation around agricultural technology in India is almost always about yield improvement or cost reduction. Those are real goals. But they're downstream of a more fundamental shift that was already happening: manual labour in farming is becoming scarce because younger generations are moving into other industries. The sector that fed generations is becoming structurally dependent on a workforce that is quietly leaving it.</p>
          <p className="reveal">Drone-based precision farming exists as a technology. The question that interested me wasn't whether the technology worked — it was whether the people who needed it most could actually adopt it. A smallholder farmer in Uttarakhand with two acres, seasonal cash flow, and no digital infrastructure isn't going to adopt something because it's technically superior. They're going to adopt it when they trust it, when they can afford it, and when it fits the way their operation actually runs.</p>
          <p className="reveal">Those are three completely different problems from "does the drone work."</p>

          {/* The multi-stakeholder lens */}
          <h2 className="blog-h2 reveal">Seeing it through different eyes</h2>
          <p className="reveal">I spent time with different stakeholders — farmers, agronomists, local dealers, co-operative representatives — and deliberately tried to hold each of their perspectives separately before trying to reconcile them. What does this technology look like to a farmer who has never used a smartphone? What does it look like to a dealer who makes money on pesticide volume? What does it look like to a state agriculture officer managing subsidy programmes?</p>
          <p className="reveal">The pain points were different at every level. The farmer worried about whether the drone would actually apply pesticide correctly — because one wrong application in the wrong season could cost them the harvest. The dealer worried about whether precision application would eat into their margins. The officer worried about liability and accountability if something went wrong at scale.</p>
          <p className="reveal">A solution that only addressed the farmer wouldn't get adopted. The distribution chain, the support ecosystem, the institutional layer — all of them had to have a reason to be part of it. That's what multi-stakeholder GTM actually means in practice. Not a slide with different customer segments. A strategy where every person in the chain has something real to gain.</p>

          {/* Visual — stakeholder grid */}
          <div className="reveal" style={{ margin: "3rem 0", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)" }}>
            {[
              { who: "The Farmer", pain: "Wrong application ruins the harvest. Can't afford to experiment.", answer: "Calculated pesticide dosage. Customised crop report. Pay only in season." },
              { who: "The Dealer", pain: "Precision application means less volume sold.", answer: "New revenue stream: service partner, not just supplier." },
              { who: "The Institution", pain: "Accountability if drone operations go wrong at scale.", answer: "Data trail for every application. Documented compliance." },
            ].map(({ who, pain, answer }) => (
              <div key={who} style={{ background: "var(--paper)", padding: "1.8rem 1.6rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.6rem" }}>{who}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(10,10,8,0.38)", lineHeight: 1.75, marginBottom: "0.8rem" }}><strong style={{ color: "rgba(10,10,8,0.55)" }}>Pain:</strong> {pain}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(10,10,8,0.55)", lineHeight: 1.75 }}><strong>Answer:</strong> {answer}</div>
              </div>
            ))}
          </div>

          <h2 className="blog-h2 reveal">Why subscription. Why rental.</h2>
          <p className="reveal">The farmer I was designing for doesn't have predictable monthly cash flow. They have seasonal cash flow — concentrated around harvest, sparse in between. A standard SaaS subscription model is built for someone with a salary. It wasn't built for agriculture.</p>
          <p className="reveal">The rental and seasonal subscription model wasn't a compromise — it was the insight. Pay when you earn. Access the technology when the crop needs it, not when the billing cycle says so. That alignment between payment structure and farming reality was the thing that made adoption possible rather than theoretical.</p>

          {/* Pull quote */}
          <div className="blog-pullquote reveal">
            <blockquote>The technology isn't the barrier. The payment model is the barrier. Build the payment model around how farmers actually earn money, and the technology becomes accessible.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">What the drone actually delivered</h2>
          <p className="reveal">Not just pest control. Not just spraying. A system that gave the farmer information they had never had access to before — in language they could use.</p>

          {/* Feature grid */}
          <div className="reveal" style={{ margin: "2.5rem 0" }}>
            {[
              { feature: "Calculated pesticide usage", detail: "Precision application based on actual crop need — not guesswork, not the dealer's recommendation. Less chemical, less cost, less health risk to the person applying it." },
              { feature: "Customised crop reports", detail: "Each field, each season, delivered in a format the farmer could read and act on. Not a data export — a recommendation." },
              { feature: "Production and finance planning", detail: "Projected yield, estimated input costs, planned harvest timeline. The data to make a decision before the season, not after." },
              { feature: "Time and labour saving", detail: "What used to take a team of workers multiple days could be done in hours. In a context where that labour is increasingly unavailable, this isn't a convenience — it's continuity." },
            ].map(({ feature, detail }, i) => (
              <div key={feature} className="reveal" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "2rem", padding: "1.4rem 0", borderBottom: "1px solid rgba(10,10,8,0.07)", transitionDelay: `${i * 0.07}s` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1.1 }}>{feature}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.54rem", color: "rgba(10,10,8,0.45)", lineHeight: 1.85 }}>{detail}</div>
              </div>
            ))}
          </div>

          <h2 className="blog-h2 reveal">The farmer's response</h2>
          <p className="reveal">We have a video of a farmer explaining what the system meant to him. I keep coming back to it not because of what he said about the technology — but because of the way he described being taken seriously. The feeling of someone designing something for his actual situation, not for an abstraction of it.</p>
          <p className="reveal">That's the acceptance rate metric that mattered. Not a percentage in a business case — a person, on camera, saying this works for me.</p>

          {/* CBA note */}
          <div className="reveal" style={{ margin: "2.5rem 0", padding: "1.6rem 2rem", background: "var(--ink)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.6rem" }}>// Business case</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "var(--paper)", lineHeight: 1, marginBottom: "0.6rem" }}>CBA available for download</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(242,239,232,0.35)", lineHeight: 1.8 }}>Full cost-benefit analysis · Seasonal subscription model · Multi-stakeholder GTM · UPES Incubator accepted</div>
            <a href="/reports/krishi-drone-business-case.pdf" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--paper)", border: "1px solid rgba(242,239,232,0.25)", padding: "0.5rem 1.1rem", textDecoration: "none", transition: "border-color 0.2s" }}>
              Download Report ↓
            </a>
          </div>

          <h2 className="blog-h2 reveal">What the incubator validated</h2>
          <p className="reveal">The UPES incubator accepted the business case. The School of Engineering initiated the prototype phase. Those two outcomes together meant something specific: the financial model held up under scrutiny and the technical feasibility was confirmed by people who build things.</p>
          <p className="reveal">What I took from the process was less about the outcomes and more about the method. Starting from the person who needs it most — the smallholder farmer with two acres and seasonal cash — and building the business model around their actual constraints rather than the constraints that are convenient to model. If it works for them, it works for everyone above them in the chain. If it only works for larger operations, it doesn't actually solve the problem.</p>

          <div className="reveal" style={{ margin: "2rem 0", padding: "1.6rem 2rem", borderLeft: "2px solid var(--red)", background: "rgba(192,57,43,0.03)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1rem,1.6vw,1.25rem)", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              The question that unlocked the whole design: if this only works for someone who already has margin, who is it actually for?
            </p>
          </div>

        </div>

        <div className="blog-footer reveal">
          <Link to="/community" className="blog-back">← Back to Community</Link>
          <a href="mailto:pathakm3@vcu.edu" className="blog-contact-cta">Want to talk about this → pathakm3@vcu.edu</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

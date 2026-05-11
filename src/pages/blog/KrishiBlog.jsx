import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function KrishiBlog() {
  useEffect(() => { document.title = "Krishi Drone — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// Blog · Agri-Tech · 2024</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(3rem,8vw,8rem)" }}>The farmer asked why<br />nobody built this earlier.</h1>
        <p className="page-hero__sub">Krishi Drone — designing for the person everyone else forgot to design for.</p>
        <span className="page-hero__divider-label">Krishi Drone · 2024</span>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span>
          <span>·</span>
          <span>Dehradun, India</span>
          <span>·</span>
          <span>August 2024</span>
          <span>·</span>
          <span>7 min read</span>
        </div>

        <div className="blog-hero-img reveal" style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", height: "360px" }}>
          <img src="/krishi-logo.png" alt="Krishi Drone" style={{ width: "280px", height: "280px", objectFit: "contain", filter: "grayscale(10%) sepia(8%)" }} />
        </div>

        <div className="blog-body">

          <p className="blog-lede reveal">Most agri-technology is built for the farm that already has margin. The farmer I was thinking about had two acres, unpredictable cash flow, and one good season to get it right.</p>

          <h2 className="blog-h2 reveal">Who this was actually for</h2>
          <p className="reveal">The agri-tech space is full of solutions. Drone-based crop monitoring, soil sensors, precision irrigation, satellite imaging. The technology exists. The problem is that almost all of it was designed for farms that already have capital, infrastructure, and a team that speaks the language of software subscriptions.</p>
          <p className="reveal">The Indian smallholder farmer — the one with two acres in Uttarakhand, seasonal income, no smartphone contract, and no margin for error — appears in pitch decks as the target market. But the actual product is built for someone else entirely.</p>
          <p className="reveal">When I joined the Krishi Drone project at UPES, the first question I asked was not about the technology. It was about who we were actually designing for. The answer changed everything about the business case.</p>

          <h2 className="blog-h2 reveal">The question that shaped the model</h2>
          <p className="reveal">Can a farmer with two acres, unpredictable cash flow, and no appetite for enterprise software trust this tool before the monsoon arrives?</p>
          <p className="reveal">That question became the constraint that everything else had to work within. The pricing model had to be seasonal — not monthly, not annual, but aligned to when a farmer actually has money. The go-to-market had to be farmer-first — not platform-first, not investor-first. The business case had to prove that the thing was viable for the person who needed it, not just the person who could afford it.</p>

          <div className="blog-pullquote reveal">
            <blockquote>"Then why didn't anyone build this earlier?" That question was the whole answer. The gap was not in capability. It was in who the solution had been built for.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">Building the business case</h2>
          <p className="reveal">I led the business case for Krishi Drone — CBA on build vs. launch cost, market sizing for the smallholder segment, seasonal cash flow modelling, and a go-to-market strategy built around affordability rather than growth metrics.</p>
          <p className="reveal">The CBA had to answer a specific question: at what subscription price point does this become viable for a farmer with two acres, while remaining financially sustainable for us? That is a different question from "what price maximises revenue" — and it requires a different model.</p>
          <p className="reveal">The UPES incubator accepted the case. The School of Engineering initiated the prototype phase. The project moved forward because the numbers held up when the right constraints were applied.</p>

          <h2 className="blog-h2 reveal">What this taught me about designing for communities</h2>
          <p className="reveal">The most important design decision in any product is who you decide to centre. Not who you say you are building for — who the actual constraints of the model force you to build for. Those are often different people.</p>
          <p className="reveal">Krishi Drone taught me to ask that question first, before anything else. Before the technology, before the revenue model, before the pitch. Who is this actually for — and do the constraints of the model reflect that honestly?</p>
          <p className="reveal">When the farmer asked why nobody had built this earlier, the honest answer was: because nobody had asked that question first.</p>

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

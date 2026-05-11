import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function MATBlog() {
  useEffect(() => { document.title = "Building MAT — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// Blog · Product · 2026</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(3rem,8vw,8rem)" }}>Why I'm building a free market intelligence tool<br />that nobody asked for.</h1>
        <p className="page-hero__sub">MAT — the thinking behind it, the gap it's closing, and where it stands right now.</p>
        <span className="page-hero__divider-label">MAT · 2026</span>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span>
          <span>·</span>
          <span>Richmond, VA</span>
          <span>·</span>
          <span>2026</span>
          <span>·</span>
          <span>6 min read</span>
        </div>

        <div className="blog-hero-img reveal" style={{ background: "#0A0A08", display: "flex", alignItems: "center", justifyContent: "center", height: "360px" }}>
          <img src="/mat-logo.png" alt="MAT" style={{ width: "240px", height: "240px", objectFit: "contain", filter: "brightness(0.9)" }} />
        </div>

        <div className="blog-body">

          <p className="blog-lede reveal">The people who need market clarity the most are the ones who can least afford to pay for it. That sentence has been sitting in my head for two years. MAT is my answer to it.</p>

          <h2 className="blog-h2 reveal">The gap I kept seeing</h2>
          <p className="reveal">I kept meeting the same person in different rooms. Motivated. Clear-eyed. With an idea that genuinely deserved to exist. And no way to build the analytical case for it without spending money they didn't have on consultants who spoke a language they'd never been taught.</p>
          <p className="reveal">The tools that exist either assume you already know the language — market sizing, TAM/SAM/SOM, sensitivity analysis, go-to-market frameworks — or they charge you for the privilege of learning it. The people who need this most are first-time founders, small operators, someone with a real idea and no infrastructure around them.</p>
          <p className="reveal">I sat across from enough of these people during the Hoops Fest, during UPES, during VCU, to know the gap is real and consistent.</p>

          <h2 className="blog-h2 reveal">What MAT actually is</h2>
          <p className="reveal">A market intelligence platform and tool engine. Plain language inputs. Real analytical outputs. Free.</p>
          <p className="reveal">You tell MAT what you're building and who you're building it for. It walks you through the market, the competition, the risks, and the numbers — in language you can act on, not language that requires a translator.</p>
          <p className="reveal">It is not a chatbot. It is not a template. It is a structured thinking environment built around the analytical frameworks I have been learning at VCU and applying in real projects — packaged for someone who has never had access to that kind of thinking before.</p>

          <div className="blog-pullquote reveal">
            <blockquote>The point is not to make something impressive. The point is to make the analysis accessible to a founder who has an idea and needs a clearer way to decide whether it can work.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">Why free</h2>
          <p className="reveal">Because the problem I am trying to solve is access, not revenue. A tool that costs money immediately excludes the people who need it most. Free is not a pricing strategy — it is a design constraint that keeps me honest about who I am actually building for.</p>
          <p className="reveal">There may be a revenue model eventually. But the first version needs to prove that it is genuinely useful to someone who has never had access to this kind of help. That has to come before anything else.</p>

          <h2 className="blog-h2 reveal">Where it stands</h2>
          <p className="reveal">Early build. Design and architecture. Not launched yet — and I am not pretending otherwise. The target is a beta with the first 50 users by graduation in December 2026.</p>
          <p className="reveal">MAT is not affiliated with TMF. TMF is the job I earned. MAT is the thing I am building because the workday ends and the need doesn't.</p>
          <p className="reveal">If you are the person this is being built for — or if you know them — reach out.</p>

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

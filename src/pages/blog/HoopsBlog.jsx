import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function HoopsBlog() {
  useEffect(() => { document.title = "Uttarakhand Hoops Fest — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "4rem" }}>
        <div className="page-hero__eyebrow">// Blog · Community · Feb 2024</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)", lineHeight: 0.88 }}>
          The court had<br />potholes.<br /><span style={{ color: "var(--red)" }}>We played on it anyway.</span>
        </h1>
        <p className="page-hero__sub" style={{ maxWidth: "520px" }}>
          What it took to build a basketball tournament in a city full of talent that nobody was watching — and why staying independent was the whole point.
        </p>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span><span>·</span>
          <span>Kashipur, Uttarakhand</span><span>·</span>
          <span>2024 → Ongoing</span><span>·</span>
          <span>10 min read</span>
        </div>

        {/* OPENING — full bleed champions photo */}
        <div className="blog-hero-img reveal" style={{ marginBottom: "3.5rem" }}>
          <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest — Champions, Kashipur 2024" />
          <div className="blog-hero-caption">Champions receive ₹51,000 (1st place) · Total pool ₹1,00,000 · Kashipur · March 2024</div>
        </div>

        <div className="blog-body">

          {/* PULL QUOTE — opens the narrative */}
          <div className="blog-pullquote reveal" style={{ marginBottom: "3rem", marginTop: 0 }}>
            <blockquote>I've played basketball my whole life. For my school. My college. My city. My state. I know what this game does to people who love it — and I know what happens when the people running it forget that.</blockquote>
          </div>

          {/* SECTION 1 — the court */}
          <h2 className="blog-h2 reveal">The court</h2>
          <p className="reveal">It was cemented and outdoor. Potholes across the surface — the kind you learn to remember the location of so you don't catch your ankle on a cut. If you fell, you got back up with something missing from your skin. The markings had worn off years ago. One ring was broken. The other worked.</p>
          <p className="reveal">We played on it every evening. Three, sometimes four hours. Me and the same group of people, in the same city, with the same amount of talent that nobody outside that court was paying attention to.</p>

          {/* VISUAL BREAK — stat that stops the reader */}
          <div className="reveal" style={{ margin: "3rem 0", padding: "2.5rem", background: "var(--ink)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
            {[
              { n: "Daily", sub: "3–4 hours on that court" },
              { n: "Every age", sub: "Players from school to working adults" },
              { n: "One ring", sub: "The other was broken" },
              { n: "Zero", sub: "Institutional support" },
            ].map(({ n, sub }) => (
              <div key={sub} style={{ padding: "1.5rem", borderRight: "1px solid rgba(242,239,232,0.08)", borderBottom: "1px solid rgba(242,239,232,0.08)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.6rem)", color: "var(--red)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.1em", color: "rgba(242,239,232,0.35)", marginTop: "0.4rem", lineHeight: 1.7 }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* SECTION 2 — the real problem */}
          <h2 className="blog-h2 reveal">What I was actually watching</h2>
          <p className="reveal">Basketball in India is not a small community. It's large, it's growing, and it has serious talent. What it also has is a problem that anyone who has been inside it long enough knows — a political structure where who you know matters more than how you play.</p>
          <p className="reveal">I watched talented players stop pursuing the game. Not because they lost the love for it. Because the environment around it made them feel like the path forward wasn't available to them unless they were connected to the right people. References over results. Relationships over skill. The court was one of the few places that was still honest.</p>
          <p className="reveal">I wanted to do something about the gap. Not talk about it — do something about it. Something that brought the community together around the game itself, without the politics, without the gatekeeping. Something that reminded players — especially young ones — that there was a future in this if they wanted it.</p>

          {/* VISUAL BREAK — the tension as a line */}
          <div className="reveal" style={{ margin: "2.5rem 0", borderLeft: "2px solid var(--red)", paddingLeft: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "var(--ink)", lineHeight: 1.65, margin: 0 }}>
              People approached me during the process and said I should join their organisation if I wanted to make this happen. I didn't. The moment I was affiliated with one side, I couldn't unite the others. Independence wasn't stubbornness — it was the whole strategy.
            </p>
          </div>

          {/* SECTION 3 — the phone call */}
          <h2 className="blog-h2 reveal">The call that changed the scale</h2>
          <p className="reveal">There's a moment in building anything when you find out whether the idea has weight. For me that moment was a phone call.</p>
          <p className="reveal">I reached out to the former captain of the Indian national basketball team — who is now the captain of the Indian Air Force basketball team. I explained what I was trying to do. A tournament in Kashipur. Community-driven. No political affiliation. Built to show young players in the city that there was a real path forward if they committed to the game.</p>
          <p className="reveal">He said he'd be there. He didn't ask what organisation I was with. He didn't ask about the prize money. He said the cause was right and he'd be there for it.</p>

          {/* VISUAL — full width ceremony photo */}
          <div className="reveal" style={{ margin: "2.5rem 0", overflow: "hidden" }}>
            <img src="/hoops-ceremony.jpg" alt="Opening ceremony — Uttarakhand Hoops Fest" style={{ width: "100%", display: "block", filter: "grayscale(10%) sepia(8%)" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.1em", color: "rgba(10,10,8,0.28)", marginTop: "0.6rem" }}>Opening ceremony · Kashipur · March 2024</div>
          </div>

          <p className="reveal">That changed everything. Not just logistically — psychologically. When the Indian Air Force team shows up to your tournament, the message it sends to every student watching is: this is real. People who have careers in this sport, who drew a salary from it, who wore a uniform for it — they came here. To your city. For this court. For you.</p>

          {/* PULLQUOTE */}
          <div className="blog-pullquote reveal">
            <blockquote>The moment I had political pressure to join an organisation, I knew I was doing something right. You only get asked to be controlled when what you're building can't be ignored.</blockquote>
          </div>

          {/* SECTION 4 — building from scratch */}
          <h2 className="blog-h2 reveal">Building it from the ground up</h2>
          <p className="reveal">The team I used to play with every evening became the team that built the event. The same people who knew every pothole on that court were the ones who fixed it, marked it, set it up for competition. There's something about that I still think about — the people closest to the problem were the ones who solved it.</p>
          <p className="reveal">We ran workshops with local schools. Went into classrooms and talked about sport — not as a hobby, but as a structure for life. About players who had gotten employment in the Indian Air Force, Indian Railways, private universities. About what it meant to have a salary, a designation, a job that came from committing to a game. Parents started sending their children for coaching at the government-authorised stadium where we held the event.</p>
          <p className="reveal">Before the event, that stadium wasn't maintained. People weren't there. After the workshops, after the tournament, there were children of all ages using it. The infrastructure that existed but had been abandoned — suddenly had people in it.</p>

          {/* TWO COLUMN PHOTO */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", margin: "2.5rem 0" }}>
            <div>
              <img src="/hoops-opening.jpg" alt="Inauguration" style={{ width: "100%", display: "block", filter: "grayscale(10%) sepia(8%)", height: "280px", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.08em", color: "rgba(10,10,8,0.28)", marginTop: "0.5rem" }}>Inauguration ceremony</div>
            </div>
            <div>
              <img src="/hoops-champions.jpg" alt="Champions" style={{ width: "100%", display: "block", filter: "grayscale(10%) sepia(8%)", height: "280px", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.44rem", letterSpacing: "0.08em", color: "rgba(10,10,8,0.28)", marginTop: "0.5rem" }}>Champions receive prize</div>
            </div>
          </div>

          {/* SECTION 5 — what it meant */}
          <h2 className="blog-h2 reveal">What 1,000 people in the stands actually means</h2>
          <p className="reveal">The number matters less than what it represents. A Tier-3 city in Uttarakhand. An outdoor cemented court with potholes that we fixed ourselves. Seven sponsors who believed the cause was worth backing. A former national team captain who drove there because the right thing was happening.</p>
          <p className="reveal">1,000 people chose to show up. In a city where talented players had spent years feeling like the game didn't have space for them, the city showed up for the game.</p>
          <p className="reveal">A local news channel covered it twice — before the event and on the day. That doesn't happen unless what you're building has broken through something.</p>

          {/* CLOSING STAT ROW */}
          <div className="reveal" style={{ margin: "3rem 0", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)" }}>
            {[
              { n: "1,000+", sub: "People in the stands" },
              { n: "7", sub: "Sponsors secured" },
              { n: "₹1,00,000", sub: "Total prize pool" },
            ].map(({ n, sub }) => (
              <div key={sub} style={{ background: "var(--paper)", padding: "2rem 1.6rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--ink)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.1em", color: "rgba(10,10,8,0.32)", marginTop: "0.4rem", textTransform: "uppercase" }}>{sub}</div>
              </div>
            ))}
          </div>

          <h2 className="blog-h2 reveal">How it actually got funded</h2>
          <p className="reveal">Funding didn't come from one place. It came from everywhere. Marketing collaterals. In-person pitches. Stakeholder conversations that turned into commitments. Kids in the community made donations. That last part I still think about — children who couldn't afford much, putting something in because they believed the thing was worth doing.</p>
          <p className="reveal">The prize pool ended up at ₹1,00,000. First place took ₹51,000. That's real money in a Tier-3 city. Real enough that teams showed up from outside the region. Real enough that winning meant something beyond a trophy.</p>
          <p className="reveal">And then there was everything else — logistics, accommodation, match scheduling, referees, the court setup, the ceremony. Every moving part was managed by the same people who used to just play there in the evening. When you build something with people who care about it as much as you do, the work doesn't feel like work in the same way.</p>

          <div className="reveal" style={{ margin: "2rem 0", padding: "1.6rem 2rem", background: "rgba(192,57,43,0.04)", borderLeft: "2px solid var(--red)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1rem,1.6vw,1.3rem)", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              It was amazing to do something this impactful. Not because of the scale — because of what the scale meant. Every rupee raised, every team that showed up, every child who watched from the stands and thought: I could do that. That's what it was for.
            </p>
          </div>

          <h2 className="blog-h2 reveal">What comes next</h2>
          <p className="reveal">2026 edition is in planning. Expanded format. Regional teams. The stadium that was empty before is now full of children training. That's the actual outcome — not the event, but what the event made possible after it ended.</p>
          <p className="reveal">The court still has some potholes. We'll fix those too.</p>

        </div>

        {/* Press section */}
        <div className="blog-press reveal">
          <h2 className="blog-h2">In the press.</h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.54rem", color: "rgba(10,10,8,0.42)", lineHeight: 1.85, marginBottom: "1.5rem" }}>A local news channel came twice. Before the event and on the day itself. That doesn't happen unless something real is being built.</p>
          <div className="press-grid">
            <div className="press-card">
              <div className="press-video">
                <iframe src="https://www.youtube.com/embed/NaBxIBpsMDE" title="Pre-event press conference" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
              </div>
              <div className="press-card-body">
                <div className="press-card-label">Pre-event · Press Conference</div>
                <blockquote className="press-card-quote">Nothing meaningful happens alone. This city showed up for its youth — and its youth showed up for sport.</blockquote>
              </div>
            </div>
            <div className="press-card">
              <div className="press-video">
                <iframe src="https://www.youtube.com/embed/UuKnFZZl_vs?start=170" title="Event day coverage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
              </div>
              <div className="press-card-body">
                <div className="press-card-label">Event Day · News Coverage</div>
                <blockquote className="press-card-quote">We wanted them to walk into that stadium and realise — there is a future here.</blockquote>
              </div>
            </div>
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

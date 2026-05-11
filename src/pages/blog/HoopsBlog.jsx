import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function HoopsBlog() {
  useEffect(() => { document.title = "Uttarakhand Hoops Fest — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// Blog · Community · Feb 2024</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(3rem,8vw,8rem)" }}>The thing about building something<br />before anyone asks you to.</h1>
        <p className="page-hero__sub">Uttarakhand Hoops Fest — what I was thinking, what I did, and what actually happened.</p>
        <span className="page-hero__divider-label">Hoops Fest · 2024</span>
      </div>

      <div className="blog-wrap">
        <div className="blog-meta reveal">
          <span>Mridul Pathak</span>
          <span>·</span>
          <span>Kashipur, Uttarakhand</span>
          <span>·</span>
          <span>March 2024</span>
          <span>·</span>
          <span>8 min read</span>
        </div>

        <div className="blog-hero-img reveal">
          <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest — Champions" />
          <div className="blog-hero-caption">Champions receive ₹51,000 prize · Kashipur · March 2024</div>
        </div>

        <div className="blog-body">

          <p className="blog-lede reveal">I had no blueprint. No institution behind me. No guarantee that anyone would show up. What I had was a city full of athletes who had been serious about basketball for years and had nowhere to be taken seriously.</p>

          <h2 className="blog-h2 reveal">What I saw</h2>
          <p className="reveal">Kashipur is a Tier-3 city in Uttarakhand. Basketball exists there — has always existed there. Players who wake up early, who practise in the heat, who are genuinely good at what they do. But there was no stage. No event that made coaches, sponsors, or families believe there was something at stake beyond a weekend.</p>
          <p className="reveal">I had been watching this gap for a while before I did anything about it. The question I kept asking myself was: who is supposed to build this? And the answer kept coming back uncomfortable. Nobody was coming. If it was going to exist, I was going to have to decide it was worth doing and then actually do it.</p>

          <h2 className="blog-h2 reveal">The decision to start</h2>
          <p className="reveal">The first real decision was not about logistics or sponsorship or venues. It was about whether I believed the problem was real enough to justify the risk of being wrong in public. Building something that nobody shows up to is a particular kind of failure — visible, personal, and hard to explain away.</p>
          <p className="reveal">I decided the problem was real. I decided that even if the turnout was small the first year, the thing would be more real than the nothing that existed before it. That was enough to start.</p>
          <p className="reveal">I did not have a team. I did not have a budget. I had a belief that if you make something real enough, the right people will feel it and arrive.</p>

          <div className="blog-pullquote reveal">
            <blockquote>The show did not start with a full house. It started with a decision: build the thing before anyone tells you it can exist.</blockquote>
          </div>

          <h2 className="blog-h2 reveal">What I actually did</h2>
          <p className="reveal">Sponsorship outreach before I had anything to show was humbling. The pitch was essentially: there is a gap, I am going to close it, here is why that matters to your brand. Some said no. Some did not respond. Seven said yes — in-kind, monetary, and everything in between.</p>
          <p className="reveal">Logistics of a 3-day event with multiple teams, a prize structure, and a news channel watching is not something you can plan perfectly in advance. You plan what you can and then you solve problems faster than they accumulate. That is the real skill the Hoops Fest taught me — not project management in the textbook sense, but decision-making velocity under real conditions.</p>
          <p className="reveal">The Indian Air Force sent teams. When that happened I understood that the event had crossed a threshold. Institutions do not send their athletes to things that are not real. Their presence was the signal that what we had built had become legitimate.</p>

          <h2 className="blog-h2 reveal">What happened</h2>
          <p className="reveal">1,000 people sat in those stands. A local news channel came twice — before the event and on the day itself. We broke even in year one. The 2026 edition is in planning with an expanded format and regional teams.</p>
          <p className="reveal">But the thing I think about most is not the number. It is what 1,000 people in the stands of a Tier-3 city means for every athlete who competed. They were seen. The city showed up for them. Someone from their own city decided it was worth doing — and then did it.</p>
          <p className="reveal">That changes what people believe is possible. That is not something you can put in a report.</p>

          <h2 className="blog-h2 reveal">What I learned about decision-making</h2>
          <p className="reveal">The most important decision I made was the first one: to believe the problem was real before I had any evidence that the solution would work. Every subsequent decision — sponsors, venue, format, prize structure — was downstream of that one.</p>
          <p className="reveal">I also learned that execution is where almost everything fails. The gap between planning something and actually doing it is where most ideas die. Not because the idea was wrong. Because the person with the idea waited for conditions that never arrived.</p>
          <p className="reveal">The conditions you need are not the ones you are waiting for. The condition you need is the decision to start.</p>

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

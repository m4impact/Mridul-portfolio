import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.unobserve(el); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`comm-fade${visible?" comm-fade--in":""} ${className}`} style={{transitionDelay:`${delay}ms`}}>
      {children}
    </div>
  );
}

function Credit({ value, label }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`comm-credit${visible?" comm-fade--in":""}`}>
      <span className="comm-credit__value">{value}</span>
      <span className="comm-credit__label">{label}</span>
    </div>
  );
}

export default function Community() {
  useEffect(() => { document.title = "Community — Mridul Pathak"; }, []);
  return (
    <div className="comm">
      <section className="comm-opening">
        <div className="comm-opening__eyebrow"><span>// 007</span><span>·</span><span>BEYOND THE BRIEF</span></div>
        <h1 className="comm-opening__line comm-opening__line--1">Everything</h1>
        <h1 className="comm-opening__line comm-opening__line--2">I've built</h1>
        <h1 className="comm-opening__line comm-opening__line--3">has been for</h1>
        <h1 className="comm-opening__line comm-opening__line--4">a room full of</h1>
        <h1 className="comm-opening__line comm-opening__line--5">people who</h1>
        <h1 className="comm-opening__line comm-opening__line--6">didn't have</h1>
        <h1 className="comm-opening__line comm-opening__line--7">what they needed.</h1>
        <Fade className="comm-opening__sub" delay={900}>
          <p>The tournament was for athletes in a city that didn't see them. The drone was for farmers no one was designing for. MAT is for founders who can't afford the table. This page is about why those people mattered more than the projects.</p>
        </Fade>
      </section>

      <div className="comm-rule" />

      <section className="comm-section">
        <Fade><div className="comm-location">Kashipur in March.</div></Fade>
        <Fade delay={120}><div className="comm-standalone">The stands filled before the first game started.</div></Fade>
        <Fade delay={200} className="comm-body">
          <p>That doesn't happen unless something in the air already feels different — unless the people arriving sense that this time, someone actually means it.</p>
        </Fade>
        <Fade className="comm-body">
          <p>I had been thinking about that city for a long time before I did anything about it. Athletes who were serious, who had been serious for years, playing in a place that had no stage for them. Not because the talent wasn't there. Because nobody had decided it was worth building one yet.</p>
        </Fade>
        <Fade className="comm-body comm-body--spaced">
          <p>So I built it. No institution. No permission. A belief that if you make something real enough, the right people will feel it and arrive.</p>
        </Fade>
        <Fade className="comm-impact-line">The Indian Air Force sent teams.</Fade>
        <Fade delay={120} className="comm-impact-line">A news channel came twice — before the event and on the day itself.</Fade>
        <Fade className="comm-photo comm-photo--full">
          <img src="/hoops-champions.jpg" alt="Uttarakhand Hoops Fest champions — Kashipur, March 2024" />
        </Fade>
        <Fade className="comm-body">
          <p>1,000 people sat in those stands and watched something happen in a city that hadn't seen itself like that before.</p>
        </Fade>
        <Fade delay={100} className="comm-body comm-body--italic">
          <p>I think about what that felt like for the athletes. To finally be in a room that was made for them.</p>
        </Fade>
        <div className="comm-credits">
          <Credit value="1,000+" label="People in the stands" />
          <Credit value="7" label="Sponsors secured" />
          <Credit value="2" label="News stories" />
        </div>
        <div className="comm-photo-offset">
          <Fade className="comm-photo comm-photo--offset">
            <img src="/hoops-ceremony.jpg" alt="Opening ceremony — Uttarakhand Hoops Fest" />
          </Fade>
        </div>
        <Fade className="comm-pullquote">
          <blockquote>The show didn't start with a full house. It started with a decision: build the thing before anyone tells you it can exist.</blockquote>
        </Fade>
      </section>

      <div className="comm-rule" />

      <section className="comm-section">
        <Fade><div className="comm-location">The farmer's question.</div></Fade>
        <Fade className="comm-body">
          <p>That question — <em>who is this actually for</em> — is the one I keep returning to.</p>
          <p>It's what made the Krishi Drone project matter. Most agri-technology is built for the farm that already has margin. The farmer I was thinking about had two acres and one good season to get it right. The question was never whether the technology was elegant. It was whether someone with nothing to spare could trust it before the monsoon came.</p>
        </Fade>
        <Fade className="comm-quote-alone">
          <p>"Then why didn't anyone build this earlier?"</p>
          <cite>— A farmer in Uttarakhand, 2024</cite>
        </Fade>
        <Fade className="comm-body comm-body--italic">
          <p>I didn't have an answer. That was the answer.</p>
        </Fade>
        <div className="comm-pillars">
          <Fade className="comm-pillar"><span className="comm-pillar__value">UPES</span><span className="comm-pillar__label">Incubator acceptance</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={100} className="comm-pillar"><span className="comm-pillar__value">Farmer-first</span><span className="comm-pillar__label">Go-to-market position</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={200} className="comm-pillar"><span className="comm-pillar__value">Seasonal</span><span className="comm-pillar__label">Cash flow model</span></Fade>
        </div>
      </section>

      <div className="comm-rule" />

      <section className="comm-section">
        <Fade><div className="comm-location">The same person.<br />Different rooms.</div></Fade>
        <Fade className="comm-body">
          <p>MAT exists because I kept meeting the same person in different rooms.</p>
          <p>Motivated. Clear-eyed. With an idea that deserved to exist — and no way to build the analytical case for it without spending money they didn't have on consultants who spoke a language they'd never been taught.</p>
        </Fade>
        <Fade className="comm-body">
          <p>MAT is a market intelligence platform. It is free. It is being built in plain language, from the ground up, for the person who has never had access to this kind of thinking before.</p>
        </Fade>
        <Fade className="comm-impact-line">Not a class project.</Fade>
        <Fade delay={100} className="comm-impact-line">Not a side hustle.</Fade>
        <Fade delay={200} className="comm-impact-line">The thing I am building because the need is still there and nobody else is building it.</Fade>
        <div className="comm-pillars">
          <Fade className="comm-pillar"><span className="comm-pillar__value">Free</span><span className="comm-pillar__label">By intention</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={100} className="comm-pillar"><span className="comm-pillar__value">Plain language</span><span className="comm-pillar__label">From the ground up</span></Fade>
          <div className="comm-pillar-rule" />
          <Fade delay={200} className="comm-pillar"><span className="comm-pillar__value">Early build</span><span className="comm-pillar__label">Honest current status</span></Fade>
        </div>
        <Fade className="comm-body comm-body--spaced">
          <p>TMF is where I am going as a Product Manager in May 2026. MAT is what I am building because the workday ends and the need doesn't.</p>
        </Fade>
      </section>

      <div className="comm-rule" />

      <section className="comm-section">
        <div className="comm-richmond-grid">
          <div className="comm-richmond-img">
            <Fade className="comm-photo comm-photo--portrait">
              <img src="/mridul-headshot.jpg" alt="Mridul Pathak — Richmond, VA" />
            </Fade>
          </div>
          <div>
            <Fade><div className="comm-location">Richmond.</div></Fade>
            <Fade className="comm-body">
              <p>Richmond is a city that rewards you for showing up ready.</p>
              <p>What it doesn't always build is the room where people who are in-between can actually sit down together. In-between cultures. In-between credentials. In-between where they came from and where they are going.</p>
            </Fade>
          </div>
        </div>
        <Fade className="comm-pullquote comm-pullquote--center">
          <blockquote>Ambition and loneliness occupy the same square footage more often than anyone says out loud.</blockquote>
        </Fade>
        <Fade className="comm-body">
          <p>I know that feeling from the inside. What I started building here isn't a program. It doesn't have a name. It's closer to an intention — that the people doing serious work, who need one real conversation more than they need another event to attend, should be able to find each other without having to explain themselves first.</p>
        </Fade>
        <Fade className="comm-body comm-body--italic">
          <p>No membership. No pitch at the door. Just: come as you are, bring something worth talking about, and be ready for the conversation to go somewhere real.</p>
        </Fade>
      </section>

      <section className="comm-close">
        <Fade><div className="comm-close__eyebrow">// If this page landed for you</div></Fade>
        <Fade delay={200}>
          <h2 className="comm-close__heading">Reach out if you want<br />to talk through a<br />real problem.</h2>
        </Fade>
        <Fade delay={400} className="comm-close__sub">
          <p>If something on this page sounded like your situation — whether you are building, trying to understand a market, or looking for someone who operates by solving real gaps — this is for you.</p>
          <p className="comm-close__not-a-form">Not a form. Not a pitch. Just a way in.</p>
        </Fade>
        <Fade delay={600}>
          <a href="mailto:pathakm3@vcu.edu" className="comm-close__email">pathakm3@vcu.edu</a>
        </Fade>
      </section>

      <Footer />
    </div>
  );
}

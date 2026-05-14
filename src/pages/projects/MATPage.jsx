import ProjectDetail from "./ProjectDetail";

const project = {
  name: "MAT + ChargeBase",
  eyebrow: "// 01 · Founder · In Development · 2026",
  sub: "Market intelligence and decision optimization for first-time founders",
  year: "2026 →",
  stats: [
    ["Status",        "Virginia v1 in build"],
    ["MAT",           "Free — always"],
    ["ChargeBase",    "Paid decision engine"],
    ["Target",        "First-time founders"],
    ["Stage",         "Design + early build"],
    ["Target launch", "Dec 2026"],
  ],
  heroImage: "/mat-logo.png",
  body: [
    "MAT is a free market intelligence engine built on government economic data — Bureau of Economic Analysis, Bureau of Labor Statistics, Census Bureau. It answers the question every founder needs answered first: is there a market for this idea in my state, and what does the economic reality actually look like?",
    "ChargeBase is the decision engine that sits alongside it. Where MAT answers whether a market exists, ChargeBase answers what to do about it. What should I charge? When will I break even? How should I deploy my capital? It uses mathematical optimization and demand forecasting to solve those questions with real constraints, not gut feel.",
    "The two work as a system. MAT provides the intelligence layer — sourced, structured, state-specific. ChargeBase takes that intelligence and optimizes the decision. The same logic a consultant charges tens of thousands for, built to be accessible to the person who can't afford that consultant.",
    "Validated with a real client: recommended a phased $10K market entry instead of $100K for a handmade jewelry brand entering the U.S. market. Optimal price point: $68. Projected breakeven: Month 11. Client saved $90K and launched successfully.",
    "Built independently alongside VCU coursework. Every product decision is made around a single constraint: would someone with no business background and no budget be able to use this and trust the output?",
  ],
  outcome: "Target: Beta to 50 early users by December 2026. MAT free at launch, permanently. ChargeBase available for strategic engagements.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function MATPage() {
  return <ProjectDetail project={project} />;
}

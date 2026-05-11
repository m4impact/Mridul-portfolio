import ProjectDetail from "./ProjectDetail";

const project = {
  name: "PFG Group",
  eyebrow: "// Supply Chain · VCU · 2025",
  sub: "Supply Chain Optimization — Freezer utilization 40% → 92%",
  year: "Nov 2025",
  stats: [
    ["Client",   "PFG Group"],
    ["Before",   "40% utilization"],
    ["After",    "92% utilization"],
    ["Methods",  "Optimization · Simulation"],
    ["Course",   "VCU · Operations"],
  ],
  heroImage: null,
  body: [
    "PFG Group is a real logistics operation. The problem was concrete: freezer utilization at 40% in a high-cost, perishable environment. Every percentage point below optimal represents real money lost and real capacity wasted.",
    "I built an optimization and simulation model to identify the gap between current utilization and what was structurally possible. The model had to account for real constraints — delivery schedules, product mix, storage requirements — not idealized assumptions.",
    "The output: a set of data-driven recommendations for capacity planning and operational adjustments. Freezer utilization improved from 40% to 92% based on the model's recommendations.",
    "The number matters. But what matters more is that the decision-maker could see exactly why — not just what to do, but the logic behind it, so they could apply it again without me.",
  ],
  outcome: "Freezer utilization improved from 40% to 92%. Optimization model used for ongoing capacity planning decisions.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function PFGPage() {
  return <ProjectDetail project={project} />;
}

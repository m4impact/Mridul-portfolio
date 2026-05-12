import ProjectDetail from "./ProjectDetail";

const project = {
  name: "PFG Group",
  eyebrow: "// 06 · Supply Chain Optimization · VCU · Nov 2025",
  sub: "Optimization and simulation model — freezer utilization 40% → 92%",
  year: "Nov 2025",
  stats: [
    ["Client",        "PFG Group"],
    ["Before",        "40% utilization"],
    ["After",         "92% utilization"],
    ["Improvement",   "+52 percentage points"],
    ["Methods",       "Optimization · simulation"],
    ["Application",   "Capacity planning decisions"],
  ],
  heroImage: null,
  body: [
    "PFG Group is a real logistics operation. The problem: freezer space operating at 40% utilization in a high-cost, perishable-goods environment where every unused percentage point represents direct financial loss.",
    "Built an optimization and simulation model to map the gap between current utilization and structural capacity. The model incorporated real operational constraints — delivery schedules, product mix, temperature zoning requirements, labour scheduling — to avoid recommendations that wouldn't survive contact with the real operation.",
    "Ran simulation scenarios to identify the combination of scheduling and capacity allocation changes that would move utilization toward the structural maximum without requiring capital investment in additional storage.",
    "Output: a set of operationally feasible recommendations for capacity planning and scheduling adjustments. The model was designed to be reusable by the operations team for future planning cycles.",
    "Freezer utilization improved from 40% to 92% based on the model's recommendations — a result that supports data-driven decisions on capacity planning going forward.",
  ],
  outcome: "Freezer utilization: 40% → 92%. Optimization model adopted for ongoing capacity planning. +52 percentage point improvement with no capital expenditure required.",
  photos: [],
  reportUrl: "/reports/pfg-supply-chain-optimization.pdf",
  reportDesc: "Full project report — optimization model formulation, simulation framework, 30-day results, and capacity planning recommendations.",
};

export default function PFGPage() {
  return <ProjectDetail project={project} />;
}

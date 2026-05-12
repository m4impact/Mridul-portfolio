import ProjectDetail from "./ProjectDetail";

const project = {
  name: "MAT",
  eyebrow: "// 01 · Founder · In Development · 2026",
  sub: "My Ambition Tool — Free market intelligence platform for first-time founders",
  year: "2026 →",
  stats: [
    ["Status",      "In Development"],
    ["Price",       "Free"],
    ["Target",      "First-time founders"],
    ["Stage",       "Design + early build"],
    ["Affiliation", "Independent"],
    ["Target launch","Dec 2026"],
  ],
  heroImage: "/mat-logo.png",
  body: [
    "MAT is a market intelligence platform and tool engine designed for first-time founders and small operators who need analytical clarity but can't access or afford traditional consulting.",
    "The platform guides users through structured market analysis — sizing, competitive landscape, go-to-market positioning, cost modelling — using plain language inputs and actionable outputs.",
    "Built independently alongside VCU coursework. All product decisions are made around a single constraint: would someone with no business background and no budget be able to use this and trust the output?",
    "Current status: design and early architecture. Target for first beta: 50 users by December 2026 graduation.",
    "MAT is independent. Built because the problem is real and nobody else is building the right version of it.",
  ],
  outcome: "Target: Beta to 50 early users by December 2026. Free at launch, permanently.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function MATPage() {
  return <ProjectDetail project={project} />;
}

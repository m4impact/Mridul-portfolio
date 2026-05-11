import ProjectDetail from "./ProjectDetail";

const project = {
  name: "MAT",
  eyebrow: "// 01 · In Development · 2026",
  sub: "My Ambition Tool — Market intelligence platform",
  year: "2026 →",
  stats: [
    ["Status", "In Development"],
    ["Price", "Free"],
    ["Target", "First-time Founders"],
    ["Stage", "Design + Early Build"],
    ["Affiliated", "Independent"],
  ],
  heroImage: null,
  body: [
    "A free market intelligence platform and tool engine built for people who can't afford to get the analysis wrong. First-time founders, small operators, people with real ideas and no access to the analytical infrastructure that de-risks them.",
    "The gap: smart, motivated people with real ideas who hit a wall the moment they needed to structure a plan, model costs, or understand a market. Not because they weren't capable — because the tools assume you already speak the language, and the consultants charge more than most early founders can afford.",
    "MAT is being built to sit in that gap. Plain language. Real outputs. Free. Not a class project. Not affiliated with TMF.",
    "TMF is where I am going as a Product Manager in May 2026. MAT is what I am building because the workday ends and the need doesn't.",
  ],
  outcome: "Goal: Beta launch to first 50 users by graduation, December 2026.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function MATPage() {
  return <ProjectDetail project={project} />;
}

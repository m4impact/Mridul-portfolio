import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Crafteve India",
  eyebrow: "// 02 · Decision Analytics · VCU · Nov 2025",
  sub: "U.S. market entry strategy for an Indian handcrafted wooden goods manufacturer",
  year: "Nov 2025",
  stats: [
    ["Client",          "Crafteve India"],
    ["Sector",          "Wood product manufacturing"],
    ["Investment scope","₹100,000"],
    ["Recommendation",  "Phased U.S. pilot"],
    ["Methods",         "CBA · sensitivity analysis"],
    ["Outcome",         "Recommendation adopted"],
  ],
  heroImage: "/crafteve-logo.png",
  body: [
    "Crafteve is an Indian manufacturer of handcrafted wooden gifting décor based in Nagina, Uttar Pradesh. The brief: analyse whether to expand domestically or pilot entry into the U.S. market with a fixed ₹100,000 budget.",
    "Conducted full market, customer, competitor, and comparative analysis across both markets. Built a sensitivity analysis modelling tariff variability, logistics costs, and demand variance at ±10% to account for uncertainty in U.S. market entry conditions.",
    "The analysis had to be honest about risk rather than optimistic about opportunity. The ₹100,000 constraint meant any recommendation had to be survivable if assumptions proved incorrect.",
    "Recommendation: phased U.S. pilot with a clear KPI framework establishing a Q1 2026 decision gate — continue, scale, or redirect capital based on first-phase results.",
    "The client adopted the phased pilot recommendation. The KPI framework was used to structure the Q1 2026 review.",
  ],
  outcome: "Client adopted phased U.S. pilot recommendation. KPI framework implemented for Q1 2026 review gate. Report available for download.",
  photos: [],
  reportUrl: "/reports/crafteve-market-entry.pdf",
  reportDesc: "Full market entry analysis — competitive landscape, CBA, sensitivity modelling, and phased pilot recommendation.",
};

export default function CraftevePage() {
  return <ProjectDetail project={project} />;
}

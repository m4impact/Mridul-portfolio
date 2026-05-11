import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Crafteve",
  eyebrow: "// 02 · Decision Analytics · VCU · 2025",
  sub: "U.S. Market Entry Strategy · Decision Analytics Consulting",
  year: "Nov 2025",
  stats: [
    ["Client", "Crafteve India"],
    ["Recommendation", "U.S. Pilot"],
    ["Methods", "CBA · Sensitivity"],
    ["Investment", "₹100,000"],
    ["Course", "VCU · Decision Analytics"],
  ],
  heroImage: null,
  body: [
    "Crafteve is an Indian manufacturer of handcrafted wooden gifting décor. One question: expand domestically or pilot U.S. entry with ₹100,000?",
    "I ran market, customer, competitor, and comparative analysis — plus a sensitivity analysis modelling tariffs, logistics costs, and demand variance across ±10% scenarios. The analysis needed to be honest about risk, not just optimistic about opportunity.",
    "Recommendation: phased U.S. pilot, with clear KPIs to decide whether to continue or redirect capital at the Q1 2026 review gate.",
    "The client adopted the phased pilot recommendation.",
  ],
  outcome: "Client adopted the phased pilot recommendation. KPI framework used to set Q1 2026 review gate.",
  photos: [],
  reportUrl: "/reports/crafteve-market-entry.pdf",
  reportDesc: "Full market entry analysis — competitive landscape, CBA, sensitivity modelling, and phased pilot recommendation.",
};

export default function CraftevePage() {
  return <ProjectDetail project={project} />;
}

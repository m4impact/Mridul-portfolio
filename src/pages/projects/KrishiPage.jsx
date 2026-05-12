import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Krishi Drone",
  eyebrow: "// 04 · UPES Incubator · Agri-Tech · 2024",
  sub: "Precision farming startup — drone-based crop monitoring for Indian smallholder farmers",
  year: "Aug 2024",
  stats: [
    ["Stage",      "UPES Incubator — accepted"],
    ["Model",      "Subscription"],
    ["Market",     "Indian smallholder farmers"],
    ["GTM",        "Farmer-first, seasonal pricing"],
    ["Prototype",  "UPES School of Engineering"],
    ["Method",     "CBA + stakeholder interviews"],
  ],
  heroImage: "/krishi-logo.png",
  body: [
    "Krishi Drone is a precision agriculture startup developed through the UPES incubator program. The product: affordable drone-based crop monitoring for Indian smallholder farmers, delivered on a subscription model built around seasonal cash flow rather than standard SaaS billing.",
    "Led the business case development — covering market sizing for the smallholder segment, build vs. launch cost CBA, farmer-first go-to-market positioning, and a pricing model designed around the actual payment capacity of a 2-acre farmer.",
    "Conducted stakeholder interviews with farmers in Uttarakhand to validate assumptions and identify the specific constraints — affordability, trust, seasonal timing — that determined product viability.",
    "Collaborated with UPES School of Engineering on prototype feasibility and technical constraints. Business case accepted by the UPES incubator. Engineering prototype phase initiated.",
    "The core finding: the technology was viable. The business model had to be rebuilt around the user's real constraints rather than standard agri-tech pricing assumptions.",
  ],
  outcome: "Business case accepted into UPES incubator. Prototype phase initiated with School of Engineering. Farmer-first model validated through direct stakeholder interviews.",
  photos: [],
  reportUrl: "/reports/krishi-drone-business-case.pdf",
  reportDesc: "Full business pitch report — market opportunity, dual-function drone system, competitive analysis, business model, and go-to-market strategy.",
};

export default function KrishiPage() {
  return <ProjectDetail project={project} />;
}

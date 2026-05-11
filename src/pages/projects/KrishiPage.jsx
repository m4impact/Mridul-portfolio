import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Krishi Drone",
  eyebrow: "// 04 · UPES Incubator · 2024",
  sub: "Agri-Tech Startup · Precision farming for rural India",
  year: "Aug 2024",
  stats: [
    ["Stage", "UPES Incubator"],
    ["Model", "Subscription"],
    ["Market", "Rural India"],
    ["GTM", "Farmer-first"],
    ["Cash Flow", "Seasonal"],
  ],
  heroImage: null,
  body: [
    "A precision agriculture drone startup that reached the UPES incubator. The concept: affordable drone-based crop monitoring for Indian smallholder farmers, on a subscription model built around seasonal demand and affordability.",
    "The farmer I was designing for had two acres, unpredictable cash flow, and no appetite for tools that assumed they already spoke the language of software subscriptions. The question was never whether the technology was elegant — it was whether someone with nothing to spare could trust it before the monsoon came.",
    "I led the business case — CBA on build vs. launch cost, farmer-first market positioning, and a go-to-market strategy built around real constraints. The UPES incubator accepted the case. The School of Engineering initiated the prototype.",
    "When we explained the concept to the first farmer, he asked: 'Then why didn't anyone build this earlier?' That question was the whole answer.",
  ],
  outcome: "Business case accepted into UPES incubator. Prototype phase initiated with School of Engineering.",
  photos: [],
  reportUrl: "/reports/krishi-drone-business-case.pdf",
  reportDesc: "Full business case — CBA, market sizing, farmer-first GTM strategy, and subscription model design.",
};

export default function KrishiPage() {
  return <ProjectDetail project={project} />;
}

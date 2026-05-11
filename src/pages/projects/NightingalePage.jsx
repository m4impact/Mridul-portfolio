import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Nightingale",
  eyebrow: "// 03 · Forecasting Methods · VCU · 2025",
  sub: "Demand Forecasting — Real client, real Richmond business",
  year: "Nov 2025",
  stats: [
    ["Client",   "Nightingale Ice Cream"],
    ["Tools",    "R Studio"],
    ["Methods",  "Exp. Smoothing · MA"],
    ["Output",   "Q-ahead Forecast"],
    ["Result",   "~12% overstock reduction"],
  ],
  heroImage: "/nightingale-logo.png",
  body: [
    "Nightingale Ice Cream is a real Richmond business. Not a case study. Not a simulated dataset. A real owner, real sales history, real decisions that needed to be better informed.",
    "Using R Studio, I applied moving averages and exponential smoothing to model sales patterns, seasonality, and quarter-ahead demand. The goal wasn't to produce an impressive model — it was to produce one the owner could actually use.",
    "I ran ±5–10% sensitivity scenarios to give a range of realistic outcomes rather than a single point estimate that could mislead planning. The owner used the Q1 2026 forecast to adjust inventory and staffing.",
    "Estimated overstock reduction: ~12%. That's a real number that came from a real conversation about what the business actually needed.",
  ],
  outcome: "Owner used Q1 2026 forecast to adjust inventory and staffing — reducing estimated overstock by ~12%.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function NightingalePage() {
  return <ProjectDetail project={project} />;
}

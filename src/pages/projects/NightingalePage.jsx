import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Nightingale Ice Cream",
  eyebrow: "// 03 · Forecasting Methods · VCU · Nov 2025",
  sub: "Demand forecasting for a real Richmond-based business using R Studio",
  year: "Nov 2025",
  stats: [
    ["Client",        "Nightingale Ice Cream"],
    ["Location",      "Richmond, VA"],
    ["Tools",         "R Studio"],
    ["Methods",       "Moving averages · exponential smoothing"],
    ["Scenarios",     "±5–10% sensitivity"],
    ["Result",        "~12% overstock reduction"],
  ],
  heroImage: "/nightingale-logo.png",
  body: [
    "Nightingale Ice Cream is a Richmond-based business. This was a real-client project — real sales history, real seasonal patterns, real planning decisions downstream of the forecast.",
    "Applied moving averages and exponential smoothing in R Studio to model historical sales patterns and quarter-ahead demand. Tested multiple smoothing parameters to identify the best fit for Nightingale's specific sales behaviour.",
    "Ran ±5–10% sensitivity scenarios to produce a forecast range rather than a single point estimate — because a single-number forecast that turns out to be wrong is more dangerous than a range that acknowledges uncertainty.",
    "The output was structured for a business owner, not an analyst: clear Q1 2026 demand projections with seasonal adjustments and an explicit explanation of the assumptions built into each scenario.",
    "The owner used the Q1 2026 forecast to adjust inventory and staffing. Estimated overstock reduction: ~12%.",
  ],
  outcome: "Q1 2026 forecast adopted for inventory and staffing decisions. Estimated overstock reduction ~12%. Sensitivity analysis gave owner a range rather than a false-precision point estimate.",
  photos: [],
  reportUrl: null,
  reportDesc: null,
};

export default function NightingalePage() {
  return <ProjectDetail project={project} />;
}

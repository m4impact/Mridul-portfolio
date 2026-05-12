import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Hoops Fest",
  eyebrow: "// 05 · Founder & President · Uttarakhand · 2024",
  sub: "3-day basketball tournament · 1,000+ attendees · Kashipur, Uttarakhand",
  year: "Feb 2024 → Ongoing",
  stats: [
    ["Attendees",  "1,000+"],
    ["Sponsors",   "7"],
    ["Format",     "3-day event"],
    ["Prize pool", "₹1,00,000"],
    ["Coverage",   "2 news stories"],
    ["Status",     "2026 edition planned"],
  ],
  heroImage: "/hoops-champions.jpg",
  body: [
    "Founded and managed a 3-day open basketball tournament in Kashipur, Uttarakhand — a Tier-3 city with serious basketball talent and no competitive platform for it.",
    "Responsibilities spanned the full event lifecycle: venue coordination, logistics planning, team registration, sponsor acquisition, vendor management, stakeholder communication, and on-ground execution across three days.",
    "Secured 7 sponsors through direct outreach — a combination of in-kind and monetary contributions. Liaised with the Indian Air Force teams, local government contacts, and a regional news channel that covered the event twice.",
    "The event broke even in year one. The 2026 edition is in active planning with an expanded format, regional team participation, and a larger prize structure.",
    "The operational complexity of running a multi-day live event — with real money, real teams, and real visibility — translated directly into project management competencies that no classroom replicates.",
  ],
  outcome: "1,000+ attendees · 7 sponsors secured · Indian Air Force participation · Broke even year one · 2 news stories · 2026 edition in planning.",
  photos: [
    { src: "/hoops-ceremony.jpg", alt: "Opening ceremony" },
    { src: "/hoops-opening.jpg", alt: "Inauguration" },
  ],
  reportUrl: null,
  reportDesc: null,
};

export default function HoopsPage() {
  return <ProjectDetail project={project} />;
}

import ProjectDetail from "./ProjectDetail";

const project = {
  name: "Hoops Fest",
  eyebrow: "// 05 · Uttarakhand · 2024",
  sub: "Founder & President · 3-day basketball tournament · 1,000+ attendees",
  year: "Feb 2024 →",
  stats: [
    ["Attendees", "1,000+"],
    ["Sponsors", "7"],
    ["Format", "3-day"],
    ["Prize", "₹51,000"],
    ["Status", "Ongoing"],
  ],
  heroImage: "/hoops-champions.jpg",
  body: [
    "Founded and ran a 3-day basketball tournament in Kashipur, Uttarakhand. No blueprint, no institution, no guarantee anyone would show up. A belief that if you make something real enough, the right people will feel it and arrive.",
    "The Indian Air Force sent teams. A local news channel covered the event twice — before and on the day itself. 1,000 people filled the stands in a Tier-3 city that had never had a stage like this for its athletes.",
    "Managing logistics, vendor relationships, sponsorship outreach, and team coordination from scratch taught me the actual difference between planning something and executing it. That gap is where most things fail — and where I learned to not let them.",
    "Planning the 2026 edition with an expanded format and regional teams.",
  ],
  outcome: "7 sponsors secured. Broke even in year one. Indian Air Force participation. 2 news stories. 2026 edition in planning.",
  photos: [
    { src: "/hoops-ceremony.jpg", alt: "Opening ceremony" },
    { src: "/hoops-opening.jpg", alt: "Lamp lighting inauguration" },
  ],
  reportUrl: null,
  reportDesc: null,
};

export default function HoopsPage() {
  return <ProjectDetail project={project} />;
}

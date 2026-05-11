import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Schema markup
const schema = document.createElement("script");
schema.type = "application/ld+json";
schema.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mridul Pathak",
  "url": "https://www.mridulpathak.com",
  "jobTitle": "Product Manager",
  "worksFor": { "@type": "Organization", "name": "TMF", "address": { "@type": "PostalAddress", "addressLocality": "Richmond", "addressRegion": "VA" } },
  "description": "Product Manager at TMF, Richmond VA. Decision Analytics student at VCU. Building MAT — a free market intelligence platform. Available for conversations about ideas, market strategy, and business problems.",
  "email": "pathakm3@vcu.edu",
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "Virginia Commonwealth University" },
  "address": { "@type": "PostalAddress", "addressLocality": "Richmond", "addressRegion": "VA", "addressCountry": "US" },
  "knowsAbout": ["Decision Analytics", "Market Entry Strategy", "Demand Forecasting", "Product Management", "Go-To-Market Strategy", "Business Intelligence", "Market Intelligence"],
  "seeks": "Opportunities to help people understand their market situation clearly",
  "sameAs": ["https://linkedin.com/in/mridul-pathak", "https://github.com/m4impact"]
});
document.head.appendChild(schema);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

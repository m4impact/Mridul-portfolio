import { Link } from "react-router-dom";

const links = [
  { href: "mailto:pathakm3@vcu.edu", label: "Email" },
  { href: "https://linkedin.com/in/mridul-pathak", label: "LinkedIn" },
  { href: "https://github.com/m4impact", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer>
      <span className="footer-left">Mridul Pathak · Richmond, VA · {new Date().getFullYear()}</span>
      <span className="footer-right">PM · TMF <span>·</span> VCU MDA '26</span>
      <div className="footer-links">
        {links.map(({ href, label }) => (
          <a key={label} href={href}
            target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"}
            rel="noopener noreferrer">{label}</a>
        ))}
        <Link to="/contact" style={{ fontFamily: "var(--font-mono)", fontSize: ".5rem", color: "var(--red)", textDecoration: "none", letterSpacing: ".08em", transition: "color .2s" }}>Start a conversation →</Link>
      </div>
    </footer>
  );
}

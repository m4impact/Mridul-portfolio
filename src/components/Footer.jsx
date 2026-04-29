const links = [
  { href: "mailto:pathakm3@vcu.edu", label: "Email" },
  { href: "https://linkedin.com/in/mridul-pathak", label: "LinkedIn" },
  { href: "https://github.com/m4impact", label: "GitHub" },
  { href: "/resume.pdf", label: "Résumé" },
];

export default function Footer() {
  return (
    <footer>
      <span className="footer-left">Mridul Pathak · Richmond, VA · {new Date().getFullYear()}</span>
      <span className="footer-right">VCU MDA '26 <span>·</span> Joining TMF May 2026</span>
      <div className="footer-links">
        {links.map(({ href, label }) => (
          <a key={label} href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"} rel="noopener noreferrer">{label}</a>
        ))}
      </div>
    </footer>
  );
}

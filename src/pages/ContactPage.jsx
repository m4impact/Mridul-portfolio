import { useState, useEffect } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";

const contactLinks = [
  ["mailto:pathakm3@vcu.edu", "Email", "→ pathakm3@vcu.edu"],
  ["https://linkedin.com/in/mridul-pathak", "LinkedIn", "→ mridul-pathak"],
  ["/resume.pdf", "Resume", "→ Download PDF"],
  ["https://github.com/m4impact", "GitHub", "→ m4impact"],
];

export default function ContactPage() {
  useEffect(() => { document.title = "Contact — Mridul Pathak"; }, []);
  useScrollReveal();
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) e.email = "Valid email required";
    if (!fields.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const inputStyle = f => ({
    width: "100%", background: "transparent", border: "none",
    borderBottom: `1px solid ${focused === f ? "var(--red)" : errors[f] ? "#c0392b" : "rgba(10,10,8,.18)"}`,
    color: "var(--ink)", fontFamily: "var(--font-mono)", fontSize: ".72rem",
    padding: "10px 0", outline: "none", transition: "border-color .25s", letterSpacing: ".04em", boxSizing: "border-box"
  });

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 006 · Get In Touch</div>
        <h1 className="page-hero__title">Contact.</h1>
        <p className="page-hero__sub">If you are building something real, I am around.</p>
        <span className="page-hero__divider-label">006 — Contact</span>
      </div>
      <div className="contact-wrap">
        <div>
          <h2 className="contact-heading reveal">Let's talk<br />about<br />something<br />real.</h2>
          <p className="contact-sub reveal d1">Always interested in work that has actual stakes.</p>
          <div className="contact-links reveal d2">
            {contactLinks.map(([href, name, arrow]) => (
              <a key={name} className="contact-link" href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"}
                rel="noopener noreferrer">
                <span className="link-name">{name}</span>
                <span className="link-arrow">{arrow}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="reveal d1">
          {sent ? (
            <div className="form-success" role="status">
              <div className="success-tick">✓</div>
              <div className="success-msg">Message sent. I will be in touch shortly.</div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={e => { e.preventDefault(); if (validate()) setSent(true); }} noValidate>
              {["name", "email", "message"].map(f => (
                <div key={f}>
                  <label htmlFor={`cf-${f}`} className={`form-label${focused === f ? " focused" : ""}${errors[f] ? " error" : ""}`}>
                    {f}{errors[f] && <span style={{ fontStyle: "italic", marginLeft: "6px" }}>{errors[f]}</span>}
                  </label>
                  {f === "message"
                    ? <textarea id={`cf-${f}`} rows={5} value={fields[f]}
                        onChange={e => setFields(p => ({ ...p, [f]: e.target.value }))}
                        onFocus={() => setFocused(f)} onBlur={() => setFocused("")}
                        style={{ ...inputStyle(f), resize: "none", lineHeight: 1.8 }} className="form-input" aria-required="true" />
                    : <input id={`cf-${f}`} type={f === "email" ? "email" : "text"} value={fields[f]}
                        onChange={e => setFields(p => ({ ...p, [f]: e.target.value }))}
                        onFocus={() => setFocused(f)} onBlur={() => setFocused("")}
                        style={inputStyle(f)} className="form-input" aria-required="true" />}
                </div>
              ))}
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

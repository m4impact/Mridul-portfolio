import { useState, useEffect } from "react";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";

const contactLinks = [
  ["mailto:pathakm3@vcu.edu",          "Email",    "→ pathakm3@vcu.edu"],
  ["https://linkedin.com/in/mridul-pathak", "LinkedIn", "→ mridul-pathak"],
  ["/resume.pdf",                       "Resume",   "→ Download PDF"],
  ["https://github.com/m4impact",       "GitHub",   "→ m4impact"],
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "If you have an idea, a problem, or a situation you need to read clearly — reach out. The conversation is free. The response is honest. pathakm3@vcu.edu");
  }, []);
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
    padding: "10px 0", outline: "none", transition: "border-color .25s",
    letterSpacing: ".04em", boxSizing: "border-box",
  });

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// 006 · Get In Touch</div>
        <h1 className="page-hero__title">Contact.</h1>
        <p className="page-hero__sub">Most people who reach out aren't sure if they should. They should.</p>
        <span className="page-hero__divider-label">006 — Contact</span>
      </div>

      <div className="contact-wrap">
        <div>
          <h2 className="contact-heading reveal">Let's talk<br />about<br />something<br />real.</h2>
          <p className="contact-sub reveal d1">
            You have an idea that deserves to exist. You're in a market you can't read clearly. You built something and you're not sure what went wrong. You just want to talk to someone who will actually engage with what you're working on.
          </p>
          <p className="contact-sub reveal d2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "rgba(10,10,8,0.4)", fontSize: "1rem" }}>
            That's what I'm here for.
          </p>

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

          <div className="contact-note reveal d3">
            <span>// Response time: usually same day. Always honest.</span>
          </div>
        </div>

        <div className="reveal d1">
          {sent ? (
            <div className="form-success" role="status">
              <div className="success-tick">✓</div>
              <div className="success-msg">Message sent. I'll be in touch shortly.</div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={e => { e.preventDefault(); if (validate()) setSent(true); }} noValidate>
              <div className="form-context">
                <p>Send a message. Tell me what you're working on. I read every one.</p>
              </div>
              {["name", "email", "message"].map(f => (
                <div key={f}>
                  <label htmlFor={`cf-${f}`} className={`form-label${focused === f ? " focused" : ""}${errors[f] ? " error" : ""}`}>
                    {f}{errors[f] && <span style={{ fontStyle: "italic", marginLeft: "6px" }}>{errors[f]}</span>}
                  </label>
                  {f === "message"
                    ? <textarea id={`cf-${f}`} rows={5} value={fields[f]}
                        onChange={e => setFields(p => ({ ...p, [f]: e.target.value }))}
                        onFocus={() => setFocused(f)} onBlur={() => setFocused("")}
                        style={{ ...inputStyle(f), resize: "none", lineHeight: 1.8 }}
                        className="form-input" aria-required="true"
                        placeholder="What are you working on?" />
                    : <input id={`cf-${f}`} type={f === "email" ? "email" : "text"} value={fields[f]}
                        onChange={e => setFields(p => ({ ...p, [f]: e.target.value }))}
                        onFocus={() => setFocused(f)} onBlur={() => setFocused("")}
                        style={inputStyle(f)} className="form-input" aria-required="true" />}
                </div>
              ))}
              <button type="submit" className="form-submit">Send Message →</button>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".48rem", color: "rgba(10,10,8,.28)", letterSpacing: ".08em", marginTop: "1rem", lineHeight: 1.8 }}>
                // I read every message. I respond to all of them. I don't forward your details anywhere. This is just two people talking.
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

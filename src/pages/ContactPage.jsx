import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "../components/useScrollReveal";
import Footer from "../components/Footer";

// EmailJS config — you need to set these up at emailjs.com (free)
// Replace with your actual IDs after signing up
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

const contactLinks = [
  ["mailto:pathakm3@vcu.edu",           "Email",    "→ pathakm3@vcu.edu"],
  ["https://linkedin.com/in/mridul-pathak", "LinkedIn", "→ mridul-pathak"],
  ["/resume.pdf",                        "Resume",   "→ Download PDF"],
  ["https://github.com/m4impact",        "GitHub",   "→ m4impact"],
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Mridul Pathak";
    const m = (a, k, v) => { let el = document.querySelector(`meta[${a}="${k}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); } el.setAttribute("content", v); };
    m("name", "description", "If you have an idea, a problem, or a situation you need to read clearly — reach out. The conversation is free. The response is honest. pathakm3@vcu.edu");
  }, []);
  useScrollReveal();

  const formRef = useRef(null);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) e.email = "Valid email required";
    if (!fields.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: fields.name,
          email: fields.email,
          message: fields.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      // Reliable fallback — opens user's email client
      window.location.href = `mailto:pathakm3@vcu.edu?subject=Message from ${encodeURIComponent(fields.name)}&body=${encodeURIComponent(`From: ${fields.name} (${fields.email})

${fields.message}`)}`;
      setStatus("sent");
    }
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
            You have an idea that deserves to exist. You're in a market you can't read clearly. You built something and you're not sure what went wrong. You just want to talk to someone who will actually engage.
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
          {status === "sent" ? (
            <div className="form-success" role="status">
              <div className="success-tick">✓</div>
              <div className="success-msg">Message sent. I'll be in touch shortly.</div>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-context">
                <p>Send a message. Tell me what you're working on. I read every one.</p>
              </div>
              {[
                { key: "name",    type: "text",  placeholder: "Your name" },
                { key: "email",   type: "email", placeholder: "Your email" },
                { key: "message", type: "area",  placeholder: "What are you working on?" },
              ].map(({ key, type, placeholder }) => (
                <div key={key}>
                  <label htmlFor={`cf-${key}`} className={`form-label${focused === key ? " focused" : ""}${errors[key] ? " error" : ""}`}>
                    {key}{errors[key] && <span style={{ fontStyle: "italic", marginLeft: "6px" }}>{errors[key]}</span>}
                  </label>
                  {type === "area"
                    ? <textarea id={`cf-${key}`} name={key} rows={5} value={fields[key]}
                        onChange={e => setFields(p => ({ ...p, [key]: e.target.value }))}
                        onFocus={() => setFocused(key)} onBlur={() => setFocused("")}
                        style={{ ...inputStyle(key), resize: "none", lineHeight: 1.8 }}
                        className="form-input" aria-required="true" placeholder={placeholder} />
                    : <input id={`cf-${key}`} name={key} type={type} value={fields[key]}
                        onChange={e => setFields(p => ({ ...p, [key]: e.target.value }))}
                        onFocus={() => setFocused(key)} onBlur={() => setFocused("")}
                        style={inputStyle(key)} className="form-input" aria-required="true" placeholder={placeholder} />}
                </div>
              ))}
              <button type="submit" className="form-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".46rem", color: "rgba(10,10,8,.25)", letterSpacing: ".08em", marginTop: "1rem", lineHeight: 1.9 }}>
                // I read every message. I respond to all of them. This is just two people talking.
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

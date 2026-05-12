import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useScrollReveal } from "../../components/useScrollReveal";

export default function GlobalInternPage() {
  useEffect(() => { document.title = "GlobalIntern — Mridul Pathak"; }, []);
  useScrollReveal();

  return (
    <div className="page-wrap">
      <div className="page-hero">
        <div className="page-hero__eyebrow">// Database Design · Oracle Apex · INFO 601 · Spring 2026</div>
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.8rem,7vw,8rem)" }}>GlobalIntern.</h1>
        <p className="page-hero__sub">A relational database that turns 60 days of authorization chaos into a single queryable record.</p>
        <span className="page-hero__divider-label">Spring 2026</span>
      </div>

      <div style={{ padding: "5rem 3.5rem", maxWidth: "860px" }}>

        <div className="proj-stats-row reveal">
          {[
            ["Platform",   "Oracle Apex"],
            ["Tables",     "19 normalized"],
            ["Queries",    "5 SQL queries"],
            ["Schema",     "3NF normalized"],
            ["Entities",   "11 strong · 1 weak · 2 subtypes"],
            ["Course",     "INFO 601 · VCU · Spring 2026"],
          ].map(([l, v]) => (
            <div key={l} className="proj-stat-item">
              <div className="proj-stat-label">{l}</div>
              <div className="proj-stat-value" style={{ fontSize: "0.95rem" }}>{v}</div>
            </div>
          ))}
        </div>

        <div className="proj-body">

          <p className="reveal" style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1.1rem,1.8vw,1.4rem)", color:"var(--ink)", lineHeight:1.7, borderLeft:"2px solid var(--red)", paddingLeft:"1.2rem", marginBottom:"2.5rem" }}>
            Getting the internship offer was the easy part. What came after — 60 days of emails, follow-ups, disconnected parties, and manual coordination — became the architecture of this database.
          </p>

          <h2 className="blog-h2 reveal">The problem it solves</h2>
          <p className="reveal">F-1 students pursuing CPT work authorization in the US face a process that requires four parties — the student, employer, faculty advisor, and DSO — to coordinate simultaneously with no shared system. Documents get delayed. Statuses get lost. Students risk losing offers because the process isn't structured, not because anything was wrong with the offer itself.</p>
          <p className="reveal">GlobalIntern centralizes the entire authorization lifecycle into a single relational database. Every stakeholder interacts through one platform. The student submits once. Faculty verifies once. The DSO approves once. The employer receives confirmation once. No duplication. No delays caused by one party waiting on another.</p>

          <h2 className="blog-h2 reveal">The architecture</h2>
          <p className="reveal">19 tables, built from scratch in Oracle Apex under schema PATHAKM3. The schema is in Third Normal Form — no transitive dependencies, no data duplication across tables. A student's university information isn't stored in the STUDENT table — STUDENT holds a Department_ID foreign key, DEPARTMENT holds a University_ID, and UNIVERSITY holds the actual data. Update the university name once; it reflects everywhere.</p>
          <p className="reveal">Key design decisions: ENROLLMENT is modeled as a weak entity — it cannot exist without a parent STUDENT record, and its primary key is a composite of Student ID, Semester, and Year. AUTHORIZATION is a supertype with two disjoint subtypes — CPT_AUTHORIZATION and OPT_AUTHORIZATION — because federal law prohibits holding both simultaneously. That mutual exclusivity is enforced at the schema level, not through application logic.</p>
          <p className="reveal">Three associative entities — STUDENT_SKILL, INTERNSHIP_SKILL, and DEMONSTRATES — handle the many-to-many relationships. DEMONSTRATES is a ternary relationship connecting student, internship, and skill simultaneously, which allows querying skill demand vs. student supply in a single operation.</p>

          <h2 className="blog-h2 reveal">The queries</h2>

          {/* Query cards */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(10,10,8,0.08)", border: "1px solid rgba(10,10,8,0.08)", margin: "2rem 0" }}>
            {[
              { num: "Q1", title: "CPT Authorization Status", body: "Joins 5 tables to return every student with an approved CPT authorization, the DSO who issued it, and the expiry date. 0.02 seconds. Previously: a follow-up email every few days." },
              { num: "Q2", title: "Internship Application Pipeline", body: "GROUP BY with CASE WHEN aggregates total, accepted, and shortlisted applications per internship. LEFT OUTER JOIN ensures zero-application internships still appear." },
              { num: "Q4", title: "Ecosystem Intelligence", body: "Chains 4 tables to show authorization counts per university broken down by CPT/OPT and approval rate. Turns compliance data into a competitive differentiator for university marketing." },
              { num: "Q5", title: "Employer Subsidiary Hierarchy", body: "Unary self-join — EMPLOYER aliases as both PARENT and SUBSIDIARY. Shows which employers are subsidiaries of registered companies and how many internships each posts." },
              { num: "Q3", title: "Skill Demand vs Student Supply", body: "Uses a WITH clause (CTE) to define InternshipDemand and StudentSupply as named sub-queries, then joins and classifies each skill: Critical Gap, High Demand, or Sufficient." },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ background: "var(--paper)", padding: "1.6rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.46rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.5rem" }}>{num}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1, marginBottom: "0.7rem" }}>{title}</div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "rgba(10,10,8,0.42)", lineHeight: 1.8 }}>{body}</p>
              </div>
            ))}
          </div>

          <h2 className="blog-h2 reveal">What the database actually proves</h2>
          <p className="reveal">The architecture wasn't designed top-down. It was designed by living the process — every phase of the bureaucratic authorization timeline maps to a set of entities, foreign keys, and relationships in the schema. Application, Interview, Job Offer, Eligibility Check, INFO 697 Enrollment, Faculty Approval, DSO Review, Authorization. Each is a table. Each connects to the next through a foreign key constraint.</p>
          <p className="reveal">That's the difference between a database built from theory and one built from a real process. The constraints aren't arbitrary — they reflect actual dependencies. An INTERVIEW can only exist if there's an APPLICATION. A JOB_OFFER can only exist if there's an INTERVIEW. A CPT_AUTHORIZATION can only exist if there's an AUTHORIZATION supertype record. The schema enforces the process.</p>
          <p className="reveal">Query 3 — the skill gap analysis — demonstrates the full potential: one query, four stakeholders served simultaneously. A professor identifies which skills to add to curriculum. A student sees exactly what to develop before graduation. A university builds workshops around the gaps. An employer knows which institutions to recruit from. That's not a reporting feature. That's the case for centralizing data that already exists but currently lives in disconnected spreadsheets and email threads.</p>

        </div>

        <div className="proj-outcome reveal">
          <div className="proj-outcome__label">// Outcome</div>
          <div className="proj-outcome__text">19-table Oracle Apex schema in 3NF. 5 production-ready SQL queries across JOIN chains, aggregate functions, outer joins, unary self-joins, and CTEs. Full ER diagram with disjoint subtype constraints. Built on a process I lived through personally as an F-1 student at VCU.</div>
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(10,10,8,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(10,10,8,.35)", textDecoration: "none" }}>← All Work</Link>
          <a href="/reports/globalintern-database-design.pdf" target="_blank" rel="noopener noreferrer" className="proj-report__btn" style={{ marginLeft: "auto" }}>Download Presentation ↓</a>
          <a href="mailto:pathakm3@vcu.edu" style={{ fontFamily: "var(--font-mono)", fontSize: ".52rem", letterSpacing: ".1em", color: "var(--red)", textDecoration: "none", borderBottom: "1px solid rgba(192,57,43,0.3)", paddingBottom: "2px" }}>Questions about this → pathakm3@vcu.edu</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

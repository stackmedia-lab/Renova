import Link from "next/link";
import { ArrowRight, Users, Clipboard, Hammer, CheckCircle2, Star, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Renova Home Improvement",
  description: "Learn about our renovation process, our team, and what makes Renova different from other home improvement companies.",
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    desc: "Start with a no-obligation call or on-site visit. We listen to your vision, assess your space, and discuss your goals and budget.",
  },
  {
    number: "02",
    icon: Clipboard,
    title: "Design & Proposal",
    desc: "Our design team creates detailed plans and a transparent, fixed-price proposal. No hidden costs — ever.",
  },
  {
    number: "03",
    icon: Users,
    title: "Team Assignment",
    desc: "You're paired with a dedicated project manager who oversees your renovation from day one to completion.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Expert Build",
    desc: "Our vetted, licensed tradespeople get to work. You receive regular updates and can track progress at any time.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Walkthrough",
    desc: "We complete a rigorous quality inspection, then walk through every detail with you to ensure 100% satisfaction.",
  },
];

const values = [
  {
    title: "Radical Transparency",
    desc: "Fixed-price contracts, honest timelines, and clear communication at every stage. You'll never be left in the dark.",
    color: "#f0e0c8",
  },
  {
    title: "Dedicated Project Management",
    desc: "Every project gets a single point of contact — your personal renovation manager who you can call anytime.",
    color: "#dce8f5",
  },
  {
    title: "Licensed Professionals Only",
    desc: "Every tradesperson on our network is licensed, insured, and background-checked before touching your home.",
    color: "#dcf0e8",
  },
  {
    title: "Quality Guarantee",
    desc: "We stand behind our work with a comprehensive workmanship warranty. If something isn't right, we make it right.",
    color: "#f5dcdc",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="what-hero-grid">
          <div>
            <p className="section-label">What We Do</p>
            <div className="divider" />
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, margin: "0 0 1.5rem" }}>
              We make renovating your home{" "}
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>effortless</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Renova is a full-service home renovation company built around one principle: your renovation should be a positive experience. We handle every detail — design, permits, trades, and project management — so you don't have to.
            </p>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem" }}>
              {[["2,400+", "Projects done"], ["15+", "Years experience"], ["98%", "Satisfaction rate"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--text)" }}>{val}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{lbl}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-accent">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", height: "480px" }}>
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" alt="Renovation team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: "var(--accent)", color: "white", borderRadius: "16px", padding: "1.25rem 1.5rem", boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.75rem" }}>15+</p>
              <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>Years in business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--dark)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <p className="section-label" style={{ color: "var(--accent)" }}>Our Process</p>
            <div className="divider" style={{ margin: "0.75rem auto" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white" }}>
              5 steps to your perfect home
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "2rem",
                    padding: "2.5rem 0",
                    borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    alignItems: "start",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "56px", height: "56px", background: "rgba(194,133,58,0.15)", border: "1px solid rgba(194,133,58,0.3)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} style={{ color: "var(--accent)" }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--accent)", fontSize: "0.8rem" }}>Step {step.number}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "white", marginBottom: "0.5rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "600px" }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-card)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="section-label">Our Values</p>
            <div className="divider" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", maxWidth: "480px" }}>
              Built on principles that put you first
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: v.color, borderRadius: "16px", padding: "2rem", transition: "transform 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.75rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.925rem" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="team-grid">
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Team member" style={{ borderRadius: "16px", height: "220px", width: "100%", objectFit: "cover" }} />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Team member" style={{ borderRadius: "16px", height: "220px", width: "100%", objectFit: "cover", marginTop: "2rem" }} />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Team member" style={{ borderRadius: "16px", height: "220px", width: "100%", objectFit: "cover", marginTop: "-1rem" }} />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" alt="Team member" style={{ borderRadius: "16px", height: "220px", width: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <p className="section-label">Our Team</p>
            <div className="divider" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--text)", margin: "0 0 1.25rem" }}>
              Experts who care about your home
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Our team includes architects, interior designers, project managers, and skilled tradespeople — all united by a shared commitment to exceptional work and outstanding service.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              We hire for character as much as skill. Our people are communicative, respectful of your home, and obsessive about quality.
            </p>
            <Link href="/contact" className="btn-accent">
              Meet Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .what-hero-grid, .team-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}

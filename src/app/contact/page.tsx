"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const serviceOptions = ["Kitchen Remodeling","Bathroom Renovation","Full Home Renovation","House Extension","Garage Conversion","Outdoor Renovation","Loft Conversion","Home Office","Other"];
const budgetOptions = ["Under $20,000","$20,000 – $50,000","$50,000 – $100,000","$100,000 – $250,000","$250,000+","Not sure yet"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--dark)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 30% 50%,rgba(194,133,58,0.12) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: "600px" }}>
            <span className="section-label" style={{ color: "var(--accent)" }}>Get In Touch</span>
            <div className="divider" />
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, color: "white", margin: "0 0 1.25rem" }}>Let's talk about your home</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8 }}>Whether you have a clear vision or just a rough idea — reach out and we'll help you shape it into a plan. Consultations are always free.</p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.75rem", color: "var(--text)", marginBottom: "1.5rem" }}>Contact information</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
              {[
                { Icon: Phone, label: "Phone", value: "1 800 973 1744", href: "tel:18009731744" },
                { Icon: Mail, label: "Email", value: "hello@renovahome.com", href: "mailto:hello@renovahome.com" },
                { Icon: MapPin, label: "Location", value: "Serving all 50 US States", href: null },
                { Icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–2pm", href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--accent-light)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                    {href
                      ? <a href={href} style={{ color: "var(--text)", fontWeight: 500, textDecoration: "none", fontSize: "0.95rem" }}>{value}</a>
                      : <p style={{ color: "var(--text)", fontWeight: 500, fontSize: "0.95rem" }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ background: "var(--dark)", borderRadius: "16px", padding: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "white", marginBottom: "1rem", fontSize: "0.9rem" }}>Why homeowners trust us</p>
              {["Fixed-price contracts — no surprises","Free consultation, no obligation","Licensed & insured professionals","98% client satisfaction rate","Dedicated project manager"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.7rem" }}>
                  <CheckCircle2 size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bento-card" style={{ padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ width: "64px", height: "64px", background: "#dcf0e8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle2 size={28} style={{ color: "#16a34a" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>Thank you, {form.name.split(" ")[0]}!</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto" }}>We've received your enquiry and one of our renovation consultants will be in touch within 1 business day.</p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.5rem" }}>Get your free consultation</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Fill in the form and we'll be in touch within 1 business day.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" className="form-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Project Location</label>
                    <input name="address" value={form.address} onChange={handleChange} placeholder="City, State" className="form-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-select">
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Approximate Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="form-select">
                      <option value="">Select a budget</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>Tell us about your project</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your renovation vision, any specific requirements, or questions you have..." rows={4} className="form-input" style={{ resize: "vertical" }} />
                </div>

                <button onClick={handleSubmit} className="btn-accent" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem" }}>
                  Send My Enquiry <ArrowRight size={16} />
                </button>
                <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.775rem", marginTop: "1rem" }}>By submitting, you agree to our Privacy Policy. We'll never share your data.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

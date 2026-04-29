"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Getting Started",
    faqs: [
      { q: "How do I start my renovation project with Renova?", a: "The easiest way to start is to book a free consultation on our website or give us a call. One of our renovation consultants will arrange a time to discuss your project — either over the phone or at your home. There's no obligation, and the consultation is completely free." },
      { q: "How much does a home renovation typically cost?", a: "Renovation costs vary widely depending on the scope, size, location, and finishes you choose. As a rough guide: bathroom renovations start around $15,000–$40,000; kitchen remodels $30,000–$100,000+; full home renovations $100,000–$500,000+. We provide a detailed, fixed-price proposal before any work begins so there are no surprises." },
      { q: "Do you offer design services?", a: "Yes! We have an in-house design team who work with you to create detailed plans, 3D renders, and material selections before any building work starts. Design services are included as part of our overall renovation packages." },
      { q: "What areas do you service?", a: "Renova currently operates across all 50 US states through our network of vetted, local renovation professionals. When you submit an enquiry, we'll connect you with the most qualified team in your area." },
    ],
  },
  {
    name: "Project Process",
    faqs: [
      { q: "What is your renovation process?", a: "Our process has five key stages: (1) Free consultation to understand your goals; (2) Design and detailed proposal with fixed pricing; (3) Assign your dedicated project manager and build team; (4) Build phase with regular progress updates; (5) Final quality walkthrough and handover. We handle everything — permits, all trades, inspections — under one roof." },
      { q: "How long will my renovation take?", a: "Duration depends heavily on scope. A bathroom renovation typically takes 3–6 weeks; a kitchen 4–8 weeks; a full home renovation 3–9 months. We'll give you a realistic timeline in your proposal and we're proud that 94% of our projects finish on time." },
      { q: "Will I have a dedicated project manager?", a: "Absolutely. Every Renova project gets a dedicated project manager who is your single point of contact throughout the entire renovation. They coordinate all trades, handle any issues, and provide you with regular updates. You'll have their direct phone number from day one." },
      { q: "Do I need to move out during renovations?", a: "It depends on the scope of work. For single-room renovations (like a kitchen or bathroom), most clients are comfortable staying at home. For larger whole-home renovations, we'll discuss this during consultation. We always work to minimize disruption to your daily life." },
    ],
  },
  {
    name: "Pricing & Contracts",
    faqs: [
      { q: "Do you offer fixed-price contracts?", a: "Yes — we only offer fixed-price contracts. This means the price in your signed proposal is the price you pay (subject to any variations you approve). We believe homeowners should never be surprised by their renovation bill." },
      { q: "What is your payment schedule?", a: "We typically structure payments in three stages: a deposit on contract signing, a progress payment at a defined milestone, and a final payment on completion and your sign-off. Exact terms are detailed in your proposal." },
      { q: "What if I want to change something mid-project?", a: "We understand that ideas evolve. Any changes from the original scope are handled through a formal variation process — we'll provide a written quote for the change, and work only begins once you approve it in writing." },
      { q: "Are there any hidden fees I should be aware of?", a: "Never. Our proposals are comprehensive and transparent. We include allowances for all known costs upfront. If unforeseen issues arise, we will notify you immediately and discuss options before any additional cost is incurred." },
    ],
  },
  {
    name: "Quality & Warranties",
    faqs: [
      { q: "Are your contractors licensed and insured?", a: "Yes, without exception. Every tradesperson and contractor in the Renova network is fully licensed for their trade, carries public liability insurance, and has been background-checked. We never use unlicensed labor." },
      { q: "What warranty do you offer on your work?", a: "We offer a comprehensive workmanship warranty on all renovation work. Structural work is covered for 10 years; fit-out work (kitchens, bathrooms, etc.) for 2 years; and all materials are covered under manufacturers' warranties." },
      { q: "What happens if I'm not happy with the work?", a: "Your satisfaction is our priority. Before final payment is released, we do a detailed walkthrough with you. Any items that don't meet your expectations are added to a snag list and addressed promptly. We won't consider a project complete until you're 100% happy." },
      { q: "Do you handle building permits?", a: "Yes. Permit management is included in our service. Our team handles the application, approval process, and all required inspections on your behalf. We ensure every renovation is fully code-compliant." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="faq-btn" onClick={() => setOpen(!open)}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", color: "var(--text)", lineHeight: 1.5 }}>{q}</span>
        <div className={open ? "faq-icon faq-icon-open" : "faq-icon"}>
          {open
            ? <Minus size={14} style={{ color: "white" }} />
            : <Plus size={14} style={{ color: "var(--accent)" }} />
          }
        </div>
      </button>
      {open && (
        <p style={{ color: "var(--text-muted)", lineHeight: 1.75, paddingBottom: "1.5rem", fontSize: "0.95rem", maxWidth: "680px" }}>{a}</p>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg)", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">FAQs</span>
          <div className="divider-center" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1.25rem" }}>Frequently asked questions</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>Everything you need to know about renovating with Renova. Can't find your answer? Just ask us.</p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem", background: "var(--bg-card)", padding: "0.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
            {categories.map((cat, i) => (
              <button key={cat.name} onClick={() => setActiveCategory(i)} className={i === activeCategory ? "cat-tab cat-tab-active" : "cat-tab"}>
                {cat.name}
              </button>
            ))}
          </div>
          <div>
            {categories[activeCategory].faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--dark)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%,rgba(194,133,58,0.1) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Still have questions?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }}>Our renovation consultants are happy to chat — call us, email us, or book a free consultation and we'll answer everything.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-accent">Contact Us <ArrowRight size={16} /></Link>
            <a href="tel:18009731744" className="btn-outline-white">Call 1 800 973 1744</a>
          </div>
        </div>
      </section>
    </>
  );
}

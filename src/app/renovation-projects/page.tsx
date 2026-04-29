import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renovation Projects | Renova Portfolio",
  description: "Browse our portfolio of completed kitchen, bathroom, and home renovation projects across the US.",
};

const projects = [
  { title: "Modern Farmhouse Kitchen", location: "Austin, TX", type: "Kitchen Remodel", duration: "6 weeks", budget: "$65,000", desc: "Complete kitchen overhaul featuring shaker cabinets in a deep navy finish, quartz waterfall island, and integrated high-end appliances.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", tags: ["Kitchen","Modern","Farmhouse"], large: true },
  { title: "Spa-Style Master Bath", location: "Denver, CO", type: "Bathroom Renovation", duration: "4 weeks", budget: "$32,000", desc: "A luxurious master bathroom with a freestanding soaking tub, double vanity, and walk-in rainfall shower with book-matched marble tiles.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", tags: ["Bathroom","Luxury","Marble"], large: false },
  { title: "Open-Plan Living Renovation", location: "Portland, OR", type: "Full Home Renovation", duration: "14 weeks", budget: "$180,000", desc: "Full ground-floor renovation removing load-bearing walls to create a seamless open-plan kitchen, dining, and living space with vaulted ceilings.", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80", tags: ["Full Home","Open Plan"], large: false },
  { title: "Rear House Extension", location: "Seattle, WA", type: "House Extension", duration: "18 weeks", budget: "$240,000", desc: "A stunning 800 sq ft rear extension adding a contemporary kitchen/dining room with bi-fold doors opening to the garden.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", tags: ["Extension","Contemporary"], large: true },
  { title: "Garage-to-Home-Office", location: "San Diego, CA", type: "Garage Conversion", duration: "8 weeks", budget: "$48,000", desc: "Converted double garage into a stunning home office and studio, fully insulated, with custom built-ins, skylights, and a kitchenette.", img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80", tags: ["Garage","Home Office"], large: false },
  { title: "Backyard Outdoor Kitchen", location: "Phoenix, AZ", type: "Outdoor Renovation", duration: "6 weeks", budget: "$55,000", desc: "Resort-style outdoor living area with a built-in BBQ island, pergola, landscaped gardens, and ambient lighting.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", tags: ["Outdoor","Kitchen"], large: false },
  { title: "Victorian Whole-Home Restoration", location: "Chicago, IL", type: "Full Home Renovation", duration: "26 weeks", budget: "$420,000", desc: "Sympathetic full restoration of a 1905 Victorian home — preserving original character while fully modernizing plumbing, electrical, and every interior room.", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", tags: ["Victorian","Restoration","Full Home"], large: true },
  { title: "Luxury Master Suite Addition", location: "Miami, FL", type: "House Addition", duration: "12 weeks", budget: "$120,000", desc: "Added a 600 sq ft master suite with walk-in closet, en-suite bathroom, and private balcony overlooking the pool.", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", tags: ["Addition","Luxury","Master Suite"], large: false },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg)", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">Our Work</span>
          <div className="divider-center" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1.25rem" }}>Renovation projects we're proud of</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>Every project in our portfolio tells a story — of homeowners who trusted us with their most valuable asset, and results that exceeded expectations.</p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "3rem 1.5rem 6rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card" style={{ gridColumn: p.large ? "span 2" : "span 1" }}>
                <div style={{ height: p.large ? "320px" : "220px", overflow: "hidden", position: "relative" }}>
                  <img src={p.img} alt={p.title} className="img-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{ background: "rgba(0,0,0,0.6)", color: "white", fontSize: "0.7rem", padding: "0.25rem 0.6rem", borderRadius: "100px", fontFamily: "var(--font-body)", fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, marginBottom: "0.25rem" }}>{p.type} · {p.location}</p>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--text)" }}>{p.title}</h3>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.duration}</p>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>{p.budget}</p>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--dark)", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Ready to write your success story?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: 1.75 }}>Let's discuss your vision and create a renovation project you'll love for years to come.</p>
          <Link href="/contact" className="btn-accent">Start Your Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

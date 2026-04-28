import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Renova Home Improvement",
  description: "Explore our full range of home renovation services — kitchen, bathroom, full home, extensions, and more.",
};

const services = [
  {
    icon: "🍳",
    title: "Kitchen Remodeling",
    desc: "Your kitchen is the heart of your home. Our expert kitchen remodelers bring creativity, functionality, and premium craftsmanship to every project — from custom cabinetry to designer countertops and high-end appliances.",
    features: ["Custom cabinet design", "Countertop installation", "Appliance upgrades", "Lighting & electrical", "Flooring replacement", "Island additions"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    icon: "🛁",
    title: "Bathroom Renovation",
    desc: "Turn your bathroom into a personal sanctuary. We handle everything from walk-in showers and soaking tubs to custom vanities and radiant floor heating — all with precision tiling and stunning finishes.",
    features: ["Walk-in shower design", "Soaking tub installation", "Custom vanity units", "Tile & stonework", "Heated flooring", "Ventilation upgrades"],
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    icon: "🏠",
    title: "Full Home Renovation",
    desc: "Ready for a complete transformation? Our whole-home renovation service covers every room, every detail. We coordinate all trades under one roof so your project runs smoothly, on time, and on budget.",
    features: ["Full design consultation", "Structural changes", "Plumbing & electrical", "Interior design", "Project management", "Permits & compliance"],
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    icon: "🏗️",
    title: "House Extensions",
    desc: "Need more space? Our house addition team designs and builds seamless extensions that integrate perfectly with your existing home. From single-room additions to full second-story builds.",
    features: ["Room additions", "Second-story builds", "Sunrooms & conservatories", "ADU construction", "Structural engineering", "Foundation work"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    icon: "🏡",
    title: "Outdoor Renovation",
    desc: "Extend your living space outdoors. We design and build beautiful decks, patios, outdoor kitchens, and landscaping projects that make your exterior just as impressive as your interior.",
    features: ["Deck & patio design", "Outdoor kitchens", "Pool surrounds", "Landscaping", "Fencing & gates", "Driveway resurfacing"],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    icon: "🏢",
    title: "Garage Conversion",
    desc: "Unlock the hidden potential of your garage. Convert it into a home office, studio, gym, guest suite, or ADU. We handle planning, permits, insulation, and full interior fit-out.",
    features: ["Home office fit-out", "Guest suite conversion", "Gym & studio setup", "Full insulation", "Electrical & plumbing", "Permitting assistance"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: "🪜",
    title: "Loft & Attic Conversion",
    desc: "Make the most of your home's unused upper space. Our loft conversion specialists create stunning bedrooms, home offices, or playrooms with natural light and optimized layout.",
    features: ["Dormer windows", "Skylight installation", "Staircase design", "Insulation & damp-proofing", "Electrical & lighting", "Storage solutions"],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    icon: "💻",
    title: "Home Office Renovation",
    desc: "Create a dedicated, productive workspace at home. From ergonomic design to soundproofing and built-in storage, we craft home offices that boost productivity and look great on video calls.",
    features: ["Ergonomic layout design", "Built-in storage", "Soundproofing", "Cable management", "Dedicated lighting", "Broadband infrastructure"],
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "linear-gradient(180deg, var(--dark) 0%, #2d2521 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(194,133,58,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <p className="section-label" style={{ color: "var(--accent)" }}>Our Services</p>
          <div className="divider" style={{ margin: "0.75rem auto" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", margin: "0 0 1.25rem" }}>
            Every renovation service your home needs
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
            From a single-room refresh to a complete home overhaul — we bring the same level of expertise, transparency, and quality to every project.
          </p>
          <Link href="/contact" className="btn-accent" style={{ fontSize: "1rem" }}>
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
                direction: i % 2 === 1 ? "rtl" : "ltr",
              }}
              className="service-row"
            >
              <div style={{ direction: "ltr" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                  {s.title}
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.75rem", fontSize: "1rem" }}>
                  {s.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text)" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-accent">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ direction: "ltr", borderRadius: "20px", overflow: "hidden", height: "380px" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* Bottom CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--accent-light)", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
            Not sure which service you need?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.75 }}>
            Our renovation consultants will assess your home and recommend the best approach — for free.
          </p>
          <Link href="/contact" className="btn-accent">
            Book Free Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

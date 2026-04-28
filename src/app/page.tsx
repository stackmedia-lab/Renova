import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, CheckCircle2, Phone, Shield, Clock, Award, ChevronRight
} from "lucide-react";

const stats = [
  { value: "2,400+", label: "Renovations Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years of Experience" },
  { value: "$2M+", label: "Projects Delivered" },
];

const services = [
  { icon: "🍳", title: "Kitchen Remodeling", desc: "Complete kitchen transformations — from cabinets to countertops." },
  { icon: "🛁", title: "Bathroom Renovation", desc: "Luxury bathroom makeovers with premium fixtures and tiling." },
  { icon: "🏠", title: "Full Home Renovation", desc: "End-to-end home remodeling designed around your lifestyle." },
  { icon: "🏗️", title: "House Extensions", desc: "Add space and value with seamless home additions." },
  { icon: "🏡", title: "Outdoor Renovation", desc: "Stunning decks, patios, and landscaping projects." },
  { icon: "🏢", title: "Garage Conversion", desc: "Transform unused garages into functional living spaces." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Austin, TX",
    text: "Renova turned our outdated kitchen into a showstopper. From design to final walk-through, everything was seamless.",
    rating: 5,
  },
  {
    name: "James & Linda Park",
    location: "Denver, CO",
    text: "Our bathroom renovation exceeded every expectation. Professional, on-time, and within budget.",
    rating: 5,
  },
  {
    name: "Tom Harrington",
    location: "Portland, OR",
    text: "The whole-home renovation was a dream. They respected our space, kept us informed, and delivered perfection.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #3d2e1e 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, rgba(194,133,58,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "500px",
            height: "500px",
            background: "rgba(194,133,58,0.06)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(194,133,58,0.15)",
                border: "1px solid rgba(194,133,58,0.3)",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                marginBottom: "2rem",
              }}
            >
              <span style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                Trusted by 2,400+ homeowners
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Your Home,{" "}
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
                Beautifully
              </span>{" "}
              Transformed
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.1rem",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginBottom: "2.5rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Expert kitchen, bathroom, and whole-home renovations — delivered stress-free with full transparency, dedicated project management, and guaranteed quality.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-accent" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/renovation-projects" className="btn-outline" style={{ fontSize: "1rem", padding: "0.875rem 2rem", color: "white", borderColor: "rgba(255,255,255,0.2)" }}>
                View Projects
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
              <div style={{ display: "flex" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: `hsl(${i * 40 + 20}, 40%, 55%)`,
                      border: "2px solid #1c1917",
                      marginLeft: i > 1 ? "-8px" : "0",
                    }}
                  />
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontFamily: "var(--font-body)" }}>
                  4.9 / 5 from 800+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right – image collage */}
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="hidden md:grid">
            <div style={{ borderRadius: "16px", overflow: "hidden", height: "280px", gridRow: "span 2" }}>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Kitchen renovation"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", height: "132px" }}>
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80"
                alt="Bathroom"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", height: "132px" }}>
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80"
                alt="Living room"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Floating card */}
            <div
              style={{
                position: "absolute",
                bottom: "-1rem",
                left: "-2rem",
                background: "white",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <CheckCircle2 size={20} style={{ color: "#22c55e", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", fontFamily: "var(--font-body)" }}>Project Complete!</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-body)" }}>Kitchen Remodel · Austin TX</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--accent)", padding: "2.5rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.value}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", marginTop: "0.35rem", fontFamily: "var(--font-body)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">What We Offer</p>
            <div className="divider" style={{ margin: "0.75rem auto" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
              Expert Renovation Services
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              From single-room makeovers to complete home transformations — we handle every detail with precision and care.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} className="bento-card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text)" }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.925rem", marginBottom: "1.25rem" }}>{s.desc}</p>
                <Link
                  href="/services"
                  style={{ color: "var(--accent)", fontWeight: 500, fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-accent">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us – Stripe-style bento */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-card)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <p className="section-label">Why Renova</p>
            <div className="divider" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", maxWidth: "500px" }}>
              The smarter way to renovate your home
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="why-grid">
            {/* Big card */}
            <div
              className="bento-card"
              style={{ gridColumn: "span 2", padding: "2.5rem", background: "var(--dark)", color: "white", display: "flex", gap: "2rem", alignItems: "center" }}
            >
              <div>
                <div style={{ width: "48px", height: "48px", background: "rgba(194,133,58,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Shield size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                  Full transparency, start to finish
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "400px" }}>
                  Detailed proposals, fixed-price contracts, and a dedicated project manager — so you always know exactly what's happening, and what it costs.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80"
                alt="Professional contractor"
                style={{ width: "180px", height: "200px", objectFit: "cover", borderRadius: "12px", flexShrink: 0 }}
                className="hidden lg:block"
              />
            </div>

            {/* Small card */}
            <div className="bento-card" style={{ padding: "2rem", background: "var(--accent-light)" }}>
              <Clock size={24} style={{ color: "var(--accent)", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text)" }}>
                On-time, every time
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                We set realistic timelines and stick to them. 94% of projects are delivered on schedule.
              </p>
            </div>

            {/* Another small */}
            <div className="bento-card" style={{ padding: "2rem" }}>
              <Award size={24} style={{ color: "var(--accent)", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text)" }}>
                Licensed & insured
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                Every contractor is vetted, licensed, and fully insured for your complete peace of mind.
              </p>
            </div>

            <div className="bento-card" style={{ gridColumn: "span 2", padding: "2rem", display: "flex", alignItems: "center", gap: "2rem" }}>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "0.5rem" }}>
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} style={{ fill: "var(--accent)", color: "var(--accent)" }} />)}
                </div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text)", fontStyle: "italic" }}>
                  "Best decision we ever made for our home."
                </p>
                <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", fontSize: "0.875rem" }}>— Rebecca T., Chicago IL</p>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .why-grid { grid-template-columns: 1fr !important; }
              .why-grid > * { grid-column: span 1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Testimonials snippet */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label">Client Stories</p>
            <div className="divider" style={{ margin: "0.75rem auto" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)" }}>
              What our clients say
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="bento-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
                  ))}
                </div>
                <p style={{ color: "var(--text)", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic", fontFamily: "var(--font-display)" }}>
                  "{t.text}"
                </p>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>{t.name}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/testimonials" className="btn-outline">
              Read All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "linear-gradient(135deg, #1c1917 0%, #3d2e1e 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(194,133,58,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
          <p className="section-label" style={{ color: "var(--accent)" }}>Ready to start?</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, color: "white", margin: "1rem 0 1.5rem" }}>
            Your dream home is one conversation away
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            Book a free, no-obligation consultation with one of our renovation experts today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-accent" style={{ fontSize: "1rem", padding: "0.875rem 2.25rem" }}>
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:18009731744" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.2)", fontSize: "1rem", padding: "0.875rem 2.25rem" }}>
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const services = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Full Home Renovation",
  "House Extensions",
  "Garage Conversion",
  "Outdoor Renovation",
  "Loft Conversion",
  "Home Office",
];

const company = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Projects", href: "/renovation-projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "white" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem 2rem",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--accent)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>R</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem" }}>Renova</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Premium home renovation services delivered with craftsmanship, transparency, and care. Your dream home starts here.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "background 0.2s",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem", color: "white" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem", color: "white" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem", color: "white" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { icon: Phone, text: "1 800 973 1744" },
                { icon: Mail, text: "hello@renovahome.com" },
                { icon: MapPin, text: "Serving all 50 US States" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
                  <Icon size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.8rem",
          }}
        >
          <span>© {new Date().getFullYear()} Renova. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="#" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="#" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const services = [
  "Kitchen Remodeling","Bathroom Renovation","Full Home Renovation",
  "House Extensions","Garage Conversion","Outdoor Renovation","Loft Conversion","Home Office",
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
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "36px", height: "36px", background: "var(--accent)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>R</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem" }}>Renova</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Premium home renovation services delivered with craftsmanship, transparency, and care. Your dream home starts here.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="social-btn"><Icon size={16} /></a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem" }}>Services</h4>
            {services.map((s) => (
              <Link key={s} href="/services" className="footer-link">{s}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem" }}>Company</h4>
            {company.map((c) => (
              <Link key={c.href} href={c.href} className="footer-link">{c.label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "1.25rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { Icon: Phone, text: "1 800 973 1744" },
                { Icon: Mail, text: "hello@renovahome.com" },
                { Icon: MapPin, text: "Serving all 50 US States" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
                  <Icon size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>© {new Date().getFullYear()} Renova. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" className="footer-link-bottom">Privacy Policy</a>
            <a href="#" className="footer-link-bottom">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

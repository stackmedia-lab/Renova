import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Renova Home Improvement",
  description: "Read genuine reviews from homeowners who trusted Renova with their renovation projects.",
};

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "800+", label: "Verified reviews" },
  { value: "98%", label: "Recommend us" },
  { value: "94%", label: "On-time delivery" },
];

const testimonials = [
  {
    name: "Sarah & Mike Mitchell",
    location: "Austin, TX",
    project: "Kitchen Remodel",
    date: "March 2024",
    rating: 5,
    text: "Working with Renova was the best decision we made for our home. From the very first consultation, we felt heard and understood. The design team captured our vision perfectly, and the build team was professional, tidy, and communicative throughout. Our kitchen is absolutely stunning — better than we ever imagined.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "James Park",
    location: "Denver, CO",
    project: "Master Bathroom",
    date: "January 2024",
    rating: 5,
    text: "Our master bathroom renovation exceeded every expectation. We had a tight budget and Renova helped us prioritize where to splurge and where to save. The end result looks like it belongs in a five-star hotel. The project manager kept us informed daily — no surprises, no stress.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Tom & Rebecca Harrington",
    location: "Portland, OR",
    project: "Full Home Renovation",
    date: "November 2023",
    rating: 5,
    text: "We had our whole ground floor renovated and I was genuinely nervous about the disruption. Renova made it as painless as possible. They respected our space, kept the work area contained, and delivered on every promise. The open-plan transformation is jaw-dropping — our friends cannot believe it's the same house.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Linda Chen",
    location: "Seattle, WA",
    project: "House Extension",
    date: "September 2023",
    rating: 5,
    text: "Building a rear extension felt overwhelming until we found Renova. They handled everything — planning permission, structural engineering, all the trades. The new kitchen-diner with bi-fold doors to the garden has completely changed how we use our home. Worth every penny.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "David Rodriguez",
    location: "Miami, FL",
    project: "Outdoor Renovation",
    date: "August 2023",
    rating: 5,
    text: "The outdoor kitchen and patio they built is simply incredible. We use it every weekend. The design was thoughtful, the build quality is superb, and the whole project came in on time and on budget. I've already referred three neighbors.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Amy Thompson",
    location: "Chicago, IL",
    project: "Garage Conversion",
    date: "June 2023",
    rating: 5,
    text: "I wanted to convert my garage into a home office and studio. Renova created a space that I genuinely love working in every day. The built-in shelving, lighting, and soundproofing are all exceptional. The project manager was a constant source of calm and clarity throughout.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Kevin & Diane Walsh",
    location: "Phoenix, AZ",
    project: "Full Home Renovation",
    date: "April 2023",
    rating: 5,
    text: "A complete home renovation is no small undertaking, but Renova made it feel manageable. The team was organized, professional, and genuinely invested in the outcome. Every room was transformed beautifully. We feel like we're living in a completely new house.",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
  },
  {
    name: "Natalie Brooks",
    location: "San Diego, CA",
    project: "Kitchen Remodel",
    date: "February 2023",
    rating: 5,
    text: "I had gotten quotes from four other contractors before Renova. Their proposal was the most detailed, their price was fair, and their communication was the best. Now, months later, my kitchen still makes me smile every single morning. Outstanding work.",
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
  },
  {
    name: "Marcus Johnson",
    location: "Nashville, TN",
    project: "Bathroom Renovation",
    date: "December 2022",
    rating: 5,
    text: "The master bathroom is a dream. They turned a cramped, dated room into a spacious spa. The tilework is immaculate, the fixtures are perfect, and they finished two days ahead of schedule. I genuinely cannot fault them.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "var(--dark)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(194,133,58,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <p className="section-label" style={{ color: "var(--accent)" }}>Real Reviews</p>
          <div className="divider" style={{ margin: "0.75rem auto" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>
            What our clients say
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            We let our work — and our clients — speak for themselves. Every review below is genuine, unedited, and verified.
          </p>

          {/* Rating overview */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="stats-grid">
            {stats.map((s) => (
              <div key={s.value} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.75rem", color: "var(--accent)" }}>{s.value}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bento-card"
                style={{ padding: "2rem", ...(i === 0 ? { gridColumn: "span 2", display: "flex", gap: "2rem", alignItems: "flex-start" } : {}) }}
              >
                {i === 0 && (
                  <Quote size={40} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.25rem" }} />
                )}
                <div>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={15} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
                    ))}
                  </div>
                  <p style={{ color: "var(--text)", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic", fontFamily: "var(--font-display)", fontSize: i === 0 ? "1.15rem" : "1rem" }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <img src={t.img} alt={t.name} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-body)", color: "var(--text)" }}>{t.name}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.775rem" }}>{t.project} · {t.location}</p>
                    </div>
                    <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-card[style*="span 2"] { grid-column: span 1 !important; flex-direction: column !important; }
        }
      `}</style>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--accent-light)", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
            Join 2,400+ happy homeowners
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.75 }}>
            Book your free consultation today and experience the Renova difference for yourself.
          </p>
          <Link href="/contact" className="btn-accent">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

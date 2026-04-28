"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/renovation-projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(250,249,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
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
            <span
              style={{
                color: "white",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              R
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.4rem",
              color: "var(--text)",
            }}
          >
            Renova
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 0.85rem",
                borderRadius: "6px",
                textDecoration: "none",
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.9rem",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--accent)";
                (e.target as HTMLElement).style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "0.75rem" }}>
          <a
            href="tel:18009731744"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontFamily: "var(--font-body)",
            }}
          >
            <Phone size={14} />
            1 800 973 1744
          </a>
          <Link href="/contact" className="btn-accent">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1rem" }}>
            <Link href="/contact" className="btn-accent" onClick={() => setOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

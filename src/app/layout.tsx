import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Renova | Premium Home Improvement & Renovation",
  description: "Transform your home with Renova — expert kitchen, bathroom, full-home renovations and more. Stress-free process, guaranteed quality.",
  keywords: "home renovation, kitchen remodeling, bathroom remodeling, home improvement, house extension",
  openGraph: {
    title: "Renova | Premium Home Improvement & Renovation",
    description: "Transform your home with Renova — expert renovations delivered stress-free.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

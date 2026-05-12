"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/security", label: "Security" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo — minimalist wordmark with accent dot */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
            <span className="text-[15px] font-bold tracking-[0.25em] text-ink font-heading">
              ORKKA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-[#0891B2]"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium group"
            >
              Get Started
              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-ink/60 hover:text-ink transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[14px] font-medium py-3 border-b border-gray-100 last:border-0 transition-colors ${
                pathname === link.href
                  ? "text-[#0891B2]"
                  : "text-ink/80 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary px-5 py-3 text-[14px] font-medium text-center mt-4"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

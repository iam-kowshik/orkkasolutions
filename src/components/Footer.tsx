import Link from "next/link";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "AI Security",         href: "/security" },
      { label: "Cloud Infrastructure",href: "/services#infrastructure" },
      { label: "Technology Staffing", href: "/services#staffing" },
      { label: "All Services",        href: "/services" },
    ],
  },
  {
    heading: "Security",
    links: [
      { label: "Cloud Security",  href: "/security#cloud" },
      { label: "SOC Operations",  href: "/security#soc" },
      { label: "Compliance",      href: "/security#compliance" },
      { label: "AI Governance",   href: "/security#ai-governance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      <div className="bg-orb -bottom-32 -left-32 w-[400px] h-[400px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
              <span className="text-[14px] font-bold tracking-[0.25em] text-white font-heading">
                ORKKA
              </span>
            </Link>
            <p className="text-[13px] text-white/45 leading-relaxed max-w-xs mb-6">
              AI security and platform engineering for regulated industries. Specialist expertise, without the Big 4 price tag.
            </p>
            <a
              href="mailto:hello@orkkasolutions.com"
              className="inline-flex items-center gap-2 text-[13px] text-white/70 hover:text-[#0891B2] transition-colors border-b border-white/20 hover:border-[#0891B2] pb-0.5"
            >
              hello@orkkasolutions.com
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] font-semibold text-white/40 tracking-[0.25em] uppercase mb-5">
                <span className="inline-block w-1 h-1 bg-[#0891B2] mr-2 align-middle" />
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-white/40 tracking-wide">
              &copy; {new Date().getFullYear()} Orkka Solutions
            </p>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
            <p className="text-[11px] text-white/40 tracking-wide hidden sm:block">
              All rights reserved
            </p>
          </div>
          <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase">
            AI Security <span className="text-[#0891B2] mx-2">·</span> Infrastructure <span className="text-[#0891B2] mx-2">·</span> Talent
          </p>
        </div>
      </div>
    </footer>
  );
}

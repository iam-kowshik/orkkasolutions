import Link from "next/link";
import { ArrowRight, Shield, Cloud, Users, Check, Minus } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  HERO VISUAL — minimal, premium, santifer-inspired                  */
/* ------------------------------------------------------------------ */

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient duotone orb */}
      <div
        className="absolute -right-20 -top-10 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl animate-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(5, 150, 105, 0.5) 0%, rgba(8, 145, 178, 0.3) 50%, transparent 100%)",
        }}
      />

      {/* Clean geometric SVG composition */}
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[460px] relative z-10"
      >
        <defs>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="210" cy="210" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="210" cy="210" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Animated dotted orbit */}
        <circle
          cx="210"
          cy="210"
          r="180"
          stroke="url(#accentGrad)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.5"
          className="animate-orbit"
          style={{ transformOrigin: "210px 210px" }}
        />

        {/* Center stack — layered security icon */}
        <g>
          {/* Layer 1 (bottom) */}
          <rect x="140" y="250" width="140" height="16" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="140" y="230" width="140" height="16" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="140" y="210" width="140" height="16" rx="2" fill="rgba(8,145,178,0.25)" />
          <rect x="140" y="190" width="140" height="16" rx="2" fill="rgba(8,145,178,0.35)" />
          <rect x="140" y="170" width="140" height="16" rx="2" fill="rgba(5,150,105,0.4)" />

          {/* Top glowing shield */}
          <path
            d="M210 120 L250 135 L250 165 Q250 185 210 195 Q170 185 170 165 L170 135 Z"
            fill="none"
            stroke="url(#accentGrad)"
            strokeWidth="1.5"
            className="animate-pulse-glow"
          />
        </g>

        {/* Corner indicators */}
        <circle cx="60" cy="60" r="3" fill="#0891B2" className="animate-pulse-soft" />
        <circle cx="360" cy="60" r="3" fill="#059669" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        <circle cx="60" cy="360" r="3" fill="#059669" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <circle cx="360" cy="360" r="3" fill="#0891B2" className="animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

        {/* Thin connection lines */}
        <line x1="60" y1="60" x2="210" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 4" className="animate-dash-flow" />
        <line x1="360" y1="60" x2="210" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 4" className="animate-dash-flow" style={{ animationDelay: "0.5s" }} />
        <line x1="60" y1="360" x2="210" y2="290" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 4" className="animate-dash-flow" style={{ animationDelay: "1s" }} />
        <line x1="360" y1="360" x2="210" y2="290" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 4" className="animate-dash-flow" style={{ animationDelay: "1.5s" }} />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    icon: Shield,
    number: "01",
    title: "AI Security & Governance",
    description:
      "End-to-end security for AI-era enterprises. From cloud posture to AI governance frameworks — NIST AI RMF, EU AI Act, ISO 42001.",
    items: ["Cloud Security & CSPM", "SOC Operations & SIEM/SOAR", "IAM & Zero Trust", "AI Governance & Model Security", "Compliance Automation"],
  },
  {
    icon: Cloud,
    number: "02",
    title: "Cloud Infrastructure & Platform",
    description:
      "Production-grade infrastructure built for scale. Kubernetes-native CI/CD, GitOps workflows, multi-cloud architectures.",
    items: ["Multi-Cloud Kubernetes", "GitOps & CI/CD Automation", "Platform Engineering", "GPU Infrastructure for AI/ML", "Observability & SRE"],
  },
  {
    icon: Users,
    number: "03",
    title: "Technology Staffing",
    description:
      "Pre-vetted senior engineers. Contract, contract-to-hire, direct hire, or statement of work — matched to your exact needs.",
    items: ["Contract (3–12 months)", "Contract-to-Hire", "Direct Hire", "Statement of Work", "Fractional Leadership"],
  },
];

const differentiators = [
  {
    title: "Specialist, not generalist.",
    description:
      "We focus exclusively on AI security, cloud infrastructure, and platform engineering for regulated industries. No scope creep.",
  },
  {
    title: "Senior delivery, always.",
    description:
      "Every engagement is delivered by senior architects — not junior consultants learning on your budget.",
  },
  {
    title: "AI governance is a first-class citizen.",
    description:
      "While others treat AI as an afterthought, we build governance in from day one — NIST AI RMF, EU AI Act, ISO 42001.",
  },
  {
    title: "Mid-market pricing, enterprise quality.",
    description:
      "30–40% of a full-time senior hire. No Big 4 overhead. Same specialist expertise.",
  },
];

const engagementModels = [
  { title: "Contract",         desc: "3–12 month engagements. Fast start, project-based." },
  { title: "Contract-to-Hire", desc: "Evaluate on the job. Convert when ready." },
  { title: "Direct Hire",      desc: "Full-time placement. End-to-end delivery." },
  { title: "Statement of Work",desc: "Outcome-based. We own the deliverables." },
];

const stats = [
  { value: "7",  label: "Security layers covered" },
  { value: "50+",label: "AWS services managed" },
  { value: "4",  label: "Compliance frameworks" },
  { value: "40%",label: "Cost vs full-time hire" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO — dark, premium, minimal
          ============================================================ */}
      <section className="bg-dark relative overflow-hidden">
        {/* Ambient orbs */}
        <div className="bg-orb -top-32 -left-32 w-[500px] h-[500px]" />
        <div className="bg-orb -bottom-40 -right-40 w-[600px] h-[600px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 animate-fade-in-up">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-8">
                <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
                <span className="text-[11px] font-semibold text-white/60 tracking-[0.25em] uppercase">
                  AI Security Practice
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight text-white mb-6">
                Secure AI deployment
                <br />
                <span className="text-gradient-accent">for regulated industries.</span>
              </h1>

              {/* Subhead */}
              <p className="text-[17px] text-white/50 leading-relaxed max-w-xl font-light mb-10">
                Orkka is the specialist AI security and platform engineering practice for healthcare, finance, and government organizations. We protect, build, and staff the systems that matter — without the Big 4 price tag.
              </p>

              {/* Industry tags */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 text-[13px] text-white/40 tracking-wider">
                <span>Healthcare</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>Finance</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>Government</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>Enterprise SaaS</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-white-dark inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-medium group"
                >
                  Book a discovery call
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="btn-ghost-dark inline-flex items-center justify-center px-7 py-4 text-[14px] font-medium"
                >
                  Explore services
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-5 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
      </section>

      {/* ============================================================
          STAT STRIP — minimal, typographic
          ============================================================ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="w-1 h-1 bg-[#0891B2] rounded-full" />
                  <div className="text-[48px] md:text-[56px] font-bold tracking-tight text-ink leading-none">
                    {s.value}
                  </div>
                </div>
                <div className="text-[12px] text-muted leading-relaxed pl-4">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THREE PILLARS — card layout with accent numbers
          ============================================================ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
              <span className="text-[11px] font-semibold text-ink tracking-[0.25em] uppercase">
                Services
              </span>
            </div>
            <h2 className="font-heading text-[36px] sm:text-[44px] font-bold tracking-tight text-ink leading-tight mb-4">
              One partner.
              <br />
              <span className="text-muted">Three disciplines.</span>
            </h2>
            <p className="text-[16px] text-muted font-light leading-relaxed">
              From protecting AI systems to building production infrastructure and staffing engineering teams — we cover the full lifecycle.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="card-minimal p-8 lg:p-10 flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F0F9FF] text-[#0891B2] group-hover:bg-[#0891B2] group-hover:text-white transition-colors">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold text-muted tracking-[0.2em]">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-[22px] font-bold text-ink mb-4 tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed mb-6 flex-grow">
                    {p.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[13px] text-ink/80">
                        <span className="inline-block w-1 h-1 bg-[#0891B2] rounded-full mt-2 flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={
                      i === 0 ? "/security" : i === 1 ? "/services" : "/services"
                    }
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0891B2] hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY ORKKA — differentiator list
          ============================================================ */}
      <section className="bg-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left sticky heading */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
                  <span className="text-[11px] font-semibold text-ink tracking-[0.25em] uppercase">
                    Why Orkka
                  </span>
                </div>
                <h2 className="font-heading text-[36px] sm:text-[44px] font-bold tracking-tight text-ink leading-tight mb-5">
                  Built for
                  <br />
                  <span className="text-muted">your constraints.</span>
                </h2>
                <p className="text-[15px] text-muted font-light leading-relaxed mb-6">
                  Most consulting firms aren't built for mid-market speed. Most SaaS vendors aren't built for strategy. We're built for both.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-ink border-b border-ink/20 hover:border-ink pb-0.5 transition-colors"
                >
                  Meet the team <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right numbered list */}
            <div className="lg:col-span-7">
              <ul className="space-y-0">
                {differentiators.map((d, i) => (
                  <li
                    key={i}
                    className="py-8 border-b border-gray-200 first:pt-0 last:border-none"
                  >
                    <div className="flex gap-6">
                      <div className="text-[13px] font-semibold text-[#0891B2] tracking-[0.2em] pt-1 w-10 flex-shrink-0">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-[20px] font-bold text-ink mb-2 tracking-tight">
                          {d.title}
                        </h3>
                        <p className="text-[14px] text-muted leading-relaxed">
                          {d.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ENGAGEMENT MODELS
          ============================================================ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
              <span className="text-[11px] font-semibold text-ink tracking-[0.25em] uppercase">
                Engagement Models
              </span>
            </div>
            <h2 className="font-heading text-[36px] sm:text-[44px] font-bold tracking-tight text-ink leading-tight mb-4">
              Work with us
              <br />
              <span className="text-muted">the way you need.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {engagementModels.map((m, i) => (
              <div
                key={i}
                className={`p-8 lg:p-10 border-gray-200 ${
                  i % 4 !== 3 ? "md:border-r" : ""
                } ${
                  i < 2 ? "border-b md:border-b-0" : ""
                } ${
                  i === 1 ? "border-b md:border-b-0" : ""
                } hover:bg-gray-50 transition-colors`}
              >
                <div className="text-[11px] font-semibold text-[#0891B2] tracking-[0.2em] mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-[18px] font-bold text-ink mb-3 tracking-tight">
                  {m.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA — dark, premium
          ============================================================ */}
      <section className="bg-dark relative overflow-hidden">
        <div className="bg-orb -top-20 -right-20 w-[400px] h-[400px] opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block w-1.5 h-1.5 bg-[#0891B2]" />
                <span className="text-[11px] font-semibold text-white/60 tracking-[0.25em] uppercase">
                  Let's talk
                </span>
              </div>

              <h2 className="font-heading text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-[1.05] mb-6">
                Ready to secure
                <br />
                <span className="text-gradient-accent">your AI?</span>
              </h2>
              <p className="text-[16px] text-white/50 font-light leading-relaxed max-w-xl">
                30-minute discovery call. No pitch, no pressure — just a conversation about where you are and what's in the way.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-white-dark inline-flex items-center justify-between gap-3 px-7 py-5 text-[14px] font-medium group"
              >
                Book a discovery call
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/security"
                className="btn-ghost-dark inline-flex items-center justify-between gap-3 px-7 py-5 text-[14px] font-medium group"
              >
                Read our research
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

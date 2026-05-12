import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Orkka Solutions",
  description:
    "Orkka Solutions is built by engineers who have operated production AI systems at scale. AI security, infrastructure, and staffing — led by practitioners, not generalist consultants.",
};

const values = [
  {
    title: "Technical depth first",
    description:
      "Every engagement is led by engineers who have operated real production systems. We bring hard-won expertise, not slides.",
  },
  {
    title: "Outcomes over activity",
    description:
      "We measure success by what ships and runs reliably in production, not by hours billed or deliverables on a shared drive.",
  },
  {
    title: "Your team owns it",
    description:
      "We build with your team, not for them. Every system comes with documentation, runbooks, and knowledge transfer.",
  },
  {
    title: "Long-term thinking",
    description:
      "We architect for where you are going. The decisions we make today should not create the incidents of tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-hero-gradient pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse-glow" />
            <span className="text-[12px] font-medium text-white/60 tracking-wide">
              Our Story
            </span>
          </div>
          <h1 className="font-heading text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.06] tracking-tight text-white mb-6 max-w-3xl">
            Built by engineers,{" "}
            <span className="text-gradient-blue">for engineers.</span>
          </h1>
          <p className="text-[18px] text-white/50 max-w-2xl font-light leading-relaxed">
            Orkka was founded on a simple belief: security, infrastructure, and
            staffing should be led by people who have done the work — shipping AI
            systems in production, operating at scale, and delivering complex
            programs on time.
          </p>
        </div>
      </section>

      {/* ========== MISSION ========== */}
      <section className="py-24 md:py-32 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[13px] font-medium text-[#0066FF] uppercase tracking-widest mb-5">
                Our Mission
              </p>
              <h2 className="font-heading text-[32px] sm:text-[42px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                One partner for protecting, building, and staffing AI platforms.
              </h2>
              <div className="space-y-4 text-[15px] text-[#6e6e73] leading-relaxed">
                <p>
                  Most organizations struggle not for lack of strategy, but for
                  lack of the right people and the right systems at the right
                  time. Orkka exists to fix that.
                </p>
                <p>
                  We bring three disciplines under one roof: enterprise AI
                  security to protect your systems, production-grade
                  infrastructure to build your platforms, and precision staffing
                  to scale your teams.
                </p>
                <p>
                  Our through-line is depth: the same standard whether we are
                  designing a SOC, orchestrating GPU clusters, or placing a
                  senior ML engineer.
                </p>
              </div>
            </div>

            {/* Visual: mission stats */}
            <div className="bg-[#f5f5f7] border border-black/8 rounded-3xl p-10 lg:p-12">
              <div className="space-y-8">
                {[
                  {
                    stat: "13+",
                    label: "Years building and securing production AI/ML systems",
                  },
                  {
                    stat: "US + India",
                    label: "Delivery operations across both markets, supporting global programs",
                  },
                  {
                    stat: "3 Pillars",
                    label: "Security + Infrastructure + Staffing, integrated under one partner",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="border-b border-black/8 pb-8 last:border-0 last:pb-0"
                  >
                    <p className="text-[36px] font-bold tracking-tight leading-none mb-2 font-heading text-gradient-blue">
                      {item.stat}
                    </p>
                    <p className="text-[14px] text-[#6e6e73]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES ========== */}
      <section className="py-24 md:py-32 bg-[#f5f5f7] border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#0066FF] uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Principles we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-black/8 rounded-2xl p-8 lg:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-heading text-[19px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOUNDER ========== */}
      <section className="py-24 md:py-32 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
              Leadership
            </p>
            <h2 className="font-heading text-[32px] sm:text-[42px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-6">
              Founded by a practitioner.
            </h2>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
              Orkka was founded by an engineer with 13+ years of experience
              building production AI/ML infrastructure, designing security
              architectures, and leading platform engineering teams at companies
              like doTERRA, Capital One, Goldman Sachs, and Volkswagen.
            </p>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
              The company was built to fill a gap: organizations need partners
              who understand the technology deeply enough to protect it, build
              it, and staff it — not generalist consultancies that specialize in
              slide decks.
            </p>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed">
              Today, Orkka serves clients across the United States and India,
              delivering enterprise security, cloud-native infrastructure, and
              precision talent placement for technology and professional roles.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-hero-gradient py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-linear-to-br from-[#0066FF]/10 to-[#7C3AED]/10 blur-[80px] pointer-events-none animate-float" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-[36px] sm:text-[52px] font-bold tracking-tight text-white leading-tight mb-5">
            Let&apos;s work together.
          </h2>
          <p className="text-[17px] text-white/40 mb-10 max-w-xl mx-auto font-light">
            Whether you are securing AI systems, building infrastructure, or
            scaling your engineering team — we want to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[15px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            Get in Touch
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Services | Orkka Solutions",
  description:
    "Enterprise AI security and cybersecurity consulting — cloud security, SOC operations, AI governance, Zero Trust, compliance automation, penetration testing, and incident response.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "Cloud Security",
    accent: "#0066FF",
    description: "Harden your multi-cloud environment with continuous posture management and workload protection.",
    bullets: ["CSPM & CNAPP implementation", "AWS / Azure / GCP security controls", "Cloud workload protection platforms", "Infrastructure-as-code security scanning"],
  },
  {
    title: "AI Security & Governance",
    accent: "#7C3AED",
    description: "Secure your AI pipeline from model training through production inference.",
    bullets: ["LLM security & prompt injection defense", "AI model access controls & monitoring", "AI risk assessment frameworks", "Responsible AI governance policies"],
  },
  {
    title: "Security Operations (SOC)",
    accent: "#3B82F6",
    description: "Design and optimize 24/7 security operations with modern SIEM/SOAR tooling.",
    bullets: ["SIEM / SOAR implementation & tuning", "SOC design & operational optimization", "24/7 monitoring architecture", "Threat intelligence integration"],
  },
  {
    title: "Identity & Access Management",
    accent: "#06B6D4",
    description: "Implement Zero Trust architecture and mature your identity security posture.",
    bullets: ["Zero Trust architecture design", "Privileged access management (PAM)", "SSO / MFA implementation", "RBAC / ABAC policy design"],
  },
  {
    title: "DevSecOps",
    accent: "#8B5CF6",
    description: "Shift security left and embed it into every stage of your delivery pipeline.",
    bullets: ["SAST / DAST integration", "Container & image scanning", "Secrets management & rotation", "Secure CI/CD pipeline design"],
  },
  {
    title: "Compliance & Governance",
    accent: "#6366F1",
    description: "Achieve and maintain compliance across major frameworks with automation-first tooling.",
    bullets: ["SOC 2 Type II & ISO 27001", "HIPAA, FedRAMP, NIST CSF", "PCI DSS readiness", "Compliance automation & evidence collection"],
  },
  {
    title: "Penetration Testing & Red Team",
    accent: "#EF4444",
    description: "Find vulnerabilities before adversaries do with realistic attack simulations.",
    bullets: ["Network & application pen testing", "Red team exercises & tabletops", "Vulnerability assessments", "Attack surface mapping"],
  },
  {
    title: "Incident Response & Recovery",
    accent: "#F59E0B",
    description: "Be ready when incidents happen and recover fast with tested playbooks.",
    bullets: ["Breach readiness planning", "Incident response playbooks", "Digital forensics", "Ransomware recovery & business continuity"],
  },
];

const stats = [
  { value: "85+", label: "Frameworks supported" },
  { value: "24/7", label: "Security monitoring" },
  { value: "500+", label: "Vulns found per engagement" },
  { value: "99.9%", label: "Uptime SLA" },
];

const techStack = [
  ["CrowdStrike", "SentinelOne", "Palo Alto", "Fortinet"],
  ["Splunk", "Microsoft Sentinel", "Elastic SIEM", "Wiz"],
  ["HashiCorp Vault", "Okta", "CyberArk", "Zscaler"],
  ["Tenable", "Qualys", "Snyk", "SonarQube"],
];

/* ------------------------------------------------------------------ */
/*  INLINE SVG COMPONENTS                                              */
/* ------------------------------------------------------------------ */

function HeroShieldSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[400px]">
      <defs>
        <linearGradient id="secHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="secHeroFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      <line x1="200" y1="200" x2="80" y2="80" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="320" y2="80" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="60" y2="200" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="340" y2="200" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="100" y2="320" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="300" y2="320" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="200" y2="60" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />
      <line x1="200" y1="200" x2="200" y2="350" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" className="animate-dash-flow" opacity="0.12" />

      {/* Outer ring */}
      <circle cx="200" cy="200" r="140" stroke="url(#secHeroGrad)" strokeWidth="1" fill="none" opacity="0.15" />
      <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="0.5" fill="none" opacity="0.06" strokeDasharray="2 6" />

      {/* Central shield */}
      <path d="M200 100 L260 135 L260 210 Q260 270 200 300 Q140 270 140 210 L140 135 Z" fill="url(#secHeroFill)" stroke="url(#secHeroGrad)" strokeWidth="2" />
      <path d="M178 200 L195 217 L225 185" fill="none" stroke="url(#secHeroGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Pulsing nodes */}
      <circle cx="80" cy="80" r="5" fill="#0066FF" className="animate-pulse-glow" />
      <circle cx="320" cy="80" r="5" fill="#7C3AED" className="animate-pulse-glow" style={{ animationDelay: "0.3s" }} />
      <circle cx="60" cy="200" r="5" fill="#0066FF" className="animate-pulse-glow" style={{ animationDelay: "0.6s" }} />
      <circle cx="340" cy="200" r="5" fill="#7C3AED" className="animate-pulse-glow" style={{ animationDelay: "0.9s" }} />
      <circle cx="100" cy="320" r="5" fill="#0066FF" className="animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
      <circle cx="300" cy="320" r="5" fill="#7C3AED" className="animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <circle cx="200" cy="60" r="5" fill="#3B82F6" className="animate-pulse-glow" style={{ animationDelay: "0.4s" }} />
      <circle cx="200" cy="350" r="5" fill="#3B82F6" className="animate-pulse-glow" style={{ animationDelay: "1.0s" }} />

      {/* Node labels */}
      <text x="80" y="68" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">SIEM</text>
      <text x="320" y="68" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">IAM</text>
      <text x="42" y="204" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">EDR</text>
      <text x="358" y="204" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">XDR</text>
      <text x="100" y="340" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">SOC</text>
      <text x="300" y="340" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">GRC</text>
      <text x="200" y="50" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">CLOUD</text>
      <text x="200" y="372" textAnchor="middle" fill="white" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.4">AI SEC</text>
    </svg>
  );
}

function SecurityArchitectureSVG() {
  const layers = [
    { y: 10, color: "#7C3AED", label: "Data Layer" },
    { y: 90, color: "#6366F1", label: "Application Layer" },
    { y: 170, color: "#0066FF", label: "Cloud Layer" },
    { y: 250, color: "#3B82F6", label: "Network Layer" },
  ];

  const pillSets = [
    ["Encryption", "DLP", "Access"],
    ["SAST", "DAST", "WAF"],
    ["CSPM", "CWPP", "IAM"],
    ["Firewall", "IDS", "VPN"],
  ];

  return (
    <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[500px]">
      {layers.map((layer, i) => (
        <g key={layer.label}>
          <rect x="20" y={layer.y} width="460" height="65" rx="12" fill={layer.color} fillOpacity="0.06" stroke={layer.color} strokeWidth="1" strokeOpacity="0.2" />
          <text x="50" y={layer.y + 38} fill={layer.color} fontSize="13" fontWeight="600" fontFamily="Space Grotesk, sans-serif">{layer.label}</text>
          {/* Shield icon */}
          <path d={`M${420} ${layer.y + 18} L${435} ${layer.y + 25} L${435} ${layer.y + 38} Q${435} ${layer.y + 48} ${420} ${layer.y + 52} Q${405} ${layer.y + 48} ${405} ${layer.y + 38} L${405} ${layer.y + 25} Z`} fill="none" stroke={layer.color} strokeWidth="1.5" opacity="0.4" />
          <path d={`M${413} ${layer.y + 35} L${418} ${layer.y + 40} L${428} ${layer.y + 30}`} fill="none" stroke={layer.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          {/* Connector */}
          {i < layers.length - 1 && (
            <line x1="250" y1={layer.y + 65} x2="250" y2={layer.y + 80} stroke={layer.color} strokeWidth="1" strokeDasharray="3 3" opacity="0.3" className="animate-dash-flow" />
          )}
          {/* Feature pills */}
          {pillSets[i].map((pill, pi) => (
            <g key={pill}>
              <rect x={180 + pi * 68} y={layer.y + 15} width={60} height={22} rx={11} fill={layer.color} fillOpacity="0.08" stroke={layer.color} strokeOpacity="0.15" strokeWidth="0.5" />
              <text x={180 + pi * 68 + 30} y={layer.y + 30} textAnchor="middle" fill={layer.color} fontSize="8" fontFamily="DM Sans, sans-serif">{pill}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function SecurityPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-hero-gradient pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0066FF] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse-glow" />
                <span className="text-[12px] font-medium text-white/60 tracking-wide">
                  Cybersecurity & AI Security
                </span>
              </div>
              <h1 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.06] tracking-tight text-white mb-6">
                Enterprise Security for the{" "}
                <span className="text-gradient-blue">AI Era</span>
              </h1>
              <p className="text-[17px] text-white/50 leading-relaxed max-w-lg font-light mb-8">
                End-to-end cybersecurity consulting — from cloud security posture
                and AI governance to SOC operations and compliance automation.
                Built by practitioners who have operated security at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[15px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                >
                  Get Started
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/15 text-white text-[15px] font-medium hover:bg-white/5 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center lg:justify-end">
              <HeroShieldSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREAS ========== */}
      <section className="bg-white py-24 md:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#0066FF] uppercase tracking-widest mb-4">
              What We Deliver
            </p>
            <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight max-w-2xl">
              Security services built for modern infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-black/8 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: svc.accent }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${svc.accent}10` }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2L20 6.5V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6.5L12 2Z" stroke={svc.accent} strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke={svc.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">{svc.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-4">{svc.description}</p>
                <ul className="space-y-1.5">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: svc.accent }} />
                      <span className="text-[13px] text-[#6e6e73]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              By The Numbers
            </p>
            <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Security outcomes that matter.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-white border border-black/8 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="font-heading text-[36px] sm:text-[44px] font-bold tracking-tight leading-none mb-2 text-gradient-blue">{stat.value}</p>
                <p className="text-[13px] text-[#6e6e73]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY ORKKA ========== */}
      <section className="bg-white py-24 md:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="text-[13px] font-medium text-[#0066FF] uppercase tracking-widest mb-5">
                Why Orkka for Security
              </p>
              <h2 className="font-heading text-[32px] sm:text-[42px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                Engineers who have built security at scale.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                Our security team is made up of practitioners who have designed SOCs,
                hardened cloud environments, and responded to real incidents at
                enterprise scale. We bring production experience, not just frameworks.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                Security is not a checkbox exercise. It is an ongoing discipline
                embedded into your architecture, CI/CD pipeline, and organizational
                culture.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Practitioners with real SOC and IR experience",
                  "Deep expertise across cloud-native and hybrid environments",
                  "Compliance-ready from day one — SOC 2, ISO 27001, NIST, HIPAA",
                  "Security integrated into DevOps, not bolted on after",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                    <span className="text-[14px] text-[#1d1d1f]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[14px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
              >
                Talk to our security team
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <SecurityArchitectureSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ========== TECH STACK ========== */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Technology Expertise
            </p>
            <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              The security stack we know inside out.
            </h2>
          </div>
          <div className="space-y-4">
            {techStack.map((row, ri) => (
              <div key={ri} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {row.map((name) => (
                  <div key={name} className="bg-white border border-black/8 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#0066FF]/8 to-[#7C3AED]/8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                        <path d="M12 2L20 7V13C20 18 16.5 21 12 22.5C7.5 21 4 18 4 13V7L12 2Z" fill="#0066FF" fillOpacity="0.1" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.4" />
                        <path d="M9 12L11 14L15 10" stroke="#0066FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-[#1d1d1f]">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-hero-gradient py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-linear-to-br from-[#0066FF]/10 to-[#7C3AED]/10 blur-[80px] pointer-events-none animate-float" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-[32px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
                Secure your infrastructure today.
              </h2>
              <p className="mt-3 text-[16px] text-white/40 font-light max-w-md">
                Whether you need a security assessment, SOC buildout, or
                compliance program — our team is ready.
              </p>
            </div>
            <div className="flex flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[14px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
              >
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/15 text-white text-[14px] font-medium hover:bg-white/5 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

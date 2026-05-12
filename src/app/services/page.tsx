import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Orkka Solutions",
  description:
    "AI security, cloud-native infrastructure, and technology staffing services. Enterprise cybersecurity, Kubernetes platforms, GPU orchestration, MLOps, and senior talent placement.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const securityServices = [
  {
    title: "Cloud Security",
    description: "Continuous posture management and workload protection across AWS, Azure, and GCP.",
    capabilities: ["CSPM & CNAPP implementation", "Multi-cloud security controls", "Workload protection platforms", "IaC security scanning"],
  },
  {
    title: "AI Governance",
    description: "Secure your AI pipeline from model training through production inference.",
    capabilities: ["LLM security & prompt injection defense", "AI model access controls", "AI risk assessment frameworks", "Responsible AI policies"],
  },
  {
    title: "SOC Operations",
    description: "Design and optimize 24/7 security operations with modern SIEM/SOAR tooling.",
    capabilities: ["SIEM / SOAR implementation", "SOC design & optimization", "24/7 monitoring architecture", "Threat intelligence integration"],
  },
  {
    title: "IAM & Zero Trust",
    description: "Implement Zero Trust architecture and mature your identity security posture.",
    capabilities: ["Zero Trust architecture", "Privileged access management", "SSO / MFA implementation", "RBAC / ABAC policy design"],
  },
  {
    title: "DevSecOps",
    description: "Shift security left and embed it into every stage of your delivery pipeline.",
    capabilities: ["SAST / DAST integration", "Container & image scanning", "Secrets management", "Secure CI/CD pipelines"],
  },
  {
    title: "Compliance",
    description: "Achieve and maintain compliance across major frameworks with automation.",
    capabilities: ["SOC 2 Type II & ISO 27001", "HIPAA, FedRAMP, NIST CSF", "PCI DSS readiness", "Evidence collection automation"],
  },
  {
    title: "Penetration Testing",
    description: "Find vulnerabilities before adversaries do with realistic attack simulations.",
    capabilities: ["Network & application testing", "Red team exercises", "Vulnerability assessments", "Attack surface mapping"],
  },
  {
    title: "Incident Response",
    description: "Be ready when incidents happen and recover fast with tested playbooks.",
    capabilities: ["Breach readiness planning", "IR playbook development", "Digital forensics", "Ransomware recovery & BCP"],
  },
];

const infraServices = [
  {
    title: "Kubernetes Platforms",
    description: "Production-grade Kubernetes on EKS, GKE, and AKS — designed for reliability and scale.",
    capabilities: ["Multi-cluster management", "Service mesh (Istio/Linkerd)", "Auto-scaling & right-sizing", "Multi-tenancy & RBAC"],
  },
  {
    title: "GPU Orchestration",
    description: "Orchestrate GPU workloads for AI/ML training and inference at scale.",
    capabilities: ["A100 / H100 cluster management", "CUDA optimization", "Model serving (vLLM, Triton)", "Resource scheduling & fairness"],
  },
  {
    title: "MLOps Pipelines",
    description: "End-to-end ML lifecycle management from experiment tracking to production deployment.",
    capabilities: ["MLflow / Kubeflow / Airflow", "Feature stores & registries", "Model versioning & lineage", "A/B testing & canary deploys"],
  },
  {
    title: "Cloud-Native Architecture",
    description: "Microservices, event-driven systems, and cloud-native patterns on any major cloud.",
    capabilities: ["AWS / GCP / Azure architecture", "Serverless & container patterns", "Event-driven design", "Cloud migration & modernization"],
  },
  {
    title: "GitOps & IaC",
    description: "Infrastructure as code and GitOps-first deployment workflows for consistency and speed.",
    capabilities: ["ArgoCD / Flux workflows", "Terraform & Pulumi modules", "Policy-as-code (OPA, Kyverno)", "Environment promotion strategies"],
  },
  {
    title: "Observability & SRE",
    description: "Full-stack observability and SRE practices to keep your platforms reliable.",
    capabilities: ["Prometheus / Grafana / Datadog", "Distributed tracing", "SLO/SLI frameworks", "Incident management automation"],
  },
];

const staffingServices = [
  {
    title: "AI/ML Engineers",
    description: "ML Engineers, MLOps Engineers, AI Platform Engineers, Data Scientists, LLM Engineers, GenAI Specialists.",
  },
  {
    title: "DevOps / SRE",
    description: "DevOps Engineers, Platform Engineers, SREs, Kubernetes Engineers, CI/CD Architects.",
  },
  {
    title: "Data Engineering",
    description: "Data Engineers, Analytics Engineers, Data Architects, BI Developers, Spark/dbt Specialists.",
  },
  {
    title: "Cloud Architects",
    description: "AWS / GCP / Azure Architects, Solutions Architects, Cloud Migration Engineers.",
  },
  {
    title: "Cybersecurity",
    description: "Security Engineers, Cloud Security Architects, SOC Analysts, Pen Testers, IAM Specialists.",
  },
  {
    title: "SAP & ERP",
    description: "SAP Consultants, SAP HANA Specialists, SAP Basis Admins, ERP Integration Engineers, S/4HANA Experts.",
  },
  {
    title: "Project Controls",
    description: "Schedulers, Planners, Cost Engineers, Estimators, Contract Administrators, Document Control, PMO Leads.",
  },
  {
    title: "Professional Roles",
    description: "Finance & Accounting, Operations & Strategy, HR & People Ops, Sales & Account Management, Legal & Compliance.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-hero-gradient pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0066FF] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse-glow" />
            <span className="text-[12px] font-medium text-white/60 tracking-wide">
              Full-Spectrum Platform
            </span>
          </div>
          <h1 className="font-heading text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.06] tracking-tight text-white mb-6 max-w-3xl">
            Our Services
          </h1>
          <p className="text-[18px] text-white/50 max-w-2xl font-light leading-relaxed">
            Three integrated disciplines to protect, build, and staff your technology
            platforms. From AI security and cloud infrastructure to precision talent
            placement.
          </p>
        </div>
      </section>

      {/* ========== AI SECURITY ========== */}
      <section id="security" className="py-24 md:py-32 bg-white border-b border-black/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <path d="M16 3L27 9V17C27 24 22 28 16 30C10 28 5 24 5 17V9L16 3Z" fill="#0066FF" fillOpacity="0.1" stroke="#0066FF" strokeWidth="1.5" />
              <path d="M12 16L15 19L21 13" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[13px] font-medium text-[#0066FF] uppercase tracking-widest">
              Pillar One
            </p>
          </div>
          <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            AI Security & Cybersecurity
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-2xl font-light leading-relaxed mb-12">
            Enterprise security architecture, AI-powered threat detection, and compliance
            automation. We design and implement security programs that protect your
            infrastructure, data, and AI systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-black/8 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#0066FF] to-[#0066FF]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed mb-4">
                  {svc.description}
                </p>
                <ul className="space-y-1.5">
                  {svc.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                      <span className="text-[12px] text-[#6e6e73]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AI INFRASTRUCTURE ========== */}
      <section id="infrastructure" className="py-24 md:py-32 bg-[#f5f5f7] border-b border-black/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <rect x="5" y="8" width="22" height="6" rx="2" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="1.5" />
              <rect x="5" y="17" width="22" height="6" rx="2" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="1.5" />
              <circle cx="9" cy="11" r="1.5" fill="#7C3AED" />
              <circle cx="9" cy="20" r="1.5" fill="#7C3AED" />
            </svg>
            <p className="text-[13px] font-medium text-[#7C3AED] uppercase tracking-widest">
              Pillar Two
            </p>
          </div>
          <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            AI Infrastructure & Platform Engineering
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-2xl font-light leading-relaxed mb-12">
            Production-grade platforms for AI workloads. Kubernetes, GPU orchestration,
            MLOps pipelines, and cloud-native architecture — designed by engineers who
            have operated these systems at scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {infraServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-black/8 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#7C3AED] to-[#7C3AED]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed mb-4">
                  {svc.description}
                </p>
                <ul className="space-y-1.5">
                  {svc.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#7C3AED] mt-1.5 flex-shrink-0" />
                      <span className="text-[12px] text-[#6e6e73]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STAFFING ========== */}
      <section id="staffing" className="py-24 md:py-32 bg-white border-b border-black/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <circle cx="12" cy="10" r="4" fill="#6e6e73" fillOpacity="0.1" stroke="#6e6e73" strokeWidth="1.5" />
              <circle cx="22" cy="10" r="4" fill="#6e6e73" fillOpacity="0.1" stroke="#6e6e73" strokeWidth="1.5" />
              <path d="M4 26Q4 19 12 19Q15 19 17 20" fill="none" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M17 20Q19 19 22 19Q30 19 30 26" fill="none" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest">
              Pillar Three
            </p>
          </div>
          <h2 className="font-heading text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            Technology & Professional Staffing
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-2xl font-light leading-relaxed mb-12">
            Senior talent across AI/ML, DevOps, data engineering, cloud, cybersecurity,
            SAP, project controls, and professional roles. Every candidate technically
            evaluated by domain-expert engineers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {staffingServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-black/8 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-hero-gradient py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-linear-to-br from-[#0066FF]/10 to-[#7C3AED]/10 blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-[36px] sm:text-[52px] font-bold tracking-tight text-white leading-tight mb-5">
            Let&apos;s build your next platform.
          </h2>
          <p className="text-[17px] text-white/40 mb-10 max-w-xl mx-auto font-light">
            Tell us about your security, infrastructure, or staffing challenge.
            We respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[15px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Get Started
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/security"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 text-white text-[15px] font-medium hover:bg-white/5 transition-colors"
            >
              Explore Security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

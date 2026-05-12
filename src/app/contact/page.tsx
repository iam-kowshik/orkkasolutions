"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

const engagementTypes = [
  "AI Security & Cybersecurity Consulting",
  "AI Infrastructure & Platform Engineering",
  "Technology Staffing (contract / direct / C2H)",
  "Professional or Business Role Staffing",
  "Statement of Work / Project Delivery",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    engagement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-hero-gradient pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0066FF] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse-glow" />
            <span className="text-[12px] font-medium text-white/60 tracking-wide">
              Get Started
            </span>
          </div>
          <h1 className="font-heading text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.06] tracking-tight text-white mb-6">
            Start a conversation.
          </h1>
          <p className="text-[18px] text-white/50 max-w-xl font-light leading-relaxed">
            Tell us about your security, infrastructure, or staffing needs.
            We respond within one business day.
          </p>
        </div>
      </section>

      {/* ========== FORM + INFO ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-start gap-5 py-12">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#0066FF]/10 to-[#7C3AED]/10 flex items-center justify-center">
                    <CheckCircle
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#0066FF]"
                    />
                  </div>
                  <h2 className="font-heading text-[28px] font-bold text-[#1d1d1f] tracking-tight">
                    Message received.
                  </h2>
                  <p className="text-[16px] text-[#6e6e73] leading-relaxed max-w-md">
                    Thank you for reaching out. We will be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-medium text-[#1d1d1f] mb-2">
                        Full Name <span className="text-[#6e6e73]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/8 text-[#1d1d1f] text-[14px] placeholder:text-[#6e6e73]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#1d1d1f] mb-2">
                        Work Email <span className="text-[#6e6e73]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/8 text-[#1d1d1f] text-[14px] placeholder:text-[#6e6e73]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#1d1d1f] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/8 text-[#1d1d1f] text-[14px] placeholder:text-[#6e6e73]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#1d1d1f] mb-2">
                      What are you looking for?{" "}
                      <span className="text-[#6e6e73]">*</span>
                    </label>
                    <select
                      name="engagement"
                      required
                      value={form.engagement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/8 text-[#1d1d1f] text-[14px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]/30 transition-all"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {engagementTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#1d1d1f] mb-2">
                      Tell us more <span className="text-[#6e6e73]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your current stack, the challenge you are facing, and what success looks like..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/8 text-[#1d1d1f] text-[14px] resize-none placeholder:text-[#6e6e73]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]/30 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-[#0066FF] to-[#7C3AED] text-white text-[14px] font-medium group hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                  >
                    Send Message
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <p className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:hello@orkkasolutions.com"
                    className="inline-flex items-center gap-2 text-[15px] text-[#1d1d1f] font-medium hover:text-[#0066FF] transition-colors"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    hello@orkkasolutions.com
                  </a>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
                    Response Time
                  </p>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    We respond to all inquiries within one business day.
                  </p>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
                    Based In
                  </p>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    United States and India — supporting global engagements.
                  </p>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
                    What We Do
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "AI Security & Cybersecurity", color: "#0066FF" },
                      { label: "AI Infrastructure & Platforms", color: "#7C3AED" },
                      { label: "Technology & Professional Staffing", color: "#6e6e73" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[13px] text-[#6e6e73]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/8">
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                    Not ready to reach out yet?{" "}
                    <a
                      href="/services"
                      className="text-[#0066FF] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
                    >
                      Explore our services
                    </a>{" "}
                    to learn more about what we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

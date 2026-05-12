import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Orkka Solutions | AI Security, Infrastructure & Talent",
  description:
    "Orkka Solutions is an enterprise AI security, infrastructure, and staffing partner. We protect, build, and staff the platforms that power AI — across the United States, India, and globally.",
  keywords: [
    "AI security",
    "cybersecurity consulting",
    "AI infrastructure",
    "platform engineering",
    "Kubernetes consulting",
    "GPU orchestration",
    "MLOps",
    "technology staffing",
    "DevOps staffing",
    "cloud security",
    "SOC operations",
    "compliance automation",
    "zero trust",
    "AI governance",
  ],
  metadataBase: new URL("https://orkkasolutions.com"),
  openGraph: {
    title: "Orkka Solutions | AI Security, Infrastructure & Talent",
    description:
      "Enterprise AI security, cloud-native infrastructure, and precision technology staffing. One partner for protecting, building, and staffing your AI platforms.",
    url: "https://orkkasolutions.com",
    siteName: "Orkka Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body bg-white text-[#1d1d1f]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

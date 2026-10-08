import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { BenchmarkSection } from "@/components/BenchmarkSection";
import { MemorySection } from "@/components/MemorySection";
import { PasswordManagerSection } from "@/components/PasswordManagerSection";
import { PrivacySection } from "@/components/PrivacySection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#090b0c] flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Sticky / Floating Navbar */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <CapabilitiesSection />
        <BenchmarkSection />
        <MemorySection />
        <PasswordManagerSection />
        <PrivacySection />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

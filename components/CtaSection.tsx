import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative px-3 sm:px-6 py-12 sm:py-20 max-w-[1650px] mx-auto">
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden p-12 sm:p-20 md:p-24 text-center flex flex-col items-center justify-center bg-cover bg-center shadow-xl border border-black/[0.05]"
        style={{
          backgroundImage: "url('/images/aside.com/82fb84fc6428f894.png')",
        }}
      >
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-8 flex flex-col items-center">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-white/60 bg-white p-1">
            <Image src="/nguci.png" alt="Nguci Logo" fill className="object-cover" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#090b0c] font-display leading-[1.12]">
            Buat kamu yang nguci,
            <br />
            biar omongannya nggak hilang begitu saja.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 max-w-xl">
            Coba Nguci sekarang di HP Android kamu. Gratis 10 voice note setiap hari tanpa perlu registrasi akun.
          </p>

          <div>
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#090b0c] px-8 py-4 text-[15px] font-semibold text-white shadow-xl shadow-black/20 transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Download di Google Play Store</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative px-2.5 sm:px-6 py-10 sm:py-20 max-w-[1650px] mx-auto overflow-hidden">
      <div
        className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden p-8 sm:p-16 md:p-24 text-center flex flex-col items-center justify-center bg-cover bg-center shadow-xl border border-black/[0.05]"
        style={{
          backgroundImage: "url('/images/aside.com/82fb84fc6428f894.png')",
        }}
      >
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5 sm:space-y-8 flex flex-col items-center">
          <div className="relative w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white/60 bg-white p-1">
            <Image src="/nguci.png" alt="Nguci Logo" fill className="object-cover" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#090b0c] font-display leading-[1.15] sm:leading-[1.12]">
            Buat kamu yang nguci,
            <br />
            biar omongannya nggak hilang begitu saja.
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-neutral-700 max-w-xl leading-relaxed">
            Coba Nguci sekarang di HP Android kamu. Gratis 10 voice note setiap hari tanpa perlu registrasi akun.
          </p>

          <div className="w-full sm:w-auto">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#090b0c] px-6 sm:px-8 py-3.5 sm:py-4 text-[13.5px] sm:text-[15px] font-semibold text-white shadow-xl shadow-black/20 transition-all hover:bg-black active:scale-[0.98]"
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

import { ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="relative px-4 sm:px-8 py-14 sm:py-24 border-b border-black/[0.06] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Left Column: Brand Story Badge */}
          <div className="md:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-neutral-900">
              <span>Tentang Nguci</span>
              <ArrowRight size={14} className="text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Berasal dari bahasa Bali yang berarti <em>&ldquo;banyak ngomong&rdquo;</em>. Dibuat agar omonganmu berubah jadi tindakan nyata.
            </p>
          </div>

          {/* Right Column: Problem & Solution Statement */}
          <div className="md:col-span-8 space-y-6 sm:space-y-8">
            <p className="text-xl sm:text-3xl md:text-4xl font-normal text-neutral-400 font-display leading-[1.3] tracking-tight">
              Aplikasi to-do konvensional bikin ribet: harus ngetik dan isi form saat kamu lagi nyetir, di jalan, atau sibuk packing. Voice note WhatsApp pun menumpuk tanpa kepastian.
            </p>

            <p className="text-xl sm:text-3xl md:text-4xl font-normal text-[#090b0c] font-display leading-[1.3] tracking-tight">
              Nguci dirancang untuk momen &ldquo;kepikiran di jalan&rdquo;: cukup tekan satu tombol, bicara natural Bahasa Indonesia, AI langsung mengurai tanggal, prioritas, dan menjadwalkan reminder otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

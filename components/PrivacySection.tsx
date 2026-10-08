import { Check, Sparkles, Zap, Mic } from "lucide-react";

export function PrivacySection() {
  return (
    <section id="harga" className="relative px-4 sm:px-8 py-20 sm:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
            Model Bisnis Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#090b0c] font-display tracking-tight leading-[1.15]">
            Gratis untuk kebutuhan harian.
            <br />
            Pro untuk yang super sibuk.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Gunakan gratis selamanya dengan jatah 10 voice note setiap hari. Upgrade ke Pro kapan saja langsung via Google Play Billing.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Card 1: Gratis */}
          <div className="rounded-3xl bg-[#fafafa] border border-black/[0.08] p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                  Paket Dasar
                </span>
                <h3 className="text-2xl font-bold text-[#090b0c] font-display mt-1">
                  Gratis Selamanya
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#090b0c]">Rp0</span>
                  <span className="text-sm text-neutral-500">/ bulan</span>
                </div>
              </div>

              <hr className="border-black/[0.06]" />

              <ul className="space-y-3.5 text-sm text-neutral-700">
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>10 voice note / hari</strong> (reset 00:00 malam)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>Input task manual <strong>unlimited</strong> (ketik biasa)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>Multi-task auto-split &amp; ekstraksi tanggal Indonesia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>Layar review hasil parse sebelum disimpan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>Pengingat &amp; notifikasi standar AlarmManager</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#download"
                className="w-full text-center block rounded-2xl bg-neutral-200/90 hover:bg-neutral-300 py-3 text-sm font-semibold text-neutral-900 transition-colors"
              >
                Mulai Gratis
              </a>
            </div>
          </div>

          {/* Card 2: Pro */}
          <div className="relative rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-black/80">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 right-8 bg-emerald-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Rekomendasi
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Nguci Pro</span>
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Unlimited Power
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">Rp19.000</span>
                  <span className="text-sm text-neutral-400">/ bulan</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Langganan fleksibel via Google Play Billing. Bisa batal kapan saja.
                </p>
              </div>

              <hr className="border-white/10" />

              <ul className="space-y-3.5 text-sm text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span><strong>Voice note UNLIMITED</strong> tanpa kuota harian</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span>Model AI pemrosesan prioritas super cepat</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span>Nada alarm &amp; reminder custom eksklusif</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span>Akses fitur v1.1 lebih awal (Widget &amp; Kalender)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span>Dukungan langsung tim pengembang lokal</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#download"
                className="w-full text-center block rounded-2xl bg-white hover:bg-neutral-100 py-3 text-sm font-semibold text-neutral-900 transition-colors shadow-sm"
              >
                Upgrade ke Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

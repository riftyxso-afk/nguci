import { HardDrive, Trash2, BatteryCharging, CheckCircle2 } from "lucide-react";

export function PasswordManagerSection() {
  const privacyPillars = [
    {
      icon: HardDrive,
      title: "Data 100% Tersimpan Lokal",
      description:
        "Seluruh daftar tugas, catatan, dan riwayat tersimpan di penyimpanan offline HP kamu menggunakan Room/SQLite. Tanpa database cloud pihak ketiga yang mengintip.",
    },
    {
      icon: Trash2,
      title: "Audio Otomatis Dihapus",
      description:
        "File rekaman suara di cache internal langsung dihapus permanen begitu transkripsi teks selesai. Nguci tidak menyimpan koleksi suara pribadimu.",
    },
    {
      icon: BatteryCharging,
      title: "Hemat Baterai Tanpa Service Latar",
      description:
        "Tidak ada proses latar belakang yang menyedot baterai. Pengingat mengandalkan AlarmManager native bawaan sistem Android.",
    },
  ];

  return (
    <section id="privasi" className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
            Keamanan &amp; Privasi
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#090b0c] font-display tracking-tight leading-[1.15]">
            Suaramu aman. Datamu tetap milikmu.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Kami menganggap privasi suara bukan sekadar fitur, melainkan komitmen fundamental sejak baris kode pertama.
          </p>
        </div>

        {/* 3 Privacy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {privacyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl bg-[#fafafa] border border-black/[0.06] p-5 sm:p-7 space-y-3 sm:space-y-4 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center text-neutral-900 shadow-2xs">
                  <Icon size={20} className="sm:w-5.5 sm:h-5.5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#090b0c] font-display">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local-First Architecture Guarantee */}
        <div className="rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-[#0c0d0e] text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-mono text-emerald-400">
                Local-First SQLite Architecture
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight">
                Tanpa Akun Wajib di Awal. Buka Aplikasi, Langsung Pakai.
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Tidak perlu login Google atau isi form registrasi panjang hanya untuk mencatat to-do harian. Pasang aplikasi dari Google Play Store, berikan izin microphone &amp; notifikasi, dan kamu siap merekam task pertamamu.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="w-full sm:w-auto p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 size={15} />
                  <span>Room Database (On-Device)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 size={15} />
                  <span>Zero Cloud Server Storage</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 size={15} />
                  <span>Hapus Sekali Klik Kapan Saja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

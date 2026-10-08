import { ShoppingBag, Briefcase, GraduationCap, BellRing, Check } from "lucide-react";

export function MemorySection() {
  const personas = [
    {
      icon: ShoppingBag,
      role: "Seller TikTok Shop / UMKM",
      name: "Sari (28 thn)",
      quote:
        "“Tangan lagi penuh lakban sama kardus packing. Pas kepikiran stok bubble wrap menipis, tinggal ngomong ke Nguci. Pas santai malem, semua to-do udah rapi.”",
      benefit: "Catat restock & follow-up supplier saat tangan sibuk",
    },
    {
      icon: Briefcase,
      role: "Sales & Pekerja Lapangan",
      name: "Budi (35 thn)",
      quote:
        "“Abis ketemu klien di jalan, saya langsung ngomong: 'Kirim invoice ke Pak Hendra lusa jam 10 pagi'. Gak perlu ngetik di pinggir jalan, reminder langsung bunyi pas harinya.”",
      benefit: "Tangkap janji temu klien tanpa risiko mengetik saat berkendara",
    },
    {
      icon: GraduationCap,
      role: "Mahasiswa & Akademisi",
      name: "Radea (21 thn)",
      quote:
        "“Dosen ngumumin tugas dadakan di kelas, langsung rekam suara 5 detik. Tugas, bab laporan, dan tanggal asistensi langsung terbagi otomatis.”",
      benefit: "Deadline tugas dan praktikum terorganisir tanpa stres",
    },
  ];

  return (
    <section id="fitur" className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
            Dibuat untuk Kehidupan Nyata
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#090b0c] font-display tracking-tight leading-[1.15]">
            Solusi untuk mereka yang hidupnya selalu bergerak.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Dari seller yang sibuk packing hingga sales yang seharian di jalan, Nguci menghilangkan hambatan mengetik di saat-saat paling genting.
          </p>
        </div>

        {/* 3 Personas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {personas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl bg-[#fafafa] border border-black/[0.06] p-5 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center text-neutral-900 shadow-2xs shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] sm:text-[15px] text-[#090b0c]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-[12.5px] sm:text-[13.5px] text-neutral-700 leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-black/[0.06] flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>{item.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reminder Engine Highlight Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-neutral-900 text-white p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <BellRing size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                Notifikasi Pengingat Tepat Waktu (AlarmManager)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-1 leading-relaxed">
                Setiap task berwaktu memicu notifikasi bersuara prioritas tinggi di HP Android-mu dengan aksi cepat &ldquo;Tandai Selesai&rdquo; atau &ldquo;Tunda 1 Jam&rdquo;.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-[11px] font-mono bg-white/10 px-3 py-1.5 rounded-lg text-neutral-300">
            <span>NotificationChannel: HIGH</span>
          </div>
        </div>
      </div>
    </section>
  );
}

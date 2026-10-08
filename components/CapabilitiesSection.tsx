import { ArrowRight } from "lucide-react";

export function CapabilitiesSection() {
  const features = [
    {
      badge: "Multi-Task Auto-Split",
      title: "Satu Ucapan Panjang Jadi Banyak Task",
      description:
        "Ngomong panjang lebar tanpa jeda? Nguci memisahkan konteks otomatis berdasarkan kata sambung ('terus', 'sama', 'oh iya'). 'Bayar kos tanggal 5 terus follow up supplier lusa' langsung jadi 2 task terpisah.",
      exampleInput: "“Beli lakban sama bubble wrap sore ini, terus kabari Mas Budi besok pagi.”",
      exampleOutput: [
        { title: "Beli lakban & bubble wrap", time: "Hari ini • 17:00" },
        { title: "Kabari Mas Budi", time: "Besok • 09:00" },
      ],
    },
    {
      badge: "Bahasa Indonesia Native",
      title: "Paham Tanggal Relatif Sehari-hari",
      description:
        "Bukan sekadar terjemahan Inggris. AI Nguci dilatih mengenali idiom waktu Indonesia: 'besok', 'lusa', 'tanggal 5', 'nanti sore', 'akhir bulan', hingga 'minggu depan'. Bicara natural seperti ke teman.",
      exampleInput: "“Service motor lusa jam dua siang, jangan lupa bawa STNK.”",
      exampleOutput: [
        { title: "Service motor (bawa STNK)", time: "Lusa • 14:00" },
      ],
    },
    {
      badge: "Kritis & Tepercaya",
      title: "Layar Review: Tanpa Auto-Save Buta",
      description:
        "Satu task sampah merusak kepercayaan. Nguci selalu menampilkan layar review draf sebelum disimpan. Kamu bisa mengubah judul, membetulkan tanggal, atau membuang kartu yang tidak sesuai dalam 1 detik.",
      exampleInput: "Setiap hasil transkripsi dan parsing selalu bisa kamu edit dan verifikasi.",
      exampleOutput: [
        { title: "Edit judul kartu langsung", time: "Date/Time Picker fleksibel" },
      ],
    },
  ];

  return (
    <section id="cara-kerja" className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-neutral-900">
            <span>Alur Kerja &amp; Fitur Inti</span>
            <ArrowRight size={14} className="text-neutral-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#090b0c] font-display tracking-tight leading-[1.15]">
            Dari ucapan mengalir, jadi to-do list yang siap dikerjakan.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Nguci dirancang dengan pipeline cerdas: merekam audio hingga 60 detik, transkrip dengan Whisper ID, ekstraksi entitas waktu, dan review transparan.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#fafafa] border border-black/[0.06] p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-black/[0.12]"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="inline-block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 font-mono">
                  {feat.badge}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#090b0c] font-display tracking-tight">
                  {feat.title}
                </h3>

                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-neutral-600">
                  {feat.description}
                </p>
              </div>

              {/* Visual Card Example Box */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-black/[0.06] space-y-2.5 sm:space-y-3">
                <div className="text-[11.5px] sm:text-[12px] text-neutral-500 italic bg-white p-2.5 rounded-xl border border-black/[0.05]">
                  {feat.exampleInput}
                </div>

                <div className="space-y-1.5">
                  {feat.exampleOutput.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs bg-white px-2.5 sm:px-3 py-2 rounded-xl border border-black/[0.06] shadow-2xs"
                    >
                      <span className="font-semibold text-neutral-800 truncate mr-2 text-[11.5px] sm:text-xs">
                        {item.title}
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-neutral-500 bg-neutral-100 px-1.5 sm:px-2 py-0.5 rounded-md shrink-0 font-medium">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

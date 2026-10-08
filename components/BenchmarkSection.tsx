"use client";

import { Check, X, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";

export function BenchmarkSection() {
  const comparisonData = [
    {
      feature: "Input Suara sebagai Inti Produk",
      nguci: true,
      plaud: true,
      todoist: "Terbatas (Inggris)",
      googleTasks: false,
    },
    {
      feature: "Bahasa Indonesia-First (Aksen & Slang)",
      nguci: true,
      plaud: false,
      todoist: false,
      googleTasks: false,
    },
    {
      feature: "Parse Tanggal Relatif ID ('lusa', 'nanti sore')",
      nguci: true,
      plaud: false,
      todoist: false,
      googleTasks: false,
    },
    {
      feature: "Multi-Task Auto Split dari Satu Ucapan",
      nguci: true,
      plaud: false,
      todoist: false,
      googleTasks: false,
    },
    {
      feature: "Tanpa Beli Hardware Tambahan",
      nguci: true,
      plaud: false, // Plaud butuh $159+
      todoist: true,
      googleTasks: true,
    },
    {
      feature: "Reminder Notifikasi Prioritas Tinggi",
      nguci: true,
      plaud: false,
      todoist: true,
      googleTasks: true,
    },
    {
      feature: "Layar Review Verifikasi Sebelum Simpan",
      nguci: true,
      plaud: false,
      todoist: false,
      googleTasks: false,
    },
  ];

  const renderBadge = (val: boolean | string, isNguci = false) => {
    if (val === true) {
      return (
        <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${isNguci ? "bg-emerald-500 text-white" : "bg-neutral-200 text-neutral-700"}`}>
          <Check size={16} strokeWidth={2.5} />
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 text-neutral-400">
          <X size={15} strokeWidth={2} />
        </div>
      );
    }
    return (
      <span className="text-[12px] font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-md">
        {val}
      </span>
    );
  };

  return (
    <section id="perbandingan" className="relative px-4 sm:px-8 py-20 sm:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
            Analisis Kompetitor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#090b0c] font-display tracking-tight leading-[1.15]">
            Kenapa Nguci, bukan to-do list biasa?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Plaud AI membuktikan pasar suara itu nyata tapi butuh hardware $159+. Todoist dan Google Tasks masih menuntut kamu mengetik dan tidak paham bahasa lokal. Nguci hadir menutup celah itu.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-black/[0.08] bg-[#fafafa] p-4 sm:p-8 shadow-xs">
          <table className="w-full min-w-[620px] text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.08]">
                <th className="py-4 px-4 text-sm font-semibold text-neutral-500 w-2/5">
                  Fitur &amp; Kemampuan
                </th>
                <th className="py-4 px-4 text-base font-bold text-[#090b0c] text-center bg-white rounded-t-2xl border-t border-x border-black/[0.08] w-1/5 shadow-2xs">
                  <div className="flex items-center justify-center gap-1.5">
                    <span>Nguci</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-semibold">
                      Spesialis ID
                    </span>
                  </div>
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-neutral-600 text-center w-1/5">
                  Plaud AI ($159)
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-neutral-600 text-center w-1/5">
                  Todoist / Google
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.05]">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-black/[0.015] transition-colors">
                  <td className="py-4 px-4 text-[13.5px] font-medium text-neutral-800">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-white border-x border-black/[0.08]">
                    {renderBadge(row.nguci, true)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderBadge(row.plaud)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderBadge(row.todoist)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { NguciLogo } from "./Navbar";

export function Footer() {
  const sections = [
    {
      title: "Produk",
      links: [
        { name: "Fitur Suara", href: "#fitur" },
        { name: "Cara Kerja", href: "#cara-kerja" },
        { name: "Perbandingan", href: "#perbandingan" },
        { name: "Harga & Kuota", href: "#harga" },
        { name: "Download Android", href: "#download" },
      ],
    },
    {
      title: "Target Pengguna",
      links: [
        { name: "Seller TikTok Shop", href: "#fitur" },
        { name: "Sales & Pekerja Lapangan", href: "#fitur" },
        { name: "Mahasiswa & Akademisi", href: "#fitur" },
      ],
    },
    {
      title: "Keamanan & Privasi",
      links: [
        { name: "Kebijakan Privasi", href: "#privasi" },
        { name: "Penyimpanan Lokal (SQLite)", href: "#privasi" },
        { name: "Ketentuan Layanan", href: "#" },
      ],
    },
    {
      title: "Teknologi",
      links: [
        { name: "Kotlin Native (Android)", href: "#" },
        { name: "Whisper STT (id-ID)", href: "#" },
        { name: "WorkManager Alarms", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-black/[0.06] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {sections.map((sec) => (
            <div key={sec.title} className="space-y-3 sm:space-y-4">
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#090b0c] font-display">
                {sec.title}
              </h4>
              <ul className="space-y-2">
                {sec.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-[13.5px] text-neutral-500 hover:text-neutral-900 transition-colors py-0.5 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-black/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <NguciLogo className="h-6" />
            <span>© 2026 Nguci. Ngomong, jadi, beres. Semua hak dilindungi.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-500 text-[11px] sm:text-xs">
            <span>Dirancang &amp; dikembangkan untuk pengguna Android di Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Mic, CheckCircle2, Bell, Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, Mail, Check } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative px-3 sm:px-6 pt-3 pb-16 lg:pb-24 max-w-[1650px] mx-auto">
      {/* Cloud aesthetic frame container */}
      <div
        className="relative w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08),_0px_8px_12px_rgba(0,0,0,0.04)] bg-[#f4f7fa] bg-cover bg-center border border-black/[0.05]"
        style={{
          backgroundImage: "url('/images/aside.com/ec79948d0364c77e.png')",
        }}
      >
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/25 via-transparent to-sky-100/35 pointer-events-none" />

        {/* Hero Top Content */}
        <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 text-center flex flex-col items-center">
          {/* Brand Philosophy Chip */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm border border-black/[0.06] backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Voice-to-Task App Bahasa Indonesia</span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-[#090b0c] font-display leading-[1.08]">
            Ngomong, jadi, beres.
          </h1>

          {/* Subtitle / Positioning */}
          <p className="mt-6 max-w-2xl text-base sm:text-xl text-neutral-600 leading-relaxed font-normal">
            Buat kamu yang <em>nguci</em>, biar omongannya nggak hilang begitu saja. Tekan satu tombol mic, bicara apa adanya, AI langsung pecah jadi task terstruktur lengkap dengan reminder otomatis.
          </p>

          {/* Waitlist Form with Glass Effect Style */}
          <div className="mt-9 w-full max-w-md mx-auto">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white/55 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.08),_0_2px_6px_rgba(0,0,0,0.04)] transition-all hover:bg-white/65 hover:shadow-[0_16px_44px_rgba(0,0,0,0.1)]"
              >
                <div className="relative flex-1 w-full flex items-center pl-3.5 pr-2 py-2 sm:py-0">
                  <Mail size={18} className="text-neutral-400 shrink-0 mr-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email untuk akses awal..."
                    className="w-full bg-transparent text-[14px] sm:text-[15px] text-[#090b0c] placeholder:text-neutral-400 font-medium focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-[#090b0c] px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-black/15 transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Gabung Waitlist</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-xl border border-emerald-200/80 shadow-lg shadow-emerald-950/5 flex items-center justify-center gap-3 animate-in fade-in zoom-in-95">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-bold text-neutral-900">
                    Kamu terdaftar di waitlist!
                  </div>
                  <div className="text-[12px] text-neutral-600">
                    Kami akan kabari kamu segera saat akses beta Google Play dibuka.
                  </div>
                </div>
              </div>
            )}

            {/* Microcopy info below waitlist */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Rilis Play Store Oktober 2026</span>
              </span>
              <span>•</span>
              <span>Gratis 10 voice note / hari</span>
              <span>•</span>
              <span>Tanpa kartu kredit</span>
            </div>
          </div>
        </div>

        {/* iPhone 17 Pro Max Mockup Showcase */}
        <div className="relative z-10 px-4 sm:px-8 pb-12 sm:pb-20 flex justify-center">
          {/* Outer Phone Shadow & Wrapper */}
          <div className="relative w-full max-w-[395px] sm:max-w-[420px] transition-transform duration-500 hover:scale-[1.01]">
            {/* Phone Bezel / Titanium Frame */}
            <div className="relative rounded-[58px] p-[10px] bg-gradient-to-b from-[#2a2d32] via-[#1c1e22] to-[#121417] shadow-[0_35px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.15)_inset,0_20px_40px_rgba(0,0,0,0.3)]">
              {/* Inner Screen Border */}
              <div className="relative rounded-[48px] bg-white overflow-hidden flex flex-col h-[780px] sm:h-[820px] border border-black/80">
                {/* Dynamic Island Header */}
                <div className="pt-3 pb-2 px-7 flex items-center justify-between bg-white text-black shrink-0 relative z-30">
                  {/* Status Bar Clock */}
                  <span className="text-[13px] font-semibold tracking-tight font-sans">
                    09:41
                  </span>

                  {/* Dynamic Island Pill */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-2.5 h-[28px] w-[112px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                    {/* Pulsing Voice waveform indicator in dynamic island */}
                    <div className="flex items-center gap-0.5">
                      <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-bounce" />
                      <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                    {/* Front Camera Dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15171a] border border-[#2b2e34]/70" />
                  </div>

                  {/* Status Bar Icons */}
                  <div className="flex items-center gap-1.5 text-neutral-800">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.27 19.58 10.59 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                    </svg>
                    <span className="text-[11px] font-bold">5G</span>
                    <div className="w-5 h-2.5 rounded-sm border border-black/80 p-0.5 flex items-center">
                      <div className="h-full w-full bg-black rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Nguci In-App Header */}
                <div className="px-5 pt-2 pb-3 border-b border-neutral-100 flex items-center justify-between bg-white shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-black/10 shadow-2xs">
                      <Image src="/nguci.png" alt="Nguci Icon" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-[17px] text-[#090b0c] font-display">
                      Nguci
                    </span>
                  </div>

                  {/* Quota Counter (From PRD §7.7) */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>7/10 tersisa hari ini</span>
                  </div>
                </div>

                {/* Main In-App Body */}
                <div className="flex-1 bg-[#fbfbfc] p-4 space-y-3.5 overflow-y-auto">
                  {/* Live Voice Recording Status Card */}
                  <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-3.5 shadow-md space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        <span className="text-rose-300 font-semibold">Merekam Suara (id-ID)</span>
                      </div>
                      <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded-full">
                        00:18 / 00:60
                      </span>
                    </div>

                    {/* Speech Transcript Preview */}
                    <p className="text-[13px] font-normal text-white/95 leading-relaxed bg-white/5 rounded-xl p-2.5 border border-white/10">
                      &ldquo;Bayar kos tanggal 5, terus follow up supplier bubble wrap lusa sore, penting banget...&rdquo;
                    </p>

                    {/* Audio Waveform simulation */}
                    <div className="flex items-center justify-center gap-1 h-5 pt-1">
                      {[40, 65, 30, 80, 95, 45, 75, 100, 60, 85, 35, 70, 90, 50, 75, 40].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-emerald-400/90 rounded-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Screen Header (From PRD §7.4) */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-emerald-600" />
                      <span className="text-[12px] font-semibold text-neutral-800">
                        Hasil Parse AI (2 Task Draf)
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium">
                      Review sebelum simpan
                    </span>
                  </div>

                  {/* Parsed Task Card 1 */}
                  <div className="rounded-2xl bg-white p-3.5 border border-black/[0.08] shadow-xs space-y-2 transition-all hover:border-black/20">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded border-2 border-neutral-300 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="text-[13.5px] font-semibold text-neutral-900 leading-snug">
                            Bayar kos
                          </h4>
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md font-medium">
                              <Calendar size={11} className="text-neutral-500" />
                              5 Nov • 09:00
                            </span>
                            <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-200/60 px-1.5 py-0.5 rounded font-semibold">
                              Penting
                            </span>
                            <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded font-medium">
                              Keuangan
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium cursor-pointer hover:text-black">
                        Edit
                      </span>
                    </div>
                  </div>

                  {/* Parsed Task Card 2 */}
                  <div className="rounded-2xl bg-white p-3.5 border border-black/[0.08] shadow-xs space-y-2 transition-all hover:border-black/20">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded border-2 border-neutral-300 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="text-[13.5px] font-semibold text-neutral-900 leading-snug">
                            Follow up supplier bubble wrap
                          </h4>
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md font-medium">
                              <Clock size={11} className="text-neutral-500" />
                              Lusa (10 Okt) • 17:00
                            </span>
                            <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200/60 px-1.5 py-0.5 rounded font-semibold">
                              Tinggi
                            </span>
                            <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded font-medium">
                              Toko
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium cursor-pointer hover:text-black">
                        Edit
                      </span>
                    </div>
                  </div>

                  {/* Action Button: Simpan Semua */}
                  <div className="pt-1 flex gap-2">
                    <button className="flex-1 rounded-xl bg-[#090b0c] text-white py-2.5 text-[12.5px] font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-98">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>Simpan Semua (2 Task)</span>
                    </button>
                    <button className="rounded-xl bg-neutral-200/80 text-neutral-700 px-3 py-2.5 text-[12px] font-medium hover:bg-neutral-300">
                      Buang
                    </button>
                  </div>
                </div>

                {/* Big Floating Mic Button (Perekaman Suara §7.1) */}
                <div className="px-5 pt-3 pb-5 bg-white border-t border-neutral-100 flex flex-col items-center shrink-0">
                  <div className="relative">
                    {/* Pulsing Glow Rings */}
                    <span className="absolute -inset-2.5 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
                    <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-xs" />
                    <button className="relative w-15 h-15 rounded-full bg-[#090b0c] text-white flex items-center justify-center shadow-lg shadow-black/25 active:scale-90 transition-transform">
                      <Mic size={26} className="text-emerald-400" />
                    </button>
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-500 mt-2">
                    Tekan untuk Bicara
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

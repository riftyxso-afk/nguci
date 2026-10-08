"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function NguciLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-xs border border-black/[0.08] bg-white shrink-0">
        <Image
          src="/nguci.png"
          alt="Nguci Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[19px] font-bold tracking-tight text-[#090b0c] font-display leading-none">
          Nguci
        </span>
        <span className="text-[10px] font-medium text-neutral-400 tracking-wider uppercase leading-none mt-0.5">
          Voice to Task
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fitur", href: "#fitur" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Perbandingan", href: "#perbandingan" },
    { name: "Harga", href: "#harga" },
    { name: "Privasi", href: "#privasi" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-8 pt-3 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-200 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border border-black/[0.06]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <NguciLogo />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#090b0c] hover:text-neutral-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full bg-[#090b0c] px-4 py-2 text-[13.5px] font-medium text-white transition-all hover:bg-black/85 shadow-sm active:scale-95"
          >
            <span>Download App</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-800 rounded-lg hover:bg-neutral-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-xl border border-neutral-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-[#090b0c] py-1 border-b border-neutral-100"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center rounded-full bg-[#090b0c] py-2.5 text-[14px] font-medium text-white"
          >
            Download Nguci Android
          </a>
        </div>
      )}
    </header>
  );
}

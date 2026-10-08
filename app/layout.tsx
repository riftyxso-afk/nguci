import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguci — Ngomong, Jadi, Beres | Voice-to-Task App Bahasa Indonesia",
  description:
    "Nguci mengubah ucapan Bahasa Indonesia menjadi task terstruktur lengkap dengan tanggal, prioritas, dan reminder otomatis. Buat kamu yang nguci, biar omongannya nggak hilang begitu saja.",
  icons: {
    icon: "/nguci.png",
    apple: "/nguci.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

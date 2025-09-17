import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "My Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* ✅ Navbar pojok kanan atas */}
        <header className="w-full p-4 flex justify-end bg-white shadow-md sticky top-0 z-50">
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/home" className="hover:text-purple-600 transition">Home</Link>
            <Link href="/about" className="hover:text-purple-600 transition">About</Link>
            <Link href="/projects" className="hover:text-purple-600 transition">Projects</Link>
            <Link href="/skill" className="hover:text-purple-600 transition">Skill</Link>
            <Link href="/contact" className="hover:text-purple-600 transition">Contact</Link>
          </nav>
        </header>

        {/* ✅ Halaman Utama */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}

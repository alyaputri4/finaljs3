"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" 
    style={{
        backgroundImage: "url('/wallpaper.jpeg')",
      }}
    >
      
      {/* Heading */}
      <section className="max-w-2xl text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Home</h1>
      </section>

      {/* Photo and Name */}
      <section className="flex flex-col items-center gap-6">
        <Image
          src="/diriku.jpg" // Ganti dengan path foto Anda
          alt="Alyaaa"
          width={180}
          height={180}
          className="rounded-full object-cover"
          priority
        />

        <h2 className="text-3xl text-black font-semibold">Alya Nasmi Rahma Putri</h2>
        <p className="text-lg text-black text-center">Web Developer | UI/UX Enthusiast</p>

        {/* Tombol navigasi */}
        <div className="flex gap-4 mt-4">
          <Link href="/about">
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition">
              About
            </button>
          </Link>
          <Link href="/projects">
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition">
              Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-8"
    style= {{ backgroundImage: "url('/wallpaper.jpeg')"
     }}
      >
      <section className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Hubungi Saya</h1>

        {/* Form sederhana */}
        <form className="space-y-6 mb-8" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama"
              required
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email"
              required
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tulis pesan Anda"
              required
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Kirim Pesan
          </button>
        </form>

        {/* Kontak Sosial Media */}
        <div className="flex justify-center gap-10 text-purple-600">
          <a
            href="https://www.instagram.com/aaayamgeprek_?igsh=MWNjN3B2OHo4Z2hjZg==" // Ganti dengan IG kamu
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6282229968764" // Ganti dengan nomor WA kamu (format internasional)
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

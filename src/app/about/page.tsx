import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8" 
    style={{
        backgroundImage: "url('/wallpaper.jpeg')", // Ganti sesuai nama file di public/
      }}
      >
      <section className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-xl flex flex-col items-center">
        {/* Foto Profil */}
        <Image
          src="/alya.jpg" 
          alt="Foto Alya"
          width={150}
          height={150}
          className="rounded-full object-cover mb-6 border-4 border-blue-600"
        />

        {/* Judul */}
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Tentang Saya</h1>

        {/* Info */}
        <div className="space-y-4 text-lg w-full">
          <p><span className="font-semibold">Nama:</span> Alya Nasmi Rahma Putri</p>
          <p><span className="font-semibold">Kelas:</span> XI RPL B</p>
          <p><span className="font-semibold">Jurusan:</span> Rekayasa Perangkat Lunak</p>
          <p>
            <span className="font-semibold">Motivasi:</span>
            <br />
            Keberhasilan bukanlah milik orang pintar, keberhasilan adalah milik mereka yang senantiasa berusaha
          </p>
        </div>
      </section>
    </main>
  );
}

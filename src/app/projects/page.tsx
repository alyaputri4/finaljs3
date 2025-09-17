"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Website pribadi saya yang menampilkan portfolio.",
      url: "https://alya-nasmi-2.vercel.app/",
    },
    {
      id: 2,
      title: "Mendesign",
      description: "mendesign foto bersama.",
      url: "https://www.canva.com/design/DAGypY-ixas/-IRYs1jtgaJwIgo8p1G1lQ/edit?utm_content=DAGypY-ixas&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 3,
      title: "Basis Data ",
      description: "untuk membedakan antara Primary Key dan Foreign Key.",
      url: "",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8"
        style= {{ backgroundImage: "url('/wallpaper.jpeg')"
     }}
         >
      <h1 className="text-4xl font-bold mb-8 text-purple-700 text-center">Projects</h1>

      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {projects.map(({ id, title, description, url }) => (
          <div
            key={id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            </div>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-purple-600 hover:underline font-semibold"
            >
              Lihat Repository
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

"use client";

import project from "../data/project";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8"
        style= {{ backgroundImage: "url('/wallpaper.jpeg')"
     }}
         >
      <h1 className="text-4xl font-bold mb-8 text-purple-700 text-center">Projects</h1>

      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {project.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            </div>
            <Link
              href={project.url}
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

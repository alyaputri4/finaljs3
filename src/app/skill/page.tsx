export default function SkillPage() {
  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8"
     style={{
        backgroundImage: "url('/wallpaper.jpeg')", // Ganti sesuai nama file background kamu di public/
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-white-700">Skills</h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl w-full">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-default text-lg font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}

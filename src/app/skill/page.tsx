// src/app/skills/page.jsx
import { FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  ];

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: "url('/wallpaper.jpeg')", // ganti dengan path background kamu
      }}
    >
      <div className="bg-white/70 dark:bg-gray-900/70 p-8 rounded-2xl shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-8">My Skill</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              {skill.icon}
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

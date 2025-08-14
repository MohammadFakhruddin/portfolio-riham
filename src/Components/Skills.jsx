import React from "react";
import { SiFigma, SiJavascript, SiReact, SiMongodb, SiHtml5, SiCss3, SiNextdotjs, SiExpress, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black mx-auto flex flex-col items-center justify-center p-20"
    >
      <h2 className="text-4xl font-bold mb-8 text-[#00D4BD] text-center">
        My Skills
      </h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
  {skills.map((skill, index) => (
    <div
      key={skill.name}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center opacity-0 animate-slide-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="text-5xl text-[#00D4BD] mb-3">{skill.icon}</div>
      <span className="text-gray-700 font-medium">{skill.name}</span>
    </div>
  ))}
</div>

    </section>
  );
};

export default Skills;
 
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiDotnet,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Django", icon: <SiDjango className="text-green-900" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-700" /> },
];

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center px-6 md:px-20 py-16 bg-gray-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#FF6B35] mb-12">
          Skills
        </h2>
        {/* <p className="text-gray-600 mb-12 text-lg">
          I'm a passionate web developer who loves building clean and interactive web applications. I enjoy learning new technologies and turning ideas into real-life digital experiences.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Tech Stack
        </h3> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-gray-700 hover:scale-110 transition transform"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

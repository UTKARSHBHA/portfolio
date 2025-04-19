import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I’m a web developer with a passion for crafting sleek and efficient digital experiences. I specialize in frontend technologies like <span className="text-blue-600 font-semibold">React</span>, <span className="text-blue-600 font-semibold">TypeScript</span>, and <span className="text-blue-600 font-semibold">Tailwind CSS</span>, but I also enjoy working with backend systems and APIs.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "Node.js",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

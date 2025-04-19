import React from "react";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#FF6B35] mb-12">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#ff6b352c] text-[#FF6B35] text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-[#FF6B35] hover:underline font-medium"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-600 hover:underline font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// src/data/projectData.ts
export interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    image: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React, TypeScript, and Tailwind.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://yourportfolio.com",
      githubLink: "https://github.com/yourusername/portfolio",
      image: "/assets/portfolio.png", // Replace with your image path
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with user auth and rich text editor.",
      techStack: ["React", "Node.js", "MongoDB"],
      liveLink: "https://yourblog.com",
      githubLink: "https://github.com/yourusername/blog-platform",
      image: "/assets/blog.png",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with user auth and rich text editor.",
      techStack: ["React", "Node.js", "MongoDB"],
      liveLink: "https://yourblog.com",
      githubLink: "https://github.com/yourusername/blog-platform",
      image: "/assets/blog.png",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with user auth and rich text editor.",
      techStack: ["React", "Node.js", "MongoDB"],
      liveLink: "https://yourblog.com",
      githubLink: "https://github.com/yourusername/blog-platform",
      image: "/assets/blog.png",
    },
  ];
  
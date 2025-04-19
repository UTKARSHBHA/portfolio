import React from "react";
// import profileImage from "../assets/profile.jpg"; // Add your own image here

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate web developer specializing in building interactive and responsive websites using modern technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>

      {/* Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 mb-10 md:mb-0">
        <img
          src={"https://placehold.co/600x400"}
          alt="Profile"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

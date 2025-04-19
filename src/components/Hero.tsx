import React from "react";
import { motion } from 'framer-motion';
import ScrollDownArrow from "./ScrollDownArrow";

const Hero = () => {
  return (
    <>
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[100vh] px-60">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">
          Hi, I'm <span className="text-[#FF6B35]">Utkarsh Bhardwaj</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        A fast learner, self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.
        </p>
        <p className="text-lg text-gray-600 mb-6">Currently working at <span className="text-[#FF6B35]">Infosys</span> </p>
        {/* <a
          href="#projects"
          className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition"
        >
          View My Work
        </a> */}
      </div>
      
      {/* Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 mb-10 md:mb-0">
        <img
          src="https://placehold.co/600x400"
          alt="Profile"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      </section>
      <ScrollDownArrow />
        </>
  );
};

export default Hero;
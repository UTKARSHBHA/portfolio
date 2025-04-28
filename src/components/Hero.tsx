import React from "react";
import ScrollDownArrow from "./ScrollDownArrow";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden">
        
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span className="text-[#FF6B35]">Utkarsh Bhardwaj</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A fast learner, self-driven, quick starter, passionate programmer
            with a curious mind who enjoys solving complex and challenging
            real-world problems.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Currently working at <span className="text-[#FF6B35]">Infosys</span>
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mb-10 md:mb-0 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400"
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </section>

      <ScrollDownArrow />
    </>
  );
};

export default Hero;

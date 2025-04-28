import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // install react-icons if not already

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl text-[#FF6B35] leading-none">
              Utkarsh
            </h1>
            <p className="text-2xl md:text-3xl text-[#FF6B35] leading-none">
              Bhardwaj
            </p>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-4 md:space-x-6">
            <li>
              <a href="#about" className="hover:text-[#FF6B35] transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#FF6B35] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FF6B35] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="src/assets/utkarshResume.pdf" target="_blank" className="hover:text-[#FF6B35] transition">
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-[#FF6B35] focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 flex flex-col space-y-4 text-center bg-white py-4 shadow-md rounded-md">
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-[#FF6B35] transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="hover:text-[#FF6B35] transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-[#FF6B35] transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="src/assets/utkarshResume.pdf" 
                target="_blank"
                onClick={toggleMenu}
                className="hover:text-[#FF6B35] transition"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

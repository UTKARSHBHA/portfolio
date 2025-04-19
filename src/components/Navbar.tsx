import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#fff] shadow z-50">
      <nav className="max-w-full flex justify-between items-center px-60 md:px-60 py-4">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl text-[#FF6B35] leading-none mb-1 font-inter">Utkarsh</h1>
          <h1 className="text-3xl text-[#FF6B35] font-inter">Bhardwaj</h1>
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-[#FF6B35] transition">
              About
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
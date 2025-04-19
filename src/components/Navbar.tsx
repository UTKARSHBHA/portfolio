import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        <h1 className="text-xl font-bold text-blue-600">YourName</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

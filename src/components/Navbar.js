import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#111] shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-400">Shubham</div>
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#achievements" className="hover:text-blue-400">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

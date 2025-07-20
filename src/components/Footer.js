import React from "react";
import { FaArrowUp } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-[#111] text-center py-6 mt-12 relative">
      <button
        onClick={scrollToTop}
        className="absolute right-6 top-4 text-blue-400 hover:text-white transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Shubham Kalashetty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen pt-24 px-4 bg-[#0e0e0e]">
      <motion.img
        src="/profile.jpg"
        alt="Shubham Kalashetty"
        className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-blue-400 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m Shubham Kalashetty
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Computer Science & AI/ML Student | Developer | Problem Solver
      </motion.p>
    </section>
  );
};

export default Hero;

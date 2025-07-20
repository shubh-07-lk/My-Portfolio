import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python", "C", "C++", "Java", "HTML", "JavaScript", "React",
  "Streamlit", "MySQL", "Git", "GitHub", "Linux", "VS Code", "AWS (Basics)",
  "OOPs", "Data Structures"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-[#0e0e0e]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

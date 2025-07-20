import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#0e0e0e]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-gray-300 text-lg space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          I'm <span className="text-white font-semibold">Shubham Kalashetty</span>, a 3rd-year B.Tech student in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning at <strong>Alliance University</strong>, Bengaluru.
        </p>

        <p>
          Passionate about software engineering, machine learning, and problem solving. I’m actively involved in building real-world projects and participating in hackathons to sharpen my skills.
        </p>

        <div className="bg-[#1c1c1c] p-4 rounded-lg shadow-md">
          <p><strong className="text-white">🎓 Education:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>B.Tech in CSE (AI/ML)</strong> — Alliance University, 2026 | CGPA: 7.9</li>
            <li><strong>12th Grade</strong> — Tungal Independent PU College, Vijayapura | 2022 | 81%</li>
            <li><strong>10th Grade</strong> — Shri Renuka Foundation CBSE School, Kalaburagi | 2020 | 74.6%</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

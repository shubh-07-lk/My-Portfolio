import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "🏆 Participated in Smart India Hackathon",
    description: "Worked on the detection of Foot-and-Mouth Disease Virus (FMDV) using computer vision and AI techniques."
  },
  {
    title: "💻 5★ on HackerRank (Python)",
    description: "Demonstrated proficiency in Python with a 5-star rating and strong problem-solving skills."
  },
  {
    title: "🔧 Solved 50+ LeetCode Problems",
    description: "Consistent LeetCode practice to enhance DSA and algorithmic thinking."
  },
  {
    title: "🧠 Machine Learning Intern at Devtern",
    description: "June 2024 – July 2024 | Worked on ML model implementation and tuning."
  },
  {
    title: "☁️ IBM Cloud Intern via EduNet Foundation",
    description: "July 2024 – August 2024 | Gained foundational experience with cloud-based solutions and AI tools."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-[#0e0e0e]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements & Internships
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] border-l-4 border-blue-700 p-4 rounded shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

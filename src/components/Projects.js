import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Object Detection using YOLOv7",
    description:
      "Implemented a robust object detection system using YOLOv7, Roboflow dataset, and Python. The project leverages Weights & Biases for visualization and experiment tracking.",
    tech: ["Python", "YOLOv7", "Roboflow", "WandB"]
  },
  {
    title: "FakeBuster – Multilingual Fake News Detector",
    description:
      "Built a Streamlit-based fake news detector that supports multiple languages using Hugging Face Transformers. Integrated cosine similarity and sentence transformers for text analysis.",
    tech: ["Python", "Streamlit", "HuggingFace", "Transformers"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-[#0e0e0e]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] p-6 rounded-lg shadow-md border border-blue-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-800 text-blue-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

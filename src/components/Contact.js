import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#0e0e0e]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="text-center text-gray-300 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Feel free to connect with me via email or social platforms.
        </p>

        <div className="space-y-2">
          <p className="text-white">
            📧 Personal Email: <a href="mailto:shubhamkalashetty07@gmail.com" className="text-blue-400 hover:underline">shubhamkalashetty07@gmail.com</a>
          </p>
          <p className="text-white">
            📧 College Email: <a href="mailto:lshubhambtech22@alliance.edu.in" className="text-blue-400 hover:underline">lshubhambtech22@alliance.edu.in</a>
          </p>
        </div>

        <div className="flex justify-center gap-6 text-xl text-white mt-4">
          <a href="https://github.com/shubh-07-lk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-kalashetty-b02941272" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/shubham_821/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <SiLeetcode />
          </a>
          <a href="https://www.hackerrank.com/profile/shubhamkalashet1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaHackerrank />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

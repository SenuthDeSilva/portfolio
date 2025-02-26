import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold">Senuth De Silva</h2>
        <p className="text-sm mt-1">Full Stack Developer | AI/ML Enthusiast</p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/SenuthDeSilva" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-orange-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/senuthdesilva" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-orange-400 transition" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={24} className="hover:text-orange-400 transition" />
          </a>
        </div>

        <p className="text-xs mt-4">© {new Date().getFullYear()} Senuth De Silva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

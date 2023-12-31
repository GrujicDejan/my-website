import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0">
          <p className="text-sm opacity-70">
            &copy; 2023 Dejan Grujić, Inc. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/GrujicDejan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white" />
          </a>
          <a href="mailto:dejan.grujic2000@gmail.com">
            <FaEnvelope className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/dejan-grujic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

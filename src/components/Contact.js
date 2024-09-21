import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          Whether you want to reach out for inquiries, collaborations, or just a
          friendly hello, feel free to drop me a line or connect with me on
          social media!
        </p>

        {/* Email Button */}
        <a
          href="mailto:ipeter@uchicago.com"
          className="inline-block mb-8 px-8 py-4 bg-blue-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaEnvelope className="inline-block mr-3" /> Email Me
        </a>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/immanuel-peter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-4xl hover:text-blue-600 dark:hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/immanuel-peter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-4xl hover:text-gray-800 dark:hover:text-gray-100 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/moby763canary21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-4xl hover:text-black dark:hover:text-gray-100 transition duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/ipeter_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-4xl hover:text-pink-500 dark:hover:text-pink-600 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.threads.net/@ipeter_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-4xl hover:text-black dark:hover:text-gray-100 transition duration-300"
          >
            <FaThreads />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

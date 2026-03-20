import React from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type AboutProps = {
  totalDownloadsAllTime: number;
};

const About = ({ totalDownloadsAllTime }: AboutProps) => {
  const formattedTotalDownloads = new Intl.NumberFormat("en-US").format(
    totalDownloadsAllTime
  );

  return (
    <div
      id="about"
      className="flex flex-col justify-center py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        {/* Left Section */}
        <div className="md:w-2/3 space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Immanuel Peter
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400">
            MTS Intern @ Tensormesh · CS & Physics @ UChicago &apos;28
          </p>

          {/* Contact icons */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href="mailto:ipeter@uchicago.edu"
              aria-label="Email"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/immanuel-peter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/immanuel-peter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://x.com/moby763canary21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 pt-2 font-bold">
            I'm a Member of Technical Staff Intern at Tensormesh!
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My Hugging Face datasets have a total of{" "}
            {formattedTotalDownloads} downloads.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Need a quick crash course on me? Check out my{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-500 hover:underline dark:text-blue-400"
            >
              resume
            </Link>.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-end">
          <img
            src="/ipeter.jpg"
            alt="Immanuel Peter"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg ring-4 ring-gray-300 dark:ring-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

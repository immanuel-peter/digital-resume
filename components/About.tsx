import React from "react";
import ImmanuelAI from "./ImmanuelAI";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
        Hey, I'm Immanuel Peter! 👋
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-2/3 space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This summer, I'm diving deep into PyTorch, C++, CUDA, CARLA, Docker,
            and Linux while interning at a quantum computing startup. I'm
            building toward deep AI/ML expertise through engineering,
            experimentation, and system-building.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Need a quick crash course on my background and experience? Check out
            my{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-500 hover:underline dark:text-blue-400"
            >
              resume
            </Link>.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Want to dive deeper into my journey? Let's have a chat with{" "}
            <ImmanuelAI />
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-end">
          <img
            src="/ipeter.jpg"
            alt="Immanuel Peter"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg ring-4 ring-blue-300 dark:ring-blue-600"
          />
        </div>
      </div>

      {/* Bottom Section: Add an Interactive or Motivational Quote */}
      <div>
        <p className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
          "Engineering the future, one line of code at a time." 🌍💻
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import ProfileImage from "../assets/ipeter.jpg";
import ImmanuelAI from "./ImmanuelAI";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
        Hey, I'm Immanuel Peter! 👋
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-2/3 space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This summer, I'm diving deep into PyTorch, C++, CARLA, Docker, and
            Linux while interning at a quantum computing startup. I'm building
            toward deep AI/ML expertise through engineering, experimentation,
            and system-building
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Need a quick crash course on my background and experience? Check out
            my{" "}
            <a
              href="https://uchicago.box.com/s/ww0c9y7hs0623ktyfrzr3e568f0h2xh4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              resume
            </a>
            .
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Want to dive deeper into my journey? Let's have a chat with{" "}
            <ImmanuelAI />
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-end">
          <img
            src={ProfileImage}
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

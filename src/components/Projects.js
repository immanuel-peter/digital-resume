import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col bg-slate-100 dark:bg-gray-800">
      <div className="p-4 flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-blue-400 mb-2">
          {title}
        </h3>
        <p
          className={`text-gray-600 dark:text-gray-300 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 mt-2 flex items-center transition-colors duration-200"
        >
          {expanded ? (
            <>
              Less <FaChevronUp className="ml-1" />
            </>
          ) : (
            <>
              More <FaChevronDown className="ml-1" />
            </>
          )}
        </button>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
              status === "Ongoing"
                ? "bg-green-300 text-green-800 dark:bg-green-500 dark:text-white"
                : "bg-blue-300 text-blue-800 dark:bg-blue-500 dark:text-white"
            }`}
          >
            {status}
          </span>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-500"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-500"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "CodingOH",
      description:
        "CodingOH's mission is to make coding human again! CodingOH aims to streamline the development process by providing a platform where coders can get direct answers to their problems. We believe developers shouldn't spend excessive time debugging at the expense of writing functional code. Rather than scouring multiple Stack Overflow pages for answers specific to your codebase, you should be able to get direct help from experienced developers. Additionally, CodingOH provides portfolio pages for developers, enabling employers to scout potential hires on the site. Developers can showcase their tech stack, coding skills, soft skills, and personal projects on CodingOH.",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "GitHub",
      ],
      githubUrl: "https://github.com/immanuel-peter/codingoh-platform",
      status: "Ongoing",
    },
    {
      title: "CodingOH Twitter Bot",
      description:
        "The CodingOH Twitter Bot is a Python-based bot designed to engage the developer community on Twitter with programming insights, tips, and humor. By leveraging OpenAI's GPT-4 model and the Tweepy library, this bot generates and posts tweets every 12 hours, providing a blend of educational and entertaining content.",
      technologies: ["Python", "OpenAI", "Tweepy", "GitHub Actions"],
      githubUrl: "https://github.com/immanuel-peter/codingoh_x_bot",
      liveUrl: "https://twitter.com/CodingOH",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website highlights my projects, skills, experience, and certifications. It features ImmanuelAI, an interactive component that provides personalized answers to visitor inquiries about me. The site is developed with React and styled using Tailwind CSS, and it is hosted on GitHub Pages.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "OpenAI",
        "GitHub Pages",
      ],
      githubUrl: "https://github.com/immanuel-peter/me",
      status: "Completed",
    },
  ];

  return (
    <div
      id="projects"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-left">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
}: ProjectCardProps) => {
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
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 mt-2 flex items-center transition-colors duration-200 cursor-pointer"
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
                : status === "Paused"
                ? "bg-yellow-300 text-yellow-800 dark:bg-yellow-500 dark:text-white"
                : "bg-blue-300 text-blue-800 dark:bg-blue-500 dark:text-white"
            }`}
          >
            {status}
          </span>
          {technologies.map((tech: string, index: number) => (
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
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-500 cursor-pointer"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-500 cursor-pointer"
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
      title: "AutoMoE",
      description: "A modular, multi-task self-driving system based on a Mixture-of-Experts (MoE) architecture. This approach uses specialized neural networks for specific perception tasks and a gating network to combine their outputs, aiming for a more modular, interpretable, and efficient model for navigating complex environments.",
      technologies: [
        "Python",
        "PyTorch",
        "PyTorch DDP",
        "CUDA",
        "CARLA",
        "Hugging Face",
        "NumPy",
        "Linux",
        "Bash"
      ],
      githubUrl: "https://github.com/immanuel-peter/self-driving-model",
      status: "Paused",
    },
    {
      title: "CARLA Autopilot Multimodal Dataset",
      description: "A large-scale open dataset for autonomous driving research, featuring 82K+ synchronized samples with RGB camera views, semantic segmentation, LiDAR point clouds, 2D bounding boxes, and detailed ego-vehicle states. Built in CARLA with varied weather, maps, and traffic to support tasks like object detection, sensor fusion, imitation learning, and reinforcement learning.",
      technologies: [
        "Python",
        "CARLA",
        "NumPy",
        "Hugging Face Datasets",
        "Linux",
        "Bash"
      ],
      githubUrl: "https://github.com/immanuel-peter",
      liveUrl: "https://huggingface.co/datasets/immanuelpeter/carla-autopilot-multimodal-dataset",
      status: "Completed"
    },
    {
      title: "CARLA Autopilot Images Dataset",
      description: "An open, multi-camera dataset (~188 GB, 68k frames) generated in CARLA with synchronized images, vehicle kinematics, control signals, traffic density, and collision logs. Designed for imitation learning, vision-to-control benchmarks, and multimodal self-driving research. Released with a reproducible collection pipeline and Hugging Face integration.",
      technologies: [
        "Python",
        "CARLA",
        "NumPy",
        "Hugging Face Datasets",
        "Linux",
        "Bash"
      ],
      githubUrl: "https://github.com/immanuel-peter",
      liveUrl: "https://huggingface.co/datasets/immanuelpeter/carla-autopilot-images",
      status: "Completed"
    },
    {
      title: "Mini JAX ViT",
      description:
        "A compact Vision Transformer implemented from scratch in JAX/Flax. Includes patch embedding, multi-head self-attention, MLP blocks, and a clear training loop for image classification, focused on readability and educational value.",
      technologies: ["JAX", "Flax", "NumPy"],
      githubUrl: "https://github.com/immanuel-peter/jax-vit",
      status: "Completed",
    },
    {
      title: "GovHub",
      description: "GitHub for Government!",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GitHub",
        "Congress.gov API",
      ],
      githubUrl: "https://github.com/immanuel-peter/govhub",
      liveUrl: "https://govhub-five.vercel.app",
      status: "Ongoing",
    },
    {
      title: "AI Commit",
      description:
        "A bash script that uses OpenAI's GPT-4.1-nano model to automatically generate meaningful commit messages based on your staged changes.",
      technologies: ["Bash", "OpenAI API"],
      githubUrl: "https://github.com/immanuel-peter/ai-commit",
      status: "Completed",
    },
    {
      title: "LocalRAG",
      description:
        "LocalRAG is a terminal-based LLM chat tool that provides infinite memory via local vector search. Designed as a privacy-first alternative to ChatGPT/Claude, it embeds chat history into FAISS and retrieves relevant past context for smarter replies. Users can save conversations, switch models mid-session, and continue prior chats seamlessly. Built with modular CLI components and persistent local storage, LocalRAG demonstrates RAG principles, efficient context injection, and LLM interfacing — all without sending data to any external server.",
      technologies: [
        "Python",
        "FAISS",
        "Hugging Face Transformers",
        "OpenAI API",
        "Anthropic API",
        "Click",
        "Rich",
      ],
      githubUrl: "https://github.com/immanuel-peter/localrag",
      status: "Completed",
    },
    {
      title: "Semantic Image Search Engine",
      description:
        "A full-stack semantic image search application using FastAPI, PyTorch, and Next.js. The project leverages OpenAI's CLIP model to enable efficient text-to-image querying. Users can search for images from a preloaded random dataset based on natural language queries. The application showcases API integration with the Unsplash API for random image loading and features a responsive frontend built with Tailwind CSS.",
      technologies: [
        "Python",
        "FastAPI",
        "PyTorch",
        "Hugging Face Transformers",
        "Next.js",
        "Tailwind CSS",
        "Unsplash API",
      ],
      githubUrl: "https://github.com/immanuel-peter/semantic-image-search",
      status: "Completed",
    },
    // {
    //   title: "CodingOH",
    //   description:
    //     "CodingOH's mission is to make coding human again! CodingOH aims to streamline the development process by providing a platform where coders can get direct answers to their problems. We believe developers shouldn't spend excessive time debugging at the expense of writing functional code. Rather than scouring multiple Stack Overflow pages for answers specific to your codebase, you should be able to get direct help from experienced developers. Additionally, CodingOH provides portfolio pages for developers, enabling employers to scout potential hires on the site. Developers can showcase their tech stack, coding skills, soft skills, and personal projects on CodingOH.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Supabase",
    //     "PostgreSQL",
    //     "GitHub",
    //   ],
    //   githubUrl: "https://github.com/immanuel-peter/codingoh-platform",
    //   status: "Ongoing",
    // },
    {
      title: "CodingOH Twitter Bot",
      description:
        "The CodingOH Twitter Bot is a Python-based bot designed to engage the developer community on Twitter with programming insights, tips, and humor. By leveraging OpenAI's GPT-4 model and the Tweepy library, this bot generates and posts tweets every 12 hours, providing a blend of educational and entertaining content.",
      technologies: ["Python", "OpenAI", "Tweepy", "GitHub Actions"],
      githubUrl: "https://github.com/immanuel-peter/codingoh_x_bot",
      // liveUrl: "https://twitter.com/CodingOH",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website highlights my projects, skills, experience, and certifications. It features ImmanuelAI, an interactive component that provides personalized answers to visitor inquiries about me. The site is developed with React and styled using Tailwind CSS, and it is hosted on Vercel.",
      technologies: ["React", "Tailwind CSS", "Node.js", "OpenAI", "Vercel"],
      githubUrl: "https://github.com/immanuel-peter/digital-resume",
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
        {projects.map((project: ProjectCardProps, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

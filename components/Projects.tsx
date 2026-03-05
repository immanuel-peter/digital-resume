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
  githubUrl?: string;
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
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
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
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-2 flex items-center transition-colors duration-200 cursor-pointer"
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
            className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            {status}
          </span>
          {technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-300 dark:hover:text-white cursor-pointer"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-300 dark:hover:text-white cursor-pointer"
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
      title: "Hostess",
      description:
        "The Vercel for multi-service deployments. A Go CLI that reads a simple config file and auto-generates Kubernetes manifests for any number of services, handling routing, secrets, and scaling out of the box. Designed to eliminate the boilerplate of multi-service K8s deployments.",
      technologies: ["Go", "Kubernetes", "Docker", "CLI"],
      liveUrl: "https://hostess.sh",
      status: "Completed",
    },
    {
      title: "Redis Operator",
      description:
        "A Kubernetes operator for Redis, inspired by CloudNativePG. Supports standalone, sentinel, and cluster modes with direct pod and PVC management. Implements a fencing-first failover strategy to prevent split-brain scenarios and ensure data consistency during node failures.",
      technologies: [
        "Go",
        "Kubernetes",
        "Redis",
        "Operator SDK",
        "Sentinel",
      ],
      githubUrl: "https://github.com/howl-cloud/redis-operator",
      status: "Completed",
    },
    {
      title: "AutoMoE",
      description:
        "A modular, multi-task self-driving system based on a Mixture-of-Experts (MoE) architecture. Uses specialized neural networks for specific perception tasks and a gating network to combine their outputs, aiming for a more modular, interpretable, and efficient model for navigating complex environments.",
      technologies: [
        "Python",
        "PyTorch",
        "CUDA",
        "CARLA",
        "Hugging Face",
      ],
      githubUrl: "https://github.com/immanuel-peter/self-driving-model",
      status: "Paused",
    },
    {
      title: "Launchpad",
      description:
        "AI-powered student–startup matching platform. Uses pgvector for semantic search across student profiles and startup listings, with async BullMQ scoring pipelines that rank candidates by fit. Helps early-stage startups find talent and students discover opportunities aligned with their skills.",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "pgvector",
        "BullMQ",
        "PostgreSQL",
      ],
      liveUrl: "https://trylaunchpad.xyz",
      status: "Completed",
    },
    {
      title: "Matchbox",
      description:
        "An AI-powered research matching platform that connects university students with labs using semantic search and LLM-based fit scoring. Streamlines the application process with a centralized portal, replacing fragmented email workflows with automated candidate discovery, resume parsing, and compatibility ranking.",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Google Cloud Platform",
        "ChromaDB",
        "OpenAI API",
      ],
      liveUrl: "https://matchbox.eduspheretech.com",
      status: "Completed",
    },
    {
      title: "Grok Review",
      description:
        "Turns any public GitHub PR URL into a streaming AI code review powered by Grok-4. Paste a PR link, and get instant, line-by-line feedback on logic, style, and potential bugs — streamed in real time.",
      technologies: ["Next.js", "TypeScript", "Grok API", "GitHub API"],
      githubUrl: "https://github.com/immanuel-peter/grokreview",
      liveUrl: "https://grokreq.com",
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

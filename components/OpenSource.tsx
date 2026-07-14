import React from "react";

type OpenSourceItemProps = {
  project: string;
  repository: string;
  technologies: string;
  details: string[];
  links: { label: string; url: string }[];
};

const OpenSourceItem = ({
  project,
  repository,
  technologies,
  details,
  links,
}: OpenSourceItemProps) => {
  return (
    <div className="py-6 px-3 hover:shadow-lg dark:hover:bg-gray-800 transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {project}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{repository}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {technologies}
      </p>
      <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300">
        {details.map((detail) => (
          <li key={detail} className="mt-1">
            {detail}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 mt-3 text-sm">
        {links.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white underline underline-offset-4"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const OpenSource = () => {
  const contributions = [
    {
      project: "Brev CLI",
      repository: "brevdev/brev-cli",
      technologies: "Go · CLI",
      details: [
        "Authored the core rsync-first file-transfer implementation with automatic SCP fallback and unit coverage",
      ],
      links: [
        {
          label: "Original PR #297",
          url: "https://github.com/brevdev/brev-cli/pull/297",
        },
        {
          label: "Continuation PR #423",
          url: "https://github.com/brevdev/brev-cli/pull/423",
        },
      ],
    },
    {
      project: "Pyrefly",
      repository: "facebook/pyrefly",
      technologies: "Rust · Python type checker",
      details: [
        "Submitted an upstream Rust cleanup standardizing the error-summary module and imports from 'summarise' to 'summarize'.",
      ],
      links: [
        {
          label: "PR #1370",
          url: "https://github.com/facebook/pyrefly/pull/1370",
        },
      ],
    },
    {
      project: "vLLM Production Stack",
      repository: "vllm-project/production-stack",
      technologies: "Kubernetes · Helm",
      details: [
        "Landed router volume and mount support for read-only root filesystems and corrected the default NVIDIA runtime class with regenerated CRD manifests.",
      ],
      links: [
        {
          label: "PR #975",
          url: "https://github.com/vllm-project/production-stack/pull/975",
        },
        {
          label: "PR #974",
          url: "https://github.com/vllm-project/production-stack/pull/974",
        },
      ],
    },
  ];

  return (
    <div
      id="open-source"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 text-left">
        Open Source
      </h1>
      {contributions.map((contribution) => (
        <OpenSourceItem key={contribution.project} {...contribution} />
      ))}
    </div>
  );
};

export default OpenSource;

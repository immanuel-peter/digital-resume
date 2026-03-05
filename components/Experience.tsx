import React from "react";

type ExperienceItemProps = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  details: string[];
  boldDetails?: number[];
};

const ExperienceItem = ({
  position,
  company,
  startDate,
  endDate,
  location,
  details,
  boldDetails = [],
}: ExperienceItemProps) => {
  return (
    <div className="py-6 px-3 hover:shadow-lg dark:hover:bg-gray-800 transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {position}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{company}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {startDate} - {endDate}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{location}</p>
      <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300">
        {details.map((detail: string, index: number) => (
          <li key={index} className={`mt-1 ${boldDetails.includes(index) ? "font-bold" : ""}`}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      position: "Open Source Contributor",
      company: "Meta",
      startDate: "October 2025",
      endDate: "October 2025",
      location: "Remote",
      details: [
        "Contributed to Pyrefly, Meta's high-performance Python type checker and language server written in Rust.",
        "Refactored the error summarization subsystem by enforcing standard naming conventions across module definitions and import paths.",
      ],
      boldDetails: [0],
    },
    {
      position: "Software Engineer Intern",
      company: "Quantum Rings",
      startDate: "June 2025",
      endDate: "August 2025",
      location: "Chicago, IL",
      details: [
        "Delivered 19 PRs, 43 contributions, and 15 completed GitHub issues across the internship, adding ~15K LOC and removing ~3.6K LOC while reviewing code and driving schema refactors.",
        "Migrated execution data from the user entity to a dedicated relational table with FKs, modularizing schema and ensuring test suite stability with no performance regression.",
        "Implemented a telemetry aggregation background worker (AWS SQS + TypeORM) to asynchronously roll up user execution activity, improving scalability and simplifying downstream analytics queries.",
        "Designed and deployed queue-driven execution processing to decouple heavy telemetry operations from the API, reducing request latency and enabling horizontal scaling.",
        "Built full-stack admin analytics dashboards with NestJS, Next.js, and Recharts, integrating SQL time-bucket aggregation and timezone-safe filtering to track user growth, active usage, and execution volume.",
      ],
      boldDetails: [0],
    },
    {
      position: "Volunteer Tutor",
      company: "Schoolhouse.world",
      startDate: "January 2021",
      endDate: "Present",
      location: "Remote",
      details: [
        "170+ hours of free peer-to-peer tutoring across 730+ learners in nearly 40 countries; ranked top 0.1% of tutors by follower count on the platform.",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 text-left">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;

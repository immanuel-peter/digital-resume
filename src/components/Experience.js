import React from "react";

const ExperienceItem = ({
  position,
  company,
  startDate,
  endDate,
  location,
  details,
}) => {
  return (
    <div className="py-6 px-3 hover:shadow-lg dark:hover:bg-gray-800 transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
        {position}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{company}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {startDate} - {endDate}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{location}</p>
      <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300">
        {details.map((detail, index) => (
          <li key={index} className="mt-1">
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
      position: "Software Engineer Intern",
      company: "Quantum Rings",
      startDate: "June 2025",
      endDate: "August 2025",
      location: "Chicago, IL",
      details: [
        "Fixed backend API container startup in Docker, restoring a reliable docker-compose development environment.",
        "Migrated executionStats from the User entity to a dedicated table with a foreign key; updated entities, queries, and tests with no performance regressions.",
        "Built analytics API endpoints and admin dashboards for new/active users with time-interval filtering and robust missing-bucket handling.",
        "Implemented an SQS-driven telemetry aggregation worker (TypeORM) to compute daily rollups with idempotent upserts; added migrations and infra configs.",
        "Added Executions and Executions by User widgets and a Usage Metrics tab (MUI + Recharts) with interval selection and performance indexes.",
        "Integrated HubSpot contact sync via SQS: introduced HubSpotQueueService and two consumers (user sync, execution sync) with fault-tolerant retries and observability.",
        "Decoupled telemetry execution processing from the API into an SQS worker, reducing API latency and enabling scalable, reliable background processing.",
        "Redesigned admin analytics to a fullscreen carousel with global time filters, dark-mode theming, and 30s rotation.",
        "Provisioned in-house LinkedIn-style certifications: designed the database schema and admin tooling to issue certificates to eligible users (in progress).",
        "Coordinated SQL schema, queues, and Docker/env consistency across services; documented workflows for long-term maintainability.",
      ],
    },
    {
      position: "Data Analyst Intern",
      company: "Cornerstone Business Solutions",
      startDate: "June 2022",
      endDate: "August 2022",
      location: "Bentonville, AR",
      details: [
        "Analyzed sales data for over 500 products using Excel dashboards, identifying top-performing items and contributing to a 15% increase in inventory efficiency.",
        "Developed a Python web scraper to monitor real-time in-stock availability of 100+ Walmart items, improving restocking decisions and reducing stockouts by 20%.",
      ],
    },
    {
      position: "Volunteer Tutor",
      company: "Schoolhouse.world",
      startDate: "January 2021",
      endDate: "Present",
      location: "Remote",
      details: [
        "Conducted over 170 hours of free peer-to-peer tutoring, assisting students in various subjects and supporting fellow tutors.",
        "Facilitated over 160 engaging online sessions, fostering a dynamic learning environment for students worldwide.",
        "Directly influenced the academic growth of over 730 learners, significantly contributing to global education.",
        "Expanded global reach by impacting learners across nearly 40 countries.",
        "Amassed over 325 followers on the Schoolhouse.world platform, ranking among the top 0.1% of tutors in terms of follower count.",
        "Led the SAT Mega Review Session, a popular preparatory session helping students improve their SAT scores.",
        "Moderated the History subworld, a forum facilitating academic discussions and providing resources for history enthusiasts.",
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

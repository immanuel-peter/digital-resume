import Section from "./Section";

type ExperienceItem = {
  company: string;
  position: string;
  location: string;
  dates: string;
  highlights: string[];
  more: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Tensormesh",
    position: "Member of Technical Staff Intern",
    location: "Foster City, CA",
    dates: "Mar 2026 – now",
    highlights: [
      "Contributed upstream to LMCache, adding a coordinator endpoint for listing pinned cache entries and per-key access tracking in the key directory.",
      "Shipped 35 PRs and 100+ commits across 9 company repos spanning LLM observability and inference optimization.",
    ],
    more: [
      "Integrated Arize Phoenix into Tensormesh’s observability stack, emitting OpenInference LLM traces from the router for all requests, and shipped SDK and CLI tooling for inspecting traces and spans.",
      "Reworked the Prometheus metrics for TTFT, throughput, and other rollups that power the serverless observability dashboards.",
      "Built an orchestrator microservice that pins prompts in LMCache asynchronously during inference, and exposed pin management through the API, SDK, and CLI.",
      "Built a KV cache discovery interface on top of the LMCache Coordinator API to browse cached keys, tokens, and utilization across engines.",
      "Led an internal research effort on key weighting for long-context inference, from evals to writeups.",
    ],
  },
  {
    company: "Quantum Rings",
    position: "Software Engineer Intern",
    location: "Chicago, IL",
    dates: "Jun – Aug 2025",
    highlights: [],
    more: [
      "Delivered 19 PRs, 43 contributions, and 15 completed GitHub issues across the internship, adding ~15K LOC and removing ~3.6K LOC while reviewing code and driving schema refactors.",
      "Migrated execution data from the user entity to a dedicated relational table with FKs, modularizing schema and ensuring test suite stability with no performance regression.",
      "Implemented a telemetry aggregation background worker (AWS SQS + TypeORM) to asynchronously roll up user execution activity, improving scalability and simplifying downstream analytics queries.",
      "Designed and deployed queue-driven execution processing to decouple heavy telemetry operations from the API, reducing request latency and enabling horizontal scaling.",
      "Built full-stack admin analytics dashboards with NestJS, Next.js, and Recharts, integrating SQL time-bucket aggregation and timezone-safe filtering to track user growth, active usage, and execution volume.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" label="Experience">
    {experiences.map((item) => (
      <article key={item.company} className="mb-[52px] last:mb-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl leading-[1.2] font-semibold tracking-[-0.02em]">{item.company}</h3>
          <span className="text-[14.5px] tabular-nums text-[#74746f]">{item.dates}</span>
        </div>
        <p className="mt-1 text-[15.5px] text-[#74746f]">
          {item.position} · {item.location}
        </p>
        {item.highlights.length > 0 && (
          <ul className="mn-bl">
            {item.highlights.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <details className="mn-more">
          <summary>
            <span className="mn-more-open">+ More</span>
            <span className="mn-more-close">− Less</span>
          </summary>
          <ul className="mn-bl mt-1.5">
            {item.more.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </details>
      </article>
    ))}
  </Section>
);

export default Experience;

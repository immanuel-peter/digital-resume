import Section from "./Section";

type Contribution = {
  project: string;
  repository: string;
  changes: { text: string; prs: { number: number; url: string }[] }[];
};

const contributions: Contribution[] = [
  {
    project: "LMCache",
    repository: "LMCache/LMCache",
    changes: [
      {
        text: "Added a coordinator endpoint for listing pinned cache entries.",
        prs: [{ number: 4960, url: "https://github.com/LMCache/LMCache/pull/4960" }],
      },
      {
        text: "Added per-key access tracking to the coordinator key directory.",
        prs: [{ number: 4873, url: "https://github.com/LMCache/LMCache/pull/4873" }],
      },
    ],
  },
  {
    project: "vLLM Production Stack",
    repository: "vllm-project/production-stack",
    changes: [
      {
        text: "Added router volume and mount support for read-only root filesystems.",
        prs: [{ number: 975, url: "https://github.com/vllm-project/production-stack/pull/975" }],
      },
      {
        text: "Corrected the default NVIDIA runtime class, with regenerated CRD manifests.",
        prs: [{ number: 974, url: "https://github.com/vllm-project/production-stack/pull/974" }],
      },
    ],
  },
  {
    project: "Brev CLI",
    repository: "brevdev/brev-cli",
    changes: [
      {
        text: "Authored the core rsync-first file-transfer implementation, with automatic SCP fallback and unit coverage.",
        prs: [{ number: 423, url: "https://github.com/brevdev/brev-cli/pull/423" }],
      },
    ],
  },
  {
    project: "Pyrefly",
    repository: "facebook/pyrefly",
    changes: [
      {
        text: "Upstream Rust cleanup standardizing the error-summary module and imports from “summarise” to “summarize”.",
        prs: [{ number: 1370, url: "https://github.com/facebook/pyrefly/pull/1370" }],
      },
    ],
  },
];

const OpenSource = () => (
  <Section id="oss" label="Open source">
    <div className="border-b border-[#e8e8e5]">
      {contributions.map(({ project, repository, changes }) => (
        <div key={repository} className="border-t border-[#e8e8e5] pt-[18px] pb-3">
          <h3 className="font-medium">
            <a href={`https://github.com/${repository}`} target="_blank" rel="noopener noreferrer" className="mn-link">
              {project}
            </a>
          </h3>
          <ul className="mn-bl mt-2">
            {changes.map(({ text, prs }) => (
              <li key={text}>
                {text}{" "}
                {prs.map(({ number, url }) => (
                  <a key={number} href={url} target="_blank" rel="noopener noreferrer" className="mn-link">
                    #{number}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default OpenSource;

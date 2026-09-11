export const TOC_SECTIONS = [
  { id: "why", label: "Why" },
  { id: "table", label: "Capabilities" },
  { id: "method", label: "Method" },
  { id: "results", label: "Results" },
  { id: "limits", label: "Limits" },
  { id: "explorer", label: "Explorer" },
];

export default function Toc({ activeId }: { activeId: string }) {
  return (
    <nav className="toc" aria-label="Sections">
      {TOC_SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeId === section.id ? "is-active" : undefined}
        >
          <span className="dot" />
          <span className="label">{section.label}</span>
        </a>
      ))}
    </nav>
  );
}

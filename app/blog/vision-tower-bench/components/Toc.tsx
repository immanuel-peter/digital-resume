import type { VTBVersion } from "../versions";

type TocSection = { id: string; label: string };

export function tocSections(version: VTBVersion): TocSection[] {
  return [
    { id: "why", label: "Why" },
    { id: "table", label: "Capabilities" },
    { id: "method", label: "Method" },
    { id: "results", label: "Results" },
    ...(version.choose ? [{ id: "choose", label: "Choose" }] : []),
    { id: "limits", label: "Limits" },
    { id: "explorer", label: "Explorer" },
  ];
}

export default function Toc({
  sections,
  activeId,
}: {
  sections: TocSection[];
  activeId: string;
}) {
  return (
    <nav className="toc" aria-label="Sections">
      {sections.map((section) => (
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

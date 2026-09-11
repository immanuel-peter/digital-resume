import type { VTBVersion } from "../versions";

function PaperIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function RepoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" className="flex-none">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function LinksRow({
  version,
  versions,
  onVersionChange,
}: {
  version: VTBVersion;
  versions: VTBVersion[];
  onVersionChange: (id: string) => void;
}) {
  return (
    <div className="mb-[76px] flex flex-wrap gap-3">
      {version.links.map((link) =>
        link.label === "Paper" ? (
          <span
            key="Paper"
            tabIndex={0}
            aria-disabled="true"
            aria-label="Paper (Coming soon)"
            title="Coming soon"
            className="font-display group relative inline-flex cursor-not-allowed items-center gap-[9px] rounded-full bg-vtb-ink px-5 py-2.5 text-[0.9rem] font-semibold text-white opacity-80"
          >
            <PaperIcon />
            Paper
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-vtb-ink px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              Coming soon
            </span>
          </span>
        ) : (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="font-display inline-flex items-center gap-[9px] rounded-full border-b-0 bg-vtb-ink px-5 py-2.5 text-[0.9rem] font-semibold text-white"
          >
            {link.label === "Repo" && <RepoIcon />}
            {link.emoji && (
              <span className="text-[1.05rem] leading-none">{link.emoji}</span>
            )}
            {link.label}
          </a>
        ),
      )}
      <div className="ml-auto flex items-center gap-2.5">
        <span className="font-display text-[0.68rem] tracking-[0.13em] text-vtb-mute uppercase">
          Version
        </span>
        <select
          className="font-display version"
          aria-label="Report version"
          value={version.id}
          onChange={(e) => onVersionChange(e.target.value)}
        >
          {versions.map((v) => (
            <option key={v.id} value={v.id}>
              {v.selectorLabel}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

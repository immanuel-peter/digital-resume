import type { VTBVersion } from "../versions";
import Split from "./Split";
import VtbKicker from "./VtbKicker";

export default function Changelog({ version }: { version: VTBVersion }) {
  return (
    <Split className="border-t-2 border-vtb-ink pt-10">
      <VtbKicker className="pt-[5px]">Changelog</VtbKicker>
      <div className="flex flex-col gap-4">
        {version.changelog.map((entry, i) => (
          <div
            key={`${entry.date}-${i}`}
            className="flex items-baseline gap-[22px] border-t border-vtb-linesoft pt-4"
          >
            <span className="font-vtbmono text-[0.79rem] whitespace-nowrap text-vtb-mute">
              {entry.date}
            </span>
            <p
              className="text-[0.96rem] text-vtb-body"
              dangerouslySetInnerHTML={{ __html: entry.html }}
            />
          </div>
        ))}
      </div>
    </Split>
  );
}

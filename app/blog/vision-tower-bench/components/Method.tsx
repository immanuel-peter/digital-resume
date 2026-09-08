import type { VTBVersion } from "../versions";
import Split from "./Split";
import VtbKicker from "./VtbKicker";

function MethodParagraph({ text }: { text: string }) {
  return (
    <p className="text-[1.02rem] text-vtb-body">
      {text.split(/(merged|projected)/g).map((part, i) =>
        part === "merged" || part === "projected" ? (
          <span key={i} className="font-vtbmono text-[0.86rem]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export default function Method({ version }: { version: VTBVersion }) {
  return (
    <Split
      id="method"
      className="mb-[52px] scroll-mt-6 border-t-2 border-vtb-ink pt-11"
    >
      <VtbKicker className="pt-[7px]">Method, in short</VtbKicker>
      <div className="flex flex-col gap-4">
        {version.method.map((paragraph, i) => (
          <MethodParagraph key={`method-${i}`} text={paragraph} />
        ))}
      </div>
    </Split>
  );
}

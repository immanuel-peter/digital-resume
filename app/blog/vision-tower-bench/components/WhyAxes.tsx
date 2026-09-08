import type { VTBVersion } from "../versions";
import Split from "./Split";
import VtbKicker from "./VtbKicker";

export function Why({ version }: { version: VTBVersion }) {
  return (
    <Split id="why" className="mb-[84px] scroll-mt-6">
      <VtbKicker className="pt-[7px]">Why this exists</VtbKicker>
      <div className="flex flex-col gap-[17px]">
        <p className="text-[1.06rem]">{version.why}</p>
      </div>
    </Split>
  );
}

export function Axes({ version }: { version: VTBVersion }) {
  return (
    <div
      id="axes"
      className="mb-[34px] flex scroll-mt-6 flex-col gap-[22px] border-t-2 border-vtb-ink pt-10"
    >
      <VtbKicker>What the capability axes mean</VtbKicker>
      <div className="grid grid-cols-1 gap-[26px] min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
        {version.axes.map((axis) => (
          <div key={axis.title} className="flex flex-col gap-1.5">
            <h3 className="m-0 text-[1rem] font-semibold">{axis.title}</h3>
            <p className="text-[0.9rem] text-vtb-body">{axis.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

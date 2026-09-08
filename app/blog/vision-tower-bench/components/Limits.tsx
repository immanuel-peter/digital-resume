import type { VTBVersion } from "../versions";
import Split from "./Split";
import VtbKicker from "./VtbKicker";

export default function Limits({ version }: { version: VTBVersion }) {
  return (
    <Split
      id="limits"
      className="mb-[100px] scroll-mt-6 border-t-2 border-vtb-ink pt-11"
    >
      <VtbKicker className="pt-[7px]">{version.limitsHeading}</VtbKicker>
      <div className="flex flex-col gap-4">
        <ul className="m-0 list-none p-0 text-[1.02rem] text-vtb-body">
          {version.limits.map((item) => (
            <li
              key={item.slice(0, 32)}
              className="relative mt-0 mr-0 mb-3 pl-[18px]"
            >
              <span className="absolute left-0 text-vtb-clay">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[0.92rem] text-vtb-mute">{version.limitsNote}</p>
      </div>
    </Split>
  );
}

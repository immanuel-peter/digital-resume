import type { VTBVersion } from "../versions";
import VtbKicker from "./VtbKicker";

export default function Hero({ version }: { version: VTBVersion }) {
  return (
    <div className="flex flex-col gap-5 border-b-2 border-vtb-ink pt-[72px] pb-7">
      <VtbKicker>{version.kicker}</VtbKicker>
      <h1 className="m-0 text-[2.4rem] leading-[1.03] font-bold tracking-[-0.025em] text-balance sm:text-[3.5rem] sm:whitespace-nowrap">
        {version.title}
      </h1>
      <p className="text-[1.18rem] text-vtb-body">{version.lede}</p>
    </div>
  );
}

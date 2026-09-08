import type { VTBResult, VTBVersion } from "../versions";
import FigureBlock from "./FigureBlock";
import type { LightboxImage } from "./Lightbox";
import VtbKicker from "./VtbKicker";

export function ResultsHeading({ version }: { version: VTBVersion }) {
  return (
    <div
      id="results"
      className="mb-10 scroll-mt-6 border-t-2 border-vtb-ink pt-11"
    >
      <VtbKicker>{version.resultsHeading}</VtbKicker>
    </div>
  );
}

export function ResultSection({
  result,
  onZoom,
}: {
  result: VTBResult;
  onZoom: (image: LightboxImage) => void;
}) {
  return (
    <div>
      <div
        id={result.id}
        className={`mb-[30px] flex scroll-mt-6 flex-col gap-4 ${
          result.separated ? "border-t border-vtb-line pt-[34px]" : ""
        }`}
      >
        <span className="font-display font-vtbmono text-[0.66rem] tracking-[0.12em] text-vtb-clay uppercase">
          {result.kicker}
        </span>
        <h3 className="m-0 text-[1.5rem] font-semibold tracking-[-0.014em] text-balance">
          {result.title}
        </h3>
        <p className="text-[1.02rem] text-vtb-body">
          {result.body}
        </p>
      </div>
      <FigureBlock figure={result.figure} framed captionAs="h4" className="mb-[88px]" onZoom={onZoom} />
    </div>
  );
}

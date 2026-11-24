import type { VTBResult, VTBResultBlock, VTBVersion } from "../versions";
import FigureBlock from "./FigureBlock";
import MatrixBlock from "./MatrixBlock";
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
  const blocks: VTBResultBlock[] = [
    ...(result.figure ? [{ figure: result.figure }] : []),
    ...(result.matrix ? [{ matrix: result.matrix }] : []),
    ...(result.blocks ?? []),
  ];

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
      {blocks.map((block, i) => {
        if ("text" in block) {
          return (
            <p key={i} className="mb-[30px] text-[1.02rem] text-vtb-body">
              {block.text}
            </p>
          );
        }
        const spacing = blocks[i + 1] && "text" in blocks[i + 1] ? "mb-14" : "mb-[88px]";
        return "figure" in block ? (
          <FigureBlock key={i} figure={block.figure} framed captionAs="h4" className={spacing} onZoom={onZoom} />
        ) : (
          <MatrixBlock key={i} matrix={block.matrix} className={spacing} />
        );
      })}
    </div>
  );
}

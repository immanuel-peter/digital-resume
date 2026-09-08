import Image from "next/image";
import { POSTPLAN_ASSETS, type VTBVersion } from "../versions";
import type { LightboxImage } from "./Lightbox";
import VtbKicker from "./VtbKicker";

export default function Explorer({
  version,
  towerKey,
  onPick,
  onZoom,
}: {
  version: VTBVersion;
  towerKey: string;
  onPick: (key: string) => void;
  onZoom: (image: LightboxImage) => void;
}) {
  const tower =
    version.explorerTowers.find((t) => t.key === towerKey) ??
    version.explorerTowers[0];

  return (
    <>
      <div
        id="explorer"
        className="mb-[30px] flex scroll-mt-6 flex-col gap-3.5 border-t-2 border-vtb-ink pt-11"
      >
        <VtbKicker>Representation explorer</VtbKicker>
        <h2 className="m-0 text-[1.85rem] font-semibold tracking-[-0.015em]">
          What the features look like
        </h2>
        <p className="text-vtb-body">{version.explorerLede}</p>
      </div>

      <div className="mb-[22px] flex flex-wrap gap-2.5">
        {version.explorerTowers.map((t) => {
          const isActive = t.key === tower.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onPick(t.key)}
              className={`font-display appearance-none border px-[17px] py-[9px] text-[0.83rem] font-semibold tracking-[0.01em] ${
                isActive
                  ? "cursor-pointer border-vtb-clay bg-vtb-claywash text-vtb-claydeep"
                  : "cursor-pointer border-vtb-line bg-white text-vtb-body"
              }`}
            >
              {t.buttonLabel}
            </button>
          );
        })}
      </div>

      <div className="mb-24 grid grid-cols-1 items-start gap-[26px] min-[640px]:grid-cols-2 min-[1000px]:grid-cols-[300px_300px_minmax(0,1fr)]">
        <div className="flex flex-col gap-[9px]">
          <button
            type="button"
            onClick={() =>
              onZoom({ src: POSTPLAN_ASSETS.explorerSource, alt: "Source photograph" })
            }
            aria-label="Enlarge: Source photograph"
            className="relative aspect-square w-full cursor-zoom-in overflow-hidden border border-vtb-linesoft bg-white"
          >
            <Image
              src={POSTPLAN_ASSETS.explorerSource}
              alt="Source photograph"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="object-cover"
            />
          </button>
          <span className="font-display font-vtbmono text-[0.68rem] text-vtb-mute">
            source · 448²
          </span>
        </div>
        <div className="flex flex-col gap-[9px]">
          <button
            type="button"
            onClick={() => onZoom({ src: tower.plateSrc, alt: tower.plateAlt })}
            aria-label={`Enlarge: ${tower.plateAlt}`}
            className="relative aspect-square w-full cursor-zoom-in overflow-hidden border border-vtb-linesoft bg-white"
          >
            <Image
              key={tower.key}
              src={tower.plateSrc}
              alt={tower.plateAlt}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="object-cover [image-rendering:pixelated]"
            />
          </button>
          <span className="font-display font-vtbmono text-[0.68rem] text-vtb-mute">
            {tower.plateLabel}
          </span>
        </div>
        <div className="flex flex-col gap-3 pt-0.5 min-[640px]:col-span-2 min-[1000px]:col-span-1">
          <h3 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em]">
            {tower.name}
          </h3>
          <p className="text-[0.95rem] text-vtb-body">{tower.note}</p>
          <div className="font-vtbmono flex flex-col gap-[7px] border-t border-vtb-linesoft pt-3.5 text-[0.8rem] tabular-nums">
            <div className="flex justify-between gap-3.5">
              <span className="text-vtb-mute">NAVI recall@2cm</span>
              <span>{tower.navi}</span>
            </div>
            <div className="flex justify-between gap-3.5">
              <span className="text-vtb-mute">recognition top-1</span>
              <span>{tower.sem}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

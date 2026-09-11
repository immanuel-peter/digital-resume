import type { VTBFigure } from "../versions";
import type { LightboxImage } from "./Lightbox";

export default function FigureBlock({
  figure,
  framed = false,
  captionAs: Caption = "h3",
  className = "",
  onZoom,
}: {
  figure: VTBFigure;
  framed?: boolean;
  captionAs?: "h3" | "h4";
  className?: string;
  onZoom?: (image: LightboxImage) => void;
}) {
  const img = (
    <img
      src={figure.src}
      alt={figure.alt}
      className={`block h-auto w-full border border-vtb-linesoft ${
        framed ? "bg-white p-[18px]" : ""
      }`}
    />
  );
  return (
    <div
      className={`grid grid-cols-1 items-start gap-5 min-[900px]:grid-cols-[minmax(0,1fr)_300px] min-[900px]:gap-11 ${className}`}
    >
      {onZoom ? (
        <button
          type="button"
          onClick={() => onZoom({ src: figure.src, alt: figure.alt })}
          aria-label={`Enlarge: ${figure.alt}`}
          className="block w-full cursor-zoom-in"
        >
          {img}
        </button>
      ) : (
        img
      )}
      <div className="flex flex-col gap-[11px]">
        <span className="font-display font-vtbmono text-[0.68rem] tracking-[0.12em] text-vtb-mute uppercase">
          {figure.label}
        </span>
        <Caption
          className={`font-display m-0 font-semibold ${
            Caption === "h4"
              ? "text-[1.05rem] tracking-[-0.005em]"
              : "text-[1.2rem] tracking-[-0.01em]"
          }`}
        >
          {figure.title}
        </Caption>
      </div>
    </div>
  );
}

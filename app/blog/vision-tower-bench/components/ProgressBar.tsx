import type { RefObject } from "react";

export default function ProgressBar({
  barRef,
}: {
  barRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="fixed top-0 right-0 left-0 z-[60] h-[3px] bg-[rgba(22,26,32,0.08)]">
      <div ref={barRef} className="h-full w-0 bg-vtb-clay" />
    </div>
  );
}

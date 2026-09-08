import type { ReactNode } from "react";

export default function VtbKicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-display text-[0.72rem] font-semibold tracking-[0.17em] text-vtb-clay uppercase ${className}`}
    >
      {children}
    </span>
  );
}

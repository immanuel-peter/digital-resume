import type { ReactNode } from "react";

export default function Split({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 gap-4 min-[800px]:grid-cols-[210px_minmax(0,1fr)] min-[800px]:gap-11 ${className}`}
    >
      {children}
    </div>
  );
}

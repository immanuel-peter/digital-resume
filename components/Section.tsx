import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="flex flex-wrap gap-x-10 gap-y-2.5 pt-28">
      <h2 className="mn-label w-[150px] shrink-0">{label}</h2>
      <div className="min-w-0 max-w-[700px] flex-[1_1_480px]">{children}</div>
    </section>
  );
}

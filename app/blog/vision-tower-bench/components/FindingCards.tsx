import type { VTBVersion } from "../versions";

export default function FindingCards({
  cards,
}: {
  cards: VTBVersion["findingCards"];
}) {
  return (
    <div className="mt-10 mb-11 grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
      {cards.map((card) => (
        <a
          key={card.n}
          href={card.href}
          className="flex flex-col gap-2.5 border border-vtb-line bg-white p-[22px_24px] no-underline"
        >
          <span className="font-display font-vtbmono text-[0.64rem] tracking-[0.12em] text-vtb-clay uppercase">
            {card.n}
          </span>
          <span className="font-display text-[1.13rem] leading-[1.25] font-semibold tracking-[-0.01em] text-vtb-ink text-balance">
            {card.title}
          </span>
          <span className="font-display text-[0.78rem] text-vtb-mute">
            See the evidence ↓
          </span>
        </a>
      ))}
    </div>
  );
}

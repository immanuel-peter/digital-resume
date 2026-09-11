import type { VTBVersion } from "../versions";

const TABLE_COLUMNS = [
  { head: "Few-label", sub: "1% top-1 ↑" },
  { head: "Full-label", sub: "100% top-1 ↑" },
  { head: "Depth", sub: "d1 ↑" },
  { head: "Normals", sub: "deg ↓" },
  { head: "Cross-view", sub: "NAVI@2cm ↑" },
  { head: "Occlusion", sub: "50% kept ↑" },
];

export default function CapabilityTable({ version }: { version: VTBVersion }) {
  return (
    <>
      <div className="mb-6 flex scroll-mt-6 flex-col gap-4" id="table">
        <h2 className="m-0 text-[1.85rem] font-semibold tracking-[-0.015em]">
          {version.tableHeading}
        </h2>
        <p className="text-vtb-body">{version.tableNote}</p>
      </div>

      <div className="mb-5 overflow-x-auto">
        <table className="w-full min-w-[820px] text-[0.92rem]">
          <thead>
            <tr className="font-display text-[0.68rem] tracking-[0.09em] text-vtb-mute uppercase">
              <th className="border-b border-vtb-ink pr-3.5 pb-2.5 text-left font-semibold">
                Tower
              </th>
              {TABLE_COLUMNS.map((col) => (
                <th
                  key={col.head}
                  className="border-b border-vtb-ink px-3.5 pb-2.5 text-right font-semibold"
                >
                  {col.head}
                  <span className="mt-0.5 block text-[0.62rem] font-normal tracking-[0.05em] text-vtb-faint">
                    {col.sub}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-vtbmono text-[0.85rem] tabular-nums">
            {version.rows.map((row) => (
              <tr key={row.tower}>
                <td className="border-b border-vtb-linesoft py-[13px] pr-3.5 pl-0">
                  <span className="font-display text-[0.95rem] font-semibold">
                    {row.tower}
                  </span>
                </td>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-b border-vtb-linesoft px-3.5 py-[13px] text-right ${
                      cell.star ? "font-medium text-vtb-clay" : ""
                    }`}
                  >
                    {cell.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mb-24 flex list-disc flex-col gap-1.5 pt-3.5 pl-[18px] text-[0.88rem] text-vtb-mute">
        {version.tableFootnote.map((note) => (
          <li key={note.slice(0, 32)}>{note}</li>
        ))}
      </ul>
    </>
  );
}

import type { VTBMatrix, VTBMatrixTone } from "../versions";

const TONE_CLASS: Record<VTBMatrixTone, string> = {
  pos: "bg-vtb-poswash text-vtb-pos",
  neg: "bg-vtb-negwash text-vtb-neg",
  unres: "bg-vtb-unres text-vtb-mute",
};

const TONE_SWATCH: Record<VTBMatrixTone, string> = {
  pos: "bg-vtb-poswash",
  neg: "bg-vtb-negwash",
  unres: "bg-vtb-unres",
};

export default function MatrixBlock({
  matrix,
  className = "",
}: {
  matrix: VTBMatrix;
  className?: string;
}) {
  const grouped = matrix.groups.reduce((n, g) => n + g.span, 0);
  const headCell =
    "font-display border-b border-vtb-line px-1.5 py-1.5 text-center align-bottom text-[0.64rem] font-semibold tracking-[0.06em] text-vtb-mute uppercase";

  return (
    <div
      className={`grid grid-cols-1 items-start gap-5 min-[900px]:grid-cols-[minmax(0,1fr)_300px] min-[900px]:gap-11 ${className}`}
    >
      <div className="overflow-x-auto border border-vtb-linesoft bg-white p-[18px]">
        <table className="w-full min-w-[640px] table-fixed border-collapse text-[0.8rem]">
          <colgroup>
            <col className="w-[20%]" />
            {matrix.columns.map((c) => (
              <col key={c} className="w-[10%]" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2} scope="col" className={`${headCell} pl-0 text-left`}>
                Projector
              </th>
              {matrix.groups.map((g) => (
                <th key={g.label} colSpan={g.span} scope="colgroup" className={`${headCell} text-vtb-ink`}>
                  {g.label}
                </th>
              ))}
              {matrix.columns.slice(grouped).map((c) => (
                <th key={c} rowSpan={2} scope="col" className={headCell}>
                  {c}
                </th>
              ))}
            </tr>
            <tr>
              {matrix.columns.slice(0, grouped).map((c) => (
                <th key={c} scope="col" className={headCell}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row) => (
              <tr key={row.name}>
                <td className="font-display py-[3px] pr-2.5 text-[0.85rem] font-semibold whitespace-nowrap">
                  {row.name}
                </td>
                {row.cells.map((cell, i) => (
                  <td key={i} className="p-[3px]">
                    <div
                      className={`font-vtbmono flex h-[34px] items-center justify-center text-[0.72rem] tabular-nums ${TONE_CLASS[cell.tone]}`}
                    >
                      {cell.value}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-[11px]">
        <span className="font-display font-vtbmono text-[0.68rem] tracking-[0.12em] text-vtb-mute uppercase">
          {matrix.label}
        </span>
        <h4 className="font-display m-0 text-[1.05rem] font-semibold tracking-[-0.005em]">
          {matrix.title}
        </h4>
        <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[0.88rem] text-vtb-mute">
          {matrix.caption.map((html) => (
            <li key={html} className="relative pl-[18px]">
              <span className="absolute left-0 text-vtb-clay">—</span>
              <span dangerouslySetInnerHTML={{ __html: html }} />
            </li>
          ))}
        </ul>
        <ul className="font-display m-0 flex list-none flex-col gap-1.5 p-0 text-[0.76rem] text-vtb-mute">
          {(Object.keys(matrix.legend) as VTBMatrixTone[]).map((tone) => (
            <li key={tone} className="flex items-center gap-2">
              <i className={`inline-block size-3 flex-none border border-vtb-linesoft ${TONE_SWATCH[tone]}`} />
              {matrix.legend[tone]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

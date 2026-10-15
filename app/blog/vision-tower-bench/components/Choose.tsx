import type { VTBVersion } from "../versions";
import Split from "./Split";
import VtbKicker from "./VtbKicker";

export default function Choose({
  choose,
}: {
  choose: NonNullable<VTBVersion["choose"]>;
}) {
  return (
    <Split
      id="choose"
      className="mb-[100px] scroll-mt-6 border-t-2 border-vtb-ink pt-11"
    >
      <VtbKicker className="pt-[7px]">How to choose</VtbKicker>
      <div className="flex flex-col gap-4">
        {choose.intro.map((html, i) => (
          <p
            key={i}
            className="text-[1.02rem] text-vtb-body [&_b]:font-semibold [&_b]:text-vtb-ink"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[560px] text-[0.93rem]">
            <thead>
              <tr className="font-display text-[0.68rem] tracking-[0.09em] text-vtb-mute uppercase">
                <th className="border-b border-vtb-ink pr-3.5 pb-2.5 text-left font-semibold">
                  If the priority is
                </th>
                <th className="border-b border-vtb-ink px-3.5 pb-2.5 text-left font-semibold">
                  Start with
                </th>
              </tr>
            </thead>
            <tbody>
              {choose.rows.map((row) => (
                <tr key={row.priority} className="align-top">
                  <td className="font-display w-[34%] border-b border-vtb-linesoft py-3 pr-3.5 font-semibold">
                    {row.priority}
                  </td>
                  <td className="border-b border-vtb-linesoft px-3.5 py-3 text-vtb-body">
                    {row.pick && (
                      <span className="font-semibold text-vtb-ink">
                        {row.pick}.{" "}
                      </span>
                    )}
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Split>
  );
}

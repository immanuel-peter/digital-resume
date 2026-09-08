import VisionTowerBenchClient from "./VisionTowerBenchClient";
import { getVTBVersion } from "./versions";

export default async function VisionTowerBenchPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  const version = getVTBVersion(v);

  return <VisionTowerBenchClient initialVersionId={version.id} />;
}

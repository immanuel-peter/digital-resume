import "server-only";

const ALLOWED_DATASETS = [
  "carla-autopilot-multimodal-dataset",
  "carla-autopilot-images",
] as const;

const DATASET_URLS: Record<AllowedDatasetName, string> = {
  "carla-autopilot-multimodal-dataset":
    "https://huggingface.co/api/datasets/immanuelpeter/carla-autopilot-multimodal-dataset/revision/HEAD?expand=downloads&expand=downloadsAllTime",
  "carla-autopilot-images":
    "https://huggingface.co/api/datasets/immanuelpeter/carla-autopilot-images/revision/HEAD?expand=downloads&expand=downloadsAllTime",
};

export type AllowedDatasetName = (typeof ALLOWED_DATASETS)[number];

export const isAllowedDatasetName = (
  value: unknown
): value is AllowedDatasetName =>
  typeof value === "string" &&
  ALLOWED_DATASETS.includes(value as AllowedDatasetName);

export async function getDatasetDownloadsAllTime(
  datasetName: AllowedDatasetName
) {
  const response = await fetch(DATASET_URLS[datasetName], {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch dataset stats for ${datasetName}: ${response.status}`
    );
  }

  const data = (await response.json()) as { downloadsAllTime?: unknown };
  const downloadsAllTime = Number(data.downloadsAllTime);

  return Number.isFinite(downloadsAllTime) ? downloadsAllTime : 0;
}

export async function getAllDatasetDownloadsAllTime() {
  const [multimodalDownloadsAllTime, imagesDownloadsAllTime] =
    await Promise.all([
      getDatasetDownloadsAllTime("carla-autopilot-multimodal-dataset"),
      getDatasetDownloadsAllTime("carla-autopilot-images"),
    ]);

  return {
    multimodalDownloadsAllTime,
    imagesDownloadsAllTime,
    totalDownloadsAllTime: multimodalDownloadsAllTime + imagesDownloadsAllTime,
  };
}

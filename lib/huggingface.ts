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

const MODELS_URL =
  "https://huggingface.co/api/models?author=immanuelpeter&limit=100&expand[]=downloadsAllTime";

export async function getModelDownloadsAllTime() {
  const response = await fetch(MODELS_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch model stats: ${response.status}`);
  }

  const models = (await response.json()) as { downloadsAllTime?: unknown }[];

  return models.reduce((total, model) => {
    const downloads = Number(model.downloadsAllTime);
    return total + (Number.isFinite(downloads) ? downloads : 0);
  }, 0);
}

export type HuggingFaceDownloads = {
  datasets: number;
  models: number;
  total: number;
};

export async function getHuggingFaceDownloadsAllTime(): Promise<HuggingFaceDownloads> {
  const [{ totalDownloadsAllTime: datasets }, models] = await Promise.all([
    getAllDatasetDownloadsAllTime(),
    getModelDownloadsAllTime(),
  ]);

  return { datasets, models, total: datasets + models };
}

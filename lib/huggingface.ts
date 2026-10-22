import "server-only";

const DATASETS = ["carla-autopilot-multimodal-dataset", "carla-autopilot-images"];

const MODELS_URL =
  "https://huggingface.co/api/models?author=immanuelpeter&limit=100&expand[]=downloadsAllTime";

const REVALIDATE_SECONDS = 3600;
const FETCH_TIMEOUT_MS = 3000;

const toCount = (value: unknown) => {
  const count = Number(value);
  return Number.isFinite(count) ? count : 0;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getDatasetDownloadsAllTime() {
  const datasets = await Promise.all(
    DATASETS.map((name) =>
      fetchJson<{ downloadsAllTime?: unknown }>(
        `https://huggingface.co/api/datasets/immanuelpeter/${name}/revision/HEAD?expand=downloadsAllTime`
      )
    )
  );

  return datasets.reduce((total, dataset) => total + toCount(dataset.downloadsAllTime), 0);
}

async function getModelDownloadsAllTime() {
  const models = await fetchJson<{ downloadsAllTime?: unknown }[]>(MODELS_URL);

  return models.reduce((total, model) => total + toCount(model.downloadsAllTime), 0);
}

export type HuggingFaceDownloads = {
  datasets: number;
  models: number;
  total: number;
};

export async function getHuggingFaceDownloadsAllTime(): Promise<HuggingFaceDownloads | null> {
  try {
    const [datasets, models] = await Promise.all([
      getDatasetDownloadsAllTime(),
      getModelDownloadsAllTime(),
    ]);

    return { datasets, models, total: datasets + models };
  } catch (error) {
    console.error("Error fetching Hugging Face downloads:", error);
    return null;
  }
}

export const formatNumber = (value: number) => new Intl.NumberFormat("en-US").format(value);

export async function getHuggingFaceSummary() {
  const downloads = await getHuggingFaceDownloadsAllTime();
  if (!downloads) return "[downloads across datasets and models](https://huggingface.co/immanuelpeter)";

  return `[${formatNumber(downloads.total)} downloads](https://huggingface.co/immanuelpeter) · ${formatNumber(downloads.datasets)} on datasets, ${formatNumber(downloads.models)} on models`;
}

import { NextResponse } from "next/server";

import {
  getDatasetDownloadsAllTime,
  isAllowedDatasetName,
} from "@/lib/huggingface";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { datasetName } = await req.json();

    if (!isAllowedDatasetName(datasetName)) {
      return NextResponse.json(
        {
          error:
            "Invalid datasetName. Use 'carla-autopilot-multimodal-dataset' or 'carla-autopilot-images'.",
        },
        { status: 400 }
      );
    }

    const downloadsAllTime = await getDatasetDownloadsAllTime(datasetName);

    return NextResponse.json({
      datasetName,
      downloadsAllTime,
    });
  } catch (error) {
    console.error("Error fetching Hugging Face dataset downloads:", error);
    return NextResponse.json(
      { error: "Failed to fetch dataset downloads" },
      { status: 500 }
    );
  }
}

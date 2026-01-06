import AutoMoEBlogClient from "./AutoMoEBlogClient";
import { getAllDatasetDownloadsAllTime } from "@/lib/huggingface";

export const revalidate = 3600;

export default async function AutoMoEBlogPage() {
  const { totalDownloadsAllTime } = await getAllDatasetDownloadsAllTime();
  const downloadsAllTimeFormatted = new Intl.NumberFormat("en-US").format(
    totalDownloadsAllTime
  );

  return (
    <AutoMoEBlogClient
      downloadsAllTimeFormatted={downloadsAllTimeFormatted}
    />
  );
}

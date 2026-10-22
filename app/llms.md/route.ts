import { getProfileMarkdown } from "@/lib/profile";

export const revalidate = 3600;

export async function GET() {
  return new Response(await getProfileMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

import { getProfileMarkdown } from "@/lib/profile";

export const revalidate = 3600;

export async function GET() {
  return new Response(await getProfileMarkdown(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

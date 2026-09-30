import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/blog",
    "/blog/vision-tower-bench",
    "/blog/matchbox",
    "/blog/moe-self-driving",
  ].map((path) => ({ url: `https://www.ipeter.dev${path}` }));
}

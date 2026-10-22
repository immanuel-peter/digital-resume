import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/*": ["./content/**"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Signal",
            value: "search=yes, ai-input=yes, ai-train=yes",
          },
        ],
      },
      {
        source: "/",
        headers: [
          { key: "Vary", value: "Accept" },
          {
            key: "Link",
            value: '</llms.md>; rel="describedby"; type="text/markdown"',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.postplan.link" },
    ],
  },
};

export default nextConfig;

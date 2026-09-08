import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision Tower Bench",
  description:
    "Choosing a vision tower for a text-only LLM.",
};

export default function VisionTowerBenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
      />
      {children}
    </>
  );
}

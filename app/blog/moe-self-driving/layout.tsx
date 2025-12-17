import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoMoE",
  description: "Technical write-up of AutoMoE architecture and implementation",
};

export default function AutoMoELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
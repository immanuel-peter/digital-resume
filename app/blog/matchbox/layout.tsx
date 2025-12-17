import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matchbox",
  description: "Technical write-up of Matchbox architecture and implementation",
};

export default function MatchboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
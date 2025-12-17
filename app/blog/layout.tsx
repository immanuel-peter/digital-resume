import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical write-ups and project deep-dives by Immanuel Peter",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

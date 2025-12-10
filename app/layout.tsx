import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import ConditionalNav from "@/components/ConditionalNav";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Immanuel Peter",
  description: "Immanuel Peter's personal website",
  keywords: [
    "Immanuel Peter",
    "Immanuel",
    "Peter",
    "immanuelpeter",
    "immanuel-peter",
    "immanuelpeter.com",
    "immanuel-peter.com",
    "ImmanuelAI",
    "ipeter",
    "Immanuel Peter University of Chicago",
    "Immanuel Peter uchicago",
    "moby763canary21",

    "Software Engineer Intern",
    "Machine Learning Engineer Intern",
    "Artificial Intelligence Engineer Intern",
    "University of Chicago Computer Science",
    "University of Chicago CS",
    "University of Chicago Physics",
    "University of Chicago Math",
    "University of Chicago",
  ],
  creator: "Immanuel Peter",
  authors: [{ name: "Immanuel Peter", url: "https://ipeter.dev" }],
  openGraph: {
    title: "Immanuel Peter",
    description: "Immanuel Peter's personal website",
    url: "https://ipeter.dev",
    siteName: "Immanuel Peter",
    images: ["https://ipeter.dev/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immanuel Peter",
    description: "Immanuel Peter's personal website",
    creator: "@moby763canary21",
    images: ["https://ipeter.dev/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <ConditionalNav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";

const markdownPath = path.join(process.cwd(), "public", "hostess-pitch.md");
const markdown = fs.readFileSync(markdownPath, "utf8");

const proseClassName = [
  "prose",
  "prose-slate",
  "dark:prose-invert",
  "prose-headings:font-semibold",
  "prose-h1:text-4xl",
  "prose-h2:text-2xl",
  "prose-h3:text-xl",
  "prose-pre:bg-slate-950",
  "prose-pre:text-slate-100",
  "prose-pre:border",
  "prose-pre:border-slate-800",
  "prose-pre:rounded-lg",
  "prose-pre:p-4",
].join(" ");

export default function HostessPitchPage() {
  return (
    <main className="px-6 py-16">
      <article className={`${proseClassName} mx-auto max-w-4xl`}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

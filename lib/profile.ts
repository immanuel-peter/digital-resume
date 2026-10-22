import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getHuggingFaceSummary } from "./huggingface";

export async function getProfileMarkdown() {
  const [template, huggingface] = await Promise.all([
    readFile(join(process.cwd(), "content", "llms.md"), "utf8"),
    getHuggingFaceSummary(),
  ]);

  return template.replace("{{huggingface}}", huggingface);
}

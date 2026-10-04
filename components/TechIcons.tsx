import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiFastify,
  SiGithub,
  SiGo,
  SiHuggingface,
  SiKubernetes,
  SiNextdotjs,
  SiNvidia,
  SiOpentelemetry,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiRedis,
  SiTypescript,
  SiUv,
} from "react-icons/si";

const TECH = {
  python: { name: "Python", Icon: SiPython },
  pytorch: { name: "PyTorch", Icon: SiPytorch },
  huggingface: { name: "Hugging Face", Icon: SiHuggingface },
  uv: { name: "uv", Icon: SiUv },
  cuda: { name: "CUDA", Icon: SiNvidia },
  go: { name: "Go", Icon: SiGo },
  kubernetes: { name: "Kubernetes", Icon: SiKubernetes },
  opentelemetry: { name: "OpenTelemetry", Icon: SiOpentelemetry },
  prometheus: { name: "Prometheus", Icon: SiPrometheus },
  redis: { name: "Redis", Icon: SiRedis },
  typescript: { name: "TypeScript", Icon: SiTypescript },
  fastify: { name: "Fastify", Icon: SiFastify },
  postgresql: { name: "PostgreSQL", Icon: SiPostgresql },
  cloudflare: { name: "Cloudflare", Icon: SiCloudflare },
  nextjs: { name: "Next.js", Icon: SiNextdotjs },
  github: { name: "GitHub", Icon: SiGithub },
} satisfies Record<string, { name: string; Icon: IconType }>;

export type TechKey = keyof typeof TECH;

export default function TechIcons({ items }: { items: TechKey[] }) {
  return (
    <ul className="flex items-center gap-3.5">
      {items.map((key) => {
        const { name, Icon } = TECH[key];
        return (
          <li key={key} title={name}>
            <Icon role="img" aria-label={name} className="mn-ic" />
          </li>
        );
      })}
    </ul>
  );
}

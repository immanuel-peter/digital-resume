import Link from "next/link";
import { POSTPLAN_ASSETS } from "@/app/blog/vision-tower-bench/versions";
import Section from "./Section";
import TechIcons, { type TechKey } from "./TechIcons";

type ProjectLink = { label: string; href: string };

type FeaturedProject = {
  id: string;
  title: string;
  year: string;
  description: string;
  images: { src: string; alt: string; pixelated?: boolean }[];
  caption: string;
  links: ProjectLink[];
  tech: TechKey[];
};

type CompactProject = {
  title: string;
  year: string;
  description: string;
  image: { src: string; alt: string; position?: "top" | "left-top" };
  links: ProjectLink[];
  tech: TechKey[];
};

const featured: FeaturedProject[] = [
  {
    id: "vtb",
    title: "Vision Tower Bench",
    year: "2026",
    description: "A benchmark for evaluating vision head capabilities",
    images: [
      {
        src: POSTPLAN_ASSETS.explorerSource,
        alt: "Photo of a bald eagle used as the probe input",
      },
      {
        src: POSTPLAN_ASSETS.plateDinov2,
        alt: "PCA of DINOv2 patch tokens: the eagle separates as one region",
        pixelated: true,
      },
      {
        src: POSTPLAN_ASSETS.plateMuseGlimmer,
        alt: "PCA of Muse Glimmer patch tokens: near-uniform speckle",
        pixelated: true,
      },
    ],
    caption:
      "One photo through two frozen towers. DINOv2 separates the bird as one region; Muse Glimmer shows no subject.",
    links: [
      { label: "Report", href: "/blog/vision-tower-bench" },
      { label: "Code", href: "https://github.com/immanuel-peter/vision-tower-bench" },
      { label: "Towers", href: "https://huggingface.co/collections/immanuelpeter/vision-towers" },
    ],
    tech: ["python", "pytorch", "huggingface", "uv"],
  },
  {
    id: "automoe",
    title: "AutoMoE",
    year: "2025",
    description: "A MoE self-driving model in PyTorch",
    images: [
      {
        src: "/home/automoe-architecture.svg",
        alt: "AutoMoE architecture: four experts, a top-2 gate with context, and a trajectory head producing ten waypoints and speed",
      },
    ],
    caption:
      "Four experts feed a context-conditioned gate that keeps the top two. The gate weights drawn are illustrative.",
    links: [
      { label: "Code", href: "https://github.com/immanuel-peter/self-driving-model" },
      {
        label: "Data",
        href: "https://huggingface.co/datasets/immanuelpeter/carla-autopilot-multimodal-dataset",
      },
    ],
    tech: ["python", "pytorch", "cuda", "huggingface"],
  },
];

const compact: CompactProject[] = [
  {
    title: "Hostess",
    year: "2026",
    description: "Docker Compose of Production",
    image: { src: "/home/hostess-trace.webp", alt: "Hostess Studio trace waterfall", position: "left-top" },
    links: [{ label: "hostess.sh", href: "https://hostess.sh" }],
    tech: ["go", "kubernetes", "opentelemetry", "prometheus"],
  },
  {
    title: "Redis Operator",
    year: "2026",
    description: "CloudNativePG for Redis",
    image: { src: "/home/redis-failover.svg", alt: "Fencing-first failover sequence in the Redis operator", position: "top" },
    links: [{ label: "Code", href: "https://github.com/howl-cloud/redis-operator" }],
    tech: ["go", "kubernetes", "redis"],
  },
  {
    title: "Postplan",
    year: "2026",
    description: "Easy toolchain to upload static files",
    image: { src: "/home/postplan-dashboard.svg", alt: "Illustration of the Postplan dashboard", position: "left-top" },
    links: [{ label: "Code", href: "https://github.com/immanuel-peter/postplan" }],
    tech: ["typescript", "fastify", "postgresql", "cloudflare"],
  },
  {
    title: "Grok Review",
    year: "2026",
    description: "Review your PRs with Grok",
    image: { src: "/home/grok-review.svg", alt: "Illustration of the Grok Review page", position: "left-top" },
    links: [
      { label: "grokreq.com", href: "https://grokreq.com" },
      { label: "Code", href: "https://github.com/immanuel-peter/grok-review" },
    ],
    tech: ["nextjs", "typescript", "postgresql", "github"],
  },
];

const THUMB_POSITION = {
  top: "object-top",
  "left-top": "object-left-top",
};

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[14.5px]">
      {links.map(({ label, href }) =>
        href.startsWith("/") ? (
          <Link key={label} href={href} className="mn-link">
            {label}
          </Link>
        ) : (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="mn-link">
            {label}
          </a>
        ),
      )}
    </div>
  );
}

function ProjectFooter({ links, tech }: { links: ProjectLink[]; tech: TechKey[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
      <ProjectLinks links={links} />
      <TechIcons items={tech} />
    </div>
  );
}

const Projects = () => (
  <Section id="work" label="Work">
    {featured.map((project) => (
      <article key={project.id} id={project.id} className="mb-[76px]">
        <div className="flex gap-2">
          {project.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`mn-shot h-auto w-full min-w-0 flex-1 ${project.images.length > 1 ? "rounded-[10px]" : "rounded-xl"} ${image.pixelated ? "[image-rendering:pixelated]" : ""}`}
            />
          ))}
        </div>
        <p className="mt-2.5 text-[13px] leading-normal text-[#8c8c88]">{project.caption}</p>
        <div className="mt-[22px] flex items-baseline justify-between gap-3">
          <h3 className="text-2xl leading-[1.2] font-semibold tracking-[-0.02em]">{project.title}</h3>
          <span className="tabular-nums text-[#74746f]">{project.year}</span>
        </div>
        <p className="mt-1 text-[17px] text-[#74746f]">{project.description}</p>
        <ProjectFooter links={project.links} tech={project.tech} />
      </article>
    ))}

    <div className="border-b border-[#e8e8e5]">
      {compact.map((project) => (
        <article key={project.title} className="flex flex-wrap gap-x-6 gap-y-4 border-t border-[#e8e8e5] py-7">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={200}
            height={126}
            className={`mn-shot h-[126px] w-[200px] shrink-0 rounded-[10px] object-cover ${THUMB_POSITION[project.image.position ?? "left-top"]}`}
          />
          <div className="flex min-w-0 flex-[1_1_260px] flex-col">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-xl leading-[1.2] font-semibold tracking-[-0.02em]">{project.title}</h3>
              <span className="tabular-nums text-[#74746f]">{project.year}</span>
            </div>
            <p className="mt-1 text-[15.5px] text-[#74746f]">{project.description}</p>
            <ProjectFooter links={project.links} tech={project.tech} />
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;

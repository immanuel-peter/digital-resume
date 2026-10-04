import Link from "next/link";
import type { IconType } from "react-icons";
import {
  BsEnvelope,
  BsFileEarmarkText,
  BsJournalText,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { SiGithub, SiHuggingface } from "react-icons/si";

const LINKS: { href: string; label: string; Icon: IconType }[] = [
  { href: "/resume.pdf", label: "Résumé", Icon: BsFileEarmarkText },
  { href: "/blog", label: "Blog", Icon: BsJournalText },
  { href: "https://github.com/immanuel-peter", label: "GitHub", Icon: SiGithub },
  { href: "https://huggingface.co/immanuelpeter", label: "Hugging Face", Icon: SiHuggingface },
  { href: "https://x.com/moby763canary21", label: "X", Icon: BsTwitterX },
  { href: "https://www.linkedin.com/in/immanuel-peter/", label: "LinkedIn", Icon: BsLinkedin },
  { href: "mailto:hello@ipeter.dev", label: "Email", Icon: BsEnvelope },
];

function IconLink({
  href,
  label,
  current,
  children,
}: {
  href: string;
  label: string;
  current: boolean;
  children: React.ReactNode;
}) {
  const className = current ? "mn-hi mn-hi-current" : "mn-hi";

  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link
        href={href}
        aria-label={label}
        aria-current={current ? "page" : undefined}
        title={label}
        className={className}
      >
        {children}
      </Link>
    );
  }

  const opensNewTab = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={className}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function SiteHeader({ current }: { current?: "Blog" }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
      <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold">
        <img src="/ipeter.jpg" alt="" width={28} height={28} className="size-7 rounded-full" />
        Immanuel Peter
      </Link>
      <nav aria-label="Profile links" className="flex items-center">
        {LINKS.map(({ href, label, Icon }) => (
          <IconLink key={label} href={href} label={label} current={label === current}>
            <Icon aria-hidden="true" />
          </IconLink>
        ))}
      </nav>
    </header>
  );
}

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

export type SiteLink = { href: string; label: string; Icon: IconType };

export const PRIMARY_LINKS: SiteLink[] = [
  { href: "/resume.pdf", label: "Résumé", Icon: BsFileEarmarkText },
  { href: "/blog", label: "Blog", Icon: BsJournalText },
];

export const PROFILE_LINKS: SiteLink[] = [
  { href: "https://github.com/immanuel-peter", label: "GitHub", Icon: SiGithub },
  { href: "https://huggingface.co/immanuelpeter", label: "Hugging Face", Icon: SiHuggingface },
  { href: "https://x.com/moby763canary21", label: "X", Icon: BsTwitterX },
  { href: "https://www.linkedin.com/in/immanuel-peter/", label: "LinkedIn", Icon: BsLinkedin },
  { href: "mailto:hello@ipeter.dev", label: "Email", Icon: BsEnvelope },
];

export function IconLink({
  link: { href, label, Icon },
  current = false,
  className = "mn-hi",
  onClick,
}: {
  link: SiteLink;
  current?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const cls = current ? `${className} mn-hi-current` : className;
  const icon = <Icon aria-hidden="true" />;

  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link
        href={href}
        aria-label={label}
        aria-current={current ? "page" : undefined}
        title={label}
        className={cls}
        onClick={onClick}
      >
        {icon}
      </Link>
    );
  }

  const opensNewTab = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={cls}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {icon}
    </a>
  );
}

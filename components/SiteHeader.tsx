import Link from "next/link";
import MoreLinks from "./MoreLinks";
import { IconLink, PRIMARY_LINKS, PROFILE_LINKS } from "./SiteLinks";

export default function SiteHeader({ current }: { current?: "Blog" }) {
  return (
    <header className="flex items-center justify-between gap-x-6 py-4">
      <Link href="/" className="flex shrink-0 items-center gap-2.5 text-[15px] font-semibold">
        <img src="/ipeter.jpg" alt="" width={28} height={28} className="size-7 rounded-full" />
        Immanuel Peter
      </Link>
      <nav aria-label="Profile links" className="-mr-2 flex items-center sm:mr-0">
        {PRIMARY_LINKS.map((link) => (
          <IconLink key={link.label} link={link} current={link.label === current} />
        ))}
        <div className="hidden sm:contents">
          {PROFILE_LINKS.map((link) => (
            <IconLink key={link.label} link={link} />
          ))}
        </div>
        <div className="sm:hidden">
          <MoreLinks />
        </div>
      </nav>
    </header>
  );
}

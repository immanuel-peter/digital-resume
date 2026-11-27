"use client";

import { useEffect, useId, useRef, useState } from "react";
import { IconLink, PROFILE_LINKS } from "./SiteLinks";

/** Mobile-only ⋯ button that drops a vertical pill of profile icons. */
export default function MoreLinks() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label="More links"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={`mn-more-btn${open ? " is-open" : ""}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="5" cy="12" r="1.7" />
          <circle cx="12" cy="12" r="1.7" />
          <circle cx="19" cy="12" r="1.7" />
        </svg>
      </button>
      <nav id={menuId} aria-label="More links" hidden={!open} className="mn-pill">
        {PROFILE_LINKS.map((link) => (
          <IconLink
            key={link.label}
            link={link}
            className="mn-pill-link"
            onClick={() => setOpen(false)}
          />
        ))}
      </nav>
    </div>
  );
}

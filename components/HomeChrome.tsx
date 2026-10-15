"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "oss", label: "Open source" },
  { id: "education", label: "Education" },
];

export default function HomeChrome() {
  const barRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    let ticking = false;

    const paint = () => {
      ticking = false;
      const root = document.scrollingElement || document.documentElement;
      const travel = root.scrollHeight - root.clientHeight;

      if (barRef.current) {
        const done = travel > 0 ? Math.min(1, Math.max(0, root.scrollTop / travel)) : 0;
        barRef.current.style.width = `${(done * 100).toFixed(2)}%`;
      }

      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 240) current = id;
      }
      if (travel > 4 && root.scrollTop >= travel - 4) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="mn-pbar" aria-hidden="true">
        <div ref={barRef} className="mn-pfill" />
      </div>
      <nav className="mn-toc" aria-label="Sections">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={activeId === id ? "is-active" : undefined}>
            <span className="dot" />
            <span className="label">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

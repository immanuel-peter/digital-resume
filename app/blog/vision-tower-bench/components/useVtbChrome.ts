import { useEffect, useRef, useState } from "react";

export function useVtbChrome(sectionIds: string[], resetKey: string) {
  const barRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let ticking = false;
    const paint = () => {
      ticking = false;
      const root = document.scrollingElement || document.documentElement;
      const travel = root.scrollHeight - root.clientHeight;
      if (barRef.current) {
        const done =
          travel > 0 ? Math.min(1, Math.max(0, root.scrollTop / travel)) : 0;
        barRef.current.style.width = `${(done * 100).toFixed(2)}%`;
      }
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
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
  }, [resetKey, sectionIds]);

  return { barRef, activeId };
}

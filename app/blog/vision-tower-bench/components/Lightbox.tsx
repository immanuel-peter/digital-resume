"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface LightboxImage {
  src: string;
  alt: string;
}

export default function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="font-display absolute top-4 right-4 rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10"
      >
        ✕
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[88vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

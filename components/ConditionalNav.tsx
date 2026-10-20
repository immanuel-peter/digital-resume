"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ConditionalNav() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/blog") {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        href="/"
        aria-label="Home"
        className="flex items-center gap-2 px-3 py-1.5 bg-white shadow-md rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-200"
      >
        <FaArrowLeft size={16} />
        <img src="/ipeter.jpg" alt="" width={28} height={28} className="size-7 rounded-full" />
      </Link>
    </div>
  );
}

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
        className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-200"
      >
        <FaArrowLeft size={16} />
        <span className="text-sm font-medium">Home</span>
      </Link>
    </div>
  );
}

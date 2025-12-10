"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import { FaArrowLeft } from "react-icons/fa";

export default function ConditionalNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <Navbar />;
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <FaArrowLeft size={16} />
        <span className="text-sm font-medium">Home</span>
      </Link>
    </div>
  );
}

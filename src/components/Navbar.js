// src/components/Navbar.js

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ];

  // Apply stored theme & highlight on scroll
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elems = document.querySelectorAll("section");

      elems.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.clientHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80;
    const targetY = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetY - navbarHeight, behavior: "smooth" });

    // Close mobile menu after clicking
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="w-11/12 md:w-3/4 bg-white dark:bg-gray-800 shadow-md rounded-full flex flex-col items-center relative">
        {/* Mobile hamburger / close button */}
        <div className="flex md:hidden w-full justify-end px-4 py-3">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none text-gray-600 dark:text-gray-300"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex justify-around items-center w-full p-2">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => scrollToSection(sec)}
                className={`text-sm font-medium px-3 py-2 rounded-full transition-colors duration-200 ${
                  activeSection === sec
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}

          {/* Dark mode toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500" size={18} />
              ) : (
                <FaMoon className="text-gray-600" size={18} />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center justify-center w-full absolute top-full mt-2 rounded-xl shadow-lg bg-white dark:bg-gray-800 z-40 animate-fade-in">
            {sections.map((sec) => (
              <li key={sec} className="w-full my-1">
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`w-full text-center font-medium px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeSection === sec
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            ))}

            {/* Dark mode toggle in mobile menu */}
            <li className="w-full my-1 flex justify-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-500" size={18} />
                ) : (
                  <FaMoon className="text-gray-600" size={18} />
                )}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

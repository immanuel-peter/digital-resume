import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ];

  useEffect(() => {
    // Check and apply the theme from localStorage on component mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate height of the navbar
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // Toggle dark mode and persist the theme in localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="w-1/2 md:w-3/4 bg-white dark:bg-gray-800 shadow-md rounded-full">
        <ul className="flex justify-around items-center p-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium px-3 py-2 rounded-full transition-colors duration-200 ${
                  activeSection === section
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
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
      </nav>
    </div>
  );
};

export default Navbar;

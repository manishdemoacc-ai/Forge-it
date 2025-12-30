import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-md bg-white/60 dark:bg-black/50 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => scrollTo("home")}
            className="cursor-pointer leading-tight"
          >
            <h1
              className={`text-lg font-extrabold transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Forgeit
            </h1>
            <p
              className={`text-xs transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Built strong. Built online.
            </p>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-sm font-medium transition-colors
                ${
                  darkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-blue-500 after:transition-all
                hover:after:w-full`}
              >
                {item.name}
              </button>
            ))}

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/80 dark:bg-black/80 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col px-5 py-3 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Dark mode
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  // Scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = ["Home", "Services", "Portfolio", "Pricing", "Contact"];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-white group-hover:text-blue-400 transition">
                Forgeit
              </p>
              <p className="text-xs text-gray-300">
                Built strong. Built online.
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative group
                  text-white/80 hover:text-blue-400
                  transition
                "
              >
                {item}
                <span className="
                  absolute left-0 -bottom-1
                  h-[2px] w-0 bg-blue-500
                  transition-all duration-300
                  group-hover:w-full
                " />
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">

            {/* THEME */}
            <button
              onClick={() => setDark(!dark)}
              className="
                w-8 h-8 rounded-full
                bg-white/10 hover:bg-blue-500/20
                text-blue-400 transition
                flex items-center justify-center text-sm
              "
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setOpen(!open)}
            >
              <div className="space-y-1">
                <span className="block w-5 h-[2px] bg-white"></span>
                <span className="block w-5 h-[2px] bg-white"></span>
                <span className="block w-5 h-[2px] bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (SMALLER) */}
        {open && (
          <div
            className="
              md:hidden mt-3 rounded-lg
              backdrop-blur-xl bg-black/40
              px-4 py-3 space-y-3
              text-sm
            "
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  block text-white/90
                  hover:text-blue-400
                  transition
                "
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

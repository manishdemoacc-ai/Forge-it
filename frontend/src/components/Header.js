import React, { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(true);

  // Theme toggle logic
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* ===== LOGO (TEXT – ORIGINAL STYLE) ===== */}
          <a
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold group-hover:text-blue-400 transition">
                Forgeit
              </p>
              <p className="text-xs text-gray-400">
                Built strong. Built online.
              </p>
            </div>
          </a>

          {/* ===== NAVIGATION ===== */}
          <nav className="hidden md:flex gap-8 text-sm">
            {["Home", "Services", "Portfolio", "Pricing", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          {/* ===== THEME TOGGLE ===== */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-400 
                       hover:bg-blue-500/20 transition flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {dark ? "🌙" : "☀"}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;

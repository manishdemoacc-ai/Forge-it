import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0b1220]/95 shadow-lg backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* ===== LOGO AREA ===== */}
          <div
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm">
                Forgeit
              </p>
              <p className="text-gray-400 text-xs">
                Built strong. Built online.
              </p>
            </div>
          </div>

          {/* ===== CENTER MENU ===== */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <button onClick={() => scrollTo("home")} className="hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollTo("services")} className="hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollTo("portfolio")} className="hover:text-white transition">
              Portfolio
            </button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-white transition">
              Pricing
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white transition">
              Contact
            </button>
          </nav>

          {/* ===== RIGHT ICON ===== */}
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
            ☀
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

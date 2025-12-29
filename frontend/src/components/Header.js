import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* ===== LOGO (TEXT VERSION – ORIGINAL) ===== */}
          <a
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl tracking-wide transition-all duration-300"
          >
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black font-extrabold text-lg">
              F
            </span>
            <span className="hidden sm:block">Forgeit</span>
          </a>

          {/* ===== NAVIGATION (ORIGINAL) ===== */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <a
              href="#services"
              className="hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;

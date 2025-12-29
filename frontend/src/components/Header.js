import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            ? "bg-black shadow-md py-3"
            : "bg-black/70 backdrop-blur-md py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* ===== TEXT LOGO (ORIGINAL STYLE) ===== */}
          <button
            onClick={() => scrollTo("home")}
            className="text-white font-extrabold text-lg tracking-wide hover:text-red-500 transition-colors"
          >
            Forge<span className="text-red-500">it</span>
          </button>

          {/* ===== OLD MENU BAR ===== */}
          <nav className="hidden md:flex space-x-8 text-gray-300">
            <button
              onClick={() => scrollTo("services")}
              className="hover:text-white transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo("pricing")}
              className="hover:text-white transition-colors"
            >
              Pricing
            </button>

            <button
              onClick={() => scrollTo("portfolio")}
              className="hover:text-white transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo (replaces F, no layout change) */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Forgeit Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

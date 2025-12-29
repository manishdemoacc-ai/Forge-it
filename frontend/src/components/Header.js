import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="w-full bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Forgeit Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-300 hover:text-red-600">Home</a>
          <a href="#about" className="text-gray-300 hover:text-red-600">About</a>
          <a href="#services" className="text-gray-300 hover:text-red-600">Services</a>
          <a href="#contact" className="text-gray-300 hover:text-red-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

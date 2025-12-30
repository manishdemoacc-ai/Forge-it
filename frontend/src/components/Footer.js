import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks, contactInfo } from '../mock';

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
  Linkedin: Linkedin
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Forgeit</h3>
                <p className="text-sm text-gray-400">Built strong. Built online.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              We help local businesses build a strong online presence with simple, affordable websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#portfolio')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span>Phone:</span>
                  <span className="text-white">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex flex-col gap-1"
                >
                  <span>Email:</span>
                  <span className="text-white break-all">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Forgeit. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  );
};

export default Footer;

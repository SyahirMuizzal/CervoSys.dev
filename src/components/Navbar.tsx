"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Daftar menu (biar lebih rapi)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
            >
              CervoSys.dev
            </a>
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                } transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Tombol (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className={`${
                pathname === "/login"
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              } transition-colors`}
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu (Mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // auto-close menu setelah klik
                className={`block transition-colors ${
                  pathname === link.href
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-gray-200">
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className={`block transition-colors ${
                  pathname === "/login"
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Login
              </a>
              <a
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-2 text-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-t border-white/30 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background glow efek */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">MyBrand</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Membangun pengalaman digital modern dengan desain elegan dan performa tinggi.
          </p>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Navigasi</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-white/60 hover:bg-indigo-100 rounded-full shadow-sm transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-indigo-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-white/60 hover:bg-indigo-100 rounded-full shadow-sm transition-all duration-300"
            >
              <Twitter className="w-5 h-5 text-indigo-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white/60 hover:bg-indigo-100 rounded-full shadow-sm transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-indigo-600" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 bg-white/60 hover:bg-indigo-100 rounded-full shadow-sm transition-all duration-300"
            >
              <Github className="w-5 h-5 text-indigo-600" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-200/50 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyBrand. Semua hak dilindungi.
      </div>
    </footer>
  );
};

export default Footer;

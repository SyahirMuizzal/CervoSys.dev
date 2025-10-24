"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  link,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/40 border border-white/30 shadow-lg hover:shadow-indigo-200 transition-all duration-300"
    >
      {/* Gambar */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-all duration-300" />
      </div>

      {/* Konten */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mt-2">{description}</p>

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-4 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Lihat Project
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-6 sm:px-8 md:px-12 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Selamat Datang di CervoSys.dev
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Website ini dirancang dengan tampilan modern, animasi halus, dan desain responsif
          agar nyaman digunakan di semua perangkat.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-300/50"
          >
            Jelajahi Sekarang
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </a>
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <section id="features" className="relative z-10 py-20 px-6 sm:px-10 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fitur Unggulan Kami
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-lg border border-white/30 hover:shadow-indigo-200 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="text-indigo-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Desain Modern
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              UI yang minimalis, elegan, dan mudah digunakan — menciptakan pengalaman
              pengguna yang menyenangkan di setiap perangkat.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-lg border border-white/30 hover:shadow-indigo-200 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Code className="text-indigo-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Performa Cepat
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Dibangun dengan teknologi modern seperti Next.js dan Tailwind CSS
              untuk performa maksimal tanpa kompromi.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-lg border border-white/30 hover:shadow-indigo-200 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Users className="text-indigo-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ramah Pengguna
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Dibuat dengan pendekatan user-centered design untuk memastikan setiap
              fitur mudah diakses dan digunakan oleh siapa saja.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

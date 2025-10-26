"use client";

import PortfolioCard from "@/components/PortofolioCard";
import { motion } from "framer-motion";
import {
  Target,
  HeartHandshake,
  Lightbulb,
  Globe,
  Code2,
  Brush,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Company Profile Website",
    description: "Website profesional untuk meningkatkan branding perusahaan.",
    image: "/qiyo.png",
    link: "https://qiyo-compro-2.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "Toko online dengan sistem pembayaran modern dan UI elegan.",
    image: "/papergo.png",
    link: "https://papergo.cervosys.com/",
  },
  {
    title: "Portfolio Designer",
    description: "Website personal untuk menampilkan karya-karya kreatif.",
    image: "/qiyo.png",
    link: "https://qiyo-compro-2.vercel.app/",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6 sm:px-8 md:px-12">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tentang Kami
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kami adalah tim kreatif yang berfokus pada desain dan pengembangan web
          modern. Misi kami adalah menghadirkan pengalaman digital yang menarik,
          cepat, dan mudah digunakan.
        </motion.p>
      </section>

      {/* About Content Section */}
      <section className="relative z-10 max-w-6xl mx-auto py-16 px-6 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Siapa Kami?
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
            Kami percaya bahwa setiap proyek digital harus memiliki jiwa dan
            karakter. Dengan perpaduan antara teknologi modern dan estetika
            desain, kami menciptakan solusi web yang tidak hanya fungsional,
            tetapi juga indah dan berkesan.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Dalam setiap pekerjaan, kami mengutamakan kolaborasi, inovasi, dan
            kepuasan pengguna. Kami terus belajar dan berkembang untuk selalu
            menghadirkan hasil terbaik.
          </p>
        </motion.div>

        {/* Ilustrasi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex items-center justify-center shadow-xl"
            style={{ backgroundImage: "url[/About.jpg]" }}
          >
            <Image
              src={"/About.jpg"}
              alt="pict of About"
              fill
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-full opacity-100"
            />
            <motion.div
              className="absolute inset-3 bg-white/70 backdrop-blur-md rounded-full opacity-30"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-6 sm:px-10 md:px-16 bg-white/60 backdrop-blur-md border-t border-white/30">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nilai & Prinsip Kami
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target className="w-10 h-10 text-indigo-600 mb-4" />,
              title: "Fokus pada Tujuan",
              desc: "Kami berkomitmen untuk mencapai hasil yang berdampak bagi klien dan pengguna.",
            },
            {
              icon: (
                <HeartHandshake className="w-10 h-10 text-indigo-600 mb-4" />
              ),
              title: "Kolaborasi & Kepercayaan",
              desc: "Kami percaya hasil terbaik lahir dari kerja sama dan komunikasi terbuka.",
            },
            {
              icon: <Lightbulb className="w-10 h-10 text-indigo-600 mb-4" />,
              title: "Inovasi Tanpa Henti",
              desc: "Kami terus belajar dan bereksperimen agar selalu berada di garis depan teknologi.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + index * 0.1 }}
              className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-md border border-white/30 hover:shadow-indigo-200 transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Portofolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Rocket, Globe, Server } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-indigo-600" />,
      title: "Website Custom",
      desc: "Pembuatan website sesuai kebutuhan bisnis Anda dengan desain eksklusif dan performa optimal.",
    },
    {
      icon: <Palette className="w-10 h-10 text-indigo-600" />,
      title: "UI/UX Design",
      desc: "Desain antarmuka modern, bersih, dan interaktif agar pengguna betah menjelajah situs Anda.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-indigo-600" />,
      title: "Responsive Development",
      desc: "Setiap website kami rancang agar tampil sempurna di semua perangkat, dari desktop hingga smartphone.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-600" />,
      title: "Domain & Hosting",
      desc: "Kami bantu pengelolaan domain dan server agar website Anda selalu online dan cepat diakses.",
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-600" />,
      title: "Maintenance & Support",
      desc: "Tim kami siap membantu menjaga keamanan, performa, dan pembaruan website Anda.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-indigo-600" />,
      title: "SEO Optimization",
      desc: "Optimasi mesin pencari agar website Anda lebih mudah ditemukan di Google.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6 sm:px-8 md:px-12">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Layanan Kami
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kami menyediakan layanan pembuatan website profesional yang dirancang
          untuk membantu bisnis Anda tampil lebih modern, cepat, dan terpercaya
          di dunia digital.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-6xl mx-auto py-16 px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/50 p-8 rounded-2xl shadow-md border border-white/40 hover:shadow-indigo-200 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-indigo-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 text-center py-20 bg-white/60 backdrop-blur-md border-t border-white/30 px-6 sm:px-10 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Siap Membuat Website Impian Anda?
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tim kami siap membantu Anda menciptakan website profesional dan
          menarik yang sesuai dengan kebutuhan bisnis Anda. Mulai dari ide
          hingga peluncuran — kami siap mendampingi.
        </motion.p>
        <motion.a
          href="/Contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 shadow-lg hover:shadow-indigo-300/50 transition-all duration-300"
        >
          Hubungi Kami
        </motion.a>
      </section>
    </div>
  );
}

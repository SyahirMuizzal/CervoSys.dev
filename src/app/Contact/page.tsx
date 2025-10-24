"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus(null);

    try {
      await emailjs.sendForm(
        "service_sch75qm",
        "template_m5pwto5", 
        formRef.current!,
        "L4m6z02-5XrWq9T04" 
      );
      setMessageStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessageStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header Section */}
      <section className="relative z-10 text-center py-20 px-6 sm:px-10 md:px-16">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hubungi Kami
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kami siap membantu Anda membuat website impian Anda menjadi kenyataan.
          Kirim pesan langsung ke tim kami melalui formulir di bawah.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/60 rounded-2xl shadow-lg border border-white/40 p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Informasi Kontak
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Alamat</h4>
                  <p>Jl. Raya Digital No. 88, Jakarta Selatan, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Telepon</h4>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p>info@qiyoweb.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
                  <p>Senin – Jumat: 09.00 - 17.00 WIB</p>
                  <p>Sabtu: 09.00 - 14.00 WIB</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-56 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl flex items-center justify-center text-gray-700 font-semibold">
                Peta Lokasi (dummy)
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/60 rounded-2xl shadow-lg border border-white/40 p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Kirim Pesan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Masukkan nama Anda"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/70"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Masukkan email Anda"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/70"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Judul pesan Anda"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/70"
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Pesan
              </label>
              <textarea
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/70"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 w-full font-semibold py-3 rounded-xl shadow-md transition duration-300 ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {isSending ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>

            {/* Status Message */}
            {messageStatus === "success" && (
              <p className="mt-4 text-green-600 font-medium text-center">
                ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
              </p>
            )}
            {messageStatus === "error" && (
              <p className="mt-4 text-red-600 font-medium text-center">
                ❌ Terjadi kesalahan. Silakan coba lagi nanti.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Menu, X, LayoutDashboard, Users, Settings, BarChart3, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: isOpen ? 260 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col bg-white shadow-lg border-r border-gray-100 p-4 sticky top-0 h-screen"
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="text-2xl font-bold text-indigo-600 whitespace-nowrap overflow-hidden"
          >
            Admin Panel
          </motion.h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          {[
            { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
            { name: "Users", icon: <Users size={20} />, href: "/dashboard/users" },
            { name: "Reports", icon: <BarChart3 size={20} />, href: "/dashboard/reports" },
            { name: "Settings", icon: <Settings size={20} />, href: "/dashboard/settings" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {item.icon}
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="#logout"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={20} />
            {isOpen && <span className="text-sm font-medium">Logout</span>}
          </a>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/admin/dashboard",
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      href: "/admin/dashboard/users",
    },
    {
      name: "Reports",
      icon: <BarChart3 size={20} />,
      href: "/admin/dashboard/reports",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      href: "/admin/dashboard/settings",
    },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 260 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col bg-white shadow-lg border-r border-gray-100 p-4 sticky top-0 h-screen"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          animate={{ opacity: isOpen ? 1 : 0 }}
          className="text-xl font-bold text-indigo-600 whitespace-nowrap overflow-hidden"
        >
          Admin Dashboard
        </motion.h1>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={idx}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              {isOpen && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Logout */}
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
  );
}

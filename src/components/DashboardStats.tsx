"use client";

import React from "react";
import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export default function DashboardStats() {
  const stats: StatCard[] = [
    {
      title: "Total Users",
      value: "1,245",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      color: "from-indigo-100 to-indigo-50",
    },
    {
      title: "Sales",
      value: "$8,940",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      color: "from-green-100 to-green-50",
    },
    {
      title: "Active Orders",
      value: "320",
      icon: <ShoppingCart className="w-6 h-6 text-yellow-600" />,
      color: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Server Uptime",
      value: "99.9%",
      icon: <Activity className="w-6 h-6 text-purple-600" />,
      color: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 bg-gradient-to-br ${stat.color} border border-gray-100 shadow-sm rounded-2xl p-5 hover:shadow-md transition-all duration-300`}
        >
          <div className="p-3 bg-white rounded-xl shadow-inner">{stat.icon}</div>
          <div>
            <h4 className="text-sm text-gray-500 font-medium">{stat.title}</h4>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

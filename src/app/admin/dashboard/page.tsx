"use client";

import React from "react";
import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import LatestUsersTable from "@/components/LatestUsersTable";
import DashboardStats from "@/components/DashboardStats";
import TrafficOverview from "@/components/TrafficOverview";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function DashboardPage() {
  // Data untuk grafik
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Traffic",
        data: [120, 190, 300, 250, 400, 500],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99,102,241,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#6B7280" } },
      x: { ticks: { color: "#6B7280" } },
    },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">
          Selamat datang kembali, Admin 👋. Lihat data terbaru di sini.
        </p>
      </div>

      {/* Statistik Cards */}
      <div className="space-y-10">
        <DashboardStats />
      {/* Tabel Ringkasan */}
        <LatestUsersTable />
      {/* Grafik Aktivitas */}
      <TrafficOverview />
      </div>
      

      

    </div>
  );
}

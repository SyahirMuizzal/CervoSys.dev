"use client";

import React from "react";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function TrafficOverview() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [420, 520, 610, 780, 690, 800, 900],
        borderColor: "rgb(99, 102, 241)", // indigo-500
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgb(99, 102, 241)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { color: "#F3F4F6" },
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Traffic Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
}

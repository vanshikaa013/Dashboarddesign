import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  scales,
  Ticks,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const Statistics = () => {
    
        
  const data = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    datasets: [
      {
        label: "Stock",
        data: [600, 750, 900, 650, 800, 250, 500, 900, 850, 700, 950, 900],
        borderColor: "#F87171",
        tension: 0.6,
        fill: true,
      },
      {
        label: "Sales",
        data: [400 , 500 ,600 , 550 , 650 ,300 , 700 , 500 , 450 , 650 , 550 , 1000],
        borderColor: "#FBBF24", // Orange
        backgroundColor: "rgba(251, 191, 36, 0.1)", // Transparent orange
        tension: 0.7,
        fill: true,
      },
    ],
  };

  const functions = {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display: true,
        lables: {
          color: "#4B5563",
          font: { size: 13 },
        },
      },
    },
    scales: {
      x: {
        Ticks: { color: "#6B7280" }, // Tailwind Gray 500
        grid: { display: true },
      },
      y: {
        title: { // ✅ Added Y-axis title
            display: true,
            text: "Amount",  // This will show "Amount" on Y-axis
            color: "#374151", // Tailwind Gray 700
            font: { size: 14 },
          },
        Ticks: { color: "#6B7280" }, // Tailwind Gray 500
        grid: { color: "#E5E7EB" }, // Tailwind Gray 200
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-6 lg:w-3/5 ">
      <div className="flex justify-between">
        <span>
          <h2 className="text-lg font-semibold text-gray-700">Statistics</h2>
          <p className="text-sm text-gray-500">Stock and Sales</p>
        </span>
        <BsThreeDotsVertical />
      </div>
      <div className="h-64">
        <Line data={data} options={functions}/>
      </div>
    </div>
  );
};

export default Statistics;

import { ArcElement, Legend,Tooltip } from "chart.js";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Chart as ChartJS } from "chart.js";
import { Pie } from "react-chartjs-2";

// Registering elements
ChartJS.register(Tooltip, Legend, ArcElement);

const Revenue = () => {
  const data = {
    datasets: [
      {
        data: [75.55, 24.45],
        backgroundColor: ["#f87170", "#e5e7eb"],
        borderWidth: 1,
      },
    ],
  };

  const functions = {
    responsive: true,
    cutout: "70%",
    plugins:{
      Tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-6 lg:w-2/5 max-lg:w-full">
      <div className="flex justify-between">
        <span>
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-sm text-gray-500">Revenue Target</p>
        </span>
        <BsThreeDotsVertical />
      </div>
      <div className="relative flex items-center justify-center h-32 w-32 mx-auto my-4">
        <Pie data={data} options={functions} />
        <span className="text-xl font-bold text-gray-800 absolute">75.55%</span>
      </div>
      <p className="text-center">You earned <span className="text-green-500 font-medium">₹15,000</span> today , which is higher than yesterday</p>
      <div className="p-2 flex justify-between">
        <span>
            <h1>Total Revenue</h1>
            <p className="font-medium">₹100K <span className="text-green-500">↑</span></p>
        </span>
        <span>
            <h1>Today</h1>
            <p className="font-medium">₹15K <span className="text-green-500">↑</span></p>
        </span>
      </div>
    </div>
  );
};

export default Revenue;

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ArcElement, Chart as ChartJS, Legend, plugins, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Invoice = () => {
  const data = {
    labels: ["Paid", "Unpaid", "Due", "Overdue"],
    datasets: [
      {
        data: [100, 50, 80, 150],
        backgroundColor: [
          "#A855F7", // purple for Paid
          "#3B82F6", // blue for Unpaid
          "#EAB308", // Yellow for Due
          "#EF4444", // red for Overdue
        ],
        hoverOffSet:4
      },
    ],
  };

  const functions={
    responsive:true,
    maintainAspectRatio: false , 
    plugins:{
        legend:{
            position: "top"
        },
        tooltip:{
            enabled:true
        }
    },
    cutout:"80%"

  }
  return (
    <div className="bg-white p-4 shadow-2xl">
      <span className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-700">Invoice Status</h1>
        <BsThreeDotsVertical />
      </span>
      <div className="relative flex items-center justify-center h-72 mx-auto my-4">
        <Doughnut data={data} options={functions} />
        <span className="absolute text-center">
            <h1 className="font-bold text-2xl">₹175K</h1>
            <p className="text-gray-500">Total Invoice Amount</p>
            <p className="text-green-500">+10%</p>

        </span>
      </div>
      <div>
      <ul className="space-y-2 ">
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:mr-3">
            Paid
          </span>
          <span className="text-green-500">₹10,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-red-500 before:mr-3">
            Unpaid
          </span>
          <span className="text-red-500">₹50,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-yellow-500 before:mr-3">
            Due
          </span>
          <span className="text-yellow-500">₹80,000</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-orange-500 before:mr-3">
            Overdue
          </span>
          <span className="text-orange-500">₹150,000</span>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Invoice;

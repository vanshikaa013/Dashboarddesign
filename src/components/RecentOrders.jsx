import React, { useState } from "react";
import { GiAbacus } from "react-icons/gi";
import { FaTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const RecentOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Men's White T-Shirt",
      customer: "John Doe",
      email: "john@example.com",
      quantity: 500,
      total: "₹1000",
      status: "Processing",
    },
    {
      id: 2,
      product: "Chinos",
      customer: "Jane Smith",
      email: "jane@example.com",
      quantity: 600,
      total: "₹1500",
      status: "Shipped",
    },
    {
      id: 3,
      product: "Cargo Pants",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
    {
      id: 4,
      product: "Sweatpant",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
    {
      id: 5,
      product: "Joggers",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
    {
      id: 6,
      product: "Joggers",
      customer: "Bob Brown",
      email: "bob@example.com",
      quantity: 600,
      total: "₹2000",
      status: "Delivered",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  // Calculate Pagination
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + ordersPerPage);

  const statusClass = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-200 text-yellow-600";
      case "Shipped":
        return "bg-blue-200 text-blue-600";
      case "Delivered":
        return "bg-green-200 text-green-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const handleDelete = (id) => {
    const updatedOrder = orders.filter((order) => order.id !== id);
    setOrders(updatedOrder);
  };

  return (
    <div className="bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2">
      <div className="flex justify-between">
        <span className="flex justify-between items-center w-[30%]">
          <h1 className="font-semibold text-md">Recent Orders</h1>
          <p className="bg-green-100 text-green-500 rounded-md px-2">
            +2 Orders
          </p>
        </span>
        <div className="space-x-2">
          {/* select date */}
          <button>
            <input
              type="date"
              className="border border-gray-300 text-gray-400 rounded-md px-2 py-1  hover:bg-gray-200"
            />
          </button>

          {/* Filters button */}
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-400 hover:bg-gray-200">
            <div className="flex items-center justify-center">
              <GiAbacus /> &nbsp; Filters
            </div>
          </button>
          {/* See All */}
          <button className="bg-red-200 px-2 py-1 rounded-md text-red-600 font-semibold hover:bg-red-400 hover:text-white">
            See All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 mt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">
                Product
              </th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">
                Customer
              </th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">
                Total
              </th>
              <th className="p-3 text-left text-sm font-medium text-gray-600 border-b">
                Status
              </th>
              <th className="p-3 text-center text-sm font-medium text-gray-600 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-700 border-b border-gray-100">
                  {order.product}
                  <div className="text-xs text-gray-500">
                    Qty: {order.quantity}
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 border-b border-gray-100">
                  {order.customer}
                  <div className="text-xs text-gray-500">{order.email}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 border-b border-gray-100">
                  {order.total}
                </td>
                <td className="p-3 text-sm border-b border-gray-100">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClass(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-center border-b border-gray-100">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <FaEye />
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashCan/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-16">
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentOrders;

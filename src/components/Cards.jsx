import React from 'react'
import { FaWarehouse } from "react-icons/fa"
import { PiUsersThreeFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
    <div className="p-4 bg-black text-white rounded-lg  flex flex-col hover:bg-gray-900 shadow-xl">
      <PiUsersThreeFill className="text-3xl mb-2" />
      <h3 className="text-md font-semibold">Total Users</h3>
      <p className="text-3xl font-bold">500</p>
    </div>
    <div className="p-4 bg-purple-400 text-white rounded-lg shadow-xl flex flex-col hover:bg-purple-500">
      <FaWarehouse className="text-3xl mb-2" />
      <h3 className="text-md font-semibold">Total Warehouse</h3>
      <p className="text-3xl font-bold">30</p>
    </div>
    <div className="p-4 bg-blue-600 text-white rounded-lg shadow-xl flex flex-col hover:bg-blue-700">
    <FaCartShopping className="text-3xl mb-2" />
      <h3 className="text-md font-semibold">Total Products</h3>
      <p className="text-3xl font-bold">2400</p>
    </div>
    <div className="p-4 bg-orange-500 text-white rounded-lg shadow-xl flex flex-col hover:bg-orange-600">
      <PiUsersThreeFill className="text-3xl mb-2" />
      <h3 className="text-md font-semibold">Total Reports</h3>
      <p className="text-3xl font-bold">247</p>
    </div>
  </div>
  )
}

export default Cards
import React from "react";
import SideBar from "./components/SideBar";

import Cards from "./components/Cards";
import Revenue from "./components/Revenue";
import Statistics from "./components/Statistics";
import Invoice from "./components/Invoice";
import TopProducts from "./components/TopProducts";
import TopSales from "./components/TopSales";
import RecentOrders from "./components/RecentOrders";
import Warehouse from "./components/Warehouse";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-end py-5 mx-auto items-center">
      <SideBar />
      <div className="bg-gray-100 md:w-[80%] w-[100%] lg:[100%]">
        {/* Header section */}
        <main>
          <div className="py-2 px-4 flex justify-between items-center">
            <span className="space-y-2">
              <h2 className="font-bold text-2xl ">Welcome Back Jay</h2>
              <p className="ml-5 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </span>
            <input
              // placeholderText="Select a Date"
              type="date"
              className=" bg-white text-gray-500 p-1  shadow-lg"
            />
          </div>
        </main>
        {/* Header section */}
        {/*  Cards sec*/}
        <div>
          <Cards />
        </div>
        {/* Cards sec */}
        {/* Revenue & Statistics */}
        <div className="p-3 flex flex-col lg:flex-row gap-4 mt-6">
          <Revenue />
          <Statistics />
        </div>
        {/*  Revenue & Statistics  */}
        {/* Invoice , Top products & Top sales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl sm:px-6 px-4">
          <Invoice />
          <TopProducts />
          <TopSales />
        </div>
        {/* Invoice , Top products & Top sales */}
        {/* Recent Orders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl sm:px-6 mt-4 px-4">
          <RecentOrders />
          <Warehouse />
        </div>
      </div>
    </div>
  );
};

export default App;

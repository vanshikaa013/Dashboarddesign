import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import image_man from "../assets/image_man.jpg";

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: "Men's Classic White T-Shirt",
      category: "Men's Clothing",
      price: 1240,
      icon: image_man,
    },
    {
      id: 2,
      name: "Formal Shirts For Men",
      category: "Men's Clothing",
      price: 1189,
      icon: image_man,
    },
    {
      id: 3,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 1100,
      icon: image_man,
    },
    {
      id: 4,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man,
    },
    {
      id: 5,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man,
    },
    {
      id: 6,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man,
    },
    {
      id: 7,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      icon: image_man,
    },
  ];
  return (
    <div className="bg-white p-4 shadow-2xl">
      <div className="flex justify-between items-center ">
        <span>
          <h1 className="text-lg font-semibold text-gray-700">Top Product</h1>
          <p className="text-sm text-gray-500">Top Products This Month</p>
        </span>
        <BsThreeDotsVertical />
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id} className="flex px-1 py-2  justify-between hover:bg-gray-100 ">
            <span className="flex space-x-1">
              <img className="h-10" src={product.icon} alt="product" />
              <div>
                <h1 className="font-semibold">{product.name}</h1>
                <p className="text-gray-400 text-sm font-medium">
                  {product.category}
                </p>
              </div>
            </span>
            <h1 className="font-semibold">₹{product.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

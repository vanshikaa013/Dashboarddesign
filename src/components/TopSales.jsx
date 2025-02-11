import React from 'react'
import image_pant from "../assets/image_pant.png"
import { BsThreeDotsVertical } from 'react-icons/bs';
const TopSales = () => {

    const category = [
        {
          id: 1,
          name: "Slim Fit",
          price: 1509,
          icon: image_pant,
          discount: "+12%",
        },
        {
          id: 2,
          name: "Regular Fit",
          price: 1460,
          icon: image_pant,
          discount: "+0%",
        },
        {
          id: 3,
          name: "Relaxed Fit",
          price: 1229,
          icon: image_pant,
          discount: "+0%",
        },
        {
          id: 4,
          name: "Skinny Fit",
          price: 982,
          icon: image_pant,
          discount: "+19%",
        },
        {
          id: 5,
          name: "Tappered Fit",
    
          price: 791,
          icon: image_pant,
          discount: "+0%",
        },
        {
          id: 6,
          name: "Straight Fit",
    
          price: 679,
          icon: image_pant,
          discount: "+11%",
        },
        {
          id: 7,
          name: "Bootcut",
    
          price: 679,
          icon: image_pant,
          discount: "+11%",
        },
      ];
  return (
     <div className="bg-white p-4 shadow-2xl">
          <div className="flex justify-between items-center ">
            <span>
              <h1 className="text-lg font-semibold text-gray-700">Top Sales Category</h1>
              <p className="text-sm text-gray-500">Top Sales Category This Month</p>
            </span>
            <BsThreeDotsVertical />
          </div>
          <div>
           {
            category.map((item)=>(
                <div key={item.id} className="flex px-1 py-2 justify-between ">
                <span className="flex space-x-1">
                  <img className="h-10" src={item.icon} alt="product" />
                  <div>
                    <h1 className="font-semibold">{item.name}</h1>
                  </div>
                </span>
                <h1 className="font-semibold">₹{item.price}</h1>
                <span className='bg-gray-100 rounded-2xl flex items-center text-sm w-10 h-5 justify-center'>{item.discount}</span>
              </div>
            ))
           }
          </div>
        </div>
  )
}

export default TopSales
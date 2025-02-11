import React from 'react'

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 bg-gray-50 w-[20%] min-h-auto text-md ">
    <h1 className="bg-pink-100 font-bold text-pink-900 py-2 px-4 hover:border-l-pink-950 hover:border-l-4 text-lg ">
      Dashboard
    </h1>
    <ul className="space-y-2 p-2 ">
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200 ">
          User List
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Product Management
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Inventory Management
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Warehouse Management
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Sale
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Lorem ipsum
        </a>
      </li>
      <li className="px-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">
          Lorem ipsum
        </a>
      </li>

    </ul>
  </aside>
  )
}

export default SideBar
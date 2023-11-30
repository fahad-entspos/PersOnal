import { Link } from 'react-router-dom';
import React from 'react'
import Style from "./Sidebar.module.css";
function Sidebar() {
  return <>
  
<div className={Style.containers}>
  <div className=" flex  ">
    <aside className="sidebar bg-gray-800 h-screen">
      <div className="flex items-center justify-center mt-10">
        <span className="text-white text-2xl font-semibold">Dashboard</span>
      </div>
      <nav className="mt-10">
        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <Link  to={"/AppstOre"} className="mx-4">App Store</Link>
        </a>


        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <Link  to={"/Features"}  className="mx-4">Users</Link>
        </a>


        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <Link  to={"/Job"}  className="mx-4">Job Safety</Link>
        </a>

        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <Link  to={"/Dropdown"}  className="mx-4">Drowp Down</Link>
        </a>


        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <span className="mx-4">Cloud Storage</span>
        </a>    <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <span className="mx-4">Billing</span>
        </a>


        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="mx-4">Security</span>
        </a>
        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="mx-4">Password & Security</span>
        </a>
        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </a>
      </nav>
    </aside>
  </div>
   
  </div>  
 
        
  </>
}

export default Sidebar
import React from 'react'
import { FiCodesandbox } from 'react-icons/fi';
import { Link } from "react-router-dom";
import Style from "./Footer.module.css"
function Footer() {
  return (
    <div className={Style.main}>


<header class=" text-blue-700 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-blue-700 mb-4 md:mb-0">
      <FiCodesandbox class="w-10 h-10"/>
      <span class="ml-3 text-xl">PortFolio</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to={"/Header"} class="mr-5 hover:text-gray-900">Home</Link>
      <Link to={"/Myskils"} class="mr-5 hover:text-gray-900">Service</Link>
      <Link to={"/About"}   class="mr-5 hover:text-gray-900">About</Link>
    </nav>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-tr rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Contact
  </span>
</button>
  </div>
</header>
    </div>
  )
}

export default Footer
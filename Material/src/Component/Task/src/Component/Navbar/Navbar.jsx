import React from 'react'
import Fade from 'react-reveal/Fade';

import Style from "./Navbar.module.css"
function Navbar() {
  return <>
  
 <Fade top>
  <div  className={Style.fix}>

<nav class="bg-white  mt-1 w-full h-10   border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
<div>

      <div className='flex'>
      <img src={"Logo.jpg"} class="h-10 mr-1" alt="Flowbite Logo"/>

      <span className={Style.main}>Farenow</span>
      </div>
</div>
  <div class="flex md:order-2 gap-.5">
<div className={Style.bwelicalss}>

<button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2">Login</button>
</div>
<div className={Style.bawelicalss}>

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>
</div>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open menu</span>
        <svg class="w-4 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-1 md:p-0 mt-1 font-medium   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
    
      <li>
        <h6 href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</h6>
      </li>
      <li>
        <h6 href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Become a Provider</h6>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

</div>
</Fade>

</>

}

export default Navbar
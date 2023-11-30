import React from "react";
import { FaSearch } from 'react-icons/fa';

import Style from "./Testimonial.module.css";
function Testimonial() {
  return (
    <>
      <div className={Style.container}>
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Region
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>{" "}
        </div>
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Industry
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>{" "}
        </div>



        <form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
       
       
<input   className={Style.inputbox}  placeholder='Search App  '  type="text"  />
<button type="submit" class="text-gray-900 absolute right-2 bottom-2 flex-wrap     font-black rounded-lg text-lg px-1 py-1 "><FaSearch/></button>

    </div>
</form>

        
      </div>

      <div className={Style.content}>   

    <h1>
    App Store
    </h1>
    <h1 className={Style.Installed}>
    Installed Apps
    </h1>
  </div>
  <h1  className={Style.Features}>Features Apps</h1>
 <div className={Style.main}>

        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center mt-4 text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-42 h-42 object-cover object-center sm:mb-0 mb-4" src={"./App Square.png"}/>
          <div class="flex-grow sm:pl-8   text-sm">
            <h2 class="title-font font-sm text-sm text-gray-900">Job Safety Analysis (NZ)</h2>
            <h3 class="text-blue-500   mb-1  text-sm">Not Added . Free</h3>
            <p class="mb-1   text-sm">Provide JSA for   workers  <br/> and checklisting.  </p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>
     
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  mt-4   text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-42 h-42 object-cover object-center sm:mb-0 mb-4" src={"./App Square1.png"}/>
          <div class="flex-grow sm:pl-8   text-sm">
            <h2 class="title-font font-sm text-sm text-gray-900">Job Safety Analysis (NZ)</h2>
            <h3 class="text-blue-500   mb-1  text-sm">Not Added . Free</h3>
            <p class="mb-1   text-sm">Provide JSA for   workers  <br/> and checklisting.  </p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>

        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  mt-4   text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-42 h-42 object-cover object-center sm:mb-0 mb-4" src={"./App Square2.png"}/>
          <div class="flex-grow sm:pl-8   text-sm">
            <h2 class="title-font font-sm text-sm text-gray-900">Job Safety Analysis (NZ)</h2>
            <h3 class="text-blue-500  mb-1  text-sm">Not Added . Free</h3>
            <p class="mb-1   text-sm">Provide JSA for   workers  <br/> and checklisting.  </p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>

        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  mt-4 text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-42 h-42 object-cover object-center sm:mb-0 mb-4" src={"./App Square3.png"}/>
          <div class="flex-grow sm:pl-8   text-sm">
            <h2 class="title-font font-sm text-sm text-gray-900">Job Safety Analysis (NZ)</h2>
            <h3 class="text-blue-500   mb-1  text-sm">Not Added . Free</h3>
            <p class="mb-1   text-sm">Provide JSA for   workers  <br/> and checklisting.  </p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>

  
      </div>
    </>
  );
}

export default Testimonial;

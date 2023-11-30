import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Style from "./Header.module.css"
function Header() {
  return <>
  <Fade left>
  {/* <hr className={Style.bordr}/> */}
  <div className={Style.container}>

  <div>

  <h1  className={Style.The}>The <span className={Style.blue}>easy</span>  & <span className={Style.blue}> reliable</span>  way to <br/>take care of your home.</h1>
<p  className={Style.we}>

We make it easy for you to create the best experience for your home. <br/> Book for a handyman, get a professional service or shop from a wide <br/> variety of products and get them delivered to your doorstep.

</p>

<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">What service do you need?</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block w-full p-6 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What service do you need?" required/>
        
       

        <Link to={"/Signup"}  type="submit" class="text-white absolute  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</Link>
    </div>
</form>

  </div>

  
  <div className={Style.main}>
    <img className={Style.box} src={"Hero.png"} alt="" />
    
  
  </div>
  </div>
  </Fade>
  </>

}

export default Header
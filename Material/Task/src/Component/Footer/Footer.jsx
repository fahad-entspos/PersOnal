import React from 'react'
import Zoom from 'react-reveal/Zoom';

import Style from "./Fooder.module.css"
function Footer() {
  return<>
  <Zoom left>

<div className={Style.mixup}>

  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <h1 className={Style.Update}>
                Lets Keep you <br/>Update
              </h1>
              <p>
              Subscribe to our newsletter to get feeds, <br/> offers and promos.
              </p>

            

              <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
       
        <input type="search" id="default-search" class="block w-full     p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5  mb-1 mr-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<p className={Style.Download}>
              Download the Farenow App
              </p>

              
              <div className="flex justify-center"   >
                  <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                   <img src={"path4.png"} alt="" />
                    
                    <span className="ml-4 flex  items-start flex-col leading-none">
                      <span className="text-xs   text-white   mb-1">GET IT ON</span>
                      <span className="title-font  text-white font-medium">Google Play</span>
                    </span>
                  </button>
                  <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                   <img src={"google_play.png"} alt="" />
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-white mb-1">Download on the</span>
                      <span className="title-font  text-white font-medium">App Store</span>
                    </span>
                  </button>
                </div>
          </div>
          <div class="grid grid-cols-2  sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6  ml-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">

<h6>Electrician</h6>                          
                      </li>
                      <li class="mb-4">

<h6>Refrigerator Repair</h6>                          
                      </li>

                      <li class="mb-4">

<h6>TV Wall Mount</h6>                          
                      </li>

                      <li class="mb-4">

<h6>Smart Home Services</h6>                          
                      </li>

                      <li class="mb-4">

<h6>Outdoor Lighting</h6>                          
                      </li>

                      <li class="mb-4">

<h6>Plumbing</h6>                          
                      </li>

                      <li class="mb-4">

<h6>Lawn Care Services</h6>                          
                      </li>
                      <li class="mb-4">

<h6>See all Services</h6>                          
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6  ml-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">

<h6>Blog</h6>                          
                      </li>

                      <li class="mb-4">

<h6>About us</h6>                          
                      </li>


                      <li class="mb-4">

<h6>Contact</h6>                          
                      </li>


                      <li class="mb-4">

<h6>Sign up</h6>                          
                      </li>

                      <li class="mb-4">

<h6>Become a pro</h6>                          
                      </li>

                      
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 ml-6 text-sm font-bold  text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">

<h6>Help</h6>                          
                      </li>  <li class="mb-4">

<h6>FAQ</h6>                          
                      </li>  <li class="mb-4">

<h6>Articles</h6>                          
                      </li>  <li class="mb-4">

<h6>Terms of Use</h6>                          
                      </li>  <li class="mb-4">

<h6>Privacy Policy</h6>                          
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    
    </div>
</footer>
</div>
</Zoom>

  </>
}

export default Footer
import React from 'react'
import { LiaFacebookMessenger } from 'react-icons/lia';
import { AiOutlineBell } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import Style from "./SecoundNavbar.module.css";
function SecoundNavbar() {
  return<>
  
  
  <nav className="bg-blue-600 border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-2">
          <h2   className={Style.conent}>TiKi</h2>
          <div className="flex items-center  gap-4 md:order-2">
            <button type="button" className="flex   mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <div className={Style.icons}>

              <LiaFacebookMessenger/>
              </div>
            </button><button type="button" className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
           <div className={Style.icons}>
            <AiOutlineBell/>

           </div>
           

  </button><button type="button" className="flex mr-3 text-sm   rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          
          <div className={Style.icons}>
            <FaQuestion/>

          </div>


            </button>
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <img className="w-8 h-8  rounded-full" src={"User.png"} alt="user photo" />
            </button>
           
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        
          </div>
        </div>
      </nav>
  
  
  </>
}

export default SecoundNavbar
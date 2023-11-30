import React from 'react'
import Fade from 'react-reveal/Fade';

import Style from "./Become.module.css"
function Become() {
  return <>
  <Fade right >

  <div  className={Style.container}>

  <div className={Style.main}>
    <h1>
    Are You a Five Star Professional?
    </h1>
    <p>
    From cleaners to handymen to smart home installers, <br/> Farenow is always looking for service professionals who <br/>  are experts in their trade and provide great service to  <br/>  their customers. The best home service professionals  <br/>  use Farenow for the great pay and flexible scheduling.
    </p>
    <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
 
 <strong>
    </strong> 
 Become a Farenow Pro
</button>
  </div>

  <img  className={Style.img}  src={"Account.png"} alt="" />
  
  </div>
  </Fade>

  </>
}

export default Become
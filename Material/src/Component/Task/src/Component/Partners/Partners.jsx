import React from 'react'
import Zoom from 'react-reveal/Zoom';

import { FcProcess } from 'react-icons/fc';
import { FcDoughnutChart } from 'react-icons/fc';
import { FcGrid } from 'react-icons/fc';
import Style from "./Partners.module.css"
function Partners() {
  return <>
  <Zoom right>

<div  className={Style.ufffffff}>

<div className={Style.main}>

<h1  className={Style.Partners}>
Our Partners
</h1>
<p  className={Style.Farenow}>
Farenow works with partners who want to provide their customers, tenants, or employees <br/> easy access to quality
home services at affordable prices.
</p>

</div>


  <div className={Style.container}>

  
  

  <button type="button" class=" bg-gray-100   hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
 <FcProcess className={Style.icons}/>
 <strong  className={Style.wayfair}>
  wayfair

 </strong>

</button>
<button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
<FcDoughnutChart  className={Style.icons}/>  <strong  className={Style.Walmart}> 
Walmart
 </strong>
</button>
<button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
<strong>
Google Home
 </strong>
</button>
<button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
<FcGrid  className={Style.icons}/>
<strong>
  Equity Residential

 </strong>
</button>
</div>
</div>
</Zoom>

  </>
}

export default Partners
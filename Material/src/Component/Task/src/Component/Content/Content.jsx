import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import Style from "./Content.module.css"
import { Link } from 'react-router-dom';

const Content = () => {
  return <>
  <div className={Style.main}>
    <h1>App StOre</h1>

<div>

<button type="button" class="text-white ml-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">  Add App</button>

<form className={Style.name}>
    <div class="relative ">
<div class="absolute  ">

   

<input   className={Style.inputbox}  placeholder='Search App  '  type="text"  />
<button type="submit" class="text-gray-900 absolute right-2 bottom-2 flex-wrap     font-black rounded-lg text-lg px-1 py-1 "><FaSearch/></button>
</div>


</div>
</form>

</div>

  </div>
  <section class="text-gray-600 body-font    ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">

    

    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left    whitespace-no-wrap">
        <thead  >
        <tr  >
            <td class="px-4 py-3">Installed Apps (3)</td>
            <td class="px-4 py-3">Type</td>
            <td class="px-4 py-3">App ID</td>
            <td class="w-10 text-center"></td>
          </tr>

<hr/>
          <tr >
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  bg-gray-100 rounded-tl rounded-bl">Projects</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Core</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">APP-D3KU2C13BH013</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">

            <BsThreeDots className={Style.icons}/>

            </th>
          </tr>
          <hr className={Style.line}/>

          <tr className=''>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Vehicle Safety Checklist (NZ)</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Checklist</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">APP-D3KU2C13BH013</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">

            <BsThreeDots   className={Style.icons}/>

            </th>
            
          </tr>
          <hr className={Style.line}/>


          <tr className='pt-6'>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Report Hazard</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Report</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">APP-D3KU2C13BH013</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">

            <BsThreeDots  className={Style.icons}/>

            </th>
          </tr>

          
        </thead>
        <tbody>
         
      
        
        </tbody>
      </table>
    </div>
  
  </div>
</section>
  </>
}

export default Content
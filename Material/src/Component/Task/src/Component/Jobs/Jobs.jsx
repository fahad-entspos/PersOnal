import React from 'react'
import Swiperslider from '../Testimonial/Swiperslider/Swiperslider'
import Style from "./jobs.module.css"
function Jobs() {
  return <>
  <div  className={Style.container}>

   <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center mt-4 text-center sm:text-left m-40">
          <img alt="team" class="flex-shrink-0 rounded-lg w-42 h-42 object-cover object-center sm:mb-0 mb-4" src={"./App Square.png"}/>
          <div class="flex-grow sm:pl-8   text-sm">
            <h2  className={Style.Job} >Job Safety Analysis (NZ)</h2>
            <p class="mb-1   text-sm">  </p>
          
          </div>
        </div>

     <Swiperslider/>

<div className={Style.main}>

<h4  className={Style.Description}>
Description
</h4>

<p   className={Style.Provide}>

Provide JSA for workers and checklisting.  This is just some description <br/> to fill in some blank space. There will be a lot of info here. Provide JSA   <br/>  for workers and checklisting.  This is just some  description to fill in some  <br/>  blank space. 

</p>
</div>

  </div>
  
  
  </>
}

export default Jobs
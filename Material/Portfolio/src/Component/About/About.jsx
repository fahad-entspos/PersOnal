import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { BsRocketFill } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';
import CountUp from "react-countup"
import Style from "./About.module.css"
import Client from '../Client/Client'
function About() {
  return (
    <>
   

<div className={Style.main}>
  <img className={Style.img}     src={"/fadiii.png"} >
</img>


<div className={Style.container}>
  <h1>Hello !</h1>
  <h1>I Am FaHaD</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Cumque quaerat, maiores quia minus,  rem eaque ducimus <br/>consequatur assumenda voluptate at distinctio reiciendis <br/> suscipit! Illum maiores doloremque velit quam accusamus blanditiis!
  <br/> ipsum dolor sit amet, consectetur adipisicing elit. <br/>Cumque quaerat, maiores quia minus,  rem eaque ducimus <br/>consequatur assumenda voluptate at distinctio reiciendis <br/> suscipit! Illum maiores doloremque velit quam accusamus blanditiis!
  </p>
</div>

</div>
{/* <CountUp start={0} end={10000} duration={25.5}
                separator=","/> */}

  

<div className={  Style.max}>
<section class=" body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    </div>

    <div className={  Style.mix}>


<div className={  Style.happy}>


  <BsRocketFill  className={  Style.icon} />
  
    <h4><CountUp start={0} end={15} duration={25.5}
                separator=","/>+</h4>
    <p>PROJECT</p>

</div>

<div className={  Style.happy}>


  <HiOutlineEmojiHappy  className={  Style.icon} />
  <h4><CountUp start={0} end={1000} duration={25.5}
                separator=","/></h4>
 <p>HAPPY CLIENTS</p>
</div>

<div className={  Style.happy}>


  <GiTrophyCup   className={  Style.icon}/>
   <h4><CountUp start={0} end={25} duration={25.5}
                separator=","/></h4>
  <p>AWARDS WIN</p>

</div>


<div className={  Style.happy}>


  <BiTimeFive  className={  Style.icon} />
  <h4><CountUp start={0} end={7550} duration={25.5}
                separator=","/>+</h4>
  <p>WORKING HOURS</p>
</div>


</div>


   
</section>
    </div>





<Client/>
</>



  
  )
}

export default About
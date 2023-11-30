import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

import Style from "./Client.module.css"
function Client() {
  return (
    <>
    
   <div className={Style.main}>
    
<section class="text-white body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-white">What Clients Say</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-40 object-cover object-center mb-4" src={"/3.jpg"}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Alper Kamu</h2>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-amber-400">
               <StarIcon/>
              </a>
              <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-40 object-cover object-center mb-4" src={"/2.jpg"}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Holden Caulfield</h2>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a class="text-amber-400">
               <StarIcon/>
              </a>
              <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-40 object-cover object-center mb-4" src={"/1.jpg"}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Atticus Finch</h2>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a>
             
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-40  object-cover object-center mb-4" src={"/111.png"}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Henry Letham</h2>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a> <a class="text-amber-400">
               <StarIcon/>
              </a>
             
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



   </div>

<div className={Style.hire}
>


   <section class=" body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Your Have Any Project</h1>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-yellow-200 inline-flex"></div>
        </div>

<button className={Style.btn}>Hired Me</button>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-14 text-white">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
<div className={Style.icons} >


  <FaFacebookSquare/>
  <BsGithub/>
  <AiOutlineTwitter/>
  <AiFillInstagram/>
</div>

      </div>
      
      </div>
      </section>








      </div>




   </>





  )
}

export default Client
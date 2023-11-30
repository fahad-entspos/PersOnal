import React from 'react'
import Style from "./Myskils.module.css"
import { TbHtml } from 'react-icons/tb';
import { MdCss } from 'react-icons/md';
import { DiJavascript1 } from 'react-icons/di';
import { TbBrandTypescript } from 'react-icons/tb';
import { DiReact } from 'react-icons/di';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

function Myskils() {
  return (
    <div className={Style.main}>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">My SKILLS</h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-yellow-200 inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <TbHtml class="w-10 h-10"/>

          </div>
          <div class="flex-grow">
            <h2 class=" text-white text-lg title-font font-medium mb-3">HTML</h2>
            <p class="leading-relaxed  text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
           
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <MdCss class="w-10 h-20"/>
          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">CSS</h2>
            <p class="leading-relaxed text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
           
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <DiJavascript1 class="w-10 h-10"/>

          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">JAVASCRIPT</h2>
            <p class="leading-relaxed text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            
          </div>
        </div>   <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <DiReact class="w-10 h-10"/>

          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">REACT</h2>
            <p class="leading-relaxed text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            
          </div>
        </div>   <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <TbBrandTypescript class="w-10 h-10"/>

          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">TYPESCRIPT</h2>
            <p class="leading-relaxed text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            
          </div>
        </div>   <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
          <AiOutlineCodeSandbox class="w-10 h-10  "/>

          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">UI DESIGNER</h2>
            <p class="leading-relaxed text-white text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Myskils
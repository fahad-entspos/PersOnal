import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Style from "./Swiperslider.module.css";

// import required modules
import { Navigation } from "swiper";

export default function Swiperslider() {
  return (
    <>
      <Swiper   className="mySwiper">



        <SwiperSlide className={Style.main}>
{
<img alt="team" class="flex-shrink-0 m-auto rounded-lg w-40 h-40 object-cover object-center sm:mb-0 " src={"./image 2.png"}/>
}
        </SwiperSlide>
        <SwiperSlide className={Style.main}>
{
<img alt="team" class="flex-shrink-0 m-auto rounded-lg w-40 h-40 object-cover object-center sm:mb-0 " src={"./image 2.png"}/>
}
        </SwiperSlide>

        <SwiperSlide className={Style.main}>
{
<img alt="team" class="flex-shrink-0 m-auto rounded-lg w-40 h-40 object-cover object-center sm:mb-0 " src={"./image 2.png"}/>
}
        </SwiperSlide>


        
 
      </Swiper>
    </>
  );
}






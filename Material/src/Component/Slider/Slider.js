import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Style from "./Slider.module.css"

// import required modules
import { Pagination ,autoplay } from "swiper";

export default function App() {
  
let sliders = useSelector((slider) => slider.cardData);

let sliderData = sliders.filter((slider)=>{if(slider.category == "slider"){return true} });
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
  {
  sliderData.map((slider)=>{
    
    return <SwiperSlide>
     <img className={Style.img} src={slider.img} alt="" />
</SwiperSlide>
})
} 
      </Swiper>
    </>
  );
}





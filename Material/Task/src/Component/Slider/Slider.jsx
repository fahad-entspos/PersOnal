import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Style from "./Slider.module.css"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
export default function Category() {
  return (
    <>

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay
        className={Style.mySwiper}
        breakpoints={{
          280:{
              width:300,
              slidesPerView:1         
          },
          380:{
              width:360,
              slidesPerView:1
          },
          400:{
              width:430,
              slidesPerView:1         
          },
          768:{
              width:780,
              slidesPerView:2         
          },
          1024:{
              width:980,
              slidesPerView:3         
          },
          1280:{
              width:1260,
              slidesPerView:4        
          },

      }}
      >
        
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (0).jpg"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (1).png"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (2).jpg"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (3).jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (0).jpg"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (1).png"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (2).jpg"} alt="" />
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className={Style.continer}>
      <img src={"service (3).jpg"} alt="" />
            </div>
          </SwiperSlide>
      </Swiper>


      <hr className={Style.line}/>
    </>
  );
}

import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { GiGamepad } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
import Style from "./Category.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
export default function Category() {
  return (
    <>
   <div className={Style.container}>
        <h1>POPULAR SERVICE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          officiis veniam suscipit <br/> commodi omnis, cum amet. Ipsum ut maiores
          officia <br/>non provident. Cupiditate id necessitatibus<br/> quas repellat
          officia dolor ipsum?
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
              slidesPerView:3         
          },

      }}
      >
        
          <SwiperSlide>
            <div className={Style.continer}>
              <IoIosPhonePortrait className={Style.icons} />
              <h2 className={Style.containt}>Phone</h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={Style.continer}>
              <RiComputerFill className={Style.icons} />
              <h2 className={Style.containt}>Computer</h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={Style.continer}>
              <BsSmartwatch className={Style.icons} />
              <h2 className={Style.containt}>SmartWatch</h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={Style.continer}>
              <BsFillCameraFill className={Style.icons} />
              <h2 className={Style.containt}>Camera</h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={Style.continer}>
              <BiHeadphone className={Style.icons} />
              <h2 className={Style.containt}>Headphone</h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={Style.continer}>
              <GiGamepad className={Style.icons} />
              <h2 className={Style.containt}>Gaming</h2>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}

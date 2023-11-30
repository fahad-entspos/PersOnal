import React from 'react'
import Style from "./About.module.css"
import { TbTruckDelivery } from 'react-icons/tb';
import CountUp from "react-countup";
import { TiTick } from 'react-icons/ti';
import { ImHeadphones } from 'react-icons/im';


export default function About() {
  return (
   <>
   <div className={Style.main}>
   
   <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font   text-white">Our Story</h1>
              <div className=" text-white  leading-relaxed">Launced in 2015, Exclusive is South Asia’s premier online shopping <br/> makterplace with an active presense in Bangladesh. Supported <br/> by wide range of tailored marketing, data and service solutions,<br/>  Exclusive has 10,500 sallers and 300 brands and serves 3<br/>  millioons customers across the region. .<br/>
              Exclusive has more than 1 Million products to offer, growing at<br/> a very fast. Exclusive offers a diverse assotment in<br/> categories ranging  from consumer.
              </div>
            </div>
          
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="/pic (2).jpg" alt="stats" />
          </div>
        </div>
      </section>





 
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
                <h2 className=" text-white"><CountUp start={0} end={15} duration={10.7}
                separator=","/>K</h2>                <p className="leading-relaxed  text-white">Sallers active our site </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className=" text-white"><CountUp start={0} end={15} duration={111.3}
                separator=","/>+</h2>                <p className="leading-relaxed  text-white">Monthly Product Sale</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <h2 className=" text-white"><CountUp start={0} end={15} duration={74.5}
                separator=","/>K</h2>                <p className="leading-relaxed text-white">Customer active in our site</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className=" text-white"><CountUp start={0} end={15} duration={45}
                separator=","/>K</h2>                <p className="leading-relaxed text-white">Annula gross sale in our site</p>
              </div>
            </div>
          </div>
        </div>
      </section>












      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Customer Service</h1>
            <p className="text-base leading-relaxed text-white xl:w-2/4 lg:w-3/4 mx-auto ">Customer service is the direct one-on-one interaction between a consumer making a purchase and a representative of the company that is selling it. Most retailers see this direct interaction as a critical factor in ensuring buyer satisfaction and encouraging repeat business..</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg> */}
                <TbTruckDelivery className={Style.icons}/>

              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">Very And Fast Delivery</h2>
                <p className="leading-relaxed text-white text-base">Free Delivery to all orders over 140$</p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg> */}
<ImHeadphones className={Style.icons}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">  24/7 CUSTOMER SERVICE </h2>
                <p className="leading-relaxed text-white text-base">Friendly 24/7 customer support.</p>
               
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg> */}
                <TiTick  className={Style.icons}/>

              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">MONEY BACK GUARANTY</h2>
                <p className="leading-relaxed text-white text-base">We return money within  30 days</p>
               
              </div>
            </div>
          </div>
          
        </div>
      </section>
      </div>
   </>
  )
}

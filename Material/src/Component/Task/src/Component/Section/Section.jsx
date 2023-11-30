import React from 'react'
import Style from "./Section.module.css"
import Fade from 'react-reveal/Fade';

export default function Section() {
  return <>
  <Fade    right>

 
  <div className={Style.main}>
        <div className={Style.con}>
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row gap-12 flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center  rounded" alt="hero" src={"Group.png"} />
              </div>
              <div className="lg:flex-grow ml-6 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left  items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Download the 
                  <br />
                  Farenow App  </h1>
                <p className="mb-10  text-white leading-relaxed">Book and manage appointments, message your pback- <br /> layerrofessional, view professional profiles and ratings, see  <br /> real-time location of
                  your professional and so much more.</p>
                <div className="flex justify-center">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                   <img src={"path4.png"} alt="" />
                    
                    <span className="ml-4 flex  items-start flex-col leading-none">
                      <span className="text-xs   text-sky-600   mb-1">GET IT ON</span>
                      <span className="title-font  text-sky-600 font-medium">Google Play</span>
                    </span>
                  </button>
                  <button className="bg-gray-100 inline-flex py-1 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-1 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                   <img src={"google_play.png"} alt="" />
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-sky-600 mb-1">Download on the</span>
                      <span className="title-font  text-sky-600 font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>


      </Fade>

  </>
}


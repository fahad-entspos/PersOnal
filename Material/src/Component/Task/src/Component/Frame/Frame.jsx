import React from 'react'
import Zoom from 'react-reveal/Zoom';

import Style from "./Frame.module.css"
function Frame() {
  return <>
  <Zoom   left>

  
  <div  className={Style.Guaranteed}>
    <img src={"Group 3.png"} alt="" />


    <div  className={Style.mix}>

    <div className={Style.container}>
        <h1 className={Style.Vetted}>
        Vetted, Background -<br/>
Checked Professionals
        </h1>
        <p>
        Cleaning and handyman tasks booked and paid for directly through <br/> the Farenow platform are performed by
experienced, background-  <br/>checked professionals who are highly rated by customers like you.
        </p>
    </div>



    <div className={Style.containerone}>
        <h1 className={Style.Happiness}>
        Your Happiness, Guaranteed
        </h1>
        <p>
        Your happiness is our goal. If you’re not happy, we’ll work to make <br/> right. Our friendly customer service agents are available 24 hours a<br/>  day, 7 days a week. The Farenow Happiness Guarantee only applies <br/>  when you book and pay for a service directly through the Farenow <br/>  platform.
        </p>
    </div>


    </div>

  </div>
  </Zoom>
  </>
}

export default Frame
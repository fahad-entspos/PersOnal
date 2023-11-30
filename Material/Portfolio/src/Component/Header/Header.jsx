import React from 'react'
import Style from "./Header.module.css"
import { Button } from "@nextui-org/react";

import { Typewriter } from "react-simple-typewriter";
function Header() {
  return (
    <div id='Header' className={Style.main}>

<div className={Style.container}>

      <div className={Style.mix}>
      <h1 className={Style.content}>Hi,</h1>
    <h1 className={Style.content}>
                 I Am FaHaD Mughal {" "}</h1>
        <h1 className={Style.content}>
          {" "}
          Web-
          <Typewriter
            words={[
              "Developer",
              "Designer",
              
            ]}
            loop={1000}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </h1>
        <p className={Style.p}>Hi Iam A Frontend Developer And Best Ui Designer.</p>
        <Button className={Style.btn}
          color="gradient"
          style={{width:"20px",}}
        >Contact</Button>
       
    </div>

<img className={Style.fahad} src={"/IMG_8004-4.png"} alt="" />





    </div>
    
    </div>
  )
}

export default Header
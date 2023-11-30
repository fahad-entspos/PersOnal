import React from "react";
import Style from "./Header.module.css";
import { Button } from "@nextui-org/react";
import { Textarea, Grid } from "@nextui-org/react";
import { Typewriter } from "react-simple-typewriter";
export default function Header() {
  return (
    <>
      <div className={Style.main}>
        <h1 className={Style.categories}>
                  Available The All Special{" "}
        </h1>
        <h1 className={Style.words}>
          {" "}
          Categories-
          <Typewriter
            words={[
              "Smart-Watch",
              "HeadPhones",
              "IPort",
              "Laptops!",
              "Mobile!",
              "LED!",
            ]}
            loop={1000}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </h1>
        <p className={Style.Apple}>
          Apple Watch Ultra. The Apple Watch Ultra is undoubtedly one of the
          best <br />
          smartwatches in the World, and so are its predecessors.
        </p>

        <Button
          style={{ margin: "auto", marginTop: ".4%" }}
          color="gradient"
          auto
        >
          Shop Now
        </Button>
        <div className={Style.special}>
          {/* <div className={Style.textare}>
            <img className={Style.img} src="/smartwatch.png" />
            <h2> Apple Watch Ultra. The Apple Watch Ultra </h2>
          </div> */}
          <div className={Style.textareTwo}>
            <img className={Style.img} src="/headphones.png" />
            <h2 className={Style.para}> Apple Watch Ultra. The Apple Watch Ultra </h2>
          </div>

          
          <img className={Style.smartwatchTwo} src="/watch.png" />




          <div className={Style.textareThree}>
            <img className={Style.img} src="/earphone.png" />
            <h2 className={Style.para}> Apple Watch Ultra. The Apple Watch Ultra </h2>
          </div>


          
          <img className={Style.textareFour} src="/smartwatch.png" />
        <img className={Style.textareFive} src="/CAMERA.png" />
        </div>
        <div className={Style.con}>

        </div>
       
      </div>
    </>
  );
}

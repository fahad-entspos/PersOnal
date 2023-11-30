import React from "react";
import Style from "./Award.module.css";
import { GiEagleEmblem } from "react-icons/gi";
export default function Award() {
  return (
    <div className={Style.main}>
      <div className={Style.award}>
          <GiEagleEmblem className={Style.icon} />
        <h3>Best Author Awards 2012</h3>
        <p>
          Arcu pellentesque nisi consectetur netus <br /> aenean metus sit
          mattis sit sed.
        </p>
      </div>
      <div className={Style.award}>
        
          <GiEagleEmblem className={Style.icon} />
        
        <h3>Best Author Awards 2012</h3>
        <p>
          Arcu pellentesque nisi consectetur netus <br /> aenean metus sit
          mattis sit sed.
        </p>
      </div>
      <div className={Style.award}>
        
          <GiEagleEmblem  className={Style.icon}   />     
          <h3>Best Author Awards 2012</h3>
        <p>
          Arcu pellentesque nisi consectetur netus <br /> aenean metus sit
          mattis sit sed.
        </p>
      </div>
      <div className={Style.award}>
          <GiEagleEmblem className={Style.icon} />
        <h3>Best Author Awards 2012</h3>
        <p>
          Arcu pellentesque nisi consectetur netus <br /> aenean metus sit
          mattis sit sed.
        </p>
      </div>
    </div>
  );
}

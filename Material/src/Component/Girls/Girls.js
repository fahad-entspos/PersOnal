import React from "react";
import Style from "./Girls.module.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function Girl() {
  let girlData = useSelector((girl) => girl.cardData);
  let cardData = girlData.filter((girl) => {
    if (girl.category == "girls") {
      return true;
    }
  });

  return (
    <>
      <div className={Style.main}>
        {cardData.map((girl) => {
          return (
            <Link to={`/Detailpage/${girl.id}`} className={Style.container}>
              <img className={Style.img} src={girl.img} alt="" />
              <h2>{girl.name}</h2>
              <h2>{girl.price}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}

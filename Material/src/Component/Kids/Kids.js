import React from "react";
import Style from "./Kids.module.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Kids() {
  let kidsData = useSelector((kid) => kid.cardData);
  let cardData = kidsData.filter((kid) => {
    if (kid.category == "kids") {
      return true;
    }
  });

  return<>
  <div className={Style.main}>
{
  cardData.map((kid) => {
    return <Link to={`/Detailpage/${kid.id}`} className={Style.container}>
<img className={Style.img} src={kid.img} alt="" />
<h2>{kid.name}</h2>
<h2>{kid.price}</h2>
    </Link>
  })
}

  </div>

  
  
  
  </> 
}


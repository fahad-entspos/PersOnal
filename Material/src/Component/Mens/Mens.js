import React from "react";
import Style from "./Mens.module.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Mens() {
  let mensData = useSelector((men) => men.cardData);
  let cardData = mensData.filter((men) => {
    if (men.category == "mens") {
      return true;
    }
  });

  return<>
  <div className={Style.main}>
{
  cardData.map((men) => {
    return <Link to={`/Detailpage/${men.id}`} className={Style.container}>
<img className={Style.img} src={men.img} alt="" />
<h6>{men.name}</h6>
<h4>{men.price}</h4>
    </Link>
  })
}

  </div>

  
  
  
  </> 
}

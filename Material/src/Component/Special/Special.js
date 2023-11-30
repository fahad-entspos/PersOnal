import React from 'react'
import { useSelector } from 'react-redux'
import Style from "./Special.module.css"
export default function Special() {
    let specialCard = useSelector((special) => special.cardData);
    let card = specialCard.filter((special)=>{if(special.category == "special"){return true} });
console.log(card);
return<>
<div className={Style.main}>
{
card.map((special) => {
  return <div className={Style.container}>
<img className={Style.img} src={special.img} alt="" />
<h6>{special.name}</h6>
<h4>{special.price}</h4>
  </div>
})
}

</div>




</> 
}

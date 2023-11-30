import React from 'react'
import Style from "./Dashboard.module.css"
export default function Dashboard() {
  return (
    <div className={Style.main}>
      <img className={Style.img} src="/author.png" alt="" />
      <div className={Style.mix}>
        <h5 className={Style.bio}>
            BIOGRAPHY
        </h5>
        <h2 className={Style.nepo}>
        Napoleon Hill
        </h2>
        <h6 className={Style.content}>
        Think and Grow Rich is a book written by Napoleon Hill released in 1937 and promoted <br/>as a personal development and self-improvement book. He claimed to  be inspired by a <br/> suggestion from business magnate and later-philanthropist Andrew<br/> Carnegie. However there is no evidence that the two ever met.
        </h6>
        <button  className={Style.btn}>Read More</button>
      </div>
    </div>
  )
}

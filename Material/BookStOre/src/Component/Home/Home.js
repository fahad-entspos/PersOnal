import React from 'react'
import Navbar from '../Navbar/Navbar';
import Style from "./Home.module.css";
export default function Home() {
  return (
    <>
    <div className={Style.mainDiv}>
    <Navbar/>/
    <div className={Style.mix}>
<div className={Style.homeContent}>
<h6 className={Style.new}>
  NEW RELEASE
</h6>
<div className={Style.image}></div>

<h1 className={Style.think}>
  Think And Grow <br/> Rich
</h1>
<p className={Style.Grow}>Think and Grow Rich is a book written by Napoleon Hill released in 2017 and promoted <br/> as a personal development and self-improvement book.He claimed to be inspired <br/> by a suggestion from business magnate and later-philanthropist Andrew <br/>Carnegie. However there is no evidence that the two ever met.</p>
<button className={Style.btn}>Buy Now</button>
</div>
<div className={Style.images}></div>
</div>
    </div>
    </>


  )
}

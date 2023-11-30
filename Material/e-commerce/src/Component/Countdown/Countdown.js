import Style from "./Countdown.module.css"
import React from 'react'

export default function Countdown(){
  window.onload = function() {
    const output = document.getElementById('time')
  const countDown = () =>{
    const yourDate = new Date("2023-5-21");
    
    const countDownDate = new Date(yourDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hh = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const mm = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const ss = Math.floor(distance % (1000 * 60 ) / (1000 ))
    output.innerText =`${dd}Days: ${hh}Hours: Minutes:${mm}
     Secound:${ss}`
  }
  setInterval(countDown,1000)
}
  return <>
  <h2 className={Style.Sale}>Flash Sale</h2>
  <h1 className={Style.time} id="time"></h1>
  </>
}


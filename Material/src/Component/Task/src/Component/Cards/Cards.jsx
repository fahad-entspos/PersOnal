import React from 'react'
import Slider from '../Slider/Slider'
import Zoom from 'react-reveal/Zoom';

import Style from "./Cards.module.css"
function Cards() {
  return <>
  <Zoom  bottom className={Style.super}>

  <div className={Style.container}>

  <h2 className={Style.Popular}>Popular Services</h2>

  <p>
  Explore our top services. All our services are designed with you in mind.
  </p>
 
          </div>
  
          <nav class="navbar navbar-scroll navbar-light ">

<ul className="nav nav-pills nav-fill gap-2 p-1    d-flex 	 flex-wrap  small bg-info   w-50 m-auto rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{bsNavLinkColor: 'var(--bs-white)', bsNavPillsLinkActiveColor: 'var(--bs-primary)', bsNavPillsLinkActiveBg: 'var(--bs-white)'}}>
  <li className="nav-item"  role="presentation">
        <button className="nav-link active text-dark rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Electricity & Computers</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link text-dark  rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Handyman Services</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link text-dark rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Home Cleaning Services</button>
      </li><li className="nav-item" role="presentation">
        <button className="nav-link text-dark rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Moving Services</button>
      </li>
    </ul>
        </nav>
        <Slider/>
        </Zoom>


        

  </>
}

export default Cards
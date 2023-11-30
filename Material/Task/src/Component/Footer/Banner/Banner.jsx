import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';

import Style from "./Banner.module.css"
function Banner() {
  return <>
  <Zoom right>
  <div className={Style.main}>
    <div  className={Style.container}>
        <img     className={Style.img}  src={"Logo Icon (1).png"} alt="" />
        <h1>Farenow</h1>
    </div>

    <p  className={Style.Connect}>
    Connect with us on social media - Be part of our budding <br/> community and share your experience. Get the latest updates  <br/> for all our services.
    </p>
    <div>

<h2   className={Style.Stay}>
Stay Connected
</h2>
<div    className={Style.icons}>
<FaTwitter/>
<AiFillInstagram/>
<AiFillFacebook/>
</div>

    </div>
    
  </div>
<div   className={Style.last}>

    
        <p  className={Style.Farenow}>2023 Farenow. All rights reserved..</p>

        <hr/>
</div>

</Zoom>
  </>
}

export default Banner
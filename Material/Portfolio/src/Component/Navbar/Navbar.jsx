import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
function Navbar() {
  return (
    <div className={Style.navbar}>
      <img className={Style.logo} src={"/logo1.png"} alt="" />
      <div className={Style.tag}>
        <div id="Header"  className={Style.home}>Home </div>
        <Link  id="Myskils"  className={Style.Service}>Service </Link>
        <Link  id="About"  className={Style.About}>About </Link>
      </div>
      <div className={Style.icons}>
        <div className={Style.icon}>
          <FacebookIcon />
        </div>
        <div className={Style.icon}>
          <TwitterIcon />
        </div>
        <div className={Style.icon}>
          <GitHubIcon />
        </div>
      </div>{" "}
    </div>



  );
}

export default Navbar;

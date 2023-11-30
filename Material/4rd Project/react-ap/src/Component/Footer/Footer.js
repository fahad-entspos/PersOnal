import "./Footer.css";
import Zoom from 'react-reveal/Zoom';
import FacebookIcon from '@mui/icons-material/Facebook';
import AndroidIcon from '@mui/icons-material/Android';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpsIcon from '@mui/icons-material/Https';
export default ()=>{
    return <>
 <Zoom bottom>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the company</span> The ideal structure of a company's IT department should include certain standard teams and organizational characteristics, including a support/tech department, IT management (including a bimodal IT management model), enterprise architecture, IT maintenance, network/system administration, IT security, etc.

          </p>
          <div className="icons">
            <a href="#"> <FacebookIcon/> </a>
            <a href="#"> <InstagramIcon/> </a>
            <a href="#"> <GitHubIcon/> </a>
            <a href="#"> <AndroidIcon/> </a>
            <a href="#"> <HttpsIcon/> </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker" />
            <p><span> Contact number</span></p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p> (+92) 3207452186</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="#"> IT.Solution.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> IT<span> Solution</span></h2>
          <p className="menu">
            <a href="#"> Home</a> |
            <a href="#"> About</a> |
            <a href="#"> Services</a> |
            <a href="#"> Portfolio</a> |
            <a href="#"> News</a> |
            <a href="#"> Contact</a>
          </p>
          <p className="name"> IT Solution © 2023</p>
        </div>
      </footer>
      </Zoom>
    </>
}
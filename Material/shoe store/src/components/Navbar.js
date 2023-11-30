import { Link } from "react-router-dom";

export default function NavBAr() {
  return (
    <div>
      

  <nav className="navBar">
    <div class="nav-wrapper" >
      <a href="#" class="brand-logo" className="logo">NIKE SHOE STORE</a>
      {/* <Link to = '/' class="brand-logo"><img className="logo" src ="logo3.png" /></Link> */}
      {/* <Link to = '/' class="brand-logo" className="">NIKE</Link> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down" className="list">
        <li> <Link className="list" to="/">Home</Link> </li>
        <li><Link className="list" to="about">About</Link></li>
        <li><Link className="list" to="product">Product</Link></li>
       
      </ul>
    </div>
  </nav>
      
    </div>
  );
}
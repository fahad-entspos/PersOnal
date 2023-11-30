import { Link } from "react-router-dom";



export let cities = ['FSD','lHR'];


export default function Header(){

    let name = "Khurram";
  
    function hello(){
      alert("hi g");
    }
  
    return <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/abc">Signup</Link></li>
        <li><Link>Login</Link></li>
        <li><Link to="/users">Admin</Link></li>
      </ul>
    </div>
  </nav>
  
  }
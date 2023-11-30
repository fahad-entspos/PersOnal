
import { Link } from "react-router-dom"
export default function Navbar(){
    return <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        FaHaD
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link  to="/abc">SignUp</Link>
        </li>
        <li>
          <Link  to="/cre">CreateJobs</Link>
        </li><li>
          <Link  to="/all">AllJobs</Link>
        </li>
        
        <li>
        <Link>Login</Link>
        </li>
        <li>
        <Link  to="/users">Admin</Link>
        </li>
      </ul>
    </div>
  </nav>
  
}
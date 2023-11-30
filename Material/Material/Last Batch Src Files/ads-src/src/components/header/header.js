import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../store/store';



export default function Header(props){

 let user = useSelector((store)=>{
  return store.userReducer.currentUser;
 })

  function login(){


  }

  function signup(){


  }

  let style = {
        flex:{
          backgroundColor:"magenta"
        },
        box:{
          width:"100px",
          height:"100px"
        }
  }
  
//   npm uninstall jquery
//   npm install react-router-dom@Header
//   npm uninstall react-router-dom
//   npm update react-router-dom

//   npm ls react-router-dom

// node package manager
// library installer h just


  let city = "Faisalabad";

    return  <nav>  
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Logo</Link>
      {user && <span className='name-label'><b>Welcome, </b> {user.name} </span>}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        
        { user && <li><Link to="/admin">Admin</Link></li>}
        { user ? <li><Link to="/createAd">Create Ad</Link></li> : null}
        
        {  user ? <li><Link onClick={()=>{

          store.dispatch({
            type:"USER_LOGGED_OUT"
          })

        }} to="/">Logout</Link></li> : null}
        
      </ul>
    </div>
  </nav>
}


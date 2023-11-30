import { useRef } from "react"

import {NotificationManager} from 'react-notifications';

export default function(props){

    let userName = useRef();
    let userPassword = useRef();


    const sum =  ()=>{

        
    }

    const loginUser = (evt)=>{

        evt.preventDefault();

        let nyaStudent = {
            name:userName.current.value,
            password:userPassword.current.value
        }


       let userMila =  props.abc1.find((user)=>{

            if(user.name == userName.current.value &&
               user.password ==  userPassword.current.value
                ){
                  return true;
                }


        })

        if(userMila){
            NotificationManager.success("User milgua")
        }else{
            NotificationManager.error("User nahi mila")
        }


      
    }

    return <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <div className="section" />
      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section" />
      <div className="container">
        <div
          className="z-depth-1 grey lighten-4 row"
          style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form onSubmit={loginUser} className="col s12" method="post">
            <div className="row">
              <div className="col s12"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                    ref={userName}
                  className="validate"
                  type="text"
                  name="text"
                  id="text"
                />
                <label htmlFor="email">Enter your name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                ref={userPassword}
                  className="validate"
                  type="password"
                  name="password"
                  id="password"
                />
                <label htmlFor="password">Enter your password</label>
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>
            <br />
            <center>
              <div className="row">
                <button
                  type="submit"
                  name="btn_login"
                  className="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>
    <div className="section" />
    <div className="section" />
  </main>
  

}
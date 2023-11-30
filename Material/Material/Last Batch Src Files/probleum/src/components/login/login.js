import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  store from '../../store/store';

export default (props)=>{

    let navigate = useNavigate();

    let nameRef = useRef();
    let passwordRef = useRef();

    let users = useSelector(function(store){
        return store.userReducer.users;
    });

    function loginUser(){

      let milgyUser =   users.find((user)=>{

            if(user.name == nameRef.current.value && user.password == passwordRef.current.value){
                return true;
            }

        });

        if(milgyUser){

            store.dispatch({
                type:"USER_LOGGED_IN",
                payload:milgyUser
            });

            navigate('/dashboard');

            // props.setLoginHogya(true);


            console.log("milgya user");
        }else{
            toast.error("user nahi mila")
            // alert("nahi milgya user");
        }
     
    }

    return <div>

        <div>
            <input ref={nameRef} />
        </div>

        <div>
            <input ref={passwordRef}/>
        </div>

        
        <button onClick={loginUser}>Submit</button>

    </div>

}
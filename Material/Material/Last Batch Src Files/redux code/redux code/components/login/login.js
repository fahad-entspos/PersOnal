import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default (props)=>{

    let navigate = useNavigate();

    let nameRef = useRef();
    let passwordRef = useRef();

    function loginUser(){

      let milgyUser =   props.users.find((user)=>{

            if(user.name == nameRef.current.value && user.password == passwordRef.current.value){
                return true;
            }

        });

        if(milgyUser){

            navigate('/dashboard');

            props.setLoginHogya(true);
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
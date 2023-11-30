import { useRef, useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store from '../../store/store';

export default (props)=>{

    let [index, setIndex]=useState();

    let params =useParams();
    let [user, setUser] = useState({});
    
    let data = useForm();

    let users = useSelector(function(store){
        return store.userReducer.users;
    });

    useEffect(function(){

       let userMilgya =  users.find(function(user, index){

           if(user.name == params.userKaName){
                setIndex(index );
                return true;
            }

        });



        if(userMilgya){
            setUser(userMilgya);
            data.reset(userMilgya);
        }

    }, []);
    
    
    function saveUser(meraData){

        console.log(meraData);
        
        store.dispatch({
            type:"USER_UPDATED",
            someINdex:index,
            newUser:meraData
        });

        // props.myUsers[index] = meraData;

        // props.setUsers([...props.myUsers]);

    }

    return <div>
        <h1>{params.userKaName}</h1>
        <form onSubmit={data.handleSubmit( saveUser  )}>
            <div>
                <input {...data.register('name', {required:true})} />
            </div>
            {data.formState.errors.name && <div className="error">name btyen</div>}
            
            <div>
                <input  {...data.register('email', {required:true})} />
            </div>
            {data.formState.errors.email && <div className="error">email btyen</div>}

        
            <div>
                <input   {...data.register('password', {required:true, minLength:6, validate:(some)=>{

for(let item of some){
    let code  = item.charCodeAt();
    if( code >=65 && code <=90){
      return true;
    }
  }

  return false;

                }})}/>
            </div>
            {data.formState.errors.password && data.formState.errors.password.type == "required" && <div className="error">password btyen</div>}
            {data.formState.errors.password && data.formState.errors.password.type == "minLength" &&<div className="error">password ki min length 6 h</div>}
            {data.formState.errors.password && data.formState.errors.password.type == "validate" &&<div className="error">Aik capital letter bhi type kren</div>}



        <button>Submit</button>
        </form>

    </div>

}
import { useRef } from "react";
import {useForm, } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';


export default (props)=>{

    let navigate = useNavigate();
    
    let data = useForm();
    
    
    function saveUser(meraData){


        console.log(meraData);

        // let nyaUser = {
        //     name:nameRef.current.value,
        //     email:emailRef.current.value,
        //     password:passwordRef.current.value,
        // }

        props.setUsers([...props.users, meraData]);

        data.reset();
        navigate('/login')
    

    }

    return <div>
        <form onSubmit={data.handleSubmit( saveUser  )}>
            <div>
                <input {...data.register('name', {required:true})} />
            </div>
            {data.formState.errors.name && <div className="error">name btyen</div>}
            
            <div>
                <input {...data.register('email', {required:true})} />
            </div>
            {data.formState.errors.email && <div className="error">email btyen</div>}

        
            <div>
                <input {...data.register('password', {required:true, minLength:6, validate:(some)=>{

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
import { useRef } from "react";
import {useForm, } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import store from '../../store/store';

export default (props)=>{

    let navigate = useNavigate();
    
    let data = useForm();
    
    
    function saveUser(meraData){

        meraData.picture = URL.createObjectURL(meraData.picture[0]);

        meraData.id = Math.round(Math.random() * 1000);

    // meraData.userID = 

        store.dispatch({
            type:"CREATED_AD",
            payload:meraData
        });


        data.reset();
       
    

    }

    return <div>
        <form onSubmit={data.handleSubmit( saveUser  )}>
            <div>
                <input {...data.register('name', {required:true})} />
            </div>
            {data.formState.errors.name && <div className="error">name btyen</div>}
            
            <div>
                <input {...data.register('price', {required:true})} />
            </div>
            {data.formState.errors.price && <div className="error">Price btyen</div>}
 
            <div>
                <input {...data.register('description', {required:true})} />
            </div>
            {data.formState.errors.description && <div className="error">Price btyen</div>}

            <div>
                <input multiple type="file" {...data.register('picture', {required:true})} />
            </div>
            {data.formState.errors.picture && <div className="error">Picture btyen</div>}

        
            

        <button>Submit</button>
        </form>

    </div>

}
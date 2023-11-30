import { useRef } from "react"

function Notifications(){

    return <div>
        <h1>this is some component</h1>
    </div>

}

export default function(props){



    let userName = useRef();
    let userPassword = useRef();


    // function createEvent(evt){

    // }

    const sum =  ()=>{

        
    }

    const createUser = (evt)=>{

        evt.preventDefault();

        let nyaStudent = {
            name:userName.current.value,
            password:userPassword.current.value
        }


        props.abc.push(nyaStudent);
        props.setStudents([...props.abc])

        console.log(props.abc);

        console.log("formit submit hogya wa ")


    }

    return <div>
        <Notifications />
        <h1>{props.name}</h1>
        <h1>{props.city}</h1>
        <form onSubmit={createUser}>
            <div>
                <input ref={userName} />
            </div>
            <div>
                <input ref={userPassword} />
            </div>
            <button>Submit</button>
        </form>
    </div>

}
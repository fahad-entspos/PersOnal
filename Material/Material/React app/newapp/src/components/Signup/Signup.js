import { useRef } from "react";

export default function (props){
  
  
  
  let userName = useRef();
  let userPassword = useRef();
  const creatUser = (evt) => {
    evt.preventDefault();
    let nayaStudent = {
      name: userName.current.value,
      password: userPassword.current.value,
    };
    props.name.push(nayaStudent);
    props.nameSetStudent([...props.name]);
    console.log(props.name)
    evt.target.reset();
    // console.log("formit submit hogya wa ")


  };
  return (
    <div>
      <form action="" onSubmit={creatUser}>
        <input type="text" placeholder="Enter Your Name " ref={userName} />
        <input type="text" placeholder="Enter Your Password" ref={userPassword} />
        <button>Submit</button>
      </form>
    </div>
  );
}

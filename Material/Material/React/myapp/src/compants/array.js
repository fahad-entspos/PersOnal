// import {useRef} from 'react';

// // alert(20)

// export function Child(){

//   return <div>
//     <h1>Yeh child component hogya</h1>
//   </div>
// }

// export function Parent(){

//   let name = "khurram";

//   let nameRef = useRef();

//   let cities = [
//     'Faislabad',
//     'Lahore',
//     'Gojra',
//     'Jaranwala'
//   ];

//   function sayHi(){

//     alert("hi "+nameRef.current.value)

//   }

  
//   function hello(abc){

//     alert(abc)

//   }

//   return <div>
//     <ol>
//       {
//         cities.map((city)=>{
//             return <li onClick={()=>hello(city)}>{city}</li>  
//         })
//       }
//     </ol>
//     <input ref={nameRef} />
//     <button onClick={sayHi}>Say hi</button>
//             <h1>yeh bhi code chla, {name}</h1>
//   </div>;


// }
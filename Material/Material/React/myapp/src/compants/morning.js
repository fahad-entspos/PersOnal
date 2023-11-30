import React, { useRef, useState } from "react";

// export function Fruit(){
//         let [num,setNum] = useState(20)
//     return <div>
//         <h1>{num}</h1>
//         <button onClick={function(){
//             num++;
//             setNum(num)
//         }}> Update Me</button>
//     </div>
// }

// export function Fruit(){
//     let [fruits,setFruits] = useState(['apple','banana','mango','date','pane'])
//     return <div>
//         <ol>
//             {
//                 fruits.map((myFruit,myindex)=>{
//                     return <li>
//                         {myFruit} <button onClick={()=>{
//                                    fruits[myindex] = prompt("Enter Fruit Name");
//                                    setFruits([...fruits])
//                                }}>Edit</button>
//                                 <button onClick={()=>{
//                                    fruits.splice(myindex,1);
//                                    setFruits([...fruits])
//                                }}>Delete</button>
//                     </li>
//                 })
//             }
//         </ol> <button onClick={()=>{
//             let fruitName = prompt("Enter your Fruit");
//             setFruits([...fruits,fruitName])
//         }}>Add Fruit</button>
//     </div>
// }
















































// export function Parent(){

//     let [users, setUsers] = useState([]);

//     let name = useRef();
//     let email = useRef();
//     let city = useRef();

// function saveUser(event){

//       event.preventDefault();

//       let user = {
//         name:name.current.value,
//         city:city.current.value,
//         email:email.current.value,
//       }

//       event.target.reset();

//       setUsers([...users, user]);

//     }

//     return <div>

//       <form onSubmit={saveUser}>
//         <div>
//           <input ref={name} className='name' />
//         </div>
//         <div>
//           <input ref={email} className='email' />
//         </div>
//         <div>
//           <select ref={city}>
//             <option> Faisalabad   </option>
//             <option> Lahore   </option>
//             <option> Islamabad   </option>
//           </select>
//         </div>
//         <button>Save User</button>
//       </form>

//       <table border="1">
//         {
//           users.map((myUser, myIndex)=>{
//             return <tr>
//               <td>{myUser.name}</td>
//               <td>{myUser.email}</td>
//               <td>{myUser.city}</td>
//               <td>
//                 <button onClick={()=>{

//                   users.splice(myIndex, 1);
//                   setUsers([...users]);

//                 }}>DEL</button> 
//               </td>
//             </tr>
//           })
//         }
//       </table>
//     </div>
//     }














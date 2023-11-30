import logo from './logo.svg';
import './App.css';

import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import { useState } from 'react';

// component oriented programming

// function Dish(props){

//   return <tr>
//     <td>{props.name}</td>
//     <td>{props.price}</td>
//     <td><input type="checkbox" /></td>
//   </tr>

// }

// function Child(props){

//   return <div>
//     <button onClick={function(){
//     let nums = props.myNum;
//     nums++;
//     props.p1(nums)


//     }}>Add Number</button>
//   </div>

// }


function App() {

  // let [num, setNum] =  useState(0);

  let [students  , setStudents] = useState([]);

  return <>
      <div className="myAppContainer" >
{/* 
      <h1>{num}</h1>

        <Child p1={setNum} myNum={num} /> */}

      <Signup abc={students} setStudents={setStudents} />
      <Admin  abc1={students} setStudents={setStudents} />  
     

        {/* <table>
          <Dish price="100" name="biryani" />
          <Dish price="150" name="haleem" />
          <Dish price="200" name="karahi" />
          <Dish price="300" name="daal Maash" />
          <Dish price="600" name="Achar Gosht" />
        </table> */}
    
        
      </div>
      
    </>
  
}


export default App;

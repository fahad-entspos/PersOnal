import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'

import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component oriented programming

function Dish(props){

  return <tr>
    {/* <td>
      {
        props.fruits.map(function(item){
          return item;
        })
      }
    </td> */}
  <td>{props.data.name}</td>
  <td>{props.data.price}</td>
  <td>
    <input onChange={(evt)=>{

    props.data.orderHogyi = evt.target.checked;

    }} type="checkbox" /> 
  </td>
</tr>

}

function Child(props){

  return <div>
    <button onClick={function(){

    let nums = props.myNum;
    nums++;
    
    props.p1(nums);


    }}>Add Number</button>
  </div>

}


function App() {
  
  let [students, setStudents] = useState([]);
  

  return <>

  <BrowserRouter>

  <Header />


  <Routes>

    <Route path='/abc' element={ <Signup abc={students} setStudents={setStudents} /> } />
    <Route path='/users' element={ <Admin abc1={students} setStudents={setStudents} /> } />

    
  </Routes>


      <div className="myAppContainer" >


     
       {/* <Signup abc={students} setStudents={setStudents} />
      <Admin  abc1={students} setStudents={setStudents} />  
   
         */}
      </div>
      
      </BrowserRouter>
    </>
  
}


export default App;

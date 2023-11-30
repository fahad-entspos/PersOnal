import logo from './logo.svg';
import './App.css';

import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import { useState } from 'react';

// component oriented programming

function Dish(props){

  return <tr>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><input type="checkbox" /></td>
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

  let [bill, setBill] = useState(0)
  let [discountedBill, setDiscountedBill] = useState(0)

  let [dishes, setDishes] = useState([
    {
      name:"biryani",
      price:350
    },
    {
      name:"qorma",
      price:250
    },
    {
      name:"haleem",
      price:170
    },
    {
      name:"karahi",
      price:650
    }
  ]);


  const getBill =  ()=>{

    let totalBill = 0;

    dishes.forEach((dish)=>{

      if(dish.orderHogyi == true){
        totalBill += dish.price
      }

    })

    if(totalBill > 500){
        setDiscountedBill(totalBill * 0.9)
    }else{
      setDiscountedBill(totalBill)
    }

    setBill(totalBill)

  }


  return <>
      <div className="myAppContainer" >

      <table border="1">
{
        dishes.map((dishObj)=>{


          return <tr>
            <td>{dishObj.name}</td>
            <td>{dishObj.price}</td>
            <td>
              <input onChange={(evt)=>{

                dishObj.orderHogyi = evt.target.checked;

              }} type="checkbox" />
            </td>
          </tr>


        })
}
<tr>
  <td>Total Bill <b>{bill }</b> Net Bill <b>{discountedBill}</b></td>
</tr>
      </table>
      <button onClick={ getBill }>Get Bill</button>

        
      </div>
      
    </>
  
}


export default App;

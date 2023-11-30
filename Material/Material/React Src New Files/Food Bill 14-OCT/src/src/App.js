import logo from './logo.svg';
import './App.css';

import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import { useRef, useState } from 'react';

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


function App() {

  // let myRef = useRef();

  // myRef.current

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

    alert("sine cide")

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

          

          return <Dish  data={dishObj} />

    {/* <Dish price={dishObj.price} name={dishObj.name} /> */}

          return 


        })
}
<tr>
  <td>Total Bill <b>{bill }</b> Net Bill <b>{discountedBill}</b></td>
</tr>
      </table>
      <button onClick={ getBill }>Get Bill</button>

      {/* <Signup abc={students} setStudents={setStudents} />
      <Admin  abc1={students} setStudents={setStudents} />  
      */}

        {/* <table>
          <Dish saif="100" name="biryani" />
          <Dish price="150" name="haleem" />
          <Dish price="200" name="karahi" />
          <Dish price="300" name="daal Maash" />
          <Dish price="600" name="Achar Gosht" />
        </table> */}
    
        
      </div>
      
    </>
  
}


export default App;

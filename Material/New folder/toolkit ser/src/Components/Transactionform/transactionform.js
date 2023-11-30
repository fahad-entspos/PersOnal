import { useState, useRef} from "react";
import { useDispatch } from "react-redux";
import {v4} from "uuid"
import { addTrans } from "../../store/store";
 

export default () => {

let [desc,setdesc]=useState("")
let [amount,setamount]=useState(0)
  // let desc = useRef();
  // let amount = useRef();
  let dispatch= useDispatch()
  

  let createTransaction = (rvt) => {
    rvt.preventDefault();
    let transaction = {
      id:v4(),
      description: desc,
      amountT: amount
    };
   
    dispatch(addTrans(transaction))
    
    
  };
  return (
    <div>
      <>
        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="Description">Description</label>
            <input required
              type="text"
              id="text"
              placeholder="Enter Description..."
              // ref={desc}
              value={desc} onChange={(e)=>{setdesc(e.target.value)}}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount..."
              // ref={amount}
              value={amount} onChange={(e)=>{setamount(e.target.value)}}
            />
          </div>
          <button className="btn" onClick={createTransaction}>
            Add transaction
          </button>
        </form>
      </>
    
    </div>
  );
};

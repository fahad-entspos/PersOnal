
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
let transactionsSlice=createSlice({
  name:"Transactions",
  initialState:[],
  reducers:{
    addTrans(state,action){
      state.push(action.payload)
      console.log(action.payload);
    },
    delTrans(state,action){
      // console.log(action.payload);
      state.splice(action.payload,1)
    },
    editTrans(state,action){
      state.forEach((obj)=>{
        if (obj.id==action.payload.id) {
          obj.description=action.payload.nyaDesc
          obj.amountT=action.payload.nyaAmount
        }
      })
    }
  }
})
const meraStore=configureStore({
  reducer:{
    trans:transactionsSlice.reducer
  }
})
export default meraStore
export const {addTrans}= transactionsSlice.actions
export const {delTrans}= transactionsSlice.actions
export const {editTrans}= transactionsSlice.actions




// import { combineReducers, createStore } from "redux";
// let init = [];
// function Transactions(oldData = init, newData) {
//   switch (true) {
//     case newData.type == "addTrans":
//       oldData.push(newData.data.transaction);
//       break;
//     case newData.type == "deleteTrans":
//       oldData.splice(newData.data.index, 1); 
//     case newData.type == "editTrans":
//       oldData.forEach((trans) => {
//         if (trans.id == newData.data.id) {
//           trans.description = newData.data.nyaDesc;
//           trans.amountT = newData.data.nyaAmount;
//         }
//       });
//     default:
//       break;
//   }
//   return [...oldData];
// }
// let compData = combineReducers({ Transactions });
// let meraStore = createStore(compData);
// export default meraStore;



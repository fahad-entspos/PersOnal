import { React } from "react";
import { createStore, combineReducers } from "redux";
import { v4 } from "uuid";
let data = [
  {
    img: "/homeee/homeee (7).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,    subtotal:149,

    dec: "Very beautiful and nyc product",
    page: "home",
  },

  {
    img: "/homeee/homeee (1).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,    subtotal:149,

    dec: "Very beautiful and nyc product",
    page: "home",
  },

  {
    img: "/homeee/homeee (18).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },

  {
    img: "/homeee/homeee (24).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },
  {
    img: "/homeee/homeee (28).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },{
    img: "/homeee/homeee (27).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,    subtotal:149,

    dec: "Very beautiful and nyc product",
    page: "home",
  },{
    img: "/homeee/homeee (23).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },{
    img: "/homeee/homeee (16).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },
  {
    img: "/homeee/homeee (40).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,    subtotal:149,

    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
  },

  {
    img: "/homeee/homeee (2).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",
    subtotal:149,
  },
  {
    img: "/homeee/homeee (4).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  },
  {
    img: "/homeee/homeee (39).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  },
  {
    img: "/homeee/homeee (29).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  }, {
    img: "/homeee/homeee (28).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  }, {
    img: "/homeee/homeee (9).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  }, {
    img: "/homeee/homeee (17).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  },
  {
    img: "/homeee/homeee (19).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  },
  {
    img: "/homeee/homeee (6).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "home",    subtotal:149,

  },
  {
    img: "/pro/proooo (1).jpg",
    name: "Smartwatch",
    id: v4(),
    subtotal:149,
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (2).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    subtotal:149,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (3).jpg",
    name: "Smartwatch",
    id: v4(),
    qnty: 1,
    subtotal:149,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (4).jpg",
    name: "Smartwatch",
    id: v4(),
    subtotal:149,
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (5).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (6).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (7).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (8).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (9).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (10).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (11).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (12).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (13).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (14).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (15).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (16).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (18).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (19).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (20).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (21).jpg",
    name: "Smartwatch",
    subtotal:149,
    id: v4(),
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
  {
    img: "/pro/proooo (22).jpg",
    name: "Smartwatch",
    id: v4(),
    subtotal:149,
    qnty: 1,
    prize: 149,
    dec: "Very beautiful and nyc product",
    page: "product",
  },
];

function Data(oldData = data, action) {
 if (action.type=='changeQty'){
  oldData.forEach(( item )=>{
if (item.id  ==  action.payload.id){
  item.qnty = action.payload.chd
  
  item.subtotal = (item.prize * item.qnty)
  // console.log(item.subtotal)
}
  })
  } else {} return [...oldData];
}

function AddtocartData(oldData = [], action) {
  if (action.type == "ADD-TO-CART") {
    oldData.push(action.payload);
  } else if (action.type == "DELETE-DATA") {
    oldData.splice(action.payload.index, 1)}
    
  //   else if (action.type == "UPDATE-DATA") {
  //   oldData.forEach((item) => {

  //    if( item.id == action.payload.id){

  //     item.qnty = action.payload.qnty
  //     item.prize = (item.prize * item.qnty)


  //    }
  //   })
  // }

  return [...oldData];
}

const root = combineReducers({ Data, AddtocartData });
const store = createStore(root);
export default store;

import React from "react";
import { createStore, combineReducers } from "redux";
let booksData = [
  
  {
    categore: "special",
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    categore: "special",
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    categore: "special",
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    categore: "special",
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "public/books.png",
    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
  {
    name: "lethur shoes",
    dec: "Fantasy",
    img: "/image/books.png",    price: 190,
    id: 0,
    qnt: 1,
  },
];
function bookData(oldData = booksData, newData){
  return  oldData
}
const root = combineReducers({ bookData, });

const store = createStore(root);
export default store;

import axios from 'axios'
// import { log } from 'console'
import React from 'react'

export default async function Data() {
  let data= await axios.get(' https://the-trivia-api.com/api/questions')
//   console.log(data)
  return data
}

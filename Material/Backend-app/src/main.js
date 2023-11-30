import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Main = () => {

    const [data, setData ] = useState('')
    let obj={
      data
    }

  let   sendingData=()=>{

    let snd= async ()=>{
    let resp= await axios.post('/send',obj)

    }
    snd()


}
  return <>

<input type='text' onChange={(e)=>{

        setData(e.target.value) }} />

<button onClick={sendingData}>click me</button>



  </>
}

export default Main
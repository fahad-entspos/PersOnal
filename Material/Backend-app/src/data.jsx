import axios from 'axios'
import { useState,useEffect } from 'react'

const Data = () => {
    let [info, setInfo] = useState([])
    
        let comingFrom=async()=>{
            
                let resp = await axios.get("/dash")
                setInfo(resp.data.data)
            }
            
            useEffect(() => {
                
                comingFrom()
            }, [setInfo])
            console.log(info);  
        
    
    
   
  return (
    <div>

        {
            info.map((bo)=>{
                return (
                    <div>{bo}</div>
                )
            })
        }
    </div>

  )
}

export default Data
import { checkPrime } from 'crypto';
import React,{useState,useEffect} from 'react'

export default function Main() {
    interface person{
        name:string;
        age:number
    }
    interface option{
        kind:boolean;
        statement :string|number
    }
    interface quiz{
        heading:string;
        options:Array<option>;
        id:number
        
    }
    
    // let options:option[]=[{kind:false,statement:4,},{kind:true,statement:5,},{kind:false,statement:8,},]
    let array:person[]=[{name:"haseeb",age:20},{name:"mikd",age:50}]
    array.push({name:"new",age:10})
    let quizes:quiz[]=[
      
        {
            heading:"2+2",
            options:[{kind:false,statement:4,},{kind:true,statement:5,},{kind:false,statement:8,},],
            id:2
           
        },
        {
            heading:"cat",
            options:[{kind:false,statement:4,},{kind:true,statement:5,},{kind:false,statement:8,},],
            id:3
           
        },
        {
            heading:"blue",
            options:[{kind:false,statement:4,},{kind:true,statement:5,},{kind:false,statement:8,},],
            id:4
           
        },
    ]
    let [value, setValue] = useState<quiz>({
        heading:"lion",
        options:[{kind:false,statement:1,},{kind:true,statement:2,},{kind:false,statement:3,},],
        id:1

        
    }
   );
   let [step,setStep]=useState<number>(0)
   let checking=()=>{
    
   }
//    useEffect(()=>{
//     quizes.forEach((quiz:quiz)=>{
// quiz.options.forEach(element => {
//     if (element.kind==true) {
//         setValue(quiz)
//         console.log(value);
        
//     }
// });
//     })
//    },[])
   
    
  return (
    // <div>{quizes.map((obj:quiz)=>{
    //     return(
    //         <div>
    //             <div>{obj.heading}</div>
                
    //             <div>{obj.options.map((opption:option)=>{
    //                 return(
    //                     <div onClick={(e)=>{
    //                         if (opption.kind==true) {
    //                             console.log("it is true");
                                
                                
    //                         }else{
    //                             console.log("it is flae");
    //                         }
    //                     }}>{opption.statement}</div>
    //                 )
    //             })} </div>
               



    //         </div>
    //     )
    // })}</div>
    <div>
        {
           <div> {value.heading}
           <div>{value.options.map((opption:option)=>{
            return(
                <div>
                    {<div onClick={(e)=>{                        
                            if (opption.kind==true) {
                                console.log("it is true");
                                   
                                for (let ele of quizes) {
                                    if (!(ele.id==value.id)) {
                                        setStep(++step)
                                        
                                        setValue(quizes[step])
                                        // checking()

                                        
                                        return;
                                        // break
                                    }else{
                                        setStep(++step)
                                        
                                        setValue(quizes[step])
                                    }
                                    // break
                                    // return
                                   
                                }
                                // return
                                
                                
                            }else{
                                console.log("it is flae");
                               
                            }
                        }}>{opption.statement}</div>}

                </div>
                
            )
           })}</div>
           </div>
           

        }
    </div>
  )
}

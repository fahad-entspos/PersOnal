import React, { useState } from 'react'
import {questionPropsType} from './../Types/quiz_type'

const QuestionCard:React.FC<questionPropsType> =({question,options,callback})=>{
    console.log(question,options)

    let [selectedAns,setSelectedAns] = useState("")
    const handleSelection =(ev:any)=>{
        setSelectedAns(ev.target.value)
        // console.log(ev.target.value)
    }


    return <div className='question_contanier'>

       <div className='question'><h4>{question}</h4></div>

        <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}
        className="question-form">
            {
                options.map((opt:string,ind:number)=>{
                    return <div key={ind}>
                        <label className='radio'>
                        <input type="radio"
                               value={opt}
                               name='opt'
                               required
                               checked={selectedAns==opt}
                               onChange={handleSelection}
                               
                                />
                                {opt}
                        </label>
                    </div>

                })
            }
            {/* <button>Submit</button> */}
            <input type="submit" className="submit"/>
        </form>


    </div>
}
export default QuestionCard;
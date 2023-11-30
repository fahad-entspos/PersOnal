import React, { useState } from 'react'
import"./Quizapp.css"
import question from './Quizdata'
import QuizResult from './QuizResult'
export default function Quizapp() {
  const [ currentQuestion , setCurrentQuestion] = useState(0)
  const [score , setScore]= useState(0)
  const [Correctans , SetCorrectans] = useState(0)
  const [ clicked ,setClicked] = useState(false )
  const [showResult , SetshowResult] = useState(false)
  const handleAnswerOption = (isCorrect)=>{
if(isCorrect){
  setScore(score + 5)
  SetCorrectans(Correctans + 1)
}setClicked(true)
  }
  const handleNextOption = (()=>{
    setClicked(false)

const nextQuestion = currentQuestion+1
if(nextQuestion<question.length){
  setCurrentQuestion(nextQuestion)
}else{
  SetshowResult(true)
}
  })
  const handlePlayAgain = ()=>{
    setCurrentQuestion(0)
    setScore(0)
    SetCorrectans(0)
    SetshowResult(false)

  }
  return (
<div className="app">
  {
    showResult ? ( <QuizResult score={score} Correctans={Correctans}  handlePlayAgain={handlePlayAgain} />):( <>
      <div className="question-section">
    <h5>Score : {score}</h5>
    <div className="question-count">
      <span>Question {currentQuestion+1} of {question.length}</span>
    </div>
    <div className="question-text">
    {question[currentQuestion].questionText}
    </div>
      </div>
      <div className="answer-section">
      {question[currentQuestion].answerQuestion.map((ans ,i)=>{
        return <button  className={` ${clicked & ans.isCorrect ? "correct":"button"}`}  disabled={clicked} onClick={()=>handleAnswerOption(ans.isCorrect)} key={i}>{ans.answerText}</button>
    
      })}
    
        <div className="actions">
    
    <button onClick={handlePlayAgain}>Quit</button>
    <button disabled={!clicked} onClick={handleNextOption}>Next</button>
        </div>
      </div>
      </>)
  }

</div>


  )
}

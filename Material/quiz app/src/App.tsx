import React, { useEffect, useState } from 'react';
import { getQuizDetails } from './service/quiz_service';
import './App.css';
import {Questions} from './Types/quiz_type'
import QuestionCard from './Componenst/QuestionCard';

function App() {

   let [quiz, setQuiz] = useState<Questions[]>([])
   let [currentStep, setCurrentStep] = useState(0)
   let [score, setScore] = useState(0)
   let [showResult, setShowResult] = useState(false)
   
 useEffect(()=>{
 async function fetchData() {
   const questions:Questions[] = await getQuizDetails(10,"easy")
   console.log(questions);
   setQuiz(questions)
 }
 fetchData() 
 },[])
 const handleSubmit=(e:React.FormEvent<EventTarget>,userAns:string)=>{
   e.preventDefault();
  //  console.log(userAns);
   const currentQuestion:Questions= quiz[currentStep]
   console.log("correct Ans: " + currentQuestion.correct_answer + "--user Selection:" + userAns);
   if(userAns === currentQuestion.correct_answer){
     setScore(++score)
   }
    if(currentStep==quiz.length-1){
      // alert('Quiz Complete')
      // alert('Your score are: '+  score  + " out of:"+quiz.length)
      // setCurrentStep(0)
      // setScore(0)
      setShowResult(true)
    }else{
    setCurrentStep(++currentStep)
    }
  
 }
 if(showResult){
  return <div className='question_container result-container'>
    <h2>Result</h2>
    <p className="result-text">
        Your Final Score is 
          <b> {score}</b> out of <b>{quiz.length}</b>
      </p>
  </div>
 }
 if(!quiz.length){
   return <h3>loading...</h3>
 }
  return (
    <div className="App">
     
       <h1>Quiz App</h1>
      <QuestionCard
       options={quiz[currentStep].option}
       question={quiz[currentStep].question}
       callback={handleSubmit}
        
       />
      
    </div>
  );
}

export default App;

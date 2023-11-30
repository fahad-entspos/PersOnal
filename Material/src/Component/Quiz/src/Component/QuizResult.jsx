import React from 'react'
import question from './Quizdata'

function QuizResult(props) {
  return (
    <div className='score-section'>
        <h2>Completed</h2>
        <h4>Total Score {props.score} / 10</h4>
        <h4>Your Correct answer {props.Correctans}out of {question.length}</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
        
    </div>
  )
}

export default QuizResult
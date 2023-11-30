import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css"

export default function Card() {
  interface basicQuiz {
    category: string;
    correctAnswer: string;
    difficulty: string;
    id: string;
    incorrectAnswers: Array<string>;
    isNiche: boolean;
    question: string;
    regions: Array<any>;
    tags: Array<string>;
    type: string;
  }
  interface Quiz {
    correctAnswer: string;
    incorrectAnswers: Array<string>;
    question: string;
  }
  //////////////////////////////////
  let [data1, setData] = useState<basicQuiz[]>([]);
  let [quizA, setQuizA] = useState<Quiz[]>([]);
  let [count, setcount] = useState<number>(0);
  let [st, setSt] = useState<boolean>(false);
  let [ans, setAns] = useState<string>("");
  let [score, setScore] = useState<number>(0);

  let shuffler = (array: string[]) => [...array].sort(() => Math.random() - 0.5);
  let check = (evt: any) => {
    evt.preventDefault();
    // console.log(ans);
    let currentQuiz = quizA[count];

    if (currentQuiz.correctAnswer == ans) {
      
      setScore(++score);
    }
    if (count != quizA.length - 1) {
      if(st){

        setcount(++count);
        setSt(!st)
      }
    } else {
      alert(score);
      setScore(0);
    }
  };
  let handleChange = (e: { target: { value: any } }) => {
    // console.log(e.target.value)
    setAns(e.target.value);
    setSt(!st)
  };

  useEffect(() => {
    let data = async () => {
      let resp = await axios.get(" https://the-trivia-api.com/api/questions");
      //   let resp=  Data()
      //   console.log(resp);
      setData(resp.data);
      //   console.log(data1);
      let quiz = resp.data.map((obj: basicQuiz) => {
        return {
          correctAnswer: obj.correctAnswer,
          incorrectAnswers: shuffler(
            obj.incorrectAnswers.concat(obj.correctAnswer)
          ),
          question: obj.question,
        };
      });
      console.log(quiz);
      setQuizA(quiz);
      //   console.log(quizA)
    };
    data();
  }, []);
  return (
    <div>
      <div className="heading">
        <h1><i>Quiz App</i> <div>by</div> <i>HS7</i></h1>
        {/* <h2><i>by</i></h2>
        <h1><i>HS 7</i></h1> */}
        <h2>{score}/10</h2>
      </div>
      {quizA.length && (
        <div  className="main">
          <div className="question">
          {quizA[count].question}</div>
          <form onSubmit={check}>
            <ul>
              {quizA[count].incorrectAnswers.map((qu, i) => {
                return (
                  <li key={i} className="option">
                    <input
                      type="radio"
                      onChange={handleChange}
                      value={qu}
                      checked={ans === qu}
                      required
                    />
                    {qu}
                  </li>
                );
              })}
            </ul>
            <input type="submit" name="" id=""  className="btn"/>
          </form>
          {/* {
            count == quizA.length - 1 && <div>{score}</div>
          } */}
        </div>
      )}
    </div>
  );
}

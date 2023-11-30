import { type } from "@testing-library/user-event/dist/type"
import React from "react";

// define types of app
// **************************
// we use thi type only in API bs iska itna hi kam hai
export type Quiz={

     
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export type Questions  = {
    question:string
    answer:string
    option:string[]
    correct_answer: string;

}
export type questionPropsType ={
    question:string,
    options:string[],
    callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}

import React, { useContext, useState } from 'react'
import {Question }from "../Helpers/QuestionBank"
import { QuizContext } from '../Helpers/Context';
import "../App.css"

const Quiz = () => {
  const[currQuestion,setCurrQuestion]=useState(0);
  const[optionChoosen,setOptionChoosen]=useState("")
  const {score ,setScore,setGameState}=useContext(QuizContext)

  const nextQuestion=()=>{
    if(Question[currQuestion].answer==optionChoosen){
      setScore(score+1)

    }
    // alert(score);
    setCurrQuestion(currQuestion+1)

  }

  const finishQuiz=()=>{
    if(Question[currQuestion].answer==optionChoosen){
      setScore(score+1)
    }
    setGameState("endScreen")


  }
  return (
    <div className='Quiz'>
    
      <h1>{Question[currQuestion].id}-{Question[currQuestion].prompt}</h1>
      <div className='options'>
      
      
        <button  onClick={()=>setOptionChoosen("A")}>{Question[currQuestion].optionA}</button>
        <button  onClick={()=>setOptionChoosen("B")}>{Question[currQuestion].optionB}</button>
        <button onClick={()=>setOptionChoosen("C")}>{Question[currQuestion].optionC}</button>
        <button onClick={()=>setOptionChoosen("D")}>{Question[currQuestion].optionD}</button>
      </div>
      {currQuestion===Question.length-1 ? (<button onClick={finishQuiz} >Quiz Finished</button>):(<button  onClick={nextQuestion}>Next Questions</button>)}
      

    </div>
  )
}

export default Quiz
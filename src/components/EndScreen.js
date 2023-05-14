import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Question } from '../Helpers/QuestionBank'

const EndScreen = () => {
  const restart =()=>{
    setScore(0);
    setGameState("menu")
  }

  const{score,setScore ,gamestate,setGameState}=useContext(QuizContext)
  return (
    <div>{score}/{Question.length}
    
    <button onClick={restart}>Restart</button></div>
    
  )
}

export default EndScreen
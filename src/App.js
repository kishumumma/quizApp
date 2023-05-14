
import { useState } from 'react';
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';

import {QuizContext} from "./Helpers/Context"

function App() {

  const [gamestate,setGameState]=useState("menu");
  const [score,setScore]=useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gamestate,setGameState ,score,setScore}}>
      {gamestate==="menu" && <MainMenu/>}
      {gamestate==="quiz" && <Quiz/>}
      {gamestate==="endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

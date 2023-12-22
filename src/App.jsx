// imports
import React, { useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Nav from "./components/Nav";
import { ResultProvider } from './context/ResultProvider';

function App() {
  // state variables for changing the state of dark mode and for showing the quiz
  const [isDark, setisDark] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // function to toggle the theme 
  const toggleTheme = () => {
    setisDark(!isDark);
    document.body.style.backgroundColor = !isDark ? '#181A1B' : '#fcf1da';
    document.body.style.color = !isDark ? 'white' : 'black';
  };

  return (
      // wrapping the entire component with the resultprovider context
    <ResultProvider>
         <Nav isDark={isDark} toggleTheme={toggleTheme} />
      {showQuiz?(<QuestionBox isDark={isDark} />):(   // showing the questionbox component after clicking the startQuiz button
      <>
        <div className="home">
          <div className="hero-container flex" style={{
            backgroundColor: `${!isDark ? 'white' : 'black'}`
          }}>
            <img className="kalvium" src="https://kalvium.com/wp-content/uploads//2023/04/Kalvium-Logo-SVG.svg" alt="" />
          </div>
          <div className="card flex">
            <div className="cardbox">
              <img className="quizimg" src="https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg" alt="" />
              <button className="start" onClick={() => {
                setShowQuiz(true); //setting showQuiz true onClick
              }}>Start Quiz</button>
            </div>
          </div>
        </div>
      </>
      )}
    </ResultProvider>
  );
}

export default App;

// imports
import questions from '../questions';
import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { useResultValue } from '../context/ResultProvider';
import Result from "./Result";

const QuestionBox = ({ isDark }) => {
  // creating state variables for managing the current question, highlighting, and result display
  const [question, setQno] = useState({ number: 0, showresult: false });
  const [red, setisred] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[question.number]);

  const { correct, setCorrect } = useResultValue();   // Accessing and updating the result  from the result context

  const { text, options } = currentQuestion;   // Destructuring the current question into text and options

  //using an effect to update the current question when the question number changes 
  useEffect(() => {
    setCurrentQuestion(questions[question.number]);
  }, [question.number]);

  const qno = question.number
  //  function to move to the next question or show the result when the last question is reached
  function nextQ() {
    qno < 4 ? setQno({ number: qno + 1, showresult: false }) : setQno({ number: qno, showresult: true });
  }
  console.log(question.number)
  // displaying result component if showresult is true
  if (question.showresult) {
    return <Result isDark={isDark} />
  }
  // Rendering the QuestionBox component
  return (
    <>
      <div className='questionbox' style={{
        backgroundColor: `${isDark ? "#181A1B" : "white"}`,
      }}>

        <h5 className='number' style={{color : `${isDark ? "white" : "black"}`}}>Question {qno + 1} of 5 </h5>
        <h4 className='question' style={{
          color: `${red ? "red" : isDark ? "white" : "black"}`,
        }}>{text}</h4>
        <hr className='hr' />
        <div className='container'>
          <div className='group'>
            <button className='option' onClick={() => {
              // conditionally increasing the correct ans count by comparing with iscorrect
              options[0].isCorrect ? setCorrect(correct + 1) : setCorrect(correct)
              nextQ()
            }}>
              {options[0].text}
            </button>
            <button className='option' onClick={() => {
              options[1].isCorrect ? setCorrect(correct + 1) : setCorrect(correct)
              nextQ()
            }}>
              {options[1].text}
            </button>

            <button className='option' onClick={() => {
              options[2].isCorrect ? setCorrect(correct + 1) : setCorrect(correct)
              nextQ()
            }}>
              {options[2].text}
            </button>
            <button className='option' onClick={() => {
              options[3].isCorrect ? setCorrect(correct + 1) : setCorrect(correct)
              nextQ()
            }}>
              {options[3].text}
            </button>
          </div>
        </div>
        <div className="buttons">
          <button id='quit' onClick={() => {
            setisred(true)
          }}
            style={{
              backgroundColor: `${isDark ? "#3F4447" : "#1a1a1a"}`
            }}
          >Highlight</button>
          <button onClick={() => {
            setisred(false)
          }} style={{
            backgroundColor: `${isDark ? "#3F4447" : "#1a1a1a"}`
          }}>Remove Highlight</button>
        </div>
      </div>
    </>
  )
}

export default QuestionBox
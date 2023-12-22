import React, { useState } from 'react'
// Importing custom result context hook and QuestionBox component
import { useResultValue } from '../context/ResultProvider';
import QuestionBox from './QuestionBox';

export default function Result({isDark}) {
  const {correct, setCorrect} = useResultValue(); // Accessing and updating the result context
  const [restart,setRestart] = useState(false) // State variable to control quiz restart

   // a function to restart the quiz by resetting the score and toggling the restart state
  const Startagain = () =>{
    setCorrect(0);
    setRestart(!restart)
  }
  // render the result component
  return (
    <>    {restart ? (<QuestionBox />) : (
      <>
      <div className='resultbox' style={{
        backgroundColor : `${isDark ? "#BACBBC" : "#EDF7EE"}`
      }}>
        <div className="res-container">
        <h2 className='result'>
          <div className='greenbox'></div>
          Congratulations! You did a great job on this assessment.</h2>
        <div className="score-container">
        <button className='result-info'>Score :  {correct} out of 5 correct - ({correct*20}%)</button>
        <button style={{ padding : "0"
        }} className='restart'
        onClick={Startagain}
        >Restart Quiz </button> </div>
        </div>
      </div>
      <div className='desc' style={{
        backgroundColor: `${isDark ? "#FFFFFF" : "#fefbf6"}`
      }}>
        <p className='desc-text'>
The Best Undergraduate Program <br /> In Computer Science Engineering</p>
      </div>
      <p className='footer'>Made with ❤️ By <br /> Sravan Teja Reddy</p>
      </>
    )}
  </>
   
  )
}

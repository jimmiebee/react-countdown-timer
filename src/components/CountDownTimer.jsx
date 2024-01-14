import React, { useEffect } from 'react'
import { useState } from 'react'

function CountDownTimer() {
const [days , setDays] = useState(0);
const [hours , setHours] = useState(0);
const [minutes , setMinutes] = useState(0);
const [seconds , setSeconds] = useState(0);

//to get desired targetted date for an event
const year = new Date().getFullYear();
const eventDate = `12/31/${year}`;
const eventTime = new Date(eventDate).getTime();
let timerInterval;

  
const CalculateCountDownValues = () => { 
  const now = new Date();
  const timeDifference = eventTime - now.getTime();

  if(timeDifference<=0){
    clearInterval(timerInterval);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    alert("Countdown Finished!");
  } else { 
  const calculatedDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const calculatedHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const calculatedMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const calculatedSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  setDays(calculatedDays);
  setHours(calculatedHours);
  setMinutes(calculatedMinutes);
  setSeconds(calculatedSeconds);
}}
/*we have used useffect because useffect is used for Side effects include operations like data fetching(api), or in this case, setting up and cleaning up intervals etc.*/
useEffect(() => {
//The setInterval continuously updates a real-time countdown timer, updating the time.
 timerInterval =  setInterval(CalculateCountDownValues, 1000)
return () => clearInterval(timerInterval);
  }, []);

  return ( 
  <div className="countdown-container">
    <h1>New Year's Countdown</h1>
    <div className="countdown-box">
      <div className="countdown-item">
        <p className="countdown-value">{days}</p>
        <p className="countdown-label">Days</p>
      </div>
      <div className="countdown-item">
        <p className="countdown-value">{hours}</p>
        <p className="countdown-label">Hours</p>
      </div>
      <div className="countdown-item">
        <p className="countdown-value">{minutes}</p>
        <p className="countdown-label">Minutes</p>
      </div>
      <div className="countdown-item">
        <p className="countdown-value">{seconds}</p>
    <p className="countdown-label">Seconds</p>
      </div>
    </div>
  </div>
  )
}

export default CountDownTimer

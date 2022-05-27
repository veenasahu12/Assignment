import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [timeron, setTimerOn] = useState(false); 

useEffect(() => {
    let interval = null; 

    if (timeron) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

return () => clearInterval(interval);

}, [timeron]);

  return (
    <div>
      <img src="https://media.istockphoto.com/photos/digital-stopwatch-picture-id171328486?b=1&k=20&m=171328486&s=170667a&w=0&h=DvV9taBSwpg56rSirzoKxomBBUK_eNlEZFJm48ZDcWQ="alt=""height="250px"width="260px"/>
        <br/>
      <div className="timer">
        <div className="digit">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <br />
        
        <div className="buttons">
          <button onClick={() => setTimerOn(true)} >Start</button>
          <button onClick={() => setTimerOn(false)}> Stop</button>
          <button onClick={() => setTimerOn(true)}> Resume </button>
          <button onClick={() => setTime(0)} > Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
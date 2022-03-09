import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [interval, setinterval] = useState();
  const [status, setStatus] = useState(0);
  var seconds = 0;
  var minutes = 0;

  
  const start = () => {
    setStatus(1);
    setinterval(
      setInterval(() => {
        seconds++;

        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }

        setTime(minutes + ":" + seconds);
      }, 100)
    );
  };

  const stop = () => {
    setStatus(2);
    clearInterval(interval);
  };

  const reset = () => {
    setStatus(0);
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    setTime(minutes + ":" + seconds);
  };

  const resume = () => {
    setStatus(1);
    start();
  };
  return (
    <div className="back">
      <div className="timer">
        <h1 className="heading">Timer</h1>
        <h2 className="time">{time}</h2>
        {status === 0 ? (
          <div className="buttons">
            <button onClick={start}>Start</button>
          </div>
        ) : (
          " "
        )}
        {status === 1 ? (
          <div className="buttons">
            <button onClick={reset}>Reset</button>
            <button onClick={stop}>Stop</button>
          </div>
        ) : (
          " "
        )}
        {status === 2 ? (
          <div className="buttons">
            <button onClick={resume}>Resume</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Timer;

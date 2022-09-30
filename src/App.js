import "./App.css";
import { useState } from "react";
import useTimer from "./logic/useTimer";

function App() {
  const [time, setTime] = useState(20);
  const [isEdited, setIsEdited] = useState(false);
  const [
    { timeRemaining, title, buttonTitle },
    isRunning,
    { startTimer, stopTimer, resetTimer, editTimer },
  ] = useTimer(time);
  const handleChange = (event) => {
    event.persist();
    const newTime = Number(event.target.value);
    if (newTime < 0) {
      console.log("Hey, be careful with negative time!");
      setTime(1);
    } else {
      setTime(newTime);
    }
  };
  function handleEdit() {
    editTimer(time);
    if (isEdited) {
      resetTimer(time);
      if (time <= 0) {
        setTime(1);
        resetTimer(1);
      }
    }

    setIsEdited(() => !isEdited);
  }
  function handleReset() {
    resetTimer(time);
    if (isEdited) {
      setIsEdited(() => !isEdited);
      if (time <= 0) {
        setTime(1);
        resetTimer(1);
      }
    }
  }
  return (
    <div className="App">
      <h2 className="title">{title}</h2>
      <div className="timer">
        {!isEdited && <span onClick={handleEdit}>{timeRemaining}</span>}
        {isEdited && (
          <>
            <input
              className="timeInput"
              type="number"
              value={time}
              name="time"
              onChange={handleChange}
            />
            <span className="timeLabel">min</span>
          </>
        )}
      </div>
      <div className="btn-container">
        {!isRunning && (
          <button className="btn" onClick={isEdited ? handleEdit : startTimer}>
            {buttonTitle}
          </button>
        )}
        {isRunning && (
          <button
            className="btn"
            color="secondary"
            onClick={isEdited ? handleEdit : stopTimer}
          >
            Pause
          </button>
        )}
        <button className="btn" color="default" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

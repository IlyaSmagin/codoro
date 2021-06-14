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
  ] = useTimer();
  const handleChange = (event) => {
    event.persist();
    const newTime = event.target.value;
    newTime <= 0
      ? console.log("Hey, be careful with negative time!")
      : setTime(newTime);
  };
  function handleEdit() {
    !isEdited ? resetTimer() : editTimer(time);
    setIsEdited(!isEdited);
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
          <button className="btn" color="secondary" onClick={stopTimer}>
            Pause
          </button>
        )}
        <button className="btn" color="default" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

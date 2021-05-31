import "./App.css";
import useTimer from "./logic/useTimer";

function App() {
  const [
    { timeRemaining, title, buttonTitle },
    isRunning,
    { startTimer, stopTimer, resetTimer },
  ] = useTimer();
  return (
    <div className="App">
      <h2 className="title">{title}</h2>
      <div className="timer">
        <span>{timeRemaining}</span>
      </div>
      <div className="btn-container">
        {!isRunning && (
          <button className="btn" onClick={startTimer}>
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

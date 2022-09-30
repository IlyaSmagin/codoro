import { useState, useRef } from "react";
import { getPhrase } from "./usePhrase";
import useDocTitle from "./useDocTitle";
function useTimer(initTime = 20) {
  const [timeLeft, setTimeLeft] = useState(initTime * 60);
  const [title, setTitle] = useState(getPhrase("init"));
  const [isRunning, setIsRunning] = useState(false);
  const [buttonTitle, setbuttonTitle] = useState("Start");
  const setDocTitle = useDocTitle("Codoro");
  const intervalRef = useRef(null);
  const timeRemaining = calcTimeString(timeLeft);

  function startTimer() {
    if (intervalRef.current !== null) return;
    setTitle(getPhrase("work"));
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        setDocTitle(calcTimeString(timeLeft - 1));
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }
  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(getPhrase("wait"));
    setbuttonTitle("Continue");
    setIsRunning(false);
    setDocTitle(timeRemaining + " (paused)");
  }
  function editTimer(newTime = initTime) {
    stopTimer();
    setTitle(getPhrase("edit"));
    setbuttonTitle("Save");
    setTimeLeft(newTime * 60);
    setDocTitle("Editing timer");
  }
  function resetTimer(time = initTime) {
    setTitle(getPhrase("reset"));
    setbuttonTitle("Start");
    setTimeLeft(time * 60);
    setDocTitle("Start again");
  }
  function padTime(time) {
    return time.toString().padStart(2, "0");
  }
  function calcTimeString(left) {
    const minutes = padTime(Math.floor(left / 60));
    const seconds = padTime(left - minutes * 60);
    const timeRemaining = `${minutes}:${seconds}`;
    return timeRemaining;
  }

  return [
    { timeRemaining, title, buttonTitle },
    isRunning,
    { startTimer, stopTimer, resetTimer, editTimer },
  ];
}
export default useTimer;

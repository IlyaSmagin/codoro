import { useState, useRef } from "react";
import { getInit, getWait, getWork, getReset } from "./usePhrase";
import useDocTitle from "./useDocTitle";
function useTimer(initTime) {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [title, setTitle] = useState(getInit());
  const [isRunning, setIsRunning] = useState(false);
  const [buttonTitle, setbuttonTitle] = useState("Start");
  const setDocTitle = useDocTitle("Codoro");
  const intervalRef = useRef(null);
  const timeRemaining = calcTimeString(timeLeft);

  function startTimer() {
    if (intervalRef.current !== null) return;
    setTitle(getWork());
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
    setTitle(getWait());
    setbuttonTitle("Continue");
    setIsRunning(false);
    setDocTitle(timeRemaining + " (paused)");
  }
  function resetTimer() {
    stopTimer();
    setTitle(getReset());
    setbuttonTitle("Start");
    setTimeLeft(20 * 60);
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
    { startTimer, stopTimer, resetTimer },
  ];
}
export default useTimer;

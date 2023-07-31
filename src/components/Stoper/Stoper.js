import { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import styles from "./Stoper.module.scss";
import Button from "../Button/Button";

const Stoper = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const start = () => {
    setTimerId(setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10));
  };

  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const reset = () => {
    setTime(0);
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return (
    <div className={styles.stoper}>
      <Timer time={time} />
      <div className={styles.buttons}>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Stoper;
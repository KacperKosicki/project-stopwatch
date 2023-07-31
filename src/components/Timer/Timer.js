import styles from "./Timer.module.scss";

const Timer = ({ time }) => {
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsRemainder = milliseconds % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${millisecondsRemainder.toString().padStart(3, "0")}`;
  };

  return <div className={styles.timer}>{formatTime(time)}</div>;
};

export default Timer;
import React from "react";
import styles from "./Timer.module.css";
const Timer = ({ seconds, minutes }) => {
  return (
    <>
      <div className={styles.container}>
        <h4>{minutes}</h4>
        <p>Minutes</p>
      </div>
      <div className={styles.container}>
        <h4>{seconds}</h4>
        <p>Seconds</p>
      </div>
    </>
  );
};

export default Timer;

import React from "react";
import styles from "./Score.module.css";

const Score = ({ highScore, score }) => {
  return (
    <div className={styles.scores}>
      <div className={styles["score-container"]}>
        <h4>HIGH-SCORE :</h4>
        <span>{highScore}</span>
      </div>
      <div className={styles["score-container"]}>
        <h4>SCORE :</h4>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default Score;

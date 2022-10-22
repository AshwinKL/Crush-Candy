import React from "react";
import Button from "./Button";
import styles from "./HowToPlayModal.module.css";
import Modal from "./Modal";
import useSound from "use-sound";
import roll from "../assets/roll.wav";

const HowToPlayModal = ({ setOpenModal, userName, start }) => {
  const [rollSound] = useSound(roll, { interrupt: true });

  const hidePlayModalHandler = () => {
    rollSound();
    setOpenModal(false);
    if (start) {
      start();
    }
  };
  return (
    <Modal>
      <svg
        className={styles.svg}
        onClick={hidePlayModalHandler}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className={styles.contents}>
        <p>
          Welcome <span>{userName ? userName : "Friend"}</span> !
        </p>
        <h2>hOw tO pLaY</h2>
        <p>Join 3 or more same-color candies to score 😃</p>
        <p>
          The sidebars indicates your life 💟💟 and the total time you survived
          in the game ⏳⌛
        </p>
        <p>You can earn life by joining the same color candies 🍼🍼</p>
        <p>
          All candies can move one step, even though the color is not same - [
          if you have time 😜 ]
        </p>
        <p>You can also see your Highscore and current score 🏆</p>
        <p>
          Happy Gaming 🎮 Made with ❤️ by{" "}
          <a href="https://www.linkedin.com/in/ashwinkl/">Ashwin</a>
        </p>
        <Button text="OK" onClick={hidePlayModalHandler} />
      </div>
    </Modal>
  );
};

export default HowToPlayModal;

import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import HowToPlayModal from "../components/HowToPlayModal";
import Button from "../components/Button";
import useSound from "use-sound";
import roll from "../assets/roll.wav";

const Login = ({ userName, setUserName, stop }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [rollSound] = useSound(roll, { interrupt: true });

  useEffect(() => {
    stop();
  }, [stop]);

  const navigateToGameHandler = () => {
    rollSound();
    if (userName.trim() === "") {
      alert("Please enter a valid name");
      return;
    }
    navigate("/game");
  };
  const showPlayModalHandler = () => {
    rollSound();
    setOpenModal(true);
  };

  return (
    <div className="app">
      {openModal && (
        <HowToPlayModal setOpenModal={setOpenModal} userName={userName} />
      )}
      <div className={styles.card}>
        <div className={styles.h3Container}>
          <h3>Welcome to Crush Candy 🍭</h3>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <div className={styles.buttons}>
          <Button text="START" onClick={navigateToGameHandler} />
          <Button text="RULES" onClick={showPlayModalHandler} />
        </div>
      </div>
    </div>
  );
};

export default Login;

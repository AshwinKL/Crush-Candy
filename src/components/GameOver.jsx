import { useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import gameOverSound from "../assets/gameOver.wav";

const GameOver = ({
  setUserName,
  setTotalLife,
  setGameOver,
  reset,
  minutes,
  seconds,
  score,
  setHighScore,
  name,
  stop,
}) => {
  const [gameOverSfx] = useSound(gameOverSound);
  gameOverSfx();
  useEffect(() => {
    stop();
    if (localStorage.getItem("score") < score) {
      localStorage.setItem("score", score);
      setHighScore(localStorage.getItem("score"));
    }
  }, [stop, score, setHighScore]);
  const navigate = useNavigate();
  const navigateToHomeHandler = () => {
    setUserName("");
    navigate("/");
  };
  const reloadHandler = () => {
    setTotalLife(100);
    reset();
    setGameOver(false);
  };
  return (
    <Modal>
      <div className="gameOver-container">
        <h1>GaMe oVeR 😔</h1>
        <h2>
          Hi <span>{name}</span> ❤
        </h2>
        <h3>
          You have survived <span>{minutes}</span> minutes{" "}
          <span>{seconds}</span> seconds
        </h3>
        <h2>
          And your score is <span>{score} </span>
        </h2>
        <div className="gameOver-buttons">
          <Button text="Replay" onClick={reloadHandler} />
          <Button text="Quit" onClick={navigateToHomeHandler} />
        </div>
      </div>
    </Modal>
  );
};

export default GameOver;

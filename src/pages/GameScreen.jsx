import React, { useState, useEffect } from "react";
import Score from "../components/Score";
import Timer from "../components/Timer";
import Sidebar from "../components/Sidebar";
import Board from "../components/Board";
import LifeBar from "../components/LifeBar";
import GameOver from "../components/GameOver";
import HowToPlayModal from "../components/HowToPlayModal";
import { useStopwatch } from "react-timer-hook";

const GameScreen = ({ userName, setUserName, stop, bgSound, sound }) => {
  const [openModal, setOpenModal] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [totalLife, setTotalLife] = useState(100);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (localStorage.getItem("score")) {
      setHighScore(localStorage.getItem("score"));
    } else {
      localStorage.setItem("score", 0);
    }
  }, [highScore]);

  return (
    <div className="app">
      {openModal && (
        <HowToPlayModal
          userName={userName}
          setOpenModal={setOpenModal}
          start={start}
        />
      )}
      {gameOver && (
        <GameOver
          name={userName}
          minutes={minutes}
          seconds={seconds}
          score={score}
          setScore={setScore}
          setUserName={setUserName}
          setGameOver={setGameOver}
          setTotalLife={setTotalLife}
          setHighScore={setHighScore}
          reset={reset}
          stop={stop}
        />
      )}
      {!openModal && !gameOver && (
        <>
          <Score highScore={highScore} score={score} />
          <Sidebar className={"sidebarLeft"}>
            <Timer seconds={seconds} minutes={minutes} />
          </Sidebar>
          <Board
            setScore={setScore}
            setTotalLife={setTotalLife}
            totalLife={totalLife}
            bgSound={bgSound}
            sound={sound}
          />
          <Sidebar className={"sidebarRight"}>
            <LifeBar
              setScore={setScore}
              setGameOver={setGameOver}
              totalLife={totalLife}
              pause={pause}
              score={score}
              setTotalLife={setTotalLife}
            />
          </Sidebar>
        </>
      )}
    </div>
  );
};

export default GameScreen;

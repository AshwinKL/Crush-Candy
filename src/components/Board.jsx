import React, { useState, useEffect } from "react";
import { CheckForColumnOfFour } from "../utils/CheckForColumnOfFour";
import { CheckForColumnOfThree } from "../utils/CheckForColumnOfThree";
import { CheckForRowOfFour } from "../utils/CheckForRowOfFour";
import { CheckForRowOfThree } from "../utils/CheckForRowOfThree";
import { MoveIntoSquareBelow } from "../utils/MoveIntoSquareBelow";
import { DragStart, DragDrop, DragEnd } from "../utils/Drag";
import useSound from "use-sound";
import coin from "../assets/coin.wav";
import roll from "../assets/roll.wav";
import blueCandy from "../assets/blue-candy.png";
import greenCandy from "../assets/green-candy.png";
import orangeCandy from "../assets/orange-candy.png";
import redCandy from "../assets/red-candy.png";
import yellowCandy from "../assets/yellow-candy.png";
import purpleCandy from "../assets/purple-candy.png";

const width = 8;
const candyColors = [
  blueCandy,
  greenCandy,
  orangeCandy,
  redCandy,
  yellowCandy,
  purpleCandy,
];
const Board = ({ setScore, setTotalLife, sound, totalLife, bgSound }) => {
  const [coinSound] = useSound(coin, { interrupt: true });
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [rollSound] = useSound(roll, { interrupt: true });

  useEffect(() => {
    setScore(0);
    createBoard();
    sound.play();
    sound.loop(true);
  }, [bgSound, setScore, sound]);
  useEffect(() => {
    const timer = setInterval(() => {
      CheckForColumnOfFour(
        width,
        currentColorArrangement,
        setScore,
        setTotalLife,
        totalLife,
        coinSound
      );
      CheckForRowOfFour(
        currentColorArrangement,
        setScore,
        setTotalLife,
        totalLife,
        coinSound
      );
      CheckForColumnOfThree(
        width,
        currentColorArrangement,
        setScore,
        setTotalLife,
        totalLife,
        coinSound
      );
      CheckForRowOfThree(
        currentColorArrangement,
        setScore,
        setTotalLife,
        totalLife,
        coinSound
      );
      MoveIntoSquareBelow(
        width,
        currentColorArrangement,
        candyColors,
        rollSound
      );
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [currentColorArrangement, setScore, coinSound, rollSound, setTotalLife]);

  const createBoard = () => {
    const randomColorArrangment = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangment.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangment);
  };

  return (
    <div className="game">
      {currentColorArrangement.map((candyColor, index) => (
        <img
          key={index}
          alt={candyColor}
          src={candyColor}
          data-id={index}
          draggable={true}
          onDragStart={(e) => DragStart(e, setSquareBeingDragged)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => DragDrop(e, setSquareBeingReplaced)}
          onDragEnd={(e) =>
            DragEnd(
              e,
              squareBeingDragged,
              squareBeingReplaced,
              currentColorArrangement,
              width
            )
          }
        />
      ))}
    </div>
  );
};

export default Board;

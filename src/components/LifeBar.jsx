import React, { useEffect, useState } from "react";

const LifeBar = ({ setGameOver, setTotalLife, totalLife, pause, score }) => {
  const [classForBar, setClassForBar] = useState("life-bar full");
  useEffect(() => {
    if (totalLife === 100) {
      setClassForBar("life-bar full");
    }
    if (totalLife < 100 && totalLife > 50) {
      setClassForBar("life-bar");
    }
    if (totalLife < 50) {
      setClassForBar("life-bar red");
    }
  }, [totalLife]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalLife((prev) => prev - 1);
    }, 60);
    return () => clearInterval(timer);
  }, [setTotalLife]);

  useEffect(() => {
    if (totalLife <= 0) {
      pause();
      setGameOver(true);
    }
  }, [totalLife, setGameOver, pause]);
  let styler = { height: `${totalLife}%` };
  if (window.innerWidth <= 725) {
    styler = { width: `${totalLife}%` };
  }
  return (
    <div className="life-bar-container">
      <div className={classForBar} style={styler}></div>
    </div>
  );
};

export default LifeBar;

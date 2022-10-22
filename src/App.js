import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GameScreen from "./pages/GameScreen";
import Login from "./pages/Login";
import useSound from "use-sound";
import bg from "./assets/bg.mp3";

function App() {
  const [bgSound, { sound, stop }] = useSound(bg, {
    volume: 0.5,
    interrupt: true,
  });
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login userName={userName} setUserName={setUserName} stop={stop} />
          }
        />
        <Route
          path="/game"
          element={
            <GameScreen
              userName={userName}
              bgSound={bgSound}
              stop={stop}
              sound={sound}
              setUserName={setUserName}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

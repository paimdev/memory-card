import { useState } from "react";
import Scoreboard from "./Scoreboard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}

export default App;

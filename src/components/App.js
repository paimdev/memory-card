import { useEffect, useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import "../index.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsObj, setCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false, 
    card7: false,
    card8: false,
    card9: false,
    card10: false,
    card11: false,
    card12: false,
  });

  const handleClick = (e) => {
    const card = e.target.getAttribute("name");

    if (cardsObj[card] === false) {
      setCards((prevState) => {
        return { ...prevState, [card]: true };
      });

      setCurrentScore(currentScore + 1);
    } else {
      handleBestScore();
      setCurrentScore(0);
      resetGame();
    }
  };

  const resetGame = () => {
    setCards({
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false,
      card6: false, 
      card7: false,
      card8: false,
      card9: false,
      card10: false,
      card11: false,
      card12: false,
    });
  };

  const handleBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };
  
  const cardsArray = [
    <Card name="card1" handleClick={handleClick} key="1" />,
    <Card name="card2" handleClick={handleClick} key="2" />,
    <Card name="card3" handleClick={handleClick} key="3" />,
    <Card name="card4" handleClick={handleClick} key="4" />,
    <Card name="card5" handleClick={handleClick} key="5" />,
    <Card name="card6" handleClick={handleClick} key="6" />,
    <Card name="card7" handleClick={handleClick} key="7" />,
    <Card name="card8" handleClick={handleClick} key="8" />,
    <Card name="card9" handleClick={handleClick} key="9" />,
    <Card name="card10" handleClick={handleClick} key="10" />,
    <Card name="card11" handleClick={handleClick} key="11" />,
    <Card name="card12" handleClick={handleClick} key="12" />
    ].sort(() => Math.random() - 0.5)

  return (
    <div className="">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="grid grid-cols-4">
        {cardsArray}
      </div>
    </div>
  );
};

export default App;

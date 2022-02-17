import logoReact from "../assets/OYIaJ1KK.png";
import logoGraph from "../assets/12972006.png";
import logoPostgre from "../assets/ASOhU5xJ.png";
import logoTS from "../assets/bynNY5dJ.jpg";
import logoPHP from "../assets/hwUcGZ41_400x400.jpg";
import logoJava from "../assets/K85ZWV2F.png";
import logoNode from "../assets/n1JRsFeB_400x400.png";
import logoNext from "../assets/nextjs.png";
import logoGo from "../assets/O6AczwfV_400x400.png";
import logoPython from "../assets/pUBY5pVj.png";
import logoRedis from "../assets/redis.png";
import logoAngular from "../assets/square.png";
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
    <Card name="card1" handleClick={handleClick} src={logoReact} key="1" />,
    <Card name="card2" handleClick={handleClick} src={logoGraph} key="2" />,
    <Card name="card3" handleClick={handleClick} src={logoPostgre} key="3" />,
    <Card name="card4" handleClick={handleClick} src={logoTS} key="4" />,
    <Card name="card5" handleClick={handleClick} src={logoPHP} key="5" />,
    <Card name="card6" handleClick={handleClick} src={logoJava} key="6" />,
    <Card name="card7" handleClick={handleClick} src={logoNode} key="7" />,
    <Card name="card8" handleClick={handleClick} src={logoNext} key="8" />,
    <Card name="card9" handleClick={handleClick} src={logoGo} key="9" />,
    <Card name="card10" handleClick={handleClick} src={logoPython} key="10" />,
    <Card name="card11" handleClick={handleClick} src={logoRedis} key="11" />,
    <Card name="card12" handleClick={handleClick} src={logoAngular} key="12" />,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col bg-slate-100">
      <div className="p-4">
        <h1 className="text-3xl text-black">Stack Memory Card Game</h1>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
      <div className="flex flex-col items-center">
        <div className="lg:grid lg:grid-cols-4 lg:justify-items-center lg:w-3/4">
          {cardsArray}
        </div>
      </div>
    </div>
  );
};

export default App;

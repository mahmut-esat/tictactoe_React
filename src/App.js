import React, { useEffect, useState } from "react";

import "./styles.css";
import Box from "./components/Box";
import checkWinner from "./components/checkWinner";
import MyButton from "./components/MyButton";

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(new Array(9).fill(null));
  const [painted, setPainted] = useState([]);
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState("MULTIPLAYER");

  useEffect(() => {
    let possibleChoice = [];
    for (let i = 0; i < 9; i++) {
      if (gameBoard[i] === null) {
        possibleChoice.push(i);
        // console.log(possibleChoice)
      }
    }

    if (
      currentPlayer === "O" &&
      possibleChoice.length > 0 &&
      gameMode === "vsCOMPUTER"
    ) {
      let randomBox =
        possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
      handleClick(randomBox);
    }
  }, [currentPlayer, gameMode]);

  const handleClick = (index) => {
    const newGameBoard = [...gameBoard];
    newGameBoard[index] = currentPlayer;
    setGameBoard(newGameBoard);

    const winnerCondition = checkWinner(newGameBoard);

    if (winnerCondition) {
      setPainted(winnerCondition);
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const handleRestart = () => {
    setCurrentPlayer("X");
    setGameBoard(new Array(9).fill(null));
    setWinner(null);
    setPainted([]);
  };

  const renderBox = (index) => (
    <Box
      value={gameBoard[index]}
      onClick={() => handleClick(index)}
      disabled={winner || gameBoard[index]}
      painted={painted.includes(index)}
    />
  );

  const handleMultiplayer = () => {
    handleRestart();
    setGameMode("MULTIPLAYER");
  };
  const handleVsComputer = () => {
    handleRestart();
    setGameMode("vsCOMPUTER");
  };

  return (
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="mode">
        <h2 id="mode">mode: {gameMode}</h2>
      </div>
      <div>
        {winner ? (
          <div id="winner">
            <h2 id="winner"> {currentPlayer} win</h2>
          </div>
        ) : (
          <h2 id="turn">Turn: {currentPlayer}</h2>
        )}
      </div>
      <div className="row">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
      </div>
      <div className="row">
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
      </div>
      <div className="row">
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>
      <MyButton onClick={handleRestart} title={"Restart"} />
      <div>
        <MyButton
          title={"MULTIPLAYER"}
          onClick={handleMultiplayer}
        />
        <MyButton
          title={"vs COMPUTER"}
          onClick={handleVsComputer}
        />
      </div>
    </div>
  );
}
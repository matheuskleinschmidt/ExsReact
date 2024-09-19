import { useState } from "react";

function Square({ value, onSquareClick, slect }) {
  return (
    <button className={slect ? "slectSquare" :"square"} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);

 
  let status;
  let boxWinner = []

  if (winner) {
    status = `winner: ${winner.v}`;
    boxWinner = winner.lines
  } else {
    status = `Next player ${xIsNext ? "X" : "O"}`;
  }

  const renderSquare = (i) => (
    <Square value={squares[i]} slect={boxWinner.includes(i) ? true : false} onSquareClick={() => handleClick(i)} />
  );

  const rows = [];
  for (let i = 0; i < 3; i++) {
    const squares = [];
    for (let j = 0; j < 3; j++) {
      squares.push(renderSquare(i * 3 + j));
    }
    rows.push(
      <div key={i} className="board-row">
        {squares}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="status">{`Você está no movimento ${
        squares.filter((item) => item === "X" || item === "O").length + 1
      }`}</div>
      {rows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [reverse, setReverse] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }

    return (
      <li key={move}>
        {history.length == move + 1 ? (
          <p>{`The now move is ${move}`}</p>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setReverse(!reverse)}>{`inverter a ordem para ${
          reverse ? "ascendente " : "descendente"
        }`}</button>
        <br />
        <ol>{reverse ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {"v": squares[a] , lines : lines[i]}
    }
  }
  return null;
}

/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (index) => {
    if (square[index]) {
      return;
    }

    const newSquare = square.slice();

    newSquare[index] = xIsNext ? "X" : "O";

    setSquare(newSquare);
    setxIsNext(!xIsNext);
  };

  return (
    <div className="board">
      <Square value={square[0]} onSquareClick={() => handleClick(0)} />
      <Square value={square[1]} onSquareClick={() => handleClick(1)} />
      <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      <Square value={square[3]} onSquareClick={() => handleClick(3)} />
      <Square value={square[4]} onSquareClick={() => handleClick(4)} />
      <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      <Square value={square[6]} onSquareClick={() => handleClick(6)} />
      <Square value={square[7]} onSquareClick={() => handleClick(7)} />
      <Square value={square[8]} onSquareClick={() => handleClick(8)} />
    </div>
  );
}

export default Board;

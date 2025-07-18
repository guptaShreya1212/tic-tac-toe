import React, { useState } from 'react'
import Card from '../card/Card'
 import { toast } from 'react-toastify';

export default function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(false) //false-->x  true--->0
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  console.log("board array",board);
  console.log("board length", board.length)
  function play(idx){
    if(winner){
      return
    }
    if(board[idx] !== ""){
      toast.error("Cell is already filled");
      return
    }
    const newBoard=[...board]
    const currentSymbol = turn ? "O" : "X";
  newBoard[idx] = currentSymbol;
if (isWinner(newBoard, currentSymbol)) {
    setBoard(newBoard);
    toast.success("winner ")
    setWinner(currentSymbol);
    return;
  }
    setBoard(newBoard);
        setTurn(!turn)
  }
 function isWinner(board, symbol) {
  return (
    (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
    (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
    (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
    (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
    (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
    (board[2] === symbol && board[5] === symbol && board[8] === symbol) ||
    (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
    (board[2] === symbol && board[4] === symbol && board[6] === symbol)
  );
}

  return (
    <>
 <div className="flex flex-col text-white ">
  <h1>
    {winner ? `Winner: ${winner}` : `Current Turn: ${turn ? "O" : "X"}`}
  </h1>

  {winner && (
    <div>
      <button
        type="button"
        className="bg-green-400 text-gray-800 h-10 w-32 text-lg text-black my-2 items-center"
        onClick={() => {
          setWinner("");
          setBoard(Array(numberOfCards).fill(""));
          setTurn(false)
        }}
      >
        Reset
      </button>
    </div>
  )}
</div>

      {/* <h1 className='text-white'>Current Turn :{turn ? "0" : "x"} </h1> */}
      <div className='grid grid-cols-3 gap-1'>
        {board.map((value, idx) => (
          <Card key={idx} onPlay={play} index={idx} player={value}/>
        ))}
      </div>
    </>
  )
}

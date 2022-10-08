import React, {useState} from "react";
import './Game.css'
import Board from "./Board";
import {calculateWinner} from "../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick  = (index) => {
        const boardCopy = [...board];
        // Определить был ли клик по ячейке или игра окончена
        if(winner || boardCopy[index]) return
        // Определить чей ход
        boardCopy[index] = xIsNext ? 'X' : '0'
        // Обновить state
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
        return(
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }

    return(
        <div className="wrapper containe">
            {startNewGame()}
            <Board squares = {board} click = {handleClick}/>
            <h4 className='next'>{winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext? 'X' : '0')}</h4>
        </div>
    );
}

export default Game;
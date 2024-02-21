import Square from './Square'
import { useState } from 'react'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false)

    console.log(squares)

    const handleSquareClick = clickedPosition => {

        if (squares[clickedPosition] != null) // truthy value = not null
        {
            return; // just get out of the function
        }

        // using callback function
        // By creating a new array (here - currentSquare) with the updated values, you guarantee that React detects the change in state correctly. If you were to modify the existing array directly, React might not recognize the change, leading to potential bugs or inconsistencies in the UI.
        setSquares(currentSquare => {
            return currentSquare.map((squareValue, position) => {
                if (clickedPosition === position) {
                    return isXNext ? 'X' : 'O';
                }
                return squareValue;
            })
        })

        setIsXNext((currentIsXNext) => !currentIsXNext)  // if the current toggled is 'X', then make it false, it means making to print 'O' for next toggle

    }

    const renderSquare = (position) => {
        return (
            <Square value={squares[position]} onClick={() => handleSquareClick(position)} />
        )
    }

    return <div className='board'>
        <div className="board-row">
            {/* <Square value={squares[0]} onClick={() => handleSquareClick(0)}/>
            <Square value={squares[1]} onClick={() => handleSquareClick(0)} />
            <Square value={squares[2]} onClick={() => handleSquareClick(0)}/> */}
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>

    </div>
}

export default Board
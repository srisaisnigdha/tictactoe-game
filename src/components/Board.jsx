import Square from './Square'


const Board = ({squares,handleSquareClick}) => {

    console.log(squares)    

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
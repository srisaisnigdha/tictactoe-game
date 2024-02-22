const StatusMessage = ({ winner, gamingBoard }) => {

    const { squares, isXNext } = gamingBoard  // destructuring of gaming board ==> replacement for gamingBoard.squares, gamingBoard.isXNext

    const noMovesLeft = squares.every((squareValue) => squareValue != null)
    const nextPlayer = isXNext ? 'X' : 'O'

    const renderStatusMessage = () => {
        if (winner) {
            return (
                <>
                    Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
                </>
            )
        }

        if (!winner && noMovesLeft) {
            return <> <span className="text-orange">O</span> and <span className="text-green">X</span> tied</>
        }

        if (!winner && !noMovesLeft) {
            return <>Next Player is <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span></>
        }
        return null
    }

    return <h2 className="status-message">
        {/* {winner && <div>Winner is ${winner} </div>}
        {!winner && noMovesLeft && <div>0 and X tied</div>}
        {!winner && !noMovesLeft && <div>Next Player is ${nextPlayer}</div>} */}

        {renderStatusMessage()}
    </h2>;
}

export default StatusMessage;
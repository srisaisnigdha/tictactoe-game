import Board from './components/Board';
import { useState } from 'react'
import './styles.scss';
import { calculateWinner } from './winner';

function App() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(false)

   const winner = calculateWinner(winner)
   const nextPlayer = isXNext ? 'X' : 'O'
   const statusMessage = winner?`Winner is ${winner}` : `Next Player is ${nextPlayer}`

   console.log(winner)

   const handleSquareClick = clickedPosition => {

      if (squares[clickedPosition] != null || winner) // truthy value = not null, winner==> winner!=null
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

   return (
      <div className='app'>
         <h2>{statusMessage}</h2>
         <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
   );
}

export default App;

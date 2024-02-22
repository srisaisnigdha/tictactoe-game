import './styles.scss';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { useState } from 'react'
import { calculateWinner } from './winner';

function App() {
   // const [squares, setSquares] = useState(Array(9).fill(null));
   // const [isXNext, setIsXNext] = useState(false)
   const [history, setHistory] = useState([{ squares: Array(9).fill(null), isXNext: false }]); // deafult element
   const [currentMove, setCurrentMove] = useState(0);


   const gamingBoard = history[currentMove]  // derived value

   // const winner = calculateWinner(squares)   //(derived) to determine if there's a winner based on the current state of the board.
   const winner = calculateWinner(gamingBoard.squares)

   console.log({ history, currentMove })

   const handleSquareClick = clickedPosition => {

      if (gamingBoard.squares[clickedPosition] || winner) // truthy value = not null, winner==> winner!=null
      {
         return; // just get out of the function
      }

      // using callback function
      // By creating a new array (here - currentSquare) with the updated values, you guarantee that React detects the change in state correctly. If you were to modify the existing array directly, React might not recognize the change, leading to potential bugs or inconsistencies in the UI.

      // setSquares(currentSquare => {
      //    return currentSquare.map((squareValue, position) => {
      //       if (clickedPosition === position) {
      //          return isXNext ? 'X' : 'O';
      //       }
      //       return squareValue;
      //    })
      // })

      setHistory(currentHistory => {
         const isTraversing = currentMove + 1 !== currentHistory.length   //(history is 1 idexed and currentMove is zero indexed). istraversing means Not at last

         const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length - 1]
         // means it gives the last state if not traversing and the moving state if traversing

         const nextSquaresState = lastGamingState.squares.map((squareValue, position) => {
            if (clickedPosition === position) {
               return lastGamingState.isXNext ? 'X' : 'O';
            }
            return squareValue;
         });

         const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1) : currentHistory;

         return base.concat({ squares: nextSquaresState, isXNext: !lastGamingState.isXNext })

      });

      // setIsXNext((currentIsXNext) => !currentIsXNext)  // if the current toggled is 'X', then make it false, it means making to print 'O' for next toggle

      setCurrentMove(move => move + 1)   // whenever we click on a move the counter will be incremented

   };

   const moveTo = (move) => {
      setCurrentMove(move)  // if move===5, then it moves to 5th state ==> to change to the gaming state that we want
   }

   return (
      <div className='app'>
         {/* <StatusMessage winner={winner} isXNext={isXNext} squares={squares} /> */}
         <StatusMessage winner={winner} gamingBoard={gamingBoard} />
         <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />

         <h2>Current Game History</h2>
         <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
   );
}

export default App;

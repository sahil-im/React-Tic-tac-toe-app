import Players from "./Components/Players"
import GameBord from "./Components/GameBord"
import { useState } from "react"
import Log from "./Components/Log"
function App() {
  const [gameTurn,setGameTurn]= useState([])
  const [activePlayer,setActivePlayer] = useState("X")
  function handleSelectedSqure(rawIndex,colIndex)
{
  setActivePlayer((currentPlayer)=>currentPlayer === "X" ? "O" :"X")
  setGameTurn((previousTurn) =>{
    let currentPlayer = 'X'

    if(previousTurn.length > 0 && previousTurn[0].player ==='X')
    {
      currentPlayer = 'O';
    }
    const updatedTurns = [
      {
        square:{raw:rawIndex,col:colIndex},player:currentPlayer
      },
      ...previousTurn
    ]
    return updatedTurns
  })
}
  return(
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Players InitialPlayerName={"Player 1"} PlayerSymbol={"X"} isActive={activePlayer === "X"}/>
        <Players InitialPlayerName={"Player 2"} PlayerSymbol={"O"} isActive={activePlayer === "O"}/>
      </ol>
      <GameBord onSelectSquar={handleSelectedSqure} turns={gameTurn}/>
    </div>
    <Log/>
    </main>
    
  )
}

export default App

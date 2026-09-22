import Players from "./Components/Players"
import GameBord from "./Components/GameBord"
import { useState } from "react"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
// CHILD FUNCTION 


const initialGameBord = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function derivedActivePlayer(gameTurn){
  let currentPlayer = 'X'

    if(gameTurn.length > 0 && gameTurn[0].player ==='X')
    {
      currentPlayer = 'O';
    }
    return currentPlayer
}

function App() {
  const [gameTurn,setGameTurn]= useState([])
  let activePlayer = derivedActivePlayer(gameTurn)
  let gameBord = initialGameBord

for(const turn of gameTurn)
{
    const {square ,player}  = turn
    const {raw,col} = square
    gameBord[raw][col] = player
}

for(combination of WINNING_COMBINATIONS)
{
  
}
  function handleSelectedSqure(rawIndex,colIndex)
{
  // setActivePlayer((currentPlayer)=>currentPlayer === "X" ? "O" :"X")
  setGameTurn((previousTurn) =>{
      let currentPlayer = derivedActivePlayer(previousTurn)
      
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
      <GameBord onSelectSquar={handleSelectedSqure} bord={gameBord}/>
    </div>
    <Log turns={gameTurn}/>
    </main>
    
  )
}

export default App

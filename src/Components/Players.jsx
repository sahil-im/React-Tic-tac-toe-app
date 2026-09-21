import { useState } from "react"
export default function Players({InitialPlayerName,PlayerSymbol,isActive}){
    const [playerName,setPlayerName] = useState(InitialPlayerName)
    const [isEditing,setIsEditing] = useState(false)
    function handleClick()
    {
        setIsEditing((value) => !value)
    }
    function getPlayerName(event){
        console.log(event)
        setPlayerName(event.target.value)
    }
    let player = <span className="player-name">{playerName}</span>
    if(isEditing)
    {
        player = <input type="text" required value={playerName} onChange={getPlayerName}/>
    }
    return(
        <li className={isActive ? "active" :undefined}>
          <span className="player">
            {player}
            <span className="player-symbol">{PlayerSymbol}</span>
          </span>
          <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
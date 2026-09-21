import { useState } from "react"

const initialGameBord = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBord({onSelectSquar,turns}){
//     const [gameBord,setGameBord] =useState(initialGameBord)

// function handleSelectedSqure({onSelectSquar,turns}){
// // setGameBord((preGameBord) =>{
// //     const updateBord = [...preGameBord.map(innerArray =>[...innerArray])]
// //     updateBord[rawIndex][colIndex] = activePlayerSymbol
// //     return updateBord
// // })
// //     onSelectSquar()

// }
let gameBord = initialGameBord

for(const turn of turns)
{
    const {square ,player}  = turn
    const {raw,col} = square
    gameBord[raw][col] = player
}
    return(
        <ol id="game-board">
            {
                gameBord.map((raw,rawIndex) => <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex)=> <li key={colIndex}><button onClick={() => onSelectSquar(rawIndex,colIndex)}>{col}</button></li>
                    )}
                    </ol>
                </li>)
            }   
        </ol>
    )
}

export default function GameBord({onSelectSquar,bord}){
    return(
        <ol id="game-board">
            {
                bord.map((raw,rawIndex) => <li key={rawIndex}>
                    <ol>
                        {raw.map((col,colIndex)=> 
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquar(rawIndex,colIndex)} disabled={col !== null}>{col}</button>
                        </li>
                    )}
                    </ol>
                </li>)
            }   
        </ol>
    )
}
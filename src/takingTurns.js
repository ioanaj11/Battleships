import { displayHit, displayMessage } from "./DOMstuff";

//NEEDS REFACTORING
export function takingTurns(player1, player2){
    let currentPlayer='player1';

    function handleCellClick(row, col){
        let attackedCell=document.getElementById(`opp_${row},${col}`);
        if( currentPlayer === 'player1'){
            if (player2.playerGameboard.receiveAttack(row, col)){
                displayHit(player2, attackedCell);
                if(player2.playerGameboard.isGameOver()){
                    displayMessage('Hurray! You won the game')
                }

                currentPlayer="player2";

                let attackCoordinates=player2.generateHit();
                row=attackCoordinates[0];
                col=attackCoordinates[1];

                setTimeout(function() {
                    player1.playerGameboard.receiveAttack(row, col);
                  
                    attackedCell=document.getElementById(`own_${row},${col}`);
                    displayHit(player1, attackedCell);

                    if (player1.playerGameboard.isGameOver()){
                        displayMessage('Awww! The computer won the game!')
                }

                currentPlayer='player1';
            }, 700);
            }
        }
    }

    const opponentGameboard=document.getElementById('opponentGameboard');
    
    //gets the coordinates of the cell clicked by the human user(player1) and hits it, 
    //triggering after that the hit of the computer player(player2)
    opponentGameboard.addEventListener('click', e =>{
        const cell=document.getElementById(e.target.id);
        const row=parseInt(e.target.id[4]);
        const col=parseInt(e.target.id[6]);
        handleCellClick(row,col, cell);
    })
}
const mainDiv=document.querySelector('.main');
const ownGameboard=document.createElement('div');
const opponentGameboard=document.createElement('div');

//generates the DOM representation on the first player
function generateOwnGameboard(playerGameboard){
    ownGameboard.classList.add('ownGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `own_${row},${col}`);
            if (playerGameboard.grid[row][col]==='miss') cell.textContent='X'
                else if (playerGameboard.grid[row][col]==='hit') cell.classList.add('hit')
                    else if (playerGameboard.grid[row][col] !=null) cell.classList.add('ship')
            
            ownGameboard.appendChild(cell);
        }

    mainDiv.appendChild(ownGameboard);
}

//generates the DOM representation of the second player
function generateOpponentGameboard(playerGameboard, otherPlayer){
   
    opponentGameboard.classList.add('opponentGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `opponent_${row},${col}`);
                                          
            opponentGameboard.appendChild(cell);
        }

    //gets the coordinates of the hit upon the second player    
    function handleClick(e) {
        let row = parseInt(e.target.id[9]);
        let col = parseInt(e.target.id[11]);
        otherPlayer.playerGameboard.receiveAttack(row, col);
        const cell = document.getElementById(e.target.id);
        
        if (otherPlayer.playerGameboard.grid[row][col] === 'hit') {
            cell.classList.add('hit');
        } else if (otherPlayer.playerGameboard.grid[row][col] === 'miss') {
            cell.classList.add('miss');
        }

        if (!otherPlayer.playerGameboard.isGameOver()){
            //attacks the other player(the first player)
            attackOpponent(playerGameboard, otherPlayer)}
            else console.log('PLAYER 1 is the winner')
    }
    
    opponentGameboard.addEventListener('click', handleClick);
    mainDiv.appendChild(opponentGameboard);
}

//gets the coordinates that the second player wants to use, to hit the first player; the coordinates are generated randomly
//changes the hit cell, to be 'hit' or 'miss'
function attackOpponent(playerGameboard, otherPlayer){
    let attackCoordinates=otherPlayer.generateHit();
    
    row=attackCoordinates[0];
    col=attackCoordinates[1];

    playerGameboard.receiveAttack(row, col);
    
    const attackedCell=document.getElementById(`own_${row},${col}`)
   
    if (playerGameboard.grid[row][col] === 'hit') {
        attackedCell.classList.add('hit');
        attackedCell.classList.remove('ship');
    } else if (playerGameboard.grid[row][col] === 'miss') {
        attackedCell.classList.add('miss');
    }

    if (playerGameboard.isGameOver()) console.log('PLAYER 2 is the winner');
}

function clearDOM(){
    ownGameboard.remove();
    opponentGameboard.remove();
}

module.exports={
    generateOwnGameboard,
    generateOpponentGameboard,
    clearDOM}

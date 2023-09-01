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
function generateOpponentGameboard(){
   
    opponentGameboard.classList.add('opponentGameboard');
    opponentGameboard.setAttribute('id', 'opponentGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `opp_${row},${col}`);
                                          
            opponentGameboard.appendChild(cell);
        }

    mainDiv.appendChild(opponentGameboard);
}

//changes the class of the hit cell, in order to display the result of the hit
function displayHit(player, attackedCell){
    let row = parseInt(attackedCell.id[4]);
    let col = parseInt(attackedCell.id[6]);
    
    if (player.playerGameboard.grid[row][col] === 'hit') {
            attackedCell.classList.add('hit');
            attackedCell.classList.remove('ship');
        } else if (player.playerGameboard.grid[row][col] === 'miss') {
            attackedCell.classList.add('miss');
        }
}

function clearDOM(){
    ownGameboard.remove();
    opponentGameboard.remove();
}

module.exports={
    generateOwnGameboard,
    generateOpponentGameboard,
    displayHit,
    clearDOM}

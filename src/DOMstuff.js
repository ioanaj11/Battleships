import rotateImgSrc from './img/rotating-arrow-symbol.png';
import { returnShipsHome } from './returnShipsHome';
import { takingTurns } from './takingTurns';
import { isValid } from "./isValid";

const mainDiv=document.querySelector('.main');
const ownArea=document.createElement('div');
const opponentArea=document.createElement('div');
const ownGameboard=document.createElement('div');
const opponentGameboard=document.createElement('div');
const messageBoard=document.querySelector('.messageBoard');
const fleetDiv=document.createElement('div');

ownArea.classList.add('ownArea');
opponentArea.classList.add('opponentArea');

//generates the fleet representation, on the left side of the screen
export function generateFleetDisplay(fleet){
    
    fleetDiv.classList.add('fleetDiv');

    for(let ship in fleet){
        const shipDiv=document.createElement('div');
        shipDiv.classList.add('shipImg');
        shipDiv.classList.add(`${ship}`);
        shipDiv.setAttribute('data-direction', 'horizontal');

        //the event listener for the drag and drop option
        shipDiv.addEventListener('dragstart', dragstart);

        const rotateImg=document.createElement('img');
        rotateImg.setAttribute('src', rotateImgSrc);
        rotateImg.classList.add('rotateImg');
        rotateImg.setAttribute('id', `rotate${ship}`);

        //the event for the rotate buttons
        rotateImg.addEventListener('click', e => {
            const rotatingShipImg=document.getElementById(e.target.id.substr(6))
            flip(rotatingShipImg);
        });

        //working with horizontal and vertical direction
        let angle=0;
        let direction='horizontal';
        function flip(img){
            const flippedDiv=document.querySelector(`.${img.id}`);
    
            if (angle===0) {
                    angle = 90;
                    direction='vertical';
                    flippedDiv.setAttribute('data-direction', 'vertical');}
                else {
                    angle=0;
                    direction='horizontal';
                    flippedDiv.setAttribute('data-direction', 'horizontal');
                }
            img.style.transform=`rotate(${angle}deg)`;
        }

        shipDiv.appendChild(rotateImg);

        //the image of the ship
        const img=document.createElement('img');
        img.setAttribute('src', `${fleet[ship].icon}`);
        img.setAttribute('id', `${ship}`);
        img.setAttribute('draggable', 'true');

        shipDiv.appendChild(img);        
        fleetDiv.appendChild(shipDiv);
        
        mainDiv.prepend(fleetDiv);
    }
    
}

//generates the "start" and "reset" buttons
export function generateStartResetBtn(player1, player2, fleet){
    const buttonsDiv=document.createElement('div');
    buttonsDiv.classList.add('buttonsDiv');

    //the reset button
    const resetBtn=document.createElement('button');
    resetBtn.textContent='RESET';
    resetBtn.classList.add('resetBtn');

    const resetFunction = reset => returnShipsHome(player1, player2, fleet);
    resetBtn.addEventListener('click', resetFunction);

    //the start button
    const startBtn=document.createElement('button');
    startBtn.textContent='START';
    startBtn.classList.add('startBtn');

    startBtn.addEventListener('click', e=>{
        if(fleetDiv.firstChild.classList.contains('buttonsDiv')){
            takingTurns(player1, player2);
            displayMessage("Player 1, click on the opponent's grid, to hit!");
            resetBtn.removeEventListener('click', resetFunction)}
        else displayMessage('Please place all your ships before starting the game!');
        })

    buttonsDiv.appendChild(startBtn);
    buttonsDiv.appendChild(resetBtn);

    fleetDiv.appendChild(buttonsDiv);
}

//generates the DOM representation of the first player's grid
export function generateOwnGameboard(playerGameboard, fleet){
    ownGameboard.classList.add('ownGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `own_${row},${col}`);
            if (playerGameboard.grid[row][col]==='miss') cell.textContent='X'
                else if (playerGameboard.grid[row][col]==='hit') cell.classList.add('hit')
                    else if (playerGameboard.grid[row][col] !=null) cell.classList.add('ship')
            
            //the event listener for the drag and drop option
            cell.addEventListener('dragover', dragOver);
            cell.addEventListener('drop', function (e){
                dropShip(e, fleet, playerGameboard);
            });
            ownGameboard.appendChild(cell);
        }
    
    const titleDiv=document.createElement('h2');
    titleDiv.textContent='FRIENDLY WATERS';
    ownArea.appendChild(titleDiv);

    ownArea.appendChild(ownGameboard);
    mainDiv.appendChild(ownArea);
}

//dragover and dropShip functions
let draggedShip;

function dragstart(e){
    draggedShip=e.target.id;
}

function dragOver(e){
    e.preventDefault();
}

function dropShip(e, fleet, playerGameboard){
    const startId=e.target.id;
    const draggedShipDiv=document.querySelector(`.${draggedShip}`);
    const direction=draggedShipDiv.dataset.direction;
    const row=Number(startId[4]);
    const col=Number(startId[6]);

    if (isValid(fleet[draggedShip]['ship'], playerGameboard.grid, row, col, direction)){
        playerGameboard.placeShip(fleet[draggedShip]['ship'], row, col, direction)

        const dropDiv=document.getElementById(startId);
        const rotateBtn=document.getElementById(`rotate${draggedShip}`);

        draggedShipDiv.removeChild(rotateBtn);
        draggedShipDiv.removeEventListener('dragstart', dragstart);

        if(draggedShipDiv.dataset.direction === 'vertical') {
            dropDiv.style.transform='rotate(90deg)';
            const draggedShipDivImg=document.querySelector(`.${draggedShip}>img`);
            draggedShipDivImg.style.transform='rotate(360deg)';
        }
   
        dropDiv.appendChild(draggedShipDiv);
    }
}

//generates the DOM representation of the second player's grid
export function generateOpponentGameboard(){
   
    opponentGameboard.classList.add('opponentGameboard');
    opponentGameboard.setAttribute('id', 'opponentGameboard');
    for(let row=0; row<10; row++)
        for(let col=0; col<10; col++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `opp_${row},${col}`);
                                          
            opponentGameboard.appendChild(cell);
        }

    const titleDiv=document.createElement('h2');
    titleDiv.textContent='ENEMY WATERS';
    opponentArea.appendChild(titleDiv);

    opponentArea.appendChild(opponentGameboard);
    mainDiv.appendChild(opponentArea);
}

//displays the message in the box below the title
export function displayMessage(string){
    const message=document.createElement('div');
    message.classList.add('message');
    var i = 0;
    var speed = 110; 

    function typeWriter() {
        if (i < string.length) {
            message.innerHTML += string.charAt(i);
            i++;
            messageBoard.appendChild(message);
            if (i>23){
                message.innerHTML= message.innerHTML.substring(1);
            }
            setTimeout(typeWriter, speed);
            
        } else{
            setTimeout(function () {
                messageBoard.removeChild(message);
                }, string.length*3);
        }
    }
    typeWriter();
 }


//changes the class of the hit cell, in order to display the result of the hit
export function displayHit(player, attackedCell){
    let row = parseInt(attackedCell.id[4]);
    let col = parseInt(attackedCell.id[6]);
    
    if (player.playerGameboard.grid[row][col] === 'hit') {
            attackedCell.classList.add('hit');
            attackedCell.classList.remove('ship');
        } else if (player.playerGameboard.grid[row][col] === 'miss') {
            attackedCell.classList.add('miss');
        }
}

export function clearDOM(){
    ownGameboard.remove();
    opponentGameboard.remove();
}
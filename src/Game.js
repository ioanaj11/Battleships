import carrierImg from './img/carrier.png';
import battleshipImg from './img/cruiser.png';
import destroyerImg from './img/destroyer.png';
import submarineImg from './img/submarine.png';
import boatImg from './img/boat.png';
import {Ship} from './shipFactory';
import {generateOwnGameboard, generateOpponentGameboard, displayMessage, displayHit, generateStartResetBtn, generateFleetDisplay} from './DOMstuff';

export function Game(player1, player2){
    
    let fleet={
        carrier:{
            ship:Ship(5),
            icon: carrierImg},
        battleship:{
            ship:Ship(4),
            icon: battleshipImg},
        destroyer:{
            ship:Ship(3),
            icon: destroyerImg},
        submarine:{
            ship: Ship(3),
            icon: submarineImg},
        patrolBoat:{
            ship:Ship(2),
            icon: boatImg}
    }
    
    generateFleetDisplay(fleet);
    generateStartResetBtn(player1, player2, fleet);
    generateOwnGameboard(player1.playerGameboard, fleet);
    generateOpponentGameboard();

    player2.populateGameboard(fleet, player2.playerGameboard);
    
    displayMessage('Welcome to Battleships!');

    setTimeout(()=> displayMessage('Place your ships, then press the START button!'), 3600)
 }
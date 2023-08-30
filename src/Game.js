const Ship=require('./shipFactory');
const {generateOwnGameboard, generateOpponentGameboard} =require('./DOMstuff');
const AIplayer=require('./AIplayer');


function Game(player1, player2){
    player2=AIplayer();
    let fleet={
        carrier:Ship(5),
        battleship:Ship(4),
        destroyer:Ship(3),
        submarine:Ship(3),
        patrolBoat:Ship(2)
    }

    player1.playerGameboard.placeShip(fleet.patrolBoat, 0, 0, 'horizontal');
    player2.playerGameboard.placeShip(fleet.patrolBoat, 1, 0, 'horizontal');

    generateOwnGameboard(player1.playerGameboard);
    generateOpponentGameboard(player1.playerGameboard, player2);
    }

module.exports=Game;
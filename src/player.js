const Gameboard=require('./gameboard');

function Player(name){
    let playerGameboard=Gameboard();
    
    return {name, playerGameboard}
}

module.exports=Player;
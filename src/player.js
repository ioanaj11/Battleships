import {Gameboard} from './gameboard';

export function Player(name){
    let playerGameboard=Gameboard();
    
    return {name, playerGameboard}
}
import {Player} from './player';
import './style.css';
import {Game} from './Game.js';
import {AIplayer} from './AIplayer';

let player1=Player('player1');
let player2=AIplayer();

Game(player1, player2);


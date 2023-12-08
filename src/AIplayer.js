import {Gameboard} from './gameboard';
import { isValid } from './isValid';

export function AIplayer(){
    let hits=[];
    let playerGameboard=Gameboard();

    function generateHit(){
       let randomRow=Math.floor(Math.random()*10);
       let randomCol=Math.floor(Math.random()*10);
        
        if (!containsArrayWithElements(hits, randomRow, randomCol)) {
            hits.push([randomRow, randomCol]);
            return [randomRow, randomCol]
        }
            else return generateHit();
        
    }

    function containsArrayWithElements(arr, a, b) {
        for (const subArr of arr) {
            if (Array.isArray(subArr) && subArr.length === 2 && subArr[0] === a && subArr[1] === b) {
                return true;
            }
        }
        return false;
    }

    function populateGameboard(fleet, gameboard){
        for (let key of Object.keys(fleet)){
            let notDropped=true;
            
            while (notDropped){
                let randomRow=Math.floor(Math.random()*10);
                let randomCol=Math.floor(Math.random()*10);
                let direction=randomDirection();

                if (isValid(fleet[key]['ship'], gameboard.grid, randomRow, randomCol, direction)){
                    gameboard.placeShip(fleet[key]['ship'], randomRow, randomCol, direction);
                    notDropped=false;
                }
            }
            }
        
        function randomDirection(){
            if (Math.random() < 0.5)return 'vertical'
                else return 'horizontal';
        }
        return gameboard;
    }

    return{
        hits,
        generateHit,
        playerGameboard, 
        populateGameboard
    }
}
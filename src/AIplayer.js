const Gameboard = require("./gameboard");

function AIplayer(){
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

    return{
        hits,
        generateHit,
        playerGameboard
    }
}

module.exports=AIplayer;
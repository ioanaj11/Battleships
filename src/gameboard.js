//a factory function which creates the grid of the game
function Gameboard(){
    const grid=createEmptyGameboard();

    //generates the empty board, where the ships will be placed; 
    //the empty boards is an array of 10 subarrays, representing the rows of the grid
    //each subarray has 10 elements, representing the columns of the gird
    function createEmptyGameboard(){
        let emptyGameboard=[[]];
       
        for (let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                emptyGameboard[i].push(null)
            }
            emptyGameboard.push([]);
        }
        emptyGameboard.pop();
        return emptyGameboard;
    }

    //the array elements where the ship is placed change from 'null' into 'ship'
    function placeShip(ship, row, col, direction){
        if (direction == 'vertical')
            for(let i=0; i<ship.length; i++){
                this.grid[row+i][col]=ship;
            }
            else {
                for(let i=0; i<ship.length;i++){
                    this.grid[row][col+i]=ship;
                }
            }
    }

    //depending on the grid-value of the [row][col] coordinate, the value in the grid changes to 'hit' or 'miss'
    function receiveAttack(row, col){
        if (this.grid[row][col] === null) {
            this.grid[row][col]='miss';
            return false;
        }
           else if((this.grid[row][col] === 'hit')||(this.grid[row][col]=='miss')) return false;
               else {
                this.grid[row][col].hit();
                this.grid[row][col]='hit';
                return true;
               }
    }

    //checks the grid to see if there are any values that are not 'null', 'hit', or 'miss'
    //i.e, if there are any 'ship' values left
    //if there are no 'ship' values left, it means that all the ships have been discovered and the game is over
    function isGameOver(){
        for(let row=0; row<10; row++)
            for(let col=0; col<10; col++){
                if (this.grid[row][col]!==null
                    &&this.grid[row][col]!=='hit'
                    &&this.grid[row][col]!=='miss') return false;
            }
        return true;
    }
    
    return{
        grid,
        placeShip,
        receiveAttack,
        isGameOver
    }
}

module.exports=Gameboard;
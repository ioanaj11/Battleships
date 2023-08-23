const createShip=require('./shipFactory');

function Gameboard(){
    const grid=createEmptyGameboard();

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

    function receiveAttack(row,col){
        if (this.grid[row][col] === null) {
            this.grid[row][col]='miss';
            return false;
        }
           else if((this.grid[row][col] == 'hit')||(this.grid[row][col]=='miss')) return false;
               else {
                this.grid[row][col].hit();
                this.grid[row][col]='hit';
                return true;
               }
    }

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
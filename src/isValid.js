//function which takes in the ship, coordinates, gameboard and direction value 
//and checks if that coordinate is valid, i.e. if the ship doesn't go outsode the 
//gameboard and if the squares are not already taken by another ship
export function isValid(ship, gameboard, row, col, direction){
    if (direction === 'vertical'){
        if ((row + ship.length)>10) return false
                else{
                    for(let i=0; i<ship.length; i++){
                        if (gameboard[row+i][col] != null) return false}
                    return true;}
        }
        else {
            if ((col + ship.length)>10) return false
                else{
                    for(let i=0; i<ship.length; i++){
                        if (gameboard[row][col+i] != null) return false}
                    return true}
        }
}
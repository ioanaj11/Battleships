const Gameboard=require('./gameboard');
const Ship=require('./shipFactory');

let testGameboard=Gameboard();
let testShip=Ship(3);

test('the createemptyFunctionGenerates an empty 10X10 grid', ()=>{
    for(let i=0; i<10; i++)
    for(let j=0; j<10; j++){
        expect(testGameboard.grid[i][j]).toBe(null)
    }
})

test('the placeShip function places a verical ship according to the given coordinates', ()=>{
    testGameboard.placeShip(testShip, 4, 4, 'vertical');
    for(let i=4; i<=testShip.length; i++){
        expect(testGameboard.grid[4][i]).toBe(testShip);
        }
})

test('the placeShip function places a horizontal ship according to the given coordinates', ()=>{
    testGameboard.placeShip(testShip, 2, 6, 'horizontal');
    for(let i=6; i<=testShip.length; i++){
        expect(testGameboard.grid[2][i]).toBe(testShip);
        }
})

test('the receiveAttack function changes the value of the given coordinates into "hit" if the given coordinate has a ship on it', ()=>{
    testGameboard.receiveAttack(4, 4);
    expect(testGameboard.grid[4][4]).toBe('hit')
})

test("the receiveAttack function changes the value of the given coordinates into 'miss' if the given coordinate doesn't have a ship on it", ()=>{
    testGameboard.receiveAttack(3, 4);
    expect(testGameboard.grid[3][4]).toBe('miss')
})

test("the receiveAttack function doesn't do anything if the coordinates given were already hit", ()=>{
    testGameboard.receiveAttack(4, 4);
    expect(testGameboard.grid[4][4]).toBe('hit')
})

test("the receiveAttack function doesn't do anything if the coordinates given already have the 'miss' value", ()=>{
    testGameboard.receiveAttack(3, 4);
    expect(testGameboard.grid[3][4]).toBe('miss')
})

test('the isGameOver function returns false while the ships on the gameboard are not completely hit', ()=>{
    expect(testGameboard.isGameOver()).toBe(false)
})

test('the isGameOver function returns true when the ships on the gameboard are completely hit', ()=>{
    testGameboard.receiveAttack(4, 4);
    testGameboard.receiveAttack(5, 4);
    testGameboard.receiveAttack(6, 4);
    testGameboard.receiveAttack(2, 6);
    testGameboard.receiveAttack(2, 7);
    testGameboard.receiveAttack(2, 8);
    expect(testGameboard.isGameOver()).toBe(true)
})
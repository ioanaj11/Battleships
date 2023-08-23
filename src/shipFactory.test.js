const createShip=require('./shipFactory');

const testTanker=createShip(3);
test('the function builds a ship with the length of 3', ()=>{
    expect(testTanker.length).toBe(3);
})

test('after running the hit() function once, timesHit increases by 1', ()=>{
    testTanker.hit();
    expect(testTanker.timesHit).toBe(1);
})

test('after being hit 2 times, the sunk property is false',()=>{
    testTanker.hit();
    expect(testTanker.isSunk()).toBe(false);
})

test('after being hit 3 times, the sunk property becomes true',()=>{
    testTanker.hit();
    expect(testTanker.isSunk()).toBe(true);
})

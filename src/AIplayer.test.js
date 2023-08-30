const AIplayer=require('./AIplayer')

const testPlayer=AIplayer();

test('the factory function returns an object when called', ()=>{
    expect(testPlayer).toBeInstanceOf(Object)
})

test('the generateHit method returns a set of row and col values', ()=>{
    expect(testPlayer.generateHit().length).toBe(2)
})

test('the generateHit method returns a value of row higher than -1', ()=>{
    expect(testPlayer.generateHit()[0]).toBeGreaterThan(-1)
})

test('the generateHit method returns a value of col higher than -1', ()=>{
    expect(testPlayer.generateHit()[1]).toBeGreaterThan(-1)
})

test('the generateHit method returns a value of row smaller than 10', ()=>{
    expect(testPlayer.generateHit()[0]).toBeLessThan(10)
})

test('the generateHit method returns a value of col smaller than 10', ()=>{
    expect(testPlayer.generateHit()[1]).toBeLessThan(10)
})
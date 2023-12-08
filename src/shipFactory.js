export function Ship(length){
    let timesHit=0;
    
    function hit(){
        return this.timesHit++;
        };

    function isSunk(){
            return this.timesHit === length;
        };

    return {
        length,
        timesHit,
        hit,
        isSunk
    };
}
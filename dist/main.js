/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createShip=__webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");

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

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((module) => {

function createShip(length){
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

module.exports=createShip;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Ship=__webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
const Gameboard=__webpack_require__(/*! ./gameboard */ "./src/gameboard.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQywyQ0FBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1Qix5QkFBeUIsTUFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLFdBQVcsbUJBQU8sQ0FBQywyQ0FBZTtBQUNsQyxnQkFBZ0IsbUJBQU8sQ0FBQyx1Q0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVTaGlwPXJlcXVpcmUoJy4vc2hpcEZhY3RvcnknKTtcblxuZnVuY3Rpb24gR2FtZWJvYXJkKCl7XG4gICAgY29uc3QgZ3JpZD1jcmVhdGVFbXB0eUdhbWVib2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKXtcbiAgICAgICAgbGV0IGVtcHR5R2FtZWJvYXJkPVtbXV07XG4gICAgICAgXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGVtcHR5R2FtZWJvYXJkW2ldLnB1c2gobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVtcHR5R2FtZWJvYXJkLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgICAgIGVtcHR5R2FtZWJvYXJkLnBvcCgpO1xuICAgICAgICByZXR1cm4gZW1wdHlHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHJvdywgY29sLCBkaXJlY3Rpb24pe1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93K2ldW2NvbF09c2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbCtpXT1zaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdyxjb2wpe1xuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11bY29sXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXT0nbWlzcyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgICAgZWxzZSBpZigodGhpcy5ncmlkW3Jvd11bY29sXSA9PSAnaGl0Jyl8fCh0aGlzLmdyaWRbcm93XVtjb2xdPT0nbWlzcycpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF09J2hpdCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNHYW1lT3Zlcigpe1xuICAgICAgICBmb3IobGV0IHJvdz0wOyByb3c8MTA7IHJvdysrKVxuICAgICAgICAgICAgZm9yKGxldCBjb2w9MDsgY29sPDEwOyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2NvbF0hPT1udWxsXG4gICAgICAgICAgICAgICAgICAgICYmdGhpcy5ncmlkW3Jvd11bY29sXSE9PSdoaXQnXG4gICAgICAgICAgICAgICAgICAgICYmdGhpcy5ncmlkW3Jvd11bY29sXSE9PSdtaXNzJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJue1xuICAgICAgICBncmlkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzR2FtZU92ZXJcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzPUdhbWVib2FyZDsiLCJmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCl7XG4gICAgbGV0IHRpbWVzSGl0PTA7XG4gICAgXG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVzSGl0Kys7XG4gICAgICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzSGl0ID09PSBsZW5ndGg7XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHRpbWVzSGl0LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzPWNyZWF0ZVNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IFNoaXA9cmVxdWlyZSgnLi9zaGlwRmFjdG9yeScpO1xuY29uc3QgR2FtZWJvYXJkPXJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
import { generateFleetDisplay, generateStartResetBtn } from './DOMstuff';

export function returnShipsHome(player1, player2, fleet){
    const fleetDiv=document.querySelector('.fleetDiv');
    const main=document.querySelector('.main');

    const placedShipsImg=document.querySelectorAll('.ownGameboard img');
    placedShipsImg.forEach(placedShipImg => {
        const parent=placedShipImg.parentNode;
        parent.removeChild(placedShipImg);
    })

    const placedShips=document.querySelectorAll('.ownGameboard .shipImg');
    placedShips.forEach(shipDiv => {
        const parent=shipDiv.parentNode;
        parent.removeChild(shipDiv);
    })

    const remainingDivImgs=document.querySelectorAll('.fleetDiv img');
    remainingDivImgs.forEach(remainingDiv=> {
        const parentDiv=remainingDiv.parentElement;
        parentDiv.removeChild(remainingDiv);
    })

    const remainingDivs=document.querySelectorAll('.fleetDiv div');
    remainingDivs.forEach(remainingDiv => {
        fleetDiv.removeChild(remainingDiv);
    });

    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            player1.playerGameboard.grid[i][j] = null;
        }
    }

    main.removeChild(fleetDiv);

    generateFleetDisplay(fleet);
    generateStartResetBtn(player1, player2, fleet);
}
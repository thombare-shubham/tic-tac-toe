import Game from "./Game.js" //Imported game class from game file
import GameView from "./GameView.js"

let game = new Game(); //Object for Game class
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click",()=>{
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click",()=> {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);


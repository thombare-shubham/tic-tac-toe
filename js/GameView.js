// for defining actions for game

export default class GameView{
    constructor(){
        console.log("initiated GameView")
    }
    // Function for game board update
    updateBoard(game){
        // console.log("This is the board within gameview")
        // console.log(game.board);
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for(let i = 0;i < game.board.length;i++){
            const tile = document.querySelector(`.board-tile[data-index = '${i}']`)//Selecting content from css
            tile.textContent = game.board[i];

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class = "${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        
        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if(game.turn == 'X'){
            playerX.classList.add("active");
        }
        else{
            playerO.classList.add("active");
        }
    }
}
// Game logic
export default class Game {
    constructor() {
        console.log("Game initiated");
        this.turn = "X";
        this.board = new Array(9).fill(null);
        console.log(this.board);
    }
    // Switch between players
    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        }
        else {
            this.turn = "X";
        }
    }
    // i is the index in array
    makeMove(i) {
        if(this.endOfGame()){
            return;
        }
        // To check if something is there or not
        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;//either X or O
        let winningCombination = this.findWinningCombinations();
        if(!winningCombination){
            this.nextTurn();
        }
    }

    findWinningCombinations() {
        // Below is the array of array containing winning combinations
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;//destruct this items into an individual array
            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }
        return null;
    }
    endOfGame(){
        let winningCombination = this.findWinningCombinations();
        if(winningCombination){
            return true;
        }
        else{
            return false;
        }
    }
}
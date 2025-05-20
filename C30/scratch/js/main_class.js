// Right of Passage 
// Tic Tac Toe
/*
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8

 Set up gameboard as 1d array
*/
// OOP version -- UI -> Player -> Game -> GameOn - until GameOver -> UI updates -> Game 

class Board {
    constructor() {
        this.board = Array(9).fill(null);
        this.winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
            [0, 4, 8], [2, 4, 6]             // diagonal
        ];
    }

    mark(index, player) {
        if(this.board[index]) return false;
        this.board[index] = player;
        return true;
    }

    checkWinner(player) {
        return this.winningPatterns.some(pattern => 
            pattern.every(index => this.board[index] === player)
        )
    }

    isFull() {
        return this.board.every(card => card !== null);
    }

    reset() {
        this.board.fill(null);
    }
}


class Player {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
}


class Game {
    constructor(board, ui, player1, player2) {
        this.board = board;
        this.ui = ui;
        this.player1 = player1;
        this.player2 = player2;
        this.currPlayer = this.player1;
        this.gameOver = false;

        this.ui.bindClick(this.handleClick.bind(this));
        this.ui.bindReset(this.start.bind(this));
    }

    start() {
        this.board.reset();
        this.ui.reset();
        this.resetGame();
    }

    handleClick(index) {
        if(this.gameOver) return;

        this.board.mark(index, this.currPlayer.mark);
        this.ui.markCard(index, this.currPlayer);
        if(this.board.checkWinner(this.currPlayer.mark)) {
            this.winner = this.currPlayer;
            this.ui.setStatus(`${this.winner.name} wins!`)
            this.ui.disableCard();
        } else if (this.board.isFull()) {
            this.gameOver = true;
            this.winner = null;
            this.ui.setStatus("It's a Draw!")
            this.ui.disableCard();
        } else {
            this.switchPlayer();
            this.ui.setStatus(`${this.currPlayer.name}'s turn`)
        }
    }

    switchPlayer() {
        this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }

    resetGame() {
        this.currPlayer = this.player1;
        this.gameOver = false;
        this.ui.setStatus('Game On!')
    }
}


class UI {
    constructor() {
        this.cards = Array.from(document.querySelectorAll('.card'));
        this.status = document.getElementById('msg');
        this.resetButton = document.getElementById('reset');
    }

    bindClick(callback) {
        this.cards.forEach((card, i) => {
            card.addEventListener('click', () => callback(i));
        });
    }

    bindReset(callback) {
        this.resetButton.addEventListener('click', callback);
    }

    markCard(index, player){
        this.cards[index].innerText = player.mark;
        this.cards[index].style.color = (player.mark === 'O') ? "darkred" : "darkgreen" ;
        this.cards[index].disabled = true; 
    };

    setStatus(message) {
        this.status.textContent = message;
    }

    disableCard() {
        for(let card of this.cards){
        card.disabled = true;
        }
    }

    reset() {
        this.cards.forEach( card => {
            card.innerText = '';
            card.disabled = false;
            this.status.textContent = '';
        });
        
    }
}


const board = new Board();
const player1 = new Player('player1', 'O');
const player2 = new Player('player2', 'X');
const ui = new UI();
const game = new Game(board, ui, player1, player2);

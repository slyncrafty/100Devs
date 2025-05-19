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

let gameBoard = Array(9).fill(null);

const cards = document.querySelectorAll('.card');
const resetButton = document.querySelector('#reset');
const msg = document.querySelector('#msg')
let isPlayer1 = true;


cards.forEach((card, i) => {
    card.setAttribute('data-index', i)
    card.addEventListener('click', (e) => handleClick(e));
})

function handleClick(e) {
    const card = e.target;
    const index = parseInt(card.dataset.index); 
    if(gameBoard[index]) return;
    gameBoard[index] = isPlayer1 ? 'O' : 'X';
    markCard(card);
    checkWinner(index);
}

function markCard(card) {
    let mark = 'O';
    let cardColor = 'darkgreen';
    if(!isPlayer1){
        mark = 'X';
        cardColor = 'red';        
    }
    card.innerText = mark;
    card.style.color = cardColor;
    card.disabled = true;
};

const enableCard = () => {
    for(let card of cards){
        card.disabled = false;
        card.innerText = '';
    }
}

const disableCard = () => {
    for(let card of cards){
        card.disabled = true;
    }
}

const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
    [0, 4, 8], [2, 4, 6]             // diagonal
]
    

function checkWinner(lastMoveIndex) {
    let isWinner = false;
    const mark = gameBoard[lastMoveIndex];
    const patterns = winningPattern.filter(pattern => pattern.includes(lastMoveIndex));
    for (const pattern of patterns) {
        if(pattern.every(i => gameBoard[i] === mark)) {
            isWinner = true;
            displayWinner();
        }
    }
    if(!isWinner && gameBoard.every(cell => cell !== null)) {
        msg.textContent = 'It is a draw!';
        return isWinner;
    }
    isPlayer1 = isPlayer1 ? false : true;
    return isWinner;
}

function displayWinner() {
    const winner = isPlayer1 ? 'Player 1' : 'Player 2';
    msg.textContent = `${winner} won!`;
    disableCard();
}

const resetGame = () => {
    enableCard();
    isPlayer1 = true;
    msg.innerText = '';
    gameBoard = Array(9).fill(null)
}

resetButton.addEventListener('click', resetGame);
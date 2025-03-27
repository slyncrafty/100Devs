// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

// function isQuestion(s) {
//     if(s.match(/\?/g)) return true;
//     return false;
// }
// let sentence = 'this is a sentence?'
// alert(`${sentence}
//        \nIs this a question? : ${isQuestion(sentence)}`);
let sentence = 'this is a sentence?'
alert(sentence.endsWith('?'));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// let description = "A jr. dev is not a junior dev. My job title is jr. dev"
// let swapJobTitle = (s) => s.replace(/jr. dev/g, 'software engineer');
// console.log(swapJobTitle(description));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    const selection = ["rock", "paper", "scissors"];
    return selection[(Math.floor(Math.random() * (2 - 0 + 1) + 0))];
}
console.log(rockPaperScissors());
console.log(rockPaperScissors());
console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let checkWinning = (choice) => {
    const bot = rockPaperScissors();
    console.log(`Battle between user: ${choice} & bot: ${bot}`)
    if((choice === "rock" && bot === 'paper') || (choice === "paper" && bot === "scissors") || choice === "scissors" && bot === "rock" ) return 'Bot won';
    else if((bot === "rock" && choice === 'paper') || (bot === "paper" && choice === "scissors") || bot === "scissors" && choice === "rock" ) return 'User won';
    else return 'It is a draw!';
}
console.log(checkWinning(rockPaperScissors()))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function takesArray(arr) {
    const x = arr.length;
    console.log(`You are playing ${x} rounds .....`)
    for(let i = 0; i < x; i++){
        console.log(`round ${i+1} :`, checkWinning(rockPaperScissors()))
    }
}

const arr = [1, 2, 3, 4, 5];
takesArray(arr);
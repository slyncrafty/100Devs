// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " water ";
favDrink = favDrink.trim();
console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = ["banana", "apple", "kiwi"];
console.log(multipleWords.filter((x) => x === "apple"));
let str = multipleWords.join(" ");
console.log(str.search("apple") > -1 ? "Yes" : "No");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RPS() {
    let x = Math.random();
    return x > 0.66? "rock" : (x < 0.33) ? "paper" : "scissors";
}
for(let i = 0; i < 5; i++){
    console.log(RPS());
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function RPSChoose(choice){
    const bot = RPS();
    console.log(`choice: ${choice}, bot: ${bot}`);
    const winningMatch = {
        "rock" : "scissors",
        "paper" : "rock",
        "scissors" : "paper"
    };
    return winningMatch[choice] === bot ? "You Win" : "Bot Wins";
}
const me = RPS();
console.log(RPSChoose(me));
console.log("-----")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playArrayOfChoices(arrayOfChoices){
    arrayOfChoices.forEach(x => {
        console.log(`playArrayOfChoices: ${RPSChoose(x)}`);
    });
}
let arrayOfChoices = [];
for(let i = 0; i < 5; i++)
{
    arrayOfChoices.push(RPS());
}
playArrayOfChoices(arrayOfChoices);

// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday;
favHoliday = "Christmas".toUpperCase();
console.log( favHoliday );

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str;
str = "google-fu"
alert( str.slice(-3) )
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function take5Subtract100(a,b,c,d,e){
    alert( Math.abs(100 - a - b - c - d - e) );
}
take5Subtract100(5,-10,15,20,100);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function take3(a,b,c){
    console.log( `min value: ${Math.min(a,b,c,)} and max value: ${Math.max(a,b,c)}` );
}
take3(3,5,10);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
//     return Math.random(0,1) < 0.5 ? "heads" : "tails";
// }
const headsOrTails = () => Math.random() < 0.5 ? "heads" : "tails";
console.log( "Heads? or Tails? ", headsOrTails() );

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headsOrTailsLoop(a) {
    for(let i = 0; i < a; i++)
    {
        console.log("Heads? or Tails? ", i, headsOrTails());
    }
}

headsOrTailsLoop(3);
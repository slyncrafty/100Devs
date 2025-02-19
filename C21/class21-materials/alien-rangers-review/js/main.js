//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvArray = ["alien", "rangers", "review", "happy"];
tvArray.forEach(x => console.log(x));

//Create and array of numbers
const numArray = [];
for(let i = 0; i < 5; i++)
{
    numArray.push(Math.floor(Math.random()*50));
}
numArray.forEach(x => console.log( x ));
//Return a new array of numbers that includes every even number from the previous Arrays
const evenArray = [];
numArray.forEach(x => x%2 === 0? evenArray.push(x) : null);
evenArray.forEach(x => console.log(`evenArray: ${x}`));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfSecondLowAndHigh(arr){
    arr = arr.sort((a, b) => a - b);
    let low = arr[1];
    let high = arr[arr.length - 2]
    console.log( low, high, `sum: ${low + high}`);
}
const arrr = [ 123, 23, 23, 434, 22, 1, 3 ]
sumOfSecondLowAndHigh(arrr);
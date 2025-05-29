// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celsius ${ temp = generateRandomNumber()} equals to ${celsiusToFahrenheit(temp)}`)
// console.log(`Celsius 0 equals to ${celsiusToFahrenheit(0)}`)


import getPosts, { getPostsLength } from "./postcontroller.js";

console.log( getPosts() );
console.log( `Posts Length: ${getPostsLength()}` );
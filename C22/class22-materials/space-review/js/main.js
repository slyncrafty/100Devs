//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arrayOfNumbers = new Array(5).fill(Math.random()*10);
let sums = arrayOfNumbers.reduce((sum, curr) => sum + curr);
console.log(`Array: ${arrayOfNumbers} => sum = ${sums.toFixed(2)}`);

console.log(`Array: ${arrayOfNumbers} => sum = ${Math.round((sums + Number.EPSILON) * 100) / 100}`);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredNum(arr){
    return arr.map(x => x*x);
}
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split('').reverse().join('');
}
reverseStr("Welcome!")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeChecker(str){
    return str === str.split('').reverse().join('') ? true : false;
}
console.log(palindromeChecker("aNaBeBaNa"));
console.log(palindromeChecker("hello"));
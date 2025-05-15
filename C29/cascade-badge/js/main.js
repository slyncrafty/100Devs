//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
const pokemonPartyOrder = ['pikachu', 'charmandar', 'bulbasaur', 'squirtle'];
const reversePartyOrder = (arr) => arr.reverse();
console.log( `Reverse them: ${pokemonPartyOrder} => ${reversePartyOrder(pokemonPartyOrder)}` );

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const getSumOfPowers = (array, power) => array.reduce((sum, curr) => sum + curr**(power) ,0);
function compareSumOfSquares (arrayA, arrayB) {
    return getSumOfPowers(arrayA, 2) > getSumOfPowers(arrayB, 3);
}
A = [1, 2, 3, 4, 5];
B = [0, 2, 3, 4, 2];
console.log("Sum of squares of A bigger compared to Sum of Cubes?", compareSumOfSquares(A, B));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multipleOfIndex (arr) {
    if(arr.length < 1) return [];
    return arr.filter( (e, i) => e % i === 0 );
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
const arr = ['1','3',5,7,8];
const addThemUp = (arr) => arr.reduce((sum, curr) => sum + (+curr), 0);

console.log(addThemUp(arr));
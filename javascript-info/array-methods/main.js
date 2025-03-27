/*
https://javascript.info/array-methods
*/

/*
Translate border-left-width to borderLeftWidth
importance: 5

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.
*/
function camelize(str) {
    return str.split('-')
            .map((word, idx) => idx === 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');


/*
Filter range
importance: 4

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/

function filterRange(arr, a, b){
    return arr.filter(elem => (a <= elem && b >= elem));
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)


/*
Filter range "in place"
importance: 4

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/
function filterRangeInPlace(arr, a, b){
    for(let i = arr.length - 1; i >= 0; i--)
        if(a > arr[i] || b < arr[i]){
            arr.splice(i, 1);
        }
}

let arrr = [5, 3, 8, 1];

filterRangeInPlace(arrr, 1, 4); // removed the numbers except from 1 to 4

console.log( arrr ); // [3, 1]


/*
Sort in decreasing order
importance: 4

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/
let arr1 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr1.sort((a,b) => b - a);
console.log( arr1 ); // 8, 5, 2, 1, -10


/*
Copy and sort array
importance: 5

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

function copySorted(arr){
    return arr.slice().sort();
}
let arr2 = ["HTML", "JavaScript", "CSS"];
let arr2Sorted = copySorted(arr2);
console.log( arr2Sorted ); // CSS, HTML, JavaScript
console.log( arr2 ); // HTML, JavaScript, CSS (no changes)
let arr3 = [5, 2, 1, -10, 8];
let arr3Sorted = copySorted(arr3)
console.log(arr3Sorted);
console.log( arr3 ); // 8, 5, 2, 1, -10


/*
Create an extendable calculator
importance: 5

Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

    First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

    Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8

    No parentheses or complex expressions in this task.
    The numbers and the operator are delimited with exactly one space.
    There may be error handling if you’d like to add it.
*/

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b, 
    }

    this.calculate = function (str) {
        let term = str.split(' '),
            a =+ term[0],
            operator = term[1],
            b =+ term[2]
        if(!this.methods[operator] || a === NaN || b === NaN) return NaN;
        return this.methods[operator](a, b)
    };

    this.addMethod = function (op, func){
        this.methods[op] = func;
    }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8


/*
Map to names
importance: 5

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/
//For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
/* ... your code */
let names = users.map((elem) => elem.name);

console.log( names ); // John, Pete, Mary


/*
Map to objects
importance: 5

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
*/
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

/* ... your code ... */
let usersMapped = users1.map((elem) => (
    { fullName: `${elem.name} ${elem.surname}`, id: elem.id }
));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith


/*
Sort users by age
importance: 5

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

*/
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr23 = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr23[0].name); // John
console.log(arr23[1].name); // Mary
console.log(arr23[2].name); // Pete


/*
Shuffle an array
importance: 3

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
*/

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

let arrShuffle = [1, 2, 3];
console.log(shuffle(arrShuffle));
// arr = [3, 2, 1)]
console.log(shuffle(arrShuffle));
// arr = [2, 1, 3)]
console.log(shuffle(arrShuffle));
// arr = [3, 1, 2]
// ...


/*
Get average age
importance: 4

Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/
const getAverageAge = (arr) => arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arrAvgAge = [ john, pete, mary ];

console.log( getAverageAge(arrAvgAge) ); // (25 + 30 + 29) / 3 = 28


/*
Filter unique array members
importance: 4

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
    /* your code */
    let uniqueValues = [];
    for(let word of arr){
        if(!uniqueValues.includes(word))
        {
            uniqueValues.push(word);
        }
    }
    return uniqueValues;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log( unique(strings) ); // Hare, Krishna, :-O


/*
Create keyed object from array
importance: 4

Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.
*/

function groupById(arr){
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersList = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersList);
console.log(usersById);  
/*
// after the call we should have:

usersById = {
john: {id: 'john', name: "John Smith", age: 20},
ann: {id: 'ann', name: "Ann Smith", age: 24},
pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


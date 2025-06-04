/*
https://javascript.info/map-set

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.

*/

let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1'); 
console.log(map)

let john = { name: "John"};
let ben = { name: "Ben"};
let visitCount = {};
visitCount[ben] = 234;
visitCount[john] = 123;
console.log(ben.toString());
console.log(visitCount["[object Object]"]); 

map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1')
console.log(map)

/*
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

    new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    set.add(value) – adds a value, returns the set itself.
    set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    set.has(value) – returns true if the value exists in the set, otherwise false.
    set.clear() – removes everything from the set.
    set.size – is the elements count.

*/
let set = new Set();

let sam = { name: "Sam"};
let bilbo ={ name: "Bilbo"};
let marry = { name: "Marry"};

set.add(sam);
set.add(bilbo);
set.add(sam);
set.add(marry);

console.log( `set size : ${set.size}` );
for(let user of set){
    console.log(user.name);
}
console.log(set)

/* ========== Tasks ========== */
console.log('/* ========== Tasks ========== */')
/*
Filter unique array members
importance: 5

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
P.S. Here strings are used, but can be values of any type.
P.P.S. Use Set to store unique values.
*/
function unique(arr) {
    return Array.from(new Set(arr));
}
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O

/*
Filter anagrams
importance: 4

Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.
*/
function aclean(arr) {
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


/*
Iterable keys
importance: 5

We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?
*/
let map2 = new Map();
map2.set("name", "John");

// let keys = map2.keys(); // Doesn't work. This returns iterable not array
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys)
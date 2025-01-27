// Musketeers
/*
Write a program that:
    Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    Shows each array element using a for loop.
    Adds the "D'Artagnan" value to the array.
    Shows each array element using the forEach() method.
    Remove poor Aramis.
    Shows each array element using a for-of loop.
*/
const musketeers = ['Athos', 'Porthos', 'Aramis'];
for(let i = 0; i < musketeers.length; i++){
    console.log(1, musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(mus => {
    console.log(2, mus);
})
musketeers.pop();
for(const mus of musketeers){
    console.log(3, mus);
}


// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values(42 in that case).
const values = [3, 11, 7, 2, 9, 10];
const sumOfValues = values.reduce((sum, x) => sum + x);
console.log(sumOfValues);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
const maxim = Math.max(...values);
console.log(maxim);

// List of words
let word = [];
while(true){
    let input= prompt("Enter a word (or enter 'stop' to quit)");
    if(input === "stop")    break;
    word.push(input);
}
console.log(word.forEach((x) => console.log(x)));
console.log(word.length);
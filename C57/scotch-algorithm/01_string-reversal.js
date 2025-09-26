// 01_string-reversal


// Chaining in-built methods
const reverseStringChain = (str) => {
    return str.split('').reverse().join('');
}

// Using a For-loop
const reverseStringLoop = (str) => {
    let res = "";
    for(let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// Recursion Method
const reverseStringRecursion = (str) => {
    if(str === '') return '';
    else return reverseStringRecursion(str.substr(1)) + str[0];
}

// Using .reduce()
const reverseStringReduce = (str) => {
    return [...str].reduce((acc, curr) => acc = curr + acc, '');
}

const text = 'Hello World';
try {
    console.log('Chaining:', reverseStringChain(text));
    console.log('Loop:', reverseStringLoop(text));
    console.log('Recursion:', reverseStringRecursion(text));
    console.log('Reduce:', reverseStringReduce(text));
} catch(err) {
    console.error(err);
}
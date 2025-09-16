// Recursion

// Recursion Call stack game
// 1. Push called Fn on stack
// 2. Execute Fn body
// until...
// ... Another Fn is called:
//     Pause the current execution and start at Step 1.
// ... a return is hit:
//     Pop the current Fn off the stack. Resume executing the previous Fn.
//
// D.R.Y.
// 

// 4 steps
// 1. Identify base case(s)
// 2. Identify recursive case(s)
// 3. Return where appropriate
// 4. Write procedures for each case that bring you closer to the base case(s).

const loopNTimes = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log('n ===', n);
    }
    return 'Complete';
};

loopNTimes(3);

const recursionNTimes = (n) => {
    console.log('n ===', n);
    if(n <= 1) {
        return 'Complete';
    } 
    return recursionNTimes(n-1);
}
recursionNTimes(3);


// Wrapper Functions
function wrapperFnLoop(start, end) {
    function recurse(i) {
        console.log(`looping from ${start} until ${end}`);
        if(i < end) {
            recurse(i + 1);
        }
    }
    recurse(start);
}

wrapperFnLoop(1, 3)

function MemoFnLoop(i, end) {
    console.log(`looping from ${i} until ${end}`);
    if(i < end) {
        MemoFnLoop(i + 1, end);
    }
 }

MemoFnLoop(1,3);


// Acculmulators
function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if(index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString );
        }
    }
    return recurse(0, '');
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');

// A version using loop
function joinElementsLoop(array, joinString) {
    let resultSoFar = '';
    for(let i = 0; i < array.length - 1; i++) {
        resultSoFar = resultSoFar + array[i] + joinString;
    }
    return resultSoFar + array[array.length-1];
}

joinElementsLoop(['s','cr','t cod', ' :) :)'], 'e');



// Recursive Factorial & Memoize E
// ~~~~~~~~~~~~~~~
// 1. Write recursive factorial method
function factorialRecursive (n) {
    if(n === 1) return 1;
    return n * factorialRecursive(n-1);
}

factorialRecursive(7)

// 2. Use memo function to memoize the factorial method
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(cache[n]) {
            console.log('Fetching from cache', n);
            return cache[n];
        } else {
            console.log(`Calculating result:`, n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const factorialMemo = memoize((x) => {
    if(x === 1) return 1;
    return x * factorialMemo(x - 1);
})

factorialMemo(7)

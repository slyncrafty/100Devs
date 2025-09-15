// 1. Write a function,times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => { return n*10 };

console.log('~~~~~~~~~ 1 ~~~~~~~~~');
console.log('times10 returns:', times10(9)); 

// 2. Use an object to cache the results of your times10 function
// protip 1: create a function that checks if the value for n has been calculated before
// protip 2: if the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};
const memoTimes10 = (n) => {
    if(!cache[n]){
        cache[n] = times10(n);
    } 
    return cache[n];
}

console.log('~~~~~~~~~ 2 ~~~~~~~~~');
console.log('memoTimes10 returns:', memoTimes10(9));

// 3. Clean up the global scope by moving the cache inside the function.
// protip: use a closure to return a function that you can call later.
const memoizedClosureTimes10 = () => {
    const cache = {};
    function memoTimes10(n) {
        if(!cache[n]) {
            cache[n] = n * 10;
            console.log("Calculated value stored")
        }
        return cache[n];
    }
    return (n) => memoTimes10(n);
}

const memoClosureTimes10s = memoizedClosureTimes10();
console.log('~~~~~~~~~ 3 ~~~~~~~~~');
try {
    console.log('Caclulated Value:', memoClosureTimes10s(9)); // calculated
    console.log('Cached value:', memoClosureTimes10s(9)) // cached
} catch (err) {
    console.error('Task 3:', err);
} 


const memoizedClosureTimesM = (m) => {
    const cache = {};
    function memoTimes10(n) {
        if(!cache[n]) {
            cache[n] = n * m;
            console.log("Calculated value stored")
        }
        return cache[n];
    }
    return (n) => memoTimes10(n);
}
// everytime you call function, you create a new execution environment
const memoClosureTimes10 = memoizedClosureTimesM(10);
const memoClosureTimes5 = memoizedClosureTimesM(5);
console.log('~~~~~~~~~ 3 ~~~~~~~~~');
try {
    console.log('Caclulated Value:', memoClosureTimes10(9)); // calculated
    console.log('Cached value:', memoClosureTimes10(9)) // cached
} catch (err) {
    console.error('Task 3:', err);
} 
try {
    console.log('Caclulated Value:', memoClosureTimes5(9)); // calculated
    console.log('Cached value:', memoClosureTimes5(9)) // cached
} catch (err) {
    console.error('Task 3:', err);
} 


// 4. Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope
// protip : Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const memoize = (cb) => {
    const cache = {};
    return (n) => {
        if(!cache[n]) {
            cache[n] = cb(n);
            console.log("Calculated value stored");
        }
        return cache[n];
    }
}

// returned function from memoizedAdd
const cb = (n) => { return n*10 };
const memoizedTimes10 = memoize(cb);
console.log('~~~~~~~~~ 4 ~~~~~~~~~');
try {
    console.log('Calculated value:', memoizedTimes10(9));
    console.log('Cached value:', memoizedTimes10(9));
} catch(err) {
    console.error(err);
}
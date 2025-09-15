// memoization
// caching the value that a function returns

const factorial = (n) => {
    // Calculate: n * (n-1) * (n-2) * ... * (2) * (1)
    if(n === 1) return 1;
    return n * factorial(n-1);
}

factorial(5); // 120
factorial(35);
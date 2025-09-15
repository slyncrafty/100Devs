// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array

// input: [1, 5, 2, 1] => output: [1, 2, 5]
// input: [4, 2, 2, 3, 2, 2, 2] => output: [2, 3, 4]

// this method has some trade off time-space complexity.
// reduces time complexity from quadratic to linear but creating new array and breadcrumb object
// + .sort() generally considered O(nlogn)
const uniqSort = function(arr) {
    const breadCrumbs = {};
    const res = [];

    for(const elem of arr) {
        if(!breadCrumbs[elem]) {
            res.push(elem);
            breadCrumbs[elem] = true;
        }
    }    
    return res.sort((a,b) => a - b);
}

uniqSort([4, 2, 2, 3, 2, 2, 2, 4])  // [2, 3, 4]
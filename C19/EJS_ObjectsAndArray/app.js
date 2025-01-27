// Exercises
// The sum of a range
function range(start, end){
    const res = [];
    for(let i = start; i <= end; i++)
    {
      res.push(i);
    }
    return res;
  }
  
  function sum(array){
    let _sum = 0;
    for (let ele of array)
    {
      _sum += ele;
    }
    return _sum;
  }
  
  console.log(range(1,10));
  console.log(sum(range(1, 10)));
  
  function rangeStep(start, end, step){
    const array = [];
    if(step < 0)  
    {
      for(let i = start; i >= end; i+=step)
      {
        array.push(i);
      }
    }
    else
    {
      for(let i = start; i <= end; i+=step)
      {
        array.push(i);
      }
    }
    return array;
  }
  
  console.log(rangeStep(5, 2, -1));
  
  // Reversing An Array
  function reverseArray(arr){
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  function reverseArrayInPlace(arr){
    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--)
    {
      let temp = arr[i]
      arr[i] = arr[arr.length -1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  // → ["C", "B", "A"];
  console.log(myArray);
  // → ["A", "B", "C"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  
  
  // A List
  function arrayToList(arr){
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--)
    {
      list = { value: arr[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list){
    let arr = [];
    while(list)
    {
      arr.push(list.value);
      list = list.rest;
    }
    return arr;
  }
  
  function prepend(element, list){
    return {value: element, rest: list}
  }
  
  function nth(list, pos){
    if(!list) return undefined;
    if(pos === 0) return list.value;
    return nth(list.rest, pos-1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  
  
  // Deep comparision
  function deepEqual(left, right){
    
    return true;
  }
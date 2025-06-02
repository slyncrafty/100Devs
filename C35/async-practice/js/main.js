//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

//Code 02
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout(() => console.log('Paper delivered to house 2'), 3000) // setTimeout() is handed off to browser and JV moves on. So even if we change the timeout to 0 instead of 3000, it will still console log 'Paper delivered to house 3' before 'Paper delivered to house 2' due to EVENT LOOP
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

// Scenario: it is a pay day and I only want to move onto the third house after the second house has paid me. 
// Real world this would be getting data back from an API, etc...
// Old school way to do this: Callbacks
// You can have a function that takes another function as an argument. We call that a higher order function.
// A callback is the function that has been passed as an argument. Callbacks are not really "a thing" in JS just a convention.
// ex) addEventListener('click', callback); this is a higher order function.
//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)

// Callback fries when async task or other functions are done
// nested callbacks / callback hell -- it works but hard to read.
//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

// More readable way to handle async code === Promise
//Code 05
// const promise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve('Promise has been fullfilled')
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data)) // fires if !error
//     .catch(err => console.log(err))  // fires if error

// Pickup payments for all the customers but this time better code.
// Each of the following houses is a Promise.
//Code 06
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// `data` comes from resolve(`strings`) from above functions
// .then() function fires in order.
// The Code 06 above is better. Using a promise chain rather than callback hell.
// But it can be improved.

// A way to handle async responses
// Promises under the hood -- syntactic sugar

//Code 07
// Bit more close to how JS looks
// A way to handle async responses: async / await
// the functions are the same. We use async function to execute
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }

// getPaid();

//Code 08
async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random1')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}
getACuteDogPhoto();

/*
** https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises
*/

// const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

/*
// Using the fetch() API
// Calling the fetch() API, and assigning the return value to the fetchPromise var
const fetchPromise = fetch(
    url,
);

// Immediately logging expected console log : Promise { <state>: "pending" }
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request...");

// expected output:
// Promise { <state>: "pending" }
// Started request…
// Received response: 200


// fetch returns while the request is still going on, enabling our program to stay responsive.

*/



// Chaining promises
// With the fetch() API, once you get a Response object, you need to call another function to get the response data. 
// const fetchPromise = fetch(
//     url, 
// );

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     });
// });



// Better way of writing the above using promise chaining
// fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[0].name);
//     });


// Check Server
// fetchPromise 
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].name);
//     });

// Handle Error using catch()

// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// fetchPromise
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error (`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].name);
//     })
//     .catch((error) => {
//         console.error(`Could not get products: ${error}`);
//     });

// Running the code above produce an error log by catch() handler
// Could not get products: TypeError: NetworkError when attempting to fetch resource. ... 



// Promise.all()
// 1 all request fullfilled

// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );

// const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         for(const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`);
//     });

    // 2 Bad request
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for(const response of responses){
            console.log(`${responses.url}: ${responses.status}`);
        }  
    })
    .catch((error) => {
        console.log(`Failed to fetch: ${error}`);
    })
// Fails to fetch and .catch logs error
// We get error Failed to fetch: TypeError: NetworkError when attempting to fetch resource.


// async and await
// async functions -- always return a promise

const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

// async function fetchProducts() {
//     try {
//         const response = await fetch(
//             url,
//         );
//         if(!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data[0].name);
//     } catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
// }

// fetchProducts();


// 
async function fetchProduct() {
    const response =await fetch(
        url,
    );
    if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

const promise = fetchProducts();
promise
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    })

// you can only use await inside an async function, unless your code is in a js module.
// You can't the following in a normal script:
try{
    const response = await fetch(
        url,
    );
    if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
    }   catch (error) {
        console.error(`Could not et products: ${error}`);
        throw error;
    }
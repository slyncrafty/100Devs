/*
// Defining object with object literal 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2,
    },
    draw: function() {
        console.log("Draw");
    }
};
// circle.draw();

// Factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw')
        }
    };
}

const circle2 = createCircle(1);
// circle2.draw();


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(`Draw radius ${this.radius} circle`);
    }
}

// anotherCircle.draw();

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log("Draw radius", this.radius, "circle");
//     }
//     `);

// const newCircle = new Circle1(1);

// Circle.call({}, 1);
// Circle.apply({}, [1,2,3]);
const anotherCircle = new Circle(2);

///// Functions are also objects 


///// Primitives are copied by their value
///// Objects are copied by their refernce
let x = 10;
let y = x;
x = 20;

let arr = [1, 2, 3];
let arr2 = arr;
arr = [3, 4, 5];

// Object = reference
// obj and obj2 point to thw same memory
let obj = { value: 10 };
let obj2 = obj;
obj.value = 20; 


///// Scope of variable /////
let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);

let objNumber = { value: 10 };
function increaseVal(number){
    number.value++;
}
increaseVal(objNumber);
console.log(objNumber);



///// Adding/Removing Properties /////
const circleOne = new Circle(10);

// user.token = 'asdsdsa'
circleOne.location = { x: 1 };

// bracket notation use cases:
// 1.
const propertyName = 'location'; // set at runtime so we can't do circle.location 
// but we can use the bracket notation
circleOne[propertyName] = { x: 2 };
// 2. When property name contains `-` i.e. center-location we cant' use circleOne.center-location

// Dynamically delete one or more properties
delete circleOne.location;


///// Enumerating Properties ///
for(let key in circleOne) {
    if (typeof circleOne[key] !== 'function')
    console.log(key, circleOne[key]);
}

const keys = Object.keys(circleOne);
console.log(keys);

if ('radius' in circleOne){
    console.log('Circle has a radius');
}

*/

/*
///// Abstraction /////
///// Hide the details & only Show essentials 
///// Private properties and methods
///// Getter/Setter
function Circle(radius) {
    this.radius = radius;

    // local variables / methods within the function
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function() {
        // ...
    }

    // this.getDefaultLocation = function() {
    //     return defaultLocation;
    // }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
          return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y){
                throw new Error('Invalid location.');
            }
            defaultLocation = value;
        }
    });

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('Draw');
    }
}

const circle = new Circle(10);
circle.defaultLocation = {x:1, y:1};


*/

///// Exercise: Stopwatch /////
function Stopwatch(){
    let startTime = null, stopTime = null, running = false, duration = 0;

    this.start = function () {
        if(running) {
            throw new Error('Watch is already running');
        }

        running = true;
        startTime = new Date().getTime();
        console.log(`set: ${startTime}`)
        
    }

    this.stop = function () {
        if(!running){
            throw new Error('Watch is not running');
        }

        running = false;
        stopTime = new Date().getTime();
        console.log(`set: ${stopTime}`)
        duration += (stopTime - startTime) / 1000;
        
    }

    this.reset = function () {
        startTime = null; 
        stopTime = null;
        running = false; 
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            console.log(duration);
        }
    })
}

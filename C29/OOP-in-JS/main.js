// Object Literal
const circle = {
    radius: 1,
    location: {
        x: 1, 
        y: 2,
    },
    draw: function(){
        console.log('draw')
    }
}

circle.draw();

// Factory Function
function createCircle(radius, x, y ){
    return {
        radius: radius,
        location: {
            x: x, 
            y: y,
        },
        draw: function() {
            console.log('draw'+ ' by factory');
        }
    };
}

const circleFactory = createCircle(1, 1, 2);
circleFactory.draw();

// Constructor Function
function Circle(radius, x, y){
    this.radius = radius;
    this.location = { x: x, y: y};
    this.draw = function () {
        console.log('draw' + ' by Constructor');
    }
}
const circleConstructor = new Circle(1, 1, 2);
circleConstructor.draw();


// Object Literals
/*
Every object has constructor property, that references the function that was used to create the object.
let x = {};
let x = new Object();

new String() // '', "", `` 
new Boolean() // true, false
new Number() // 1, 2, 3 etc

*/

// Functions as Objects
// function Circle(radius, x, y){
//     this.radius = radius;
//     this.location = { x: x, y: y};
//     this.draw = function () {
//         console.log('draw' + ' by Constructor');
//     }
// }
// Circle function is an object
Circle.name;
Circle.length;

// Below defines the same Circle but with function object constructor
const Circle1 = new Function('radius', 'x', 'y', `
this.radius = radius;
this.draw = function() {
    console.log('draw' + ' by Constructor');
}
`);

const circle1Obj = new Circle1(1, 1, 2);
circle1Obj.draw();

// Value and Reference Types
// Value types(primitives): Number, String, boolean, symbol, undefined, null
// Reference types: Object, function, Array
// Primitives are copied by their value
// Objects are copied by their reference
console.log("Value and Reference Types:")
let number = 10;
const increase = (num) => num++;
increase(number);
console.log(number);  // prints 10 

let numberObj = { value: 10};
const increaseObj = (num) => num.value++;
increaseObj(numberObj);
console.log(numberObj);  // prints value: 11

// Adding or Removing Properties
// Circle() defined constructor function above and object circleConstructor
console.log(circleConstructor.location);
circleConstructor.location = { z:1 }; // this overrides existing location: {x:..., y:...}
// You can also use bracket notation
console.log(circleConstructor['location']);
console.log(circleConstructor.location);

const propertyName = 'main location';
circleConstructor[propertyName] = { 'x_x': 1};
console.log(circleConstructor[propertyName])

delete circleConstructor[propertyName];


// Enumerating Properties
const circleEnumerate = new Circle(10, 10, 20);
console.log("Enumerating Properties:")
for(let key in circleEnumerate){
    if(typeof circleEnumerate[key] !== 'function')
    console.log(key, circleEnumerate[key]);
}

const keys = Object.keys(circleEnumerate);
console.log(keys);
// in operator to check existence of property or function
if ('radius' in circleEnumerate)
    console.log('Circle has a radius');


// Abstraction: Hide the details, show only essentials
// function Circle2(radius) {
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y:0 };
//     this.computeOptimumLocation = function(factor) {
//         //...
//     }
//     this.draw = function() {
//         this.computeOptimumLocation(0.1);
//         console.log("draw");
//     };
// }

// const circle2 = new Circle2(10);
// circle2.draw();



// Private Properties and Methods
// Scope and Closure
// function Circle2(radius) {
//     let factor = 0.1;
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y:0 };
//     let computeOptimumLocation = function(factor) {
//         //...
//         console.log(`compute optimum location ${factor}`)
//     }
//     this.draw = function() {
//         computeOptimumLocation(factor);
//         console.log("draw");
//     };
// }

// const circle2 = new Circle2(10);
// circle2.draw();


// Getters and Setters
// To get private variables and functions
function Circle2(radius) {
    let factor = 0.1;
    this.radius = radius;
    let defaultLocation = { x: 0, y:0 };
    // this.getDefaultLocation = function() {
    //     return this.defaultLocation;
    // }
    this.draw = function() {
        console.log("draw");
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}

const circle2 = new Circle2(10);
circle2.draw();
// console.log(circle2.getDefaultLocation());
console.log(circle2.defaultLocation);
circle2.defaultLocation = {x:1, y:2};
console.log(circle2.defaultLocation);
// circle2.defaultLocation = 2; // throws error

// function Circle3(radius, x, y, color) {
//     Circle.call(this, radius, x, y);
//     this.color = color;
//     this.paint = function(){
//         console.log(`Painting circle to ${this.color}`);
//     }
// }

// const newCircle = new Circle3(20,30,30,'blue');
// newCircle.draw();
// newCircle.paint();

// Exercise: Stopwatch object
function Stopwatch() {
    let duration = 0;
    let startT = 0;
    let endT = 0;
    let runningState = false;
    this.start = function() {
        if(runningState) {
            console.log('clock already running');
            return;
        }
        duration = 0;
        let time = new Date();
        startT = time.getTime();
        runningState = true;
    }
    this.stop = function () {
        if(runningState) {
            let time = new Date();
            endT = time.getTime();
            duration = (endT - startT) / 1000;
            runningState = false;            
            this.showDuration();
        }
        else console.log("clock wasn't running")
    }
    this.showDuration = function() {
        console.log(`${duration} seconds`);
    }
    this.reset = function () {
        duration = 0;
        starT = 0;
        endT = 0;
        runningState = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    })
}
const sw = new Stopwatch();

console.log(sw.duration);
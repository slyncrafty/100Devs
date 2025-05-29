import { EventEmitter } from 'events';

const myEmitter =new EventEmitter();

function greetHandler(name) {
    console.log('Hello World, Hello ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye World, Goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
// myEmitter.emit('greet');
// myEmitter.emit('goodbye');

myEmitter.emit('greet', 'Jane');
myEmitter.emit('goodbye', 'Jane');

//Error handling
myEmitter.on('error', (err) => {
    console.log('an error occured: ', err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong!'));
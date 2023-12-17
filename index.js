// Events Module
// it allows us to create, fire, and listen for our own events in Node.js
// is a class that has methods and properties that we can access and use in our code
// using this we can create our own custom events and respond to them in a non blocking way

import EventEmitter from 'events';

// create an instance of the EventEmitter class
// Returns true if the event had listeners, false otherwise.
const emitter = new EventEmitter();

// register a listener
// createdEventEmitterInstance.on(eventName: string | symbol, listener: (...args: any[]) => void): EventEmitter
// Adds the listener function to the end of the listeners array for the event named eventName.
// checks are made to see if the listener has already been added. Multiple calls passing the 
// same combination of eventName and listener will result in the listener being added, and called, 
// multiple times.

// add a listener
emitter.on('order-pizza', (size, topping) =>
    console.log(`Order received, Your ${size} pizza with ${topping} is on the way !`));

// add another listener (can add multiple listeners)
emitter.on('order-pizza', size => size === 'large' && console.log('Serving complimentary Drink !'));

// raise an event
// createdEventEmitterInstance.emit(eventName: string | symbol, ...args: any[]): boolean
emitter.emit('order-pizza', "large", "mushrooms");

/*
    Important - first create the listeners
    then create the event to be emitted
    also the order of listeners is important, it will get executed synchronously from top to bottom
*/
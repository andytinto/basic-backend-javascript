const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (coffeeName) => {
  console.log(`Kopi ${coffeeName} sudah siap!`);
}; 

myEventEmitter.on('coffee-order', makeCoffee);

// Memicu event 'coffe-order' dengan argumen 'Tubruk'
myEventEmitter.emit('coffee-order', 'Tubruk');

/*
Output:
Kopi Tubruk sudah siap!
*/
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
  console.log(`Kopi ${name} sudah siap!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar Rp ${price} sudah dibuat!`);
};

const onCoffeeOrderListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on('coffee-order', onCoffeeOrderListener);

myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

/*
Output:
Kopi Tubruk sudah siap!
Bill sebesar Rp 15000 sudah dibuat!
*/
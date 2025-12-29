/*

// TODO 1 : Buat atau impor variabel EventEmitter dari core module events
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
 
// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
 
// TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.

*/

// TODO 1 : Buat atau impor variabel EventEmitter dari core module events
const { EventEmitter } = require('events');

// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
const myEmitter = new EventEmitter();

// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

// Register the listener for the 'birthday' event
myEmitter.on('birthday', birthdayEventListener);

// TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEmitter.emit('birthday', 'John');
/*

const _ = // TODO: require('lodash');

const myOddEvenArray = _.partition([1, 2, 3, 4, 5], (n) => n % 2 === 0);

console.log(myOddEvenArray);

Tugas:
1. Pasang package lodash pada proyek nodejs-basic.
2. Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.

*/

const _ = require('../nodejs-basic/node_modules/lodash'); // Not recommended way to require lodash from another project, just for learn

const myOddEvenArray = _.partition([1, 2, 3, 4, 5], (n) => n % 2 === 0);

console.log(myOddEvenArray);
// TODO : tampilkan teks pada notes.txt menggunakan module fs dan method readFileSync pada console.

const fs = require('fs');
const notes = fs.readFileSync('notes.txt', 'utf8');
console.log(notes);
// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes de fs

console.log('Leyendo primer archivo');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('texto del primer archivo: ', text);
}); // readFile acepta como tercer parametro un callBack
console.log('Cosas mientras lee primer archivo...');

console.log('Leyendo segundo archivo..');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('texto del segundo archivo: ',text);
}); // readFile acepta como tercer parametro un callBack


// esta es la forma asincrona de leear un archivo.
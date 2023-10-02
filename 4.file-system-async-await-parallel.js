// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

/**
 * las promesas en paralelo es mas rapido porque se hacen dos trabajos en paralelo.
 * 
 */

const { readFile } = require('node:fs/promises');

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8',)
]).then(([text, secondText]) => {
    console.log('primer texto ', text);
    console.log('segundo texto ', secondText);
});

// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

/*const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes de fs

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
*/

// nosejs tiene una forma de hacer esto con promesas, de forma que ya no es necesario utilizar callbacks

const fs = require('node:fs/promises'); // a partir de Node 16, se recomienda poner node: antes de fs

console.log('Leyendo primer archivo');
fs.readFile('./archivo.txt', 'utf-8') //readFile acepta como tercer parametro un callBack
    .then( text => {
        console.log('Primer texto ', text);
    })

console.log('Cosas mientras lee primer archivo...');

console.log('Leyendo segundo archivo..');
fs.readFile('./archivo2.txt', 'utf-8',) // readFile acepta como tercer parametro un callBack
    .then( text => {
        console.log('Segundo texto ', text);
    })

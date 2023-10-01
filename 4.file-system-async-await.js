// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

/*esto sólo en los módulos nativos que no tienen promesas nativas
const {promisify} = require('node:util');
const readFilePromise = promisify(fs.readFile);*/


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

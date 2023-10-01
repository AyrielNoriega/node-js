// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

/*esto sólo en los módulos nativos que no tienen promesas nativas
const {promisify} = require('node:util');
const readFilePromise = promisify(fs.readFile);*/


import {readFile} from 'node:fs/promises';

console.log('Leyendo primer archivo');
const text = await readFile('./archivo.txt', 'utf-8');
console.log('Primer texto ', text);
console.log('---->Cosas mientras lee primer archivo...');

console.log('Leyendo segundo archivo..');
const text2 = await readFile('./archivo2.txt', 'utf-8',)
console.log('Segundo texto ', text2);

/**
 * los ECMASCRIPT modules tienen el soporte de utilizar el await en el cuerdo 
 * del archivo (top level await); en CommonJS no lo puedes hacer y en ECMAScript module
 * si lo puedes hacer
 */
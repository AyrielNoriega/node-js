// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes de fs

const text = fs.readFileSync('./archivo.txt', 'utf-8'); //nos devuelve toda la info del archivo, codificada con utf-8

console.log(text);

const text2 = fs.readFileSync('./archivo2.txt', 'utf-8'); //nos devuelve toda la info del archivo, codificada con utf-8

console.log(text2);

// esta es la forma sincrona de leear un archivo.
// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes de fs

const stats = fs.statSync('./archivo.txt'); //nos devuelve toda la info del archivo o directorio.

console.log(
    stats.isFile(),         // si es un archivo
    stats.isDirectory(),    // si es un directorio
    stats.isSymbolicLink(), // si es un link simbolico
    stats.size,             //  tamano en bytes
);
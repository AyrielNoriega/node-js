//dsde la version 16 de nodejs ya no es recomendable utilizar el nombre del modulo nativo.
// sino, utilizarlo asi

const os = require('node:os'); // os nos da informacion de nuestro sistema operativo

console.log('información del sistema operativo');
console.log('-----------------------------');
console.log('Nombre del sisema operativo ', os.platform());
console.log('Versión del sisema operativo ', os.release());
console.log('Arquitectura del sisema operativo ', os.arch());
console.log('CPUs del sisema operativo ', os.cpus());
console.log('Memoria libra del sisema operativo ', os.freemem() / 1024 / 1024);
console.log('Memoria total del sisema operativo ', os.totalmem() / 1024 / 1024);
console.log('Uptime', os.uptime() / 60 / 60); //cuanto dias lleva el compu encendido
// el file system es uno de los modulos mas importantes de nodejs, no paras de utilizarlo todos los dias.

/**
 * para hacer uso del awati en .js tan como en .mjs podemos hacer una funcion
 * auto invocada. 
 */

const {readFile} = require('node:fs/promises');

// IIFE - Inmediatly Invoked Function Expression
(
    async () => {
        console.log('Leyendo primer archivo');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log('Primer texto ', text);
        console.log('---->Cosas mientras lee primer archivo...');

        console.log('Leyendo segundo archivo..');
        const text2 = await readFile('./archivo2.txt', 'utf-8',)
        console.log('Segundo texto ', text2);
    }
)();

/**
 * lo anterior se puede reescribir como sigue, es lo mismo; lo que se hace es
 * crear la funcion y ejecutarla después.
 */

async function init () {
    console.log('Leyendo primer archivo');
    const text = await readFile('./archivo.txt', 'utf-8');
    console.log('Primer texto ', text);
    console.log('---->Cosas mientras lee primer archivo...');

    console.log('Leyendo segundo archivo..');
    const text2 = await readFile('./archivo2.txt', 'utf-8',)
    console.log('Segundo texto ', text2);
}

init();

// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules, y la forma recomendada al dia de hoy; Esto se puede configurar mejor en el package.json para que no sea necesario modificar la extension a .mjs, sino utilizar .js
// .cjs -> para utilizar CommonJS

import { sum } from './sum.mjs';   // en la especificacion de ECMASCRIPT MODULES las extencoines son obligatorias, al momento de importar; webpack o vite hace un poco de magia si no colocas la extension.

console.log(sum(1, 2));

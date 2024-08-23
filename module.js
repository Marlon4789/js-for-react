import { add, address, multiplicar, user } from "./add.js";

// Por default
import addModule from "./add.js";

console.log(add(14,6))
console.log(multiplicar(4,10))

const fullInfo = {
    ...user,
    ...address
}

console.log(fullInfo)

// Importar por default
console.log(addModule)
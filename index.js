// Las bases de la programación funcional:
// las funciones que retornan otras funciones.

// function hello(){
//     return function(){
//         return 'Hola gente!!!'
//     }
// }

// console.log(hello()())

// Parametros de funciones

// function suma(x, y=0){
//     return y + x
// }

// console.log(suma(8, 6))
// console.log(suma(3))

// Objetos
/*
const user = {
    // Propiedades
    name:'Toby',
    lastname:'Perez',
    age:45,
    address: {
        country:'colombia',
        city:'Bogota',
    },
    active: true,

    // Metodos
    sendEmail(){
        return "Sending email...";
    },
};

console.log(user.name);
console.log(user.address.country);
console.log(user.sendEmail());

*/

// Shorthand property name
/*
const name = 'laptop'
const price = 766

const newProduct = {
    name,
    price
}

console.log(newProduct);
*/

// MANIPULACIÓN DEL DOM
/*
// crear elementos html
const title = document.createElement('h1')
title.innerText = 'Hola mundo desde js'

const button = document.createElement('button')
button.innerText = 'click'

// Crear eventos
button.addEventListener('click', function(){
    title.innerText = 'Texto actualizado con JS'
    alert('Se realizo un click')
})

document.body.append(title)
document.body.append(button)

*/

// OBJETOS COMO PARAMETROS
/*
const user = {
    name: 'may',
    age: 45 
}

function printInfo(user){
    return '<h1>Hola ' + user.name + ', su edad es ' + user.age + '?<h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)
*/

// DESTRUCTURING DE OBJETOS
/*
const user = {
    name: 'may',
    age: 45 
}

function printInfo(user){
    const {name, age} = user;
    console.log(name, age)
    
    return '<h1>Hola ' + name + ', su edad es ' + user.age + '?<h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)
*/

// FUNCIONES ANONIMAS
/*
const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', function(){
    alert('clicked')
})

document.body.append(button)
*/

// ARROW FUNCTION
/*
function add(x, y){
    return x + y
}

const add = (x, y) => {
    return x + y
}

const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)
*/

// INLINE ARROW FUNCTION
/*
const showText = () => 'HOLA MUNDO'
const showNumber = () => 78
const showBoolean = () => true
const showArray = () => [1,2,3]
const showObject = () => ({name:'pepe'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())
*/
// RETURN IN FUNCTION
/*
const button = document.createElement('button')
button.innerText = 'click me'

const isAuthorized = false

button.addEventListener('click', () => {
    if(isAuthorized){
        return alert('esta autorizado')
    }
    alert('No esta autorizado')
})

document.body.append(button)
*/

// STRING LITERALS
/*
const background = 'yellow'
const color = 'black'
const isAuthorized = false;

const button = document.createElement('button')
button.innerText = 'click me'

button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color};`

button.addEventListener('click', () => {
    if(isAuthorized){
        return alert('esta autorizado')
    }
    alert('No esta autorizado')
})

document.body.append(button)
*/

// METODOS DE ARRAYS

const names = ['toby', 'lucas', 'dina']

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element) 
// }

// forEach => rcorrer los valores del array
// names.forEach(function(name){
//     console.log(name)
// })

// map => recorre y el array y crea un array nuevo
// const newNames = names.map(function(name){
//     return `Hola ${name}`
// })
// console.log(newNames)

// find => recorrer un array y buscar un elemento y añdir condicion
// const newFind = names.find(function(name){
//     if(name == 'dina'){
//         return name
//     }
// })
// console.log(newFind)

// filter => crea un nuevo array apartir de los elementos filtrados
// const newFilter = names.filter(function(name){
//     if (name != 'dina') {
//         return name
//     }
// })

// console.log(newFilter)

// concat => une los elementos de dos arrays y los concatena y crea uno nuevo array.

// const names2 = ['toby', 'lucas', 'dina']
// const names3 = ['sara', 'pepe', 'nina']

// console.log(names2.concat(names3))

// SPREAT OPERATOR => cpncatena los elementos de un array con otro y
// crea un nuevo array, y tambien con objetos.
/*
const names2 = ['toby', 'lucas', 'dina']
const names3 = ['sara', 'pepe', 'nina']

console.log(...names2, ...names3)

const user = {
    name: 'may',
    lastname: 'zore',
}

const address = {
    country: 'colombia',
    city: 'cali',
}
// generar un objeto nuevo

const userInfo = {
    ...user,
    ...address,
}

console.log(userInfo)
*/



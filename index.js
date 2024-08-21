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
const background = 'yellow'
const color = 'black'
const isAuthorized = true;

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
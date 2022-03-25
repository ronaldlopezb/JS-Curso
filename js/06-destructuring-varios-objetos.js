//Destructuring de 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Ronald",
    premium: false
}

//Destructuring al objeto producto
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)

console.log(nombre, nombreCliente, precio, premium, disponible)

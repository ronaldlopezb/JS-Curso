//Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

//Sintaxys de Punto
console.log("--- Sintaxis de punto ---")
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring: Desestructurar
console.log("--- Destructuring ---")
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
console.log("--- Object Literal Enhacement ---")
const autenticado = true
const usuario = "Ronald"

const nuevoObjecto = {
    autenticado: autenticado,
    usuario: usuario
}
console.table(nuevoObjecto)
//Unir 2 objetos o más

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Ronald",
    premium: false
}

//Creamos un nuevo objeto que no modifique a los objetos originales
//const nuevoObjeto = Object.assign(producto, cliente) NO

//const nuevoObjeto2 = {...producto, ...cliente}
const nuevoObjeto2 = {
    producto:{...producto},
    cliente:{...cliente}
}
console.log(nuevoObjeto2)
//console.log(cliente)
//console.log(producto)
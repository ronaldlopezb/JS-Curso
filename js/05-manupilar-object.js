//Manipular Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Editar que alguien pueda editar mi objeto
Object.freeze(producto)

//Cambiado datos
producto.nombre = "Monitor curvo"

//Agregar Nueva propiedad: basta con agregar una propiedad que no exista
producto.imagen = "imagen.jpg"

//Eliminar Propiedad
delete producto.disponible






console.table(producto)
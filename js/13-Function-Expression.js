// Funciones - Function Expression

//Las function expression no pueden llamarse lineas antes de crearlas.

const sumar = function(numero = 0, numero2 = 0) {
    console.log( numero + numero2 )
}

sumar(10, 20)

//Igual funciona con RETURN

const restar = function (numero = 0, numero2 = 0) {
    return numero - numero2
}

const resultado = restar(50,10)
console.log (resultado)

//Funciones - arrow functions
//solo puedes usar arrow functions en functions Expression

//const sumar = function () {
//    console.log( numero + numero2 )
//}

console.log('---- Arrow function  con console.log')
const sumar = (numero = 0, numero2 = 0) => {
    console.log( numero + numero2 )
}
sumar(10,11)

///////////////////
console.log('---- Arrow function  con Return')

const sumar2 = (numero = 0, numero2 = 0) => {
    return numero + numero2
}

const resultado = sumar2(11,11)
console.log(resultado)

//NOTA: los arrow function pueden devolver dentro de return.. muchas lineas de código.

//PERO: si solo devuelve una única línea de codigo puede reducirse el codigo

///////////////////
console.log('---- Arrow function de 1 línea')

const sumar3 = (numero = 0, numero2 = 0) => numero + numero2 //se eliminó el return y las llaves

const respuesta = sumar3(22,23)
console.log(respuesta)


//PERO: si solo pasa 1 parámetro

///////////////////
console.log('---- Arrow function de 1 línea pasándo 1 solo parámetro')

const sumar4 = numero => numero + 15 //se eliminó el return, las llaves, y los parentesis de los parámetros

const respuestafinal = sumar4(22)
console.log(respuestafinal)

///////////////////
console.log('---- Arrow function de 1 línea sin parámetros')
const sumarArrow = () =>  2 + 2
const resultadofinal02 = sumarArrow()
console.log(resultadofinal02)
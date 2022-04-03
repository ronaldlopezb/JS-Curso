// Funciones - Function Delaration

function sumarNumeros() {
    console.log( 2 + 2 )
}

//sumarNumeros() //asi llamas a la función
//Las funciones puedes estar antes de se creadas.. existe el hoisting que primero lee las funciones y luego las manda a llamar

//Funciones con parámetros
function sumar(numero=0, numero2 = 0){
    console.log(numero)
    console.log(numero2)
    console.log (numero + numero2)
}

sumar(5, 10)
sumar(100, 500)
console.log(19) //aquí usa el parámetro por defecto de numero2=0
sumar()// aquí usa ambos parámetros por defecto = 0

///////////////////
console.log ("----FUNCTION QUE RETORNA VALORES CON RETURN")

//Funciones que retornan valores
function sumarValores(numero = 0, numero2 = 0) {
    return numero + numero2
}
sumarValores(30, 50) //esto no mostrará nada ya que el return necesita que sea depositado en algo, en este caso una variable const
const resultado = sumarValores(30, 50)// Aquí la variables "resultado" contiene el valor que devuelve la función
console.log(resultado) // aquí mostramos "resultado"



///////////////////
console.log ("----FUNCTION QUE RETORNA VARIOS VALORES AL MISMO TIEMPO")

//Funciones que retornan varios valores
function sumarValores2(numero = 0, numero2 = 0) {
    return [ numero + numero2, 'Hola Mundo']
}
const [resultado2, holamundo] = sumarValores2(30, 60) 

console.log(resultado2) // aquí mostramos "resultado2"
console.log(holamundo) // aquí mostramos "holamundo"


///////////////////
console.log ("----FUNCTION QUE RETORNA UN OBJETO")

//Funciones que retornan OBJETO
function sumarValores3(numero = 0, numero2 = 0) {
    return {
        resultado3: numero + numero2, 
        mensaje: 'Hola Mundo'
    }
}
const { resultado3, mensaje} = sumarValores3(450, 50) 

console.log(resultado3) // aquí mostramos "resultado3"
console.log(mensaje) // aquí mostramos "mensaje"
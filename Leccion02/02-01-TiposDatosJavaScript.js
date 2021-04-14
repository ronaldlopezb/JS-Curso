/**
 * Ejemplos de tipos de datos en JS
*/
//Tipo de dato String
var nombre = "Ronald";
console.log(nombre);
console.log(typeof nombre);

nombre= 14;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numérico
var edad = 36;
console.log(edad);
console.log(typeof edad);

//Tipo de dato Booleano
var jubilacion = true;
console.log(jubilacion);
console.log(typeof jubilacion);

//tipo de datos Double
var dinero = 5.62
console.log(dinero);
console.log(typeof dinero);

//Tipo de datos Object
var miObjeto = {
    nombre: "Tef",
    apellido: "Elorriaga",
    telefono : "996571584",
    chapa: "Peco"
}

console.log(miObjeto);
console.log(typeof miObjeto);

//Tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)
console.log(typeof simbolo)


//Tipo clase es una funtion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var x;
console.log(x);
console.log(typeof x);

x= undefined
console.log(typeof x);
console.log(x);

// nukk = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Tipo Arreglo o array
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos)

//Tipo cadena con dato vacio
var z = '';
console.log(z);
console.log(typeof z)




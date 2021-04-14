/*
    si la variable es de dos o más palabras
    la primera palabra inicia en minúsculas
    las demás palabras inician en mayúsculas
*/

let miNombreCompleto = "Ronald López";
console.log( miNombreCompleto );

//otro ejemplo
let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);


/*
    REGLAS PARA DEFINIR NOMBRES DE VARIABLES
    - JS  diferencia MAYUS de minus
    - No pueden iniciar con numeros
*/

//  - JS  diferencia MAYUS de minus
let nombreCompleto = "Ronald López";
let nombrecompleto = "Tef Elorriaga";
console.log( nombreCompleto );
console.log( nombrecompleto );


//  - No pueden iniciar con numeros
//   pero si puede iniciar con $ _ o una letra antes del numero
//let 1nombreCompleto; -->ERROR
let $1nombrecompleto;
let _nombreCompleto;
let a1nombreCompleto;

// - No usar palabras reservadas
//let break = 10; -> break es palabra reservada
let break1 = 10;
let _break = 10;
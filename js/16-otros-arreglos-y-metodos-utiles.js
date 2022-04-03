//Otros arreglos y funciones útiles
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

nuevoArreglo = tecnologias.filter( tech => tech !== 'React')

//Comprobar si un elemento existe en el arreglos
//const resultado = tecnologias.includes ('React')

// Some - devuelve true o false si almenos uno  cumple la condición
//const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer valor que cumpla la condición
//const resultado = numeros.find (numero => numero > 5)

// every - Devuelve true o false si  todos cumplen la condición
//const resultado = numeros.every (numero => numero >1)


//reduce - Suma los valores numeros del Arreglos
//donde: total acumula la suma, numero es el número actual, 0 es el valor inicial de total
//const resultado = numeros.reduce( (total, numero) => numero + total, 0)

//FILTER: Crea un nuevo arreglo en base a una condición
//const resultado = tecnologias.filter( tech => tech === 'Node.js')
//const resultado = numeros.filter( numero => numero > 15)

//Arrow Function en ForEach y Map
tecnologias.forEach( tech => {
    return tech
})




const arrayMap = tecnologias.map( function (tech) {
    return tech
})










console.log (resultado)

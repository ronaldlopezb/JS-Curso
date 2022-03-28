//iteradores
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//forEach: acceder a cada elemento de arreglo
console.log("--- Usando forEach ---")
tecnologias.forEach( function (tech) {
    console.log(tech)
})

console.log("--- Usando map ---")
tecnologias.map( function (tech) {
    console.log(tech)
})

//Diferencia: forEach te permite iterar los items, mientras que map te crea una nuevo arreglo y lo itera
console.log("-------------")
console.log("--- Usando forEach: no crea un nuevo array x eso devuelve undefined ---")
const arrayForEach = tecnologias.forEach( function (tech) {
    return tech
})
console.log(arrayForEach)


console.log("--- Usando map: Crea un nuevo array ---")
const arrayMap = tecnologias.map( function (tech) {
    return tech
})


console.log(arrayMap)
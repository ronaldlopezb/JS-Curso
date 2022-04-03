//Levando a arrow Functions (sacados de 09-operaciones-arreglos.js)
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']



console.log ('--- Arrow function: MAP de múltiples líneas')

const nuevoArreglo = tecnologias.map( tech => {
    //console.log(tech)
    if (tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})
console.log(nuevoArreglo)

//Llevando a Arrow function de 1 linea
console.log ('--- Arrow function: FILTER de 1 línea')

const nuevoArreglo2 = tecnologias.filter( tech => tech !== 'HTML')
console.log(nuevoArreglo2)
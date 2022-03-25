//Operaciones con Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

////Añadir nuevos elementos al array
//tecnologias.push('GraphQL') //añade al Final del arreglo (No se debe hacer)
//tecnologias.unshift('GraphQL') //añade al Inicio del arreglo (No se debe hacer)


//Se debe hacer así - Añadir
//const nuevoArreglo = [...tecnologias, 'GraphQL'] //al final
//const nuevoArreglo = ['GraphQL', ...tecnologias] //al Inicio

////Eliminar elementos del array
//tecnologias.pop()//elimina del final
//tecnologias.shift()//elimina del inicio
//tecnologias.splice(2,1)//el que quiera

//const nuevoArreglo = tecnologias.filter( function(tech) {
//    return tech !== 'HTML'
//})

//Reemplazar del array
const nuevoArreglo = tecnologias.map( function(tech){
    //console.log(tech)
    if (tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})


//Mostrar
console.table(tecnologias)
console.table(nuevoArreglo)
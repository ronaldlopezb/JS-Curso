//Destructuring de Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const [var0, var1, var2, var3, var4] = tecnologias;

//El destructuring de arreglso.. carga las posiciones, en el ejemplo anterior "nuevo" es CSS

console.log(var0)
console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)

//extraer posiciones de Arreglos: solo la posición 5
const [, , , , varPosition5] = tecnologias
console.log(varPosition5)
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //  exclui o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na ultima posição do array
console.log(pilotos)

pilotos.shift()  // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')  // adiciona um elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos, é um método versátil para trabalhar com arrays

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //  recorta os elementos de um array a partir da posição que foi definida
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
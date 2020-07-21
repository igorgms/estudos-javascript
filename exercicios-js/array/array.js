console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[3])

aprovados[9] = 'Rafael'
console.log(aprovados[8] === undefined)

console.log(aprovados)
// o sort é responsável por retornar um novo array com os elementos ordenados em ordem alfabética
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
// o splice é responsável por excluir elementos de um Array, são passados como parâmetros o indice de a partir de qual elemento começará a exclusão e depois a quantidade de elementos que será excluida a partir do primeiro indice informado. 
aprovados.splice(1, 1)
console.log(aprovados)
// Também é possível adicionar elementos sem necessariamento excluir algum, basta para isso informar no segundo parâmetro o número '0', assim nenhum elemento será excluído
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2')
console.log(aprovados)



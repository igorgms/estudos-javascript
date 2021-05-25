const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Desta forma ao invés de criar o objeto filha do Object.prototype, o mesmo foi criado a partir do __proto__ do pai 
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    // 'hasOwnProperty' é uma função que consegue verificar apenas quais são os elementos que são puros do objeto, ele elimina os elementos que vem por herança de outros objetos.
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
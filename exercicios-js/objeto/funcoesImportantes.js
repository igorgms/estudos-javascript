const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// função "keys", responsável por pegar as chaves de um objeto
console.log(Object.keys(pessoa))

// responsável por pegar os valores de um objeto
console.log(Object.values(pessoa))

// responsável por pegar o array de chaves/valores de um objeto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '08/12/1993'
})

pessoa.dataNascimento = '10/12/1994'
console.log(pessoa.dataNascimento)

// Object.assign (surgiu no ECMAScript 2015), função que "agrupa" vários objetos em um só
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
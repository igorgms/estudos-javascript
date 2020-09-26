//novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// desta forma é possível extrair os elementos de um objeto, no exemplo abaixo foi criado duas váriaveis com os elementos nome e idade do objeto
const {nome, idade} = pessoa
console.log(nome, idade)

// da mesma forma os elementos foram retirados do objeto e foi passado um novo nome para as variáveis destes elementos
const {nome: n, idade: i} = pessoa
console.log(n, i)

// também é possível "extrair" elementos que não existem e passar um novo valor a eles
const {sobrenome = 'Gomes', bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)
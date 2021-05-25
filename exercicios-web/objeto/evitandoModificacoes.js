// Object.preventExtensions - evento que proibe a adição de novos atributos em objetos
const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze - 'congela' completamente o objeto
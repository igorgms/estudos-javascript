const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

let converteJson = objetos => JSON.parse(objetos)
let precos = valor => `R$ ${(valor.preco).toFixed(2).replace('.' , ',')}`

let resultado = (carrinho.map(converteJson).map(precos))

console.log(resultado)






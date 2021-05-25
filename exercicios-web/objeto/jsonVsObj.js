const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}

// Função que converte um objeto JS em JSON, a função é excluida pelo fato do mesmo não ter compatibilidade com funções.
console.log(JSON.stringify(obj))

// Desta forma um JSON é convertido para um objeto JS
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
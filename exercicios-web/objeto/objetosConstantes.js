const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// desta forma o JS retorna um erro, pois por ser declarada como uma const a variável não pode receber uma mudança desta forma
// pessoa = { nome: 'Ana'}

// O método freeze ao ser utilizado "congela" os dados de um objeto, ele pode ser alterado posteriormente mas continuará retornando os dados que haviam antes do freeze ser utilizado
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa)
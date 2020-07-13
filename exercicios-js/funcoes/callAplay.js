function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
}
//na declaração do objeto produto, a funcao getpreco foi passada com um dos elementos
const produto = {
    nome:'Notebook',
    preco: 2199,
    desc: 0.1,
    getPreco
}

//por conta de estar em um outro contexto não é possível acessar as variáveis com o this, gerando assim um NaN
console.log(getPreco())

//com as variaveis preco e desc sendo passadas desta forma, é possível obter o valor pois estão sendo passadas juntamente com o global, que está no mesmo contexto do this
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.15}
// ao chamar a função com o call, a variável carro que contem um objeto é passada como parâmetro
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// neste caso além do objeto contendo os valores do carro e desconto, também é possível passar juntamente com o call os parâmetros da porcentagem de imposto e o tipo da moeda
console.log(getPreco.call(carro, 0.17, '$'))

// o aplly é basicamente a mesma coisa que o call, porém os parâmetros são passados a partir de um array
console.log(getPreco.apply(carro, [0.17, '$']))
function soma(){
    let soma = 0
    // arguments é um array que recebe os parâmetros da função
    for(let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 2, 3))
console.log(soma())
console.log(soma(1.1, 2.2, 3.3, 'teste'))
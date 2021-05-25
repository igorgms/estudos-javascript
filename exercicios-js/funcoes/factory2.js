function criarProduto(nome, preco){
    return {
        nome:nome,
        preco: preco,
        desconto: 0.1
    }

}
// let vet = []
// vet.push(criarProduto('Bola', 9.90))
// vet.push(criarProduto('Bermuda', 15.00))

// console.log(vet)
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Samsung S20+', 4199.49))
console.log(criarProduto('Iphone 11 Pro', 6000))


function converteValor (valor){
    let valorEmReais = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`

    console.log(valorEmReais)
}

converteValor(0.1 + 0.2)
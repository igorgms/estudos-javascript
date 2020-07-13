function jurosSimples(capital, taxaJuros, tempo){
    const juros = capital * taxaJuros * tempo

    const montante = capital + juros
    return montante
}

console.log(jurosSimples(1000, 0.15, 2))

function jurosCompostos(capital, taxaJuros, tempo){ 
    const montante = capital * (1 + taxaJuros) ** tempo

    return montante
 }

 console.log(jurosCompostos(1000, 0.15, 2))
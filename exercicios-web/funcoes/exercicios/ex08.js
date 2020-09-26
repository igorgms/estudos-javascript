let stringPontuacoes = "30, 40, 20, 4,"

function avaliaPontuacoes(stringPontuacoes){

    let pontuacoes = stringPontuacoes.split(', ')

    let recordesQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++){
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            recordesQuebrados++
        } else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [recordesQuebrados, piorJogo]

}

console.log(avaliaPontuacoes(stringPontuacoes))


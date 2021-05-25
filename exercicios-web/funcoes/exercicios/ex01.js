function operacoes(n1, n2){
    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    console.log(`
        A soma entre ${n1} e ${n2} = ${soma} 
        A subtração entre ${n1} e ${n2} = ${sub} 
        A multiplicação entre ${n1} e ${n2} = ${mult} 
        A divisão entre ${n1} e ${n2} = ${div} 

    ` )

}

operacoes(5,2)
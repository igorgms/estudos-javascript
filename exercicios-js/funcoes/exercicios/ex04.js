function divisores(dividendo, divisor){
    let div = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`
        A divisão entre ${dividendo} e ${divisor} é = ${div}
        O resto da divisão entre ${dividendo} e ${divisor} é = ${resto}
    `)
}

divisores(9, 2)
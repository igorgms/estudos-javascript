const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

notas.push(8)
notas.push(8, 9, 11)
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 95,
    carros: {
        fiat:'Uno',
        honda: 'Civic'
    }
}

for (let atributos in pessoa.carros){
    console.log(`${atributos} = ${pessoa.carros[atributos]}`)
}

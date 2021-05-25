const fabricantes = ['Mercedes', 'Audi', 'BMW']
const numeros = [1, 2, 3, 4, 'sapo']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//o foreach é uma função que quando utilizada com um array retorna o indice e o conteúdo que há em cada um dos respectivos indices do array
fabricantes.forEach(imprimir)
numeros.forEach(imprimir)


fabricantes.push('Ferrari')
fabricantes.forEach( fabricante => console.log(fabricante))


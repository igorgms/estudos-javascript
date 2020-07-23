const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// variavel que recebe uma arrow function para percorrer o pais dos funcionarios
const chineses = f => f.pais === 'China'
// função para percorres o genero dos funcionarios
const mulheres = f => f.genero === 'F'
//  função para ser usada com o reduce afim de comparar e extrair o menor salário entre as funcionárias
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})


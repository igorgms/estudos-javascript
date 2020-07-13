let dobro = function (a){
    return 2 * a
}

//arrow function
dobro = (a) => { return 2 * a}

//escrevendo desta forma o return é implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola
// let ola = function () {
//     return 'Olá'
// }

//outras duas formas de escrever uma arrow function que não possui parâmetros
// ola = () => 'Olá'
ola = _ => 'Olá mundo' 
console.log(ola())
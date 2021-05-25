// Função em JS é First-Class Object (Citizens)
// Higer-order function

// função de forma literal
function fun1(){

}

// Armazenar em uma variável
const fun2 = function(){ }

// Armazenar em um Array
const array = [function(a,b){return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Olá Mundo'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c){
        console.log(a + b + c)
    }
}

// Neste caso a função retorna uma outra função que recebe um outro parâmetro, no primeiro parenteses estão sendo passados os parâmetros a e b e no segundo está sendo passado parâmetro c
soma(2, 3)(4)

const parametrosAeB = soma(2, 3)
parametrosAeB(4)
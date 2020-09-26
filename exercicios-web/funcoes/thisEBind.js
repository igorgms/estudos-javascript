const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar()
falar()

// quando invocado, o bind "amarra" o this ao objeto no qual ele foi inserido inicialmente, no exemplo com o uso do bind foi possível receber a mensagem de bom dia corretamente com o chamado da variável abaixo, diferente da função acima onde o bind não foi executado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
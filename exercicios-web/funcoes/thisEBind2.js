function pessoa(){
    this.idade = 0

    //uma outra forma de manter o objeto pessoa no this é criando uma variável no mesmo contexto do qual a primeira parte da função e passar o this como valor desta variável, após isso é preciso passar a variável como método nos locais onde seria inserido o this anteriormente
    const self = this
    //setinterval é uma função do JS que contém um temporizador que pode ser passado como parâmetro para definir o intervalo de tempo que o parâmetro que foi passado será disparado
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa
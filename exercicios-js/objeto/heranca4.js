function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Igor'
obj2.falar()
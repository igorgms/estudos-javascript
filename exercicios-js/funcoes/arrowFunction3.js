let comaparaComThis = function(param){
    console.log(this === param)
}

comaparaComThis(global)

const obj = {}

comaparaComThis = comaparaComThis.bind(obj)
comaparaComThis(global)
comaparaComThis(obj)

comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


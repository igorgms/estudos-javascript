const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//  No exemplo a seguir, mesmo sendo invocada somente a variavel 'contadorA', ao ser exibida em um console a variavel 'contadorB' recebe o incremento anterior, pois o node faz cache dos objetos que são instanciados
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

// Já neste exemplo não ocorre a mesma caracteristica, pois a função factory retorna sempre um novo objeto ao ser instanciada
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)


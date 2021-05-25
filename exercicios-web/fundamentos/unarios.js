let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)//esta comparação dará o resultado true, pois o num1 está com um incremento precedente, enquanto o num2 está com um incremento posterior, diante disso no momento da comparação as duas variáveis valem 2
console.log(num1 === num2)
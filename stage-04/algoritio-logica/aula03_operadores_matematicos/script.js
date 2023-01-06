/*

  Capturar 2 números e fazer as operações matemáticas de soma, subtraçã, multiplicação, divisão e resto da divisão.

  Melhorar a lógica de programação

    -Fazer Perguntas corretas
    -Entender o problema
  Operadores matemáticos
  
*/
//Minha tentativa

/*

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

alert("Resultado da soma é: " + (Number(numberOne) + Number(numberTwo)))

alert("Resultado da subtração é: " + (Number(numberOne) - Number(numberTwo)))

alert("Resultado da multiplicação é: " + (Number(numberOne) * Number(numberTwo)))
 
alert("resultado da divisão é: " + (Number(numberOne) / Number(numberTwo)))

alert("Resultado do resto da divisão é: " + (Number(numberOne) % Number(numberTwo)))

*/

// Com a aula

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

// reatribuir a variável o valor como number, para não ter que fazer em cada alert

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

// agora minhas variáveis não são mais string, mas sim number

// usando a variável const, pois não irei mudala.(esta variável não pode ser trocada como a let e a var)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

let numberOne = Number(prompt("Insira o primeiro número:"))
let numberTwo = Number(prompt("Insira o segundo número:"))

alert("A soma dos números é igual a: " + (numberOne + numberTwo))
alert("A subtração dos números é igual a: " + (numberOne - numberTwo))
alert("A Multiplicação dos números é igual a: " + (numberOne * numberTwo))
alert("A Divisão dos números é igual a: " + (numberOne / numberTwo))
alert("O resto da divisão dos dois números é igual a: " + (numberOne % numberTwo))

if (((numberOne + numberTwo) % 2) == 0) {
  alert(`A soma dos dois números ( ${numberOne + numberTwo} ) é par.`)
} else {
  alert(`A soma dos dois números ( ${numberOne + numberTwo} ) é impar.`)
}

if (numberOne == numberTwo) {
  alert("Os dois números são iguais")
} else {
  alert("Os dois números são diferentes")
}
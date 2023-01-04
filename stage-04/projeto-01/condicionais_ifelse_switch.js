/* Condicionais e controle de fluxo

control flow

o normal é rodar linha a linha, uma depois do outro, mas tem como mudar isso, dar um caminho definido para a programção.

*/


// IF ... ELSE (SE, SENÃO)

let temperature = 36

if(temperature > 36.5) {
  console.log("Febre")
} else {
  console.log("Sem febre")
}

//não é obrigatório usar o else, pode ser só if

if(temperature > 38) {
  console.log('febre')
} else if(temperature > 36.5 && temperature <=38) {
  console.log('febril')
} else {
  console.log('saudável')
}
// não tem limite de if else
// é recomendável transformar a condicional e uma variável que possa ser lida

temperature = 36.9
let highTemperature = temperature > 36.5
if(highTemperature) {
  console.log("Febre")
} else {
  console.log("Sem febre")
}

///////////////////////////////////////////////

//SWITCH

// usado para ter vários caminhos

let expression = 'a'

switch (expression) {
  case 'a':
    //codigo
    console.log('a')
    break
  case 'b':
    //codigo para expression b
    console.log('b')
    break
  default: // quando não for nenhuma opção
    console.log('default')
    break
}

// se não tiver break irá pegar todas as posteriores.
// tirando o break no caso anterior, ele irá escrever 'a', 'b' e 'default' no console

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(10, '*', 5))















       
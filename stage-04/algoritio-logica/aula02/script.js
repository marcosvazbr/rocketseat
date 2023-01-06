/*
  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário

Aprenderemos:
  Boas práticas na escrita da variáveis

    -Em inglês
    -Sem espaços ou acentuações especiais no nome
    -Não pode iniciar com número
    -camelCase (a letra inicial de cada nome ser em maiúscula e não ter espaçoo) numberOne
    - ;  serve para finalizar uma expressão de código e é facultativo



  Tipos de dados Number
  Operador matemático +
  typeof = identificar o tipo de dado
  Manipulaão de cados
    type conversion (type casting) (transformar string em number)
    Number()  (função construtura para converter um dado em número)
    String()  (função construtura para converter um dado em string)
  Ordem de precedência dos operadores



*/

// prompt devolve um dado do tipo string, mesmo sendo um número

//Minha tentativa:

/*

let number1 = prompt("Informe o primeiro número:")
let number2 = prompt("Informe o segundo número:")
let result = number1 + number2
alert("Soma de " + number1 + " e " + number2 + " é igula a: " + result)

// deu errado pq prompt devolve tipo de dado string

alert(typeof number1) // vai retornar que é uma string
*/
// Feito com a aula

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

// soma de dois número:
alert(Number(numberOne) + Number(numberTwo))

// divider a soma de dois números:
// tem que colocar entre parenteses para ter a soma primeiro e depois a divisão(igual na matemática)
alert( (Number(numberOne) + Number(numberTwo)) / 2)

// usando a função Number (tem que ter a primeira letra maiúscula) ele irá transformar o tipo de dato em número.


// para colocar um texto e não concatenar, tem que colocar o operado de crupo para fazer a conta primeiro:

alert("Resultado final é: " + ((Number(numberOne) + Number(numberTwo)) / 2))


// pode isolar o calculo matemático em uma variável, ai não irá atrapalhar a concatenação 

let result = (Number(numberOne) + Number(numberTwo)) / 2
alert("O resultado final é: " + result)


//////////////////////////////////////


alert(typeof Number(numberOne) + " transformou o string em number")

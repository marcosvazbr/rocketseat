/* expressões e Operadores


    Expressions
    Operators
      binary
      unary
      ternary
*/

let number = 1; //é uma expressão, pode ou não terminar com ; , mas não é obrigatório.

(function() {
  console.log('alo')
})() //com esta função auto executável a falta do ponto e vírgula no final da variável number dará um erro

////////////////////////

//Operador binário 

console.log(number + 1)

/////////////////

//Operador unary unitário

console.log(--number)

///////////////////////]

// Operador ternary 

console.log(false ? 'alo' : 'nada')
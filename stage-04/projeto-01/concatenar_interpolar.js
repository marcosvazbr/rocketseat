// Variáveis e tipo de dados

var name // declaration declaração da variável

var name = "Marcos" // assignment ou atribuição de valores

//que tipo de dado foi colocado na variável

console.log(typeof name)

// retorna o tipo de dado é uma string

console.log(name)
// retorna o dado "marcos"


//====================

// let age = 20
// let isHuman = true

// ou pode agrupar as declarações

let age, isHuman

age = 20
isHuman = true


console.log(name, age, isHuman) // tem qeu colocar vírgula para funcionar ou dará erro.

console.log("marcos tem 20 anos")

//concatenando valores:
console.log("o " + name + " tem " + age + ' anos')
// para juntar o texto com a variável tem que colocar +

//interpolando valores com template literals or template strings:

console.log(`o ${name} tem ${age} anos`)
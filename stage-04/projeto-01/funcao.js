/*

// FUNÇÃO DENTRO DE VARIÁVEL


//function expression ou anonymous



const sum = function(number1, number2) { //parâmetros da funão (parameters)
  let total = number1 + number2 // estes parâmetro so funciona dentro da função
  return total // quando tem o return  ele irá retornar o total, se não tiver, virá omo indefinido.
}

sum(5, 8) //chamando a função é os argumentos(arguments) para esta função


let primeiro = 25
let segundo = 25
sum(primeiro, segundo) // argumento da função é uma variável

console.log(`a soma de ${primeiro} e ${segundo} é ${sum(primeiro, segundo)} `)


//console.log(total) // colocando após chamar a função, irá retornar o valor da soma, mas se colocar esse total como variável na função, irá dar erro.

// atenção a palavra chave tem que ter uma palavra chave de variavel var let const

function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2 // pode misturar texto e etc
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)

*/
/////////////////////////////


//FUNCTION SCOPE

/*
let subject

function createThink(subject) {
  return subject
}

console.log(createThink(subject))

///irá retornar undefined pois não há nada na variável
*/

/*

let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(createThink(subject)) // irá retornar o novo nome dado dentro da função
console.log(subject) // irá retornar a variável criada fora da função

*/
/*
let subject = 'create video'

function createThink() { // se não tem argumento, ele irá subescrever o anterior, senão tem irá manter a variável criada fora
  subject = 'study'
  return subject
}

console.log(createThink(subject)) // irá retornar o novo nome dado dentro da função
console.log(subject) // irá retornar o nome dado dentro da função

//os dois serão 'study'

*/

//////////////////////////////////////////////

//FUNCTION HOISTING


/*
sayMyName ()

function sayMyName() {
  console.log('Marcos')
}

console.log(sayMyName())

// mesmo você chamando a função antes de cria-la, o js irá fazer o hoisting e jogar ela antes da chamada.


sayMyAge()

var sayMyAge = function() {
  console.log(38)
}

//neste caso dará erro, pois ela não é mais sofrena hoisting pois ela é uma função com de variável


*/


//////////////////////////////////////////////////////////////

//ARROW FUNCTION
/*
const sayMyName = (name, sobrenome) => { // errow function
  console.log(name + sobrenome)
}

sayMyName('marcos', 'oliveira')

*/

///////////////////////////////////////////

//CALLBACK FUNCTION


/*
function sayMyName(name) {
  console.log('antes de execuar a fnção callback')
  name()
 
}


sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

*/


/////////////////////////////////////////////////////////////////

//FUNÇÃO CONSTRUTORA
//FUNCTION() CONSTRUCTOR

//*EXPRESSÃO NEW
//*CRIAR UM NOVO OBJETO
//*THIS KEYWORD

function Person(name) { // colocar o maiúsulo no Person é uma boa prática, há no js várias funções construtoras já prontas e todas usam a maiúscula
  this.name = name // vai criar uma propriedade para o objeto Person
  this.age = 39
}

const marcos = new Person('marcos') // quando coloca new é que vai criar um novo objeto lajsd
const joao = new Person('joao')
console.log(marcos)
console.log(joao)
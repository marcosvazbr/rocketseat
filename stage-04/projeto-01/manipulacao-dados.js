/*

PROTOTYPE

  prototype-based language
  prototype chain (cadeia de prototipos)
  __proto__
 
 
  O JS já cria várias propriedades e você pode acessar essas proprieades para ter inumeras informações já pre criadas.
 
 
  ///////////////////////////////////////////////
 
  MANIPULAÇÃO DE DADOS
 
  TYPE CONVERSION (escolhida pelo programador)(TYPECASTING) VS TYPE COERSION (feita de forma coercitiva pelo JS)
 
   Alteração de um tipo de dado para outro tipo
  */
  /*
console.log('9' + 5)

//vai retornar 95, o JS transformou o número 5 em texto '5'.(TYPE COERSION)

console.log(Number('9') + 5)

// vai transformar o 'nove', string em 9 Number ( Number tem que ter a letra maiúscula)

let string = "123"

console.log(string)
console.log(Number(string))

let number = 321

console.log(String(number))


*/

/////////////////////////////////////////////////////
/*
//MANIPULANDO STRINGS E NÚMEROS

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.

let word = "Paralelepipedo"

console.log(word.length)

let number = 123456789

console.log(String(number).length)

//console.log(number.length)  assim dará erro, pois número não tem letras, temos que usar a proprieade String antes e ai sim contar a quantidade.


///////////////////////////////////////////////////////

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let teste = 345.33452345

console.log(teste.toFixed(2).replace('.', ',')) // ao trocar o '.' pela ',' o número irá vierar um string,

////////////////////////////////////////////////////

//transforme letras minúsculas em maiúsculas

let palavra = "Programar é muito bacana!"

console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())


///////////////////////////////////////////////////////////////////////

// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let texto = "Eu quero viver o amor!"

console.log(texto)

let myArray = texto.split(" ") // vai usar o agumento contido no parenteses para separar o texto em cada posição. O item que usar para a separação não entrará em nenhuma posição. (transforma string em array)

console.log(myArray)

let phraseWithUnderscore = myArray.join("_") //join vai juntar o array e no parenteses você coloca qual item tem que separar cada posição do array

///////////////////////////////////////////////////////////////////////

//Verificar se o texto contém a palavra Amor

let viver = "Eu quero viver!"
console.log(viver.includes("amor")) // vai retornar falso, pois não tem a palavra amor
console.log(viver.includes('Viver')) // vai retornar falso, pois muda se for maiúscula ou minúscula
console.log(viver.includes('viver')) // vai retornar true

*/

/////////////////////////////////////////////////////////

// MANIPULANDO ARRAYS

//  Criar Array com construtor


let myArray = ['a', 'b', 'c']
console.log(myArray)

let newArray = new Array ('a', 'b', 'c')
console.log(newArray)


///////////////////////////////

// contar elementos de um array

console.log(['a',
            {type: 'array'},
            function(){ return 'alo'}
            ].length)
// vai retornar 3, pois são tres elementos

/////////////////////////////////////////////////////////////////////

// Transformar uma cadeia de caracteres em elementos de uma array

let word ='manipulação'
console.log(Array.from(word)) // cada um dos caracteres virou um elemento do array

///////////////////////////////////////////////////////////////////

let techs = ["html", "css", "js"]

// adicionar um item no fim

console.log(techs.push("nodejs"))
console.log(techs)

// adicionar no começo

techs.unshift("sql")
console.log(techs)

//remover do fim
techs.pop()
console.log(techs)

//remover do começo
techs.shift()
console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // vai colocar a posição de início e a de fim no parênteses. tem que ser o final um número a mais que a posição do arrey que começa no 0

//Remover 1 ou mais itens em qualquer posição do array

techs.splice(2, 1) // primeiro você fala o elemento inicial que será removido e o outro você informa a quantidade de elementos, não é a posição final
console.log(techs)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css') // index será a posição do array do 'css'
techs.splice(index, 1) // sabendo a posição, você só coloca quantos elementos quer remover
console.log(techs)
// Estrutura de repetição 

// for   (para)

//break (para a execução do loop)
//continue (pula a execução do loop do momento)

//1º cria uma variável 2º cria a condição ,3º cria a implementação da condição
for(let i = 0; i < 10; i++) {
  console.log(i +' é menor de 10')
}


for(let b = 100; b > 10; b--) {
  if(b == 50) { // irá parar o loop quando chegar no 50
    break;
  } 
    console.log(b + ' é maior de 10')

}

for(let b = 10; b > 1; b--) {
  if(b == 5) {
    continue; // irá pular o número 5
  } 
    console.log(b + ' é maior de 10')

}

//////////////////////////////

//while


let w = 0;
while(w < 10) {
  console.log(w)
  w++
}
//usa o while quando geralmente não sabe quando irá parar

//////////////////////////////////////

// for...of



let name = 'Marcos'
let names = ['Marcos', 'joão', 'pedro']

for(let char of name) {
  console.log(char)
}

for(let name of names) {
  console.log(name)
}


////////////////////////////////

// for...in


let person = {
  name: 'jon',
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}









       
// Object


const person = {
  name: 'John',
  age: 30,
  wight: 88.6,
  isAdmin: true
}

console.log(person)
//mostrará todo o object

console.log(person.name)
// coloca um . para selecionar qual propriedade do object você gostaria.

console.log(person.name + " tem " + person.age + " anos.")

//ou

//para trocar a propriedade do objeto
person.name = "Marcos"


console.log(`O ${person.name} tem ${person.age} anos `)
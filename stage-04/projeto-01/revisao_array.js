// Array


const animals = [
  'Lion',
  'Monkey',
  'Cat',
  {
    name: 'Dog',
    age: 10,
    color: 'black'
  }
]

//acessar valores do array

console.log(animals)

// para acessar tem que escolher a posição, ela começa do 0 e não do um

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

// a posição 3, apesar de não ter declarado nada, já está criada e vazia. vai Aparecer undefined

console.log(animals[3])

console.log(animals[3].color)

// para chamar um objeto dentro da array


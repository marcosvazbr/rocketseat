/*
let weight

console.log(typeof weight)

let name = 'Marcos' // string
let age = 38  // number integer
let stars = 4.5  // number float
let inSubscribed = true // boolean
*/

let student = {
  name: 'marcos',
  age: 38,
  stars: 4.5,
  inSubscribed: true,
  weight: 90,
}
/*
//console.log(student)


//console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + ' kg.')

//console.log(` ${student.name} com idade de ${student.age} pesa ${student.weight} kg `)

// atenção para usar a crase e não aspas.
*/
let students = []

students = [
  student
]

console.log(students)

console.log(students[0])


const john = {
  name: 'john',
  age: 23,
  weight: 85,
  inSubscribed: true,
}


// students = [
//   student,
//   john
//]

students[1] = john

console.log(students[1])

console.log(students.length)
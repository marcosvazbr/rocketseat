/* 

Nessa aula aprenderemos sobre:
[] Estruturas de dados: Objetos
[] object literal
[] for..of
/////////////////////////////////////

Crie uma lista de pacientes 

Cada paciente dentro da lista deverá conter 
  nome 
  idade
  peso 
  altura
  
Escreva uma lista contendo o nome dos pacientes

*/

const patients = [
  {
    name: "luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Marcos",
    age: 37,
    weight: 100,
    height: 181,
  },
  {
    name: "Marcelo",
    age: 40,
    weight: 95,
    height: 172,
  },
]

let patientsNames = []
/*
for(let i = 0; i < patients.length; i++) {
  patientsNames[i] = patients[i].name
  
}
  
alert(patientsNames)
*/

// segunda opção para o for

for(let patient of patients) {
  patientsNames.push(patient.name)
}
//alert(patientsNames)

//Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos.

let patientsAll = []
let i = 0
for(let patient of patients) {
  patientsAll.push(patient.name)
  patientsAll.push(patient.age)
  patientsAll.push(patient.weight)
  patientsAll.push(patient.height)
  alert(`${patientsAll[i]} tem idade de ${patientsAll[i+1]} anos, pesa ${patientsAll[i + 2]}kg e tem altura de ${patientsAll[i + 3]} centimetros.`)
  i = i + 4
  
}
alert(patientsAll)

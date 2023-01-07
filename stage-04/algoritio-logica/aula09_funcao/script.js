/*
Nessa aula aprenderemos sobre:
[] Funções (named), funções anônimas e arrow functions
]

/////////////////////////

Dada uma lista de pacientes, descubra o imc de cada paciente e imprima

"Paciente x possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cálculo de IMC

/////////////

*criação
function liquidificador(fruta1, fruta2) {
  const suco = fruta1 + fruta2
  return suco
}

* execução
let meuSuco = liquidificador("banana", "maça")


*/

// IMC =  peso / (altura * altura)




const patients = [
  {
    name: "luiz",
    age: 20,
    weight: 100,
    height: 1.90,
  },
  {
    name: "Marcos",
    age: 37,
    weight: 100,
    height: 1.81,
  },
  {
    name: "Marcelo",
    age: 40,
    weight: 95,
    height: 1.72,
  },
]

function calcImc (weight, height) {
  return (weight / (height ** 2)).toFixed(2)
}

function patientsImc (patient) {
  return `
  Paciente ${patient.name} possui o IMC de: 
  ${calcImc(patient.weight, patient.height)}
  `
}

for (let patient of patients){
  let imc = patientsImc(patient)
  alert(imc)
}

/*
Novas formas de criar funções:

*função anonima
const patientsImc = function (patient) {

}

*arrow function

const patientsImc = (patient) => {

}
*/
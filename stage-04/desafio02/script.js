
let options

let students = []

function sum (nota1, nota2) {
  return (nota1 + nota2) / 2
}


while (options != 4) {
  options = Number(prompt(`
  Digite o número da sua opção:

  1- Para acrescentar alunos e notas. 
  2- Para exitir a média de um aluno expecífico.
  3- Para exitir a média de todos os alunos.
  4- Para encerrar o programa.
  `))

  switch (options) {
    case 1:

      let newStudents
      while (newStudents != 2) {
        students.push(
          {
          name: prompt("Nome do aluno:"),
          noteOne: Number(prompt("Primeira nota:")),
          noteTwo: Number(prompt("Segunda nota:")),
          }
        )
        
        newStudents = Number(prompt(`
        Digite o número da sua opção:
      
        1- Para acrescentar mais alunos e notas. 
        2- Para encerrar o acrescimo de alunos.
        `))
      }

      break

    case 2:
      let nameStudent = prompt("Qual o primeiro nome do aluno?")

      let namePosition = (students.findIndex(name => name.name === nameStudent))

      if (namePosition >= 0){
      let average = sum(students[namePosition].noteOne, students[namePosition].noteTwo)
      alert(`Estudante ${students[namePosition].name} tem media de ${average}`)
      } else {
        alert("Estudante não localizado")
      }

      break

    case 3:

      for (let i = 0; i < students.length; i++) {
        let average = sum(students[i].noteOne, students[i].noteTwo)
        alert(`Estudante ${students[i].name} tem media de ${average}`)
      }

      break
  }}
  
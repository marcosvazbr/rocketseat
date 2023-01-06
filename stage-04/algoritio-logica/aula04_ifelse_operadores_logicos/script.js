/*


Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele anuno.

se o aluno passou no bimestre, dar os parabens.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.


*Fluxos da aplicação
*Caminhos lógicos baseado em algum dado ou    informação
* Boas práticas na programação
* Não repetir código
[] Tipo de dado: Boolean (true | false)
[] if/else (elseif)
[] Operadores comparativos

> (maior que)
< (menor que)
= (maior ou igual a)
<= (menor ou igual a)
== (igual a)
!= (diferente de)

*/

// Minha tentativa

/*

let name = prompt("Qual o seu nome?")
let firstNote = prompt("Qual a primeira nota?")
let secondNote = prompt("Qual a segunda nota?")
let thirdNote = prompt("Qual a segunda nota?")

firstNote = Number(firstNote)
secondNote = Number(secondNote)
thirdNote = Number(thirdNote)

let average = (firstNote + secondNote + thirdNote) / 3

if(average >= 6) {
  alert("Parabens " + name + " sua nota foi " + average + " e você foi aprovado")
} else {
  alert("Você não foi aprovado " + name + ". Sua nota foi " + average + " e precisava de 6. Continue estudando para recuperação" )
}

*/

// Fazendo com o professor

let student = prompt("Qual o nome do aluno(a)")
let n1 = prompt("Qual a nota da primeira nota?")
let n2 = prompt("Qual a nota da segunda nota?")
let n3 = prompt("Qual a nota da terceira nota?")

// fazer a média 

let average = ((Number(n1) + Number(n2) + Number(n3)) / 3).toFixed(2)// para colocar somente 2 casas decimais.

let result = average > 6

// pode ser também 
// average = average.toFixed(2)

if (result) { // isso é um bloco ou um escopo de bloco.
  alert("Parabens, " + student + "! Sua média foi de " + average)
} else if(average < 3) {
  alert(student + ", você foi reprovado. Sua média de " + average + " não permite fazer recuperação.")
} else {
  alert(student + " estude para sua prova de recupreração! Sua média foi de: " + average)
}
